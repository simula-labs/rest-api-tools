import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetSearchConditionsIdUrlParams = {
  id: string
} | undefined

export type GetSearchConditionsIdResponse = Types.SearchCondition & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export const getSearchConditionsId = new BaseRequest<
  undefined,
  GetSearchConditionsIdResponse,
  GetSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
