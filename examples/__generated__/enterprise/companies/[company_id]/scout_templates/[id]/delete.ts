/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdScoutTemplatesIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdScoutTemplatesId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdScoutTemplatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_templates/:id",
  tokenKey: "AUTH_TOKEN",
});
