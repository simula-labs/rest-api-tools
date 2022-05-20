import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostCompaniesCompanyIdAcceptUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdAcceptResponse = Types.Company & {
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

export const PostCompaniesCompanyIdAccept = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdAcceptResponse,
  PostCompaniesCompanyIdAcceptUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:company_id/accept",
  tokenKey: "AUTH_TOKEN",
});
