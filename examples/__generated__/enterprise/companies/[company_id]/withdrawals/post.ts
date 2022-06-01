/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdWithdrawalsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdWithdrawalsResponse = Types.Withdrawal & {
    company?: Types.Company | undefined
  }

export type PostCompaniesCompanyIdWithdrawalsRequestBody = {
  withdrawal?: {
    amount: number
  } | undefined
}

export const postCompaniesCompanyIdWithdrawals = new BaseRequest<
  PostCompaniesCompanyIdWithdrawalsRequestBody,
  PostCompaniesCompanyIdWithdrawalsResponse,
  PostCompaniesCompanyIdWithdrawalsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/withdrawals",
  tokenKey: "AUTH_TOKEN",
});
