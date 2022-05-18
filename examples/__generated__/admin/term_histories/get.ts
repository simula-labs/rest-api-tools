import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetTermHistoriesResponse = {
  term_histories: Types.TermHistory[]
}
export type GetTermHistoriesQueryParams = {
  type?: 'common' | 'plan' | undefined
} | undefined
export const GetTermHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories",
});