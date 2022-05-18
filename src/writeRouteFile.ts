import fs from "fs";
import path from "path";

type WriteRouteFileProps = {
  types: string | null;
  files: {
    file: string[];
    methods: string[];
  }[];
  outputDir?: string;
};

export const writeRouteFile = ({ types, files, outputDir }: WriteRouteFileProps) => {
  if (types) {
    fs.mkdirSync(`${outputDir}/@types`);
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types, "utf8");
  }

  files.forEach((p) => {
    const fileName = p.file.pop();
    p.file.forEach((_d, i, dirList) => {
      const dirPath = `${outputDir}/${dirList.slice(0, i + 1).join("/")}`;
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });

    fs.copyFileSync(
      path.join(process.cwd(), "/src/lib/baseRequest.ts"),
      `${outputDir}/baseRequest.ts`
    );
    fs.copyFileSync(path.join(process.cwd(), "/src/lib/error.ts"), `${outputDir}/error.ts`);
    fs.writeFileSync(`${outputDir}/${p.file.join("/")}/${fileName}.ts`, p.methods.join(""), "utf8");
  });
};
