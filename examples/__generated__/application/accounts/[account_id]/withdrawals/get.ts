/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWithdrawalsResponse = {
  withdrawals: (Types.Withdrawal & {
    account?: Types.Account | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdWithdrawalsQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdWithdrawals = new BaseRequest<
  undefined,
  GetAccountsAccountIdWithdrawalsResponse,
  GetAccountsAccountIdWithdrawalsUrlParams,
  GetAccountsAccountIdWithdrawalsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
