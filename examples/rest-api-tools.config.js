module.exports = {
  // @typesファイルが生成されるパス
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  baseURL: "https://api.example.com/public",
  codeGenConfigs: [
    {
      connect: "public",
      openapi: "openapi/Public.v1.yaml",
      requiredAuth: false,
    },
    {
      connect: "application",
      openapi: "openapi/Application.v1.yaml",
      requiredAuth: true,
    },
  ],
};
