import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostAccountsAccountIdWithdrawalsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdWithdrawalsResponse = Types.Withdrawal & {
    account: Types.Account
  }

export type PostAccountsAccountIdWithdrawalsRequestBody = {
  withdrawal: {
    amount: number
  }
}

export const postAccountsAccountIdWithdrawals = new BaseRequest<
  PostAccountsAccountIdWithdrawalsRequestBody,
  PostAccountsAccountIdWithdrawalsResponse,
  PostAccountsAccountIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
