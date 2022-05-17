const LOGIN_PATH = process.env.LOGIN_PATH;

module.exports = [
    {
        prefix: "application",
        connect: "__generated__/application",
        openapi: "openapi/Admin.v1.yaml",
        baseURL: "https://api.example.com/application",
    },
]