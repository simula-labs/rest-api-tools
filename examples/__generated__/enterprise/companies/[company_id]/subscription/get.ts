/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdPlanSubscriptionsIdResponse = Types.Subscription & {
    company: Types.Company
  } & {
    price: Types.Price
  }

export const getCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdPlanSubscriptionsIdResponse,
  GetCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
});
