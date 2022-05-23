import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/withdrawal_balance",
  tokenKey: "AUTH_TOKEN",
});
