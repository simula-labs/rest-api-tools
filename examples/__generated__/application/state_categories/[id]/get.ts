import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/state_categories/:id",
  tokenKey: "AUTH_TOKEN",
});
