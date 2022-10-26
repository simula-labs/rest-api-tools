/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetIndustryHistoriesIdResponse = Types.IndustryHistoryRes

export const getIndustryHistoriesId = new BaseRequest<
  undefined,
  GetIndustryHistoriesIdResponse,
  GetIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
