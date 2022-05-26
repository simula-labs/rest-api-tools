/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
