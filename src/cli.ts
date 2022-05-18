import minimist from "minimist";
import path from "path";
import { build } from "./build";

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ["config"],
  });
  const configs = require(path.join(process.cwd(), argv.config));
  build(configs);
};
