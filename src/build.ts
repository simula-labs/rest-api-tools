import * as fs from "fs";
import fse from "fs-extra";
import { Config } from "./types";
import { buildTemplate } from "./buildTemplate";
import { writeRouteFile } from "./writeRouteFile";

export const build = (configs: Config[]) => {
  configs.forEach(async (config) => {
    if (fs.existsSync(config.connect)) {
      return console.log(`${config.connect}は既に存在しています`);
    }
    fse.ensureDirSync(config.connect);

    const contents = await buildTemplate(config);
    if (!contents) return;

    writeRouteFile({
      types: contents.types,
      outputDir: config.connect,
      files: contents.files,
      apiMethods: contents.apiMethods,
    });
  });
};
