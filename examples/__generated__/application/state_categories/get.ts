/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetCitiesResponse = {
  stateCategories: (Types.StateCategory & {
    states?: Types.State[] | undefined
  })[]
}

export const getCities = new BaseRequest<
  undefined,
  GetCitiesResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/state_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
