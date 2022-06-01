/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdContractsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdContractsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdContractsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
