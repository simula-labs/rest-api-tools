module.exports = {
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  openapiBindings: [
    // {
    //   connect: "admin",
    //   openapi: "./openapi/Admin.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: true,
    // },
    // {
    //   connect: "adminAuth",
    //   openapi: "./openapi/AdminAuth.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: false,
    // },
    // {
    //   connect: "application",
    //   openapi: "./openapi/Application.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: true,
    // },
    // {
    //   connect: "auth",
    //   openapi: "./openapi/Auth.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: false,
    // },
    {
      connect: "enterprise",
      openapi: "./openapi/Enterprise.v1.json",
      apiEnvironmentVariables: "REACT_APP_ENV",
      requiredAuth: true,
      tokenKey: "PROB_WORKS_AUTH_TOKEN",
    },
    // {
    //   connect: "public",
    //   openapi: "./openapi/Public.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: false,
    // },
    // {
    //   connect: "webhook",
    //   openapi: "./openapi/Webhook.v1.json",
    //   apiEnvironmentVariables: "REACT_APP_ENV",
    //   requiredAuth: true,
    // },
  ],
};
