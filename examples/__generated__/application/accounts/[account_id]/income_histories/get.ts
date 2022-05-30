/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/income_histories",
  tokenKey: "AUTH_TOKEN",
});
