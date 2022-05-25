import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetCompaniesIdUrlParams = {
  id: string
} | undefined

export type GetCompaniesIdResponse = Types.Company & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  } & {
    recruitments: Types.Recruitment[]
  }

export const getCompaniesId = new BaseRequest<
  undefined,
  GetCompaniesIdResponse,
  GetCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
