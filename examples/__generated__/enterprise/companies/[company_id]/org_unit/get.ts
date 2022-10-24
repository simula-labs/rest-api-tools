/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdOrgUnitUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdOrgUnitResponse = Types.OrgUnitRes

export const getCompaniesCompanyIdOrgUnit = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdOrgUnitResponse,
  GetCompaniesCompanyIdOrgUnitUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/org_unit",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
