/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdStubIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdStubIdResponse = Types.Company & {
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

export type PatchCompaniesCompanyIdStubIdRequestBody = {
  company: {
    name?: string | undefined
    nameKana?: string | undefined
  }
}

export const patchCompaniesCompanyIdStubId = new BaseRequest<
  PatchCompaniesCompanyIdStubIdRequestBody,
  PatchCompaniesCompanyIdStubIdResponse,
  PatchCompaniesCompanyIdStubIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/stub/:id",
  tokenKey: "AUTH_TOKEN",
});
