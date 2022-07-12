module.exports = {
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  openapiBindings: [
    {
      connect: "application",
      openapi: "openapi/Application.v1.json",
      requiredAuth: false,
      apiEnvironmentVariables: "REACT_APP_ENV",
    },
    // {
    //   connect: "application",
    //   openapi: "https://simula-labs.github.io/prob-works_spec/Application.v1.json",
    //   requiredAuth: true,
    //   baseURL: "https://api.example.com/application",
    // },
  ],
};
