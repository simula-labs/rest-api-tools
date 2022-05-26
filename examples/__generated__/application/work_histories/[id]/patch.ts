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
    isEmployed: boolean
    position: string
    sinceDate: string
    untilDate: string
    name: string
    department: string
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
  baseURL: "https://a pi.example.com/public",
  path: "/work_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
