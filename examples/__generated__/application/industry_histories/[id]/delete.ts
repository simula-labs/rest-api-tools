/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteIndustryHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
