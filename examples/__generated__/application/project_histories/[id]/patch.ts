import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/project_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
