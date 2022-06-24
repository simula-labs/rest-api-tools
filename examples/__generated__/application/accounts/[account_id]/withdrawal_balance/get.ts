/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdWithdrawalBalanceUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWithdrawalBalanceResponse = {
  available: {
    amount: number
    currency: string
  }[]
  connectReserved: {
    amount: number
    currency: string
  }[]
  livemode: boolean
  object: string
  pending: {
    amount: number
    currency: string
  }[]
}

export const getAccountsAccountIdWithdrawalBalance = new BaseRequest<
  undefined,
  GetAccountsAccountIdWithdrawalBalanceResponse,
  GetAccountsAccountIdWithdrawalBalanceUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/withdrawal_balance",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
