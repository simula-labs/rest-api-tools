/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/state_categories/:id",
  tokenKey: "AUTH_TOKEN",
});
