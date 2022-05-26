/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetCitiesResponse = {
  stateCategories: Types.StateCategory[]
}

export const getCities = new BaseRequest<
  undefined,
  GetCitiesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/state_categories",
  tokenKey: "AUTH_TOKEN",
});
