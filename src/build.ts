import * as fs from "fs";
import fse from "fs-extra";
import humps from "humps";
import { Config, EnumObject } from "./types";
import { buildTemplate } from "./buildTemplate";
import { writeRouteFile } from "./writeRouteFile";
import { Schema } from "./builderUtils/schemas2Props";
import { description2Doc, value2String, value2StringForMock } from "./builderUtils/props2String";

export const build = async (config: Config) => {
  const schemas: Schema[] = [];
  const enumArray: EnumObject[] = [];
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
        apiUrlContent: contents.apiUrlContent,
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
  schemas.forEach((s) => {
    if (Array.isArray(s.value.value)) {
      const schemaValues = s.value.value;
      schemaValues.forEach((prop) => {
        if (typeof prop === "object" && "values" in prop) {
          prop.values.forEach((propValue) => {
            if (propValue.isEnum) {
              if (!enumArray.find((el) => el.name === prop.name)) {
                enumArray.push({
                  name: s.name + humps.pascalize(prop.name),
                  description: prop.description,
                  values: propValue.value as string[],
                });
              }
            }
          });
        }
      });
    }
  });
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
  const enumText = enumArray
    .map(
      (enumObject) =>
        `export const ${humps.depascalize(enumObject.name).toUpperCase()} = {\n${enumObject.values
          .map((value) => `  ${value}: ${value}`)
          .join(",\n")}\n} as const\n` +
        `export type ${humps.pascalize(enumObject.name)} = typeof ${humps
          .depascalize(enumObject.name)
          .toUpperCase()}[keyof typeof ${humps.depascalize(enumObject.name).toUpperCase()}]`
    )
    .join("\n\n");
  if (typesText && mockText) {
    fs.mkdirSync(`${config.connectBasePath}/shared`);
    fs.writeFileSync(
      `${config.connectBasePath}/shared/types.d.ts`,
      `/* eslint-disable */${typesText}`,
      "utf8"
    );
    fs.writeFileSync(
      `${config.connectBasePath}/shared/mock.ts`,
      `/* eslint-disable */\n import type * as Types from ".";\n ${mockText}`,
      "utf8"
    );
    fs.writeFileSync(
      `${config.connectBasePath}/shared/index.ts`,
      `export * from "./types"`,
      "utf8"
    );
  }
  fs.writeFileSync(
    `${config.connectBasePath}/shared/enum.ts`,
    `/* eslint-disable */\n${enumText}`,
    "utf8"
  );
};
