/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type DeleteCompaniesCompanyIdJobOrdersJobOrderIdUrlParams = {
  companyId: string
  id: string
} | undefined

export const deleteCompaniesCompanyIdJobOrdersJobOrderId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdJobOrdersJobOrderIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
