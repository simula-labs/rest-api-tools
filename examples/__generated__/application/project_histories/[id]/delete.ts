import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type DeleteProjectHistoriesIdUrlParams = {
  id: string
} | undefined

export type DeleteProjectHistoriesIdResponse = Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  }

export const deleteProjectHistoriesId = new BaseRequest<
  undefined,
  DeleteProjectHistoriesIdResponse,
  DeleteProjectHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
