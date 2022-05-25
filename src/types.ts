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
