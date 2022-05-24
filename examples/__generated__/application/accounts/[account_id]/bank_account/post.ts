import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/bank_account",
  tokenKey: "AUTH_TOKEN",
});
