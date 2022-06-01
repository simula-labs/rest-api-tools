/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdSubscriptionsIdUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdSubscriptionsIdResponse = Types.Subscription & {
    company?: Types.Company | undefined
  } & {
    price?: Types.Price | undefined
  }

export type PostCompaniesCompanyIdSubscriptionsIdRequestBody = {
  subscription?: {
    priceId: string
  } | undefined
}

export const postCompaniesCompanyIdSubscriptionsId = new BaseRequest<
  PostCompaniesCompanyIdSubscriptionsIdRequestBody,
  PostCompaniesCompanyIdSubscriptionsIdResponse,
  PostCompaniesCompanyIdSubscriptionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/subscription",
  tokenKey: "AUTH_TOKEN",
});
