/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdRolesUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRolesResponse = Types.Role & {
    policies: Types.Policy[]
  } & {
    company: Types.Company
  }

export type PostCompaniesCompanyIdRolesRequestBody = {
  role: {
    name: string
    policyIds?: string[] | undefined
    description?: string | undefined
  }
}

export const postCompaniesCompanyIdRoles = new BaseRequest<
  PostCompaniesCompanyIdRolesRequestBody,
  PostCompaniesCompanyIdRolesResponse,
  PostCompaniesCompanyIdRolesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/roles",
  tokenKey: "AUTH_TOKEN",
});
