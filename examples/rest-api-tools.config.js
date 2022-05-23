module.exports = [
  {
    connect: "__generated__/public",
    openapi: "openapi/Public.v1.yaml",
    baseURL: "https://api.example.com/public",
    requiredAuth: true,
    tokenKey: "AUTH_TOKEN",
  },
  {
    connect: "__generated__/application",
    openapi: "openapi/Application.v1.yaml",
    baseURL: "https://api.example.com/application",
    requiredAuth: true,
    tokenKey: "AUTH_TOKEN",
  },
];
