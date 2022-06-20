/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  baseURL: "https://api.example.com/application",
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
