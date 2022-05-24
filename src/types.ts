export type CodeGenConfig = {
  connect: string;
  openapi: string;
  requiredAuth: boolean;
};

export type BaseConfig = {
  connectBasePath: string;
  tokenKey: string;
  baseURL: string;
};

export type Config = BaseConfig & {
  codeGenConfigs: CodeGenConfig[];
};
