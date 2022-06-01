/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdScoutsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdScoutsIdResponse = Types.Scout & {
    company?: Types.Company | undefined
  } & {
    account?: Types.Account | undefined
  } & {
    message?: Types.Message | undefined
  }

export const getCompaniesCompanyIdScoutsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutsIdResponse,
  GetCompaniesCompanyIdScoutsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scouts/:id",
  tokenKey: "AUTH_TOKEN",
});
