/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdBankAccountResponse = Types.BankAccount & {
    company: Types.Company
  }

export type PostCompaniesCompanyIdBankAccountRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}

export const postCompaniesCompanyIdBankAccount = new BaseRequest<
  PostCompaniesCompanyIdBankAccountRequestBody,
  PostCompaniesCompanyIdBankAccountResponse,
  PostCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
});
