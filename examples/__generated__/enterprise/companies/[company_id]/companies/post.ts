/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdCompaniesUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdCompaniesResponse = Types.Company & {
    owner: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    subscription: Types.Subscription & {
      price?: Types.Price & {
        product?: Types.Product | undefined
      } | undefined
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  } & {
    paymentMethods: Types.PaymentMethod[]
  }

export type PostCompaniesCompanyIdCompaniesRequestBody = {
  company: {
    name: string
    nameKana: string
  }
}

export const postCompaniesCompanyIdCompanies = new BaseRequest<
  PostCompaniesCompanyIdCompaniesRequestBody,
  PostCompaniesCompanyIdCompaniesResponse,
  PostCompaniesCompanyIdCompaniesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/companies",
  tokenKey: "AUTH_TOKEN",
});
