module.exports = {
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  baseURL: "https://a pi.example.com/public",
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
