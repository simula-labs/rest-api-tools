import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostCompaniesCompanyIdForcedCancelUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdForcedCancelResponse = Types.Company & {
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

export const PostCompaniesCompanyIdForcedCancel = new BaseRequest<
  undefined,
  PostCompaniesCompanyIdForcedCancelResponse,
  PostCompaniesCompanyIdForcedCancelUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:company_id/forced_cancel",
  tokenKey: "AUTH_TOKEN",
});
