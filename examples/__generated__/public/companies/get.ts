/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

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
}

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
});
