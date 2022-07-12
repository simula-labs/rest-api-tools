/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
