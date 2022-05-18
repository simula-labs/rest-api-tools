import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchCompaniesIdUrlParams = {
  id: string
} | undefined
export type PatchCompaniesIdResponse = Types.Company & {
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
export type PatchCompaniesIdRequestBody = {
}
export const PatchCompanies = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:id",
});