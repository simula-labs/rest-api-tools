import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostTermHistoriesResponse = Types.TermHistory
export type PostTermHistoriesRequestBody = {
  term_history: {
    content: string
    version: string
  }
}
export const PostTermHistories = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories",
});