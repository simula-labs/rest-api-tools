import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type GetTermHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetTermHistoriesIdResponse = Types.TermHistory

export const GetTermHistoriesId = new BaseRequest<
  undefined,
  GetTermHistoriesIdResponse,
  GetTermHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories/:id",
});
