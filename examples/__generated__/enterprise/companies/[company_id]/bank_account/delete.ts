/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type DeleteCompaniesCompanyIdBankAccountUrlParams = {
  companyId: string
} | undefined

export const deleteCompaniesCompanyIdBankAccount = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdBankAccountUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/bank_account",
  tokenKey: "AUTH_TOKEN",
});
