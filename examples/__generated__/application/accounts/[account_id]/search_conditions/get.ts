import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdSearchConditionsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdSearchConditionsResponse = {
  searchConditions: (Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdSearchConditionsQueryParams = {
  /** その企業の検索条件一覧を返す */
  companyId?: string | undefined
  /** ターゲット */
  target?: string | undefined
} | undefined

export const getAccountsAccountIdSearchConditions = new BaseRequest<
  undefined,
  GetAccountsAccountIdSearchConditionsResponse,
  GetAccountsAccountIdSearchConditionsUrlParams,
  GetAccountsAccountIdSearchConditionsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/search_conditions",
  tokenKey: "AUTH_TOKEN",
});
