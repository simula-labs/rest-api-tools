/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdRolesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRolesIdResponse = Types.Role & {
    policies?: Types.Policy[] | undefined
  } & {
    company?: Types.Company | undefined
  }

export const getCompaniesCompanyIdRolesId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRolesIdResponse,
  GetCompaniesCompanyIdRolesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/roles/:id",
  tokenKey: "AUTH_TOKEN",
});
