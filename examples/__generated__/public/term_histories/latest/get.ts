/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetTermHistoriesLatestResponse = Types.TermHistory

export type GetTermHistoriesLatestQueryParams = {
  /** "common" or "type" */
  type?: 'common' | 'plan' | undefined
}

export const getTermHistoriesLatest = new BaseRequest<
  undefined,
  GetTermHistoriesLatestResponse,
  undefined,
  GetTermHistoriesLatestQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/term_histories/latest",
  tokenKey: "AUTH_TOKEN",
});
