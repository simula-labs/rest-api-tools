/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdRolesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdRolesIdResponse = Types.Role & {
    policies: Types.Policy[]
  } & {
    company: Types.Company
  }

export type PatchCompaniesCompanyIdRolesIdRequestBody = {
  role: {
    name?: string | undefined
    policyIds?: string[] | undefined
    description?: string | undefined
  }
}

export const patchCompaniesCompanyIdRolesId = new BaseRequest<
  PatchCompaniesCompanyIdRolesIdRequestBody,
  PatchCompaniesCompanyIdRolesIdResponse,
  PatchCompaniesCompanyIdRolesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/roles/:id",
  tokenKey: "AUTH_TOKEN",
});
