/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdIncomeHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdIncomeHistoriesResponse = {
  incomeHistories: (Types.IncomeHistory & {
    account?: Types.Account | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdIncomeHistoriesQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdIncomeHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdIncomeHistoriesResponse,
  GetAccountsAccountIdIncomeHistoriesUrlParams,
  GetAccountsAccountIdIncomeHistoriesQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/income_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
