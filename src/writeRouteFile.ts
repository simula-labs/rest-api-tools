import fs from "fs";

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
};

export const writeRouteFile = ({ files, outputDir, apiMethods }: WriteRouteFileProps) => {
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
  const apiTest =
    `${apiMethods.map((apiMethod) => apiMethod.operationIdImport).join(";\n")}\n\n` +
    `export const ${apiFunctionName}Api = () => {\n` +
    ` return {\n` +
    `${apiMethods.map((apiMethod) => `    ${apiMethod.operationId}`).join(",\n")}\n  }\n};`;
  fs.writeFileSync(`${outputDir}/$api.ts`, apiTest, "utf-8");
};
