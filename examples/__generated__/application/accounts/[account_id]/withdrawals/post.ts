import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
