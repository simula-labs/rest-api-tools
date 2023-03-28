import fs from "fs";

type WriteRouteFileProps = {
  files: {
    file: string[];
    methods: string[];
  }[];
  outputDir: string;
  apiMethods: {
    operationIdImport: string;
    operationIdExport: string;
    operationId: string;
  }[];
  apiUrlContent: string;
};

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
      `${outputDir}/${p.file.join("/")}/${fileName}.ts`, // file一つ一つを作成
      p.methods.join("\n"), // それぞれのmethodを改行で隔てて書き込み
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

  const index = `${apiMethods
    .map((apiMethod, idx) => {
      if (idx === apiMethods.length - 1) {
        return `${apiMethod.operationIdExport};"`;
      }
      return apiMethod.operationIdExport;
    })
    .join("\n\n")}\n\n`;

  fs.writeFileSync(`${outputDir}/index.ts`, index, "utf-8");
  fs.writeFileSync(`${outputDir}/$api.ts`, api, "utf-8");
  fs.writeFileSync(`${outputDir}/urls.ts`, apiUrlContent, "utf-8");
};
