## 開発環境の作り方
1. `npm i`
2. `npm run build:watch`
3. 別のターミナルを開いて`cd examples`
4. `npm run generate`

## examplesのoepenapiを最新のものにする方法
1. [spec](https://github.com/simula-labs/prob-works_spec)ファイルをエディターで開く
2. `npm run build`コマンドを実行する
3. 2で生成された`/build`ディレクトリをコピーする
4. `/examples/openapi`ディレクトリを書き換える

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
      // connectBasePath以下のどのディレクトリに作成するか
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
