## Setup
1. `npm i`
2. `npm link`
3. `npm run generate`

## 使用の際の注意事項
- rest-api-tools.config.jsファイルをroot直下に置くこと
- openapiのバージョンは3.0のみ対応
- [Redocly/openapi-cli](https://github.com/Redocly/openapi-cli)などを利用してopenAPIをbundleして一つのファイルにまとめる必要がある

## configファイルの設定例
````javascript
module.exports = {
  connectBasePath: "__generated__",
  tokenKey: "AUTH_TOKEN",
  baseURL: "https://api.example.com/public",
  openapiBindings: [
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

````
