/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdRolesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRolesResponse = {
  roles: (Types.Role & {
    policies?: Types.Policy[] | undefined
  } & {
    company?: Types.Company | undefined
  })[]
}

export const getCompaniesCompanyIdRoles = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRolesResponse,
  GetCompaniesCompanyIdRolesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/roles",
  tokenKey: "AUTH_TOKEN",
});
