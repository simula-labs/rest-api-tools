import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetCitiesResponse = {
  stateCategories: (Types.StateCategory & {
    states: Types.State[]
  })[]
}

export const getCities = new BaseRequest<
  undefined,
  GetCitiesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/state_categories",
  tokenKey: "AUTH_TOKEN",
});
