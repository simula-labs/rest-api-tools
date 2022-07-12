/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteOccupationHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: API_HOST,
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
