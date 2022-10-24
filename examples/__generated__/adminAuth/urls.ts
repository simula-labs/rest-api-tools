export const API_HOST = ((): string => {
  const environment = process.env.REACT_APP_ENV
  switch (environment) {
    case environment?.includes("local") && environment:
      return "http://localhost:3000/auth/admin/v1";
    case environment?.includes("dev") && environment:
      return "https://api-dev.prob-works.com/auth/admin/v1";
    case environment?.includes("stg") && environment:
      return "https://api-stg.prob-works.com/auth/admin/v1";
    case environment?.includes("prd") && environment:
      return "https://api.prob-works.com/auth/admin/v1";
    default:
      throw new Error("環境変数が設定されていません")
  }
})();
