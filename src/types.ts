export type CodeGenConfig = {
  connect: string;
  openapi: string;
  requiredAuth: boolean;
  baseURL: string;
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
