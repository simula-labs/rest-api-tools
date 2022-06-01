/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdSubscriptionConfirmUrlParams = {
  companyId: string
} | undefined

export const postCompaniesCompanyIdSubscriptionConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdSubscriptionConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/subscription/confirm",
  tokenKey: "AUTH_TOKEN",
});
