import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetCompaniesResponse = {
  companies: (Types.Company & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  })[]
  totalDataNums: number
}

export type GetCompaniesQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
} | undefined

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
});