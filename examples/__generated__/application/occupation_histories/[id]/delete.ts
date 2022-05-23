import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
