import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetIndustryHistoriesIdResponse = Types.IndustryHistory & {
    account: Types.Account
  } & {
    industry: Types.Industry
  }

export const getIndustryHistoriesId = new BaseRequest<
  undefined,
  GetIndustryHistoriesIdResponse,
  GetIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
