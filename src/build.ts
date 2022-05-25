import * as fs from "fs";
import fse from "fs-extra";
import { BaseConfig, Config } from "./types";
import { buildTemplate } from "./buildTemplate";
import { writeRouteFile } from "./writeRouteFile";
import { Schema } from "./builderUtils/schemas2Props";
import { description2Doc, value2String, value2StringForMock } from "./builderUtils/props2String";
import { BINARY_TYPE } from "./builderUtils/converters";

export const build = async (config: Config) => {
  const schemas: Schema[] = [];
  await Promise.all(
    config.openapiBindings.map(async (codeGenConfig) => {
      const connectPath = `${config.connectBasePath}/${codeGenConfig.connect}`;
      if (fs.existsSync(connectPath)) {
        return console.log(`${connectPath}は既に存在しています`);
      }
      fse.ensureDirSync(connectPath);

      const contents = await buildTemplate(codeGenConfig, {
        tokenKey: config.tokenKey,
        connectBasePath: config.connectBasePath,
      });
      if (!contents) return;
      // nameがかぶってれば弾いて、同じだったらpushする
      contents.schemas.forEach((contentSchema) => {
        if (!schemas.find((typeFileSchema) => typeFileSchema.name === contentSchema.name)) {
          schemas.push(contentSchema);
        }
      });
      writeRouteFile({
        outputDir: `${config.connectBasePath}/${codeGenConfig.connect}`,
        files: contents.files,
        apiMethods: contents.apiMethods,
      });
    })
  );
  // eslint-disable-next-line array-callback-return
  const typesText = schemas.length
    ? [
        ...schemas.map((s) => ({
          name: s.name,
          description: s.value.description,
          text: value2String(s.value, "").replace(/\n {2}/g, "\n"),
        })),
      ]
        .map((p) => `\n${description2Doc(p.description, "")}export type ${p.name} = ${p.text}\n`)
        .join("")
        .replace(/(\W)Types\./g, "$1")
        .replace(/\]\?:/g, "]:")
    : null;

  const mockText = schemas.length
    ? [
        ...schemas.map((s) => ({
          name: s.name,
          description: s.value.description,
          text: value2StringForMock(s.value, "", true, s.name).replace(/\n {2}/g, "\n"),
        })),
      ]
        .map(
          (p) =>
            `\n${description2Doc(p.description, "")}export const mock${
              p.name
            } = (modification?: Partial< Types.${p.name}>): Types.${p.name} => {\n  return ${
              p.text
            }\n}\n`
        )
        .join("")
        .replace(/\]\?:/g, "]:")
    : null;
  if (typesText && mockText) {
    fs.mkdirSync(`${config.connectBasePath}/shared`);
    fs.writeFileSync(
      `${config.connectBasePath}/shared/type.d.ts`,
      `/* eslint-disable */${
        typesText.includes(BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : ""
      }${typesText}`,
      "utf8"
    );
    fs.writeFileSync(
      `${config.connectBasePath}/shared/mock.ts`,
      `/* eslint-disable */\n import type * as Types from "../@types";\n ${mockText}`,
      "utf8"
    );
    fs.writeFileSync(
      `${config.connectBasePath}/shared/index.ts`,
      `export * from "./type.d.ts"`,
      "utf8"
    );
  }
};
