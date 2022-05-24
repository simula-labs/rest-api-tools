import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdBankAccountUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdBankAccountResponse = Types.BankAccount & {
    account: Types.Account
  }

export const getAccountsAccountIdBankAccount = new BaseRequest<
  undefined,
  GetAccountsAccountIdBankAccountResponse,
  GetAccountsAccountIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/bank_account",
  tokenKey: "AUTH_TOKEN",
});
