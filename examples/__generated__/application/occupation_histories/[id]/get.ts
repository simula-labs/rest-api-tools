/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetOccupationHistoriesIdResponse = Types.OccupationHistory & {
    account: Types.Account
  } & {
    occupation: Types.Occupation
  }

export const getOccupationHistoriesId = new BaseRequest<
  undefined,
  GetOccupationHistoriesIdResponse,
  GetOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
