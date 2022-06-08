/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type DeleteCompaniesCompanyIdSearchConditionsIdUrlParams = {
  id: string
} | undefined

export const deleteCompaniesCompanyIdSearchConditionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "companies/:companyId/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
