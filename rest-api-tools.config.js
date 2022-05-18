module.exports = [
  {
    connect: "examples/__generated__/admin",
    openapi: "examples/openapi/Admin.v1.yaml",
    baseURL: "https://api.example.com/admin",
    requiredAuth: true,
  },
];
