import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWithdrawalsResponse = {
  withdrawals: Types.Withdrawal & {
    account: Types.Account
  }
}

export const getAccountsAccountIdWithdrawals = new BaseRequest<
  undefined,
  GetAccountsAccountIdWithdrawalsResponse,
  GetAccountsAccountIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
