/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type DeleteCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export const deleteCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
});
