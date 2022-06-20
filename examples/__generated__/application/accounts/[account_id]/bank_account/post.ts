/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdBankAccountUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBankAccountResponse = Types.BankAccount & {
    account: Types.Account
  }

export type PostAccountsAccountIdBankAccountRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postAccountsAccountIdBankAccount = new BaseRequest<
  PostAccountsAccountIdBankAccountRequestBody,
  PostAccountsAccountIdBankAccountResponse,
  PostAccountsAccountIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/bank_account",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
