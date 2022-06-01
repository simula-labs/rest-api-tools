/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PatchCompaniesCompanyIdPlanSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdPlanSubscriptionsIdResponse = Types.Subscription & {
    company: Types.Company
  } & {
    price: Types.Price
  }

export type PatchCompaniesCompanyIdPlanSubscriptionsIdRequestBody = {
  subscription: {
    priceId?: string | undefined
  }
}

export const patchCompaniesCompanyIdPlanSubscriptionsId = new BaseRequest<
  PatchCompaniesCompanyIdPlanSubscriptionsIdRequestBody,
  PatchCompaniesCompanyIdPlanSubscriptionsIdResponse,
  PatchCompaniesCompanyIdPlanSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
});
