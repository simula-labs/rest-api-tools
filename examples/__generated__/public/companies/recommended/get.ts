/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  requiredAuth: false,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/companies/recommended",
  tokenKey: "AUTH_TOKEN",
});
