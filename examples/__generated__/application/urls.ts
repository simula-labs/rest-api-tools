export const API_HOST = ((): string => {
  const environment = process.env.REACT_APP_ENV
  switch (environment) {
    case environment?.includes("local"):
      return "http://localhost:3000/v1";
    case environment?.includes("prd"):
      return "https://api.prob-works.com/v1";
    case environment?.includes("stg"):
      return "https://api-stg.prob-works.com/v1";
    case environment?.includes("dev"):
      return "https://api-dev.prob-woks.com/v1";
    default:
      throw new Error("環境変数が設定されていません")
  }
})();