/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchWorkHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchWorkHistoriesIdResponse = Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  }

export type PatchWorkHistoriesIdRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed?: boolean | undefined
    position?: string | undefined
    sinceDate?: string | undefined
    untilDate?: string | undefined
    name?: string | undefined
    department?: string | undefined
  }
}

export const patchWorkHistoriesId = new BaseRequest<
  PatchWorkHistoriesIdRequestBody,
  PatchWorkHistoriesIdResponse,
  PatchWorkHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
