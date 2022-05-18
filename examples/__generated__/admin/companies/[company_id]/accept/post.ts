import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
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
export const PostCompanies = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:company_id/accept",
});