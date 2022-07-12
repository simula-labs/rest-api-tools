/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

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
  baseURL: API_HOST,
  path: "/state_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
