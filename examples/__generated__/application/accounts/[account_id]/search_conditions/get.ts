/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdSearchConditionsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSearchConditionsResponse = {
  searchConditions: (Types.SearchCondition & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdSearchConditionsQueryParams = {
  /** その企業の検索条件一覧を返す */
  companyId?: string | undefined
  /** ターゲット */
  target?: string | undefined
}

export const getAccountsAccountIdSearchConditions = new BaseRequest<
  undefined,
  GetAccountsAccountIdSearchConditionsResponse,
  GetAccountsAccountIdSearchConditionsUrlParams,
  GetAccountsAccountIdSearchConditionsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/search_conditions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
