/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetCitiesIdUrlParams = {
  id: string
} | undefined

export type GetCitiesIdResponse = Types.StateCategory & {
    states: Types.State[]
  }

export const getCitiesId = new BaseRequest<
  undefined,
  GetCitiesIdResponse,
  GetCitiesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/state_categories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
