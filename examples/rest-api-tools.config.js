module.exports = [
  {
    connect: "__generated__/admin",
    openapi: "openapi/Admin.v1.yaml",
    baseURL: "https://api.example.com/admin",
    requiredAuth: true,
    tokenKey: "AUTH_TOKEN",
  },
];
