import minimist from "minimist";
import path from "path";
import { build } from "./build";

export const run = (args: string[]) => {
  const argv = minimist(args, {
    string: ["config"],
  });
  const configs = argv.config
    ? require(path.join(process.cwd(), argv.config))
    : require(path.join(process.cwd(), "rest-api-tools.config.js"));
  build(configs);
};
