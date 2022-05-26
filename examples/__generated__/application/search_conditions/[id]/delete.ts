/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteSearchConditionsIdUrlParams = {
  id: string
} | undefined

export const deleteSearchConditionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
