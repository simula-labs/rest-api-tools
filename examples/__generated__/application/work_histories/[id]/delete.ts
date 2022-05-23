import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export const deleteWorkHistoriesId = new BaseRequest<
  undefined,
  undefined,
  DeleteWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
