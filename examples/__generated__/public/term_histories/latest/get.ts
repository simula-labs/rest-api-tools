import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetTermHistoriesLatestResponse = Types.TermHistory

export type GetTermHistoriesLatestQueryParams = {
  /** "common" or "type" */
  type?: 'common' | 'plan' | undefined
} | undefined

export const getTermHistoriesLatest = new BaseRequest<
  undefined,
  GetTermHistoriesLatestResponse,
  undefined,
  GetTermHistoriesLatestQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/term_histories/latest",
  tokenKey: "AUTH_TOKEN",
});
