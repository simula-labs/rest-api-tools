/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdScoutsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdScoutsResponse = {
  scout?: (Types.Scout & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  } & {
    message?: Types.Message | undefined
  })[] | undefined
  totalDataNums?: number | undefined
}

export const getCompaniesCompanyIdScouts = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutsResponse,
  GetCompaniesCompanyIdScoutsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scouts",
  tokenKey: "AUTH_TOKEN",
});
