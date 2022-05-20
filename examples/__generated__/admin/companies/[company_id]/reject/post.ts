import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostCompaniesCompanyIdRejectUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRejectResponse = Types.Company & {
    owner: Types.Account & {
      profile: Types.Profile
    }
  } & {
    subscription: Types.Subscription & {
      price: Types.Price
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.IndustryHistory[]
  } & {
    features: Types.Feature[]
  }

export const postCompaniesCompanyIdReject = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdRejectResponse,
  PostCompaniesCompanyIdRejectUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:company_id/reject",
  tokenKey: "AUTH_TOKEN",
});
