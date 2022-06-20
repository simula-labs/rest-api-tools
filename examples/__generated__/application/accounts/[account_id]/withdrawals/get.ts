/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/withdrawals",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
