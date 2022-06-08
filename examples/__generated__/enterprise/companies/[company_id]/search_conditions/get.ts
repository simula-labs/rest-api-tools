/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdSearchConditionsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdSearchConditionsResponse = {
  searchConditions: (Types.SearchCondition & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdSearchConditionsQueryParams = {
  /** その企業の検索条件一覧を返す */
  companyId?: string | undefined
  /** ターゲット */
  target?: string | undefined
}

export const getCompaniesCompanyIdSearchConditions = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdSearchConditionsResponse,
  GetCompaniesCompanyIdSearchConditionsUrlParams,
  GetCompaniesCompanyIdSearchConditionsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/search_conditions",
  tokenKey: "AUTH_TOKEN",
});
