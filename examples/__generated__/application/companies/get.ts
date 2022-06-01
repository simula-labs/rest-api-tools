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
  /** stubを渡せばstub企業を含めた全企業一覧取得に */
  type?: 'stub' | undefined
  /** 発注に紐付いた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務に紐付いた募集のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
}

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
