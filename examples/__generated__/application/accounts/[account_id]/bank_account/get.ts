/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
