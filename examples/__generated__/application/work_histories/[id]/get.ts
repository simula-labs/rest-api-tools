/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export type GetWorkHistoriesIdResponse = Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  }

export const getWorkHistoriesId = new BaseRequest<
  undefined,
  GetWorkHistoriesIdResponse,
  GetWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
