import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdIncomeHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIncomeHistoriesResponse = {
  incomeHistories: (Types.IncomeHistory & {
    account: Types.Account
  })[]
  totalDataNums: number
}

export const getAccountsAccountIdIncomeHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIncomeHistoriesResponse,
  GetAccountsAccountIdIncomeHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/income_histories",
  tokenKey: "AUTH_TOKEN",
});