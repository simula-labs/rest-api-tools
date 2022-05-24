import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetCompaniesRecommendedResponse = {
  companies: (Types.Company & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  })[]
  totalDataNums: number
}

export const getCompaniesRecommended = new BaseRequest<
  undefined,
  GetCompaniesRecommendedResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/companies/recommended",
  tokenKey: "AUTH_TOKEN",
});
