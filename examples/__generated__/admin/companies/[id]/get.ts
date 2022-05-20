import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetCompaniesIdUrlParams = {
  id: string
} | undefined

export type GetCompaniesIdResponse = Types.Company & {
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

export const GetCompaniesId = new BaseRequest<
  undefined,
  GetCompaniesIdResponse,
  GetCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
