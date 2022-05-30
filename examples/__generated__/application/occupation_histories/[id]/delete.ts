/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteOccupationHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
