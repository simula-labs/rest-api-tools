import $SwaggerParser from "@apidevtools/swagger-parser";
// import {buildV3} from "./buildV3";
import { OpenAPIV3 } from "openapi-types";
import { BaseConfig, CodeGenConfig } from "./types";
import { buildV3 } from "./buildV3";

export const buildTemplate = async (config: CodeGenConfig, baseConfig: BaseConfig) => {
  const openapi = await $SwaggerParser.parse(config.openapi);

  // FIXME: 条件分岐無理矢理感あり
  if ((openapi as OpenAPIV3.Document).openapi !== "3.0.0") {
    console.log("openApiのバージョンを3.0.0にしてください");
    return;
  }
  return buildV3(openapi as OpenAPIV3.Document, config, baseConfig);
};
