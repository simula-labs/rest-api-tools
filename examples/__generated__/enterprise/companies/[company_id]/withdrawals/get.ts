/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdWithdrawalsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdWithdrawalsResponse = {
  withdrawals: Types.Withdrawal & {
    company?: Types.Company | undefined
  }
}

export const getCompaniesCompanyIdWithdrawals = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWithdrawalsResponse,
  GetCompaniesCompanyIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
