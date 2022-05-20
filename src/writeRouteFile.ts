import fs from "fs";
import path from "path";

type WriteRouteFileProps = {
  types: {
    type: string | null;
    mock: string | null;
  };
  files: {
    file: string[];
    methods: string[];
  }[];
  outputDir: string;
  tokenKey: string;
};

export const writeRouteFile = ({ types, files, outputDir, tokenKey }: WriteRouteFileProps) => {
  if (types.type && types.mock) {
    fs.mkdirSync(`${outputDir}/@types`);
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types.type, "utf8");
    fs.writeFileSync(`${outputDir}/@types/mock.ts`, types.mock, "utf8");
  }

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
      "utf8"
    );
  });
};
