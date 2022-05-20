import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetTermHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetTermHistoriesIdResponse = Types.TermHistory

export const getTermHistoriesId = new BaseRequest<
  undefined,
  GetTermHistoriesIdResponse,
  GetTermHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
