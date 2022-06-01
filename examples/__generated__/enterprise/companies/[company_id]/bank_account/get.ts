/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdBankAccountResponse = Types.BankAccount & {
    company: Types.Company
  }

export const getCompaniesCompanyIdBankAccount = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdBankAccountResponse,
  GetCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
});
