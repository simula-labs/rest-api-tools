import fs from "fs";
import { Server } from "./types";

type WriteRouteFileProps = {
  files: {
    file: string[];
    methods: string[];
  }[];
  outputDir: string;
  apiMethods: {
    operationIdImport: string;
    operationId: string;
  }[];
  apiUrlContent: string;
};

// $api.tsファイルの作成
export const writeRouteFile = ({
  files,
  outputDir,
  apiMethods,
  apiUrlContent,
}: WriteRouteFileProps) => {
  files.forEach((p) => {
    const fileName = p.file.pop();
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${outputDir}/${dirList.slice(0, i + 1).join("/")}`;
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });
    fs.writeFileSync(
      `${outputDir}/${p.file.join("/")}/${fileName}.ts`,
      p.methods.join("\n"),
      "utf-8"
    );
  });
  const apiFunctionName = outputDir.split("/").pop();
  const api =
    `/* eslint-disable */\n` +
    `${apiMethods.map((apiMethod) => apiMethod.operationIdImport).join(";\n")}\n\n` +
    `export const ${apiFunctionName}Api = {\n` +
    `${apiMethods.map((apiMethod) => `  ${apiMethod.operationId}`).join(",\n")}\n};`;
  fs.writeFileSync(`${outputDir}/$api.ts`, api, "utf-8");
  fs.writeFileSync(`${outputDir}/urls.ts`, apiUrlContent, "utf-8");
};
