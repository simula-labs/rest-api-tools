import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostTermHistoriesResponse = Types.TermHistory

export type PostTermHistoriesRequestBody = {
  termHistory: {
    content: string
    version: string
  }
}

export const PostTermHistories = new BaseRequest<
  PostTermHistoriesRequestBody,
  PostTermHistoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/term_histories",
  tokenKey: "AUTH_TOKEN",
});
