/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteSearchConditionsIdUrlParams = {
  id: string
} | undefined

export const deleteSearchConditionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: API_HOST,
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
