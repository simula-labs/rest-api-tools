/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchProjectHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchProjectHistoriesIdResponse = Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  }

export type PatchProjectHistoriesIdRequestBody =   /** name・positionどちらかは必須 */
{
  projectHistory: {
    name?: string | undefined
    position?: string | undefined
    businessContent?: string | undefined
    sinceDate: string
    untilDate?: string | undefined
    isEmployed: boolean
  }
}

export const patchProjectHistoriesId = new BaseRequest<
  PatchProjectHistoriesIdRequestBody,
  PatchProjectHistoriesIdResponse,
  PatchProjectHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
