import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetTermHistoriesIdUrlParams = {
  id: string
} | undefined
export type GetTermHistoriesIdResponse = Types.TermHistory
export const GetTermHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories/:id",
});