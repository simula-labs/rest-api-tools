module.exports = {
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  openapiBindings: [
    // {
    //   connect: "public",
    //   openapi: "openapi/Public.v1.yaml",
    //   requiredAuth: false,
    //   baseURL: "https://a pi.example.com/public",
    // },
    {
      connect: "enterprise",
      openapi: "openapi/Enterprise.v1.yaml",
      requiredAuth: true,
      baseURL: "https://api.example.com/enterprise",
    },
  ],
};
