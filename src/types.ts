export type CodeGenConfig = {
  connect: string;
  openapi: string;
  requiredAuth: boolean;
  apiEnvironmentVariables: string;
};

export type BaseConfig = {
  connectBasePath: string;
  tokenKey: string;
};

export type Config = BaseConfig & {
  openapiBindings: CodeGenConfig[];
};

export type EnumObject = {
  name: string;
  description: string | null;
  values: string[];
};

export type Server = {
  url: string;
  environmentVariable: string;
};
