import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetTermHistoriesResponse = {
  termHistories: Types.TermHistory[]
}

export type GetTermHistoriesQueryParams = {
  type?: 'common' | 'plan' | undefined
} | undefined

export const GetTermHistories = new BaseRequest<
  undefined,
  GetTermHistoriesResponse,
  undefined,
  GetTermHistoriesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories",
  tokenKey: "AUTH_TOKEN",
});
