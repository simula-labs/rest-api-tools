/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse = Types.ProjectHistory & {
    workHistory: Types.WorkHistory
  }

export type PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody =   /** name・positionどちらかは必須 */
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

export const postWorkHistoriesWorkHistoryIdProjectHistories = new BaseRequest<
  PostWorkHistoriesWorkHistoryIdProjectHistoriesRequestBody,
  PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse,
  PostWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/work_histories/:workHistoryId/project_histories",
  tokenKey: "AUTH_TOKEN",
});
