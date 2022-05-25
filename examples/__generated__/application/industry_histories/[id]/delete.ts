import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type DeleteIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteIndustryHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
