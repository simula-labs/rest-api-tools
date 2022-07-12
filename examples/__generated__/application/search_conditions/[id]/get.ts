/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
