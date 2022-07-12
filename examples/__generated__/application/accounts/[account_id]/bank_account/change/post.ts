/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PostAccountsAccountIdBankAccountChangeUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdBankAccountChangeResponse = Types.BankAccount & {
    account: Types.Account
  }

export type PostAccountsAccountIdBankAccountChangeRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postAccountsAccountIdBankAccountChange = new BaseRequest<
  PostAccountsAccountIdBankAccountChangeRequestBody,
  PostAccountsAccountIdBankAccountChangeResponse,
  PostAccountsAccountIdBankAccountChangeUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/bank_account/change",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
