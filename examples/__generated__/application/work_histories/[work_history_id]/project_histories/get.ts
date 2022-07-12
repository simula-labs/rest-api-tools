/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse = {
  projectHistories: (Types.ProjectHistory & {
    workHistory?: Types.WorkHistory | undefined
  })[]
  totalDataNums: number
}

export const getWorkHistoriesWorkHistoryIdProjectHistories = new BaseRequest<
  undefined,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/work_histories/:workHistoryId/project_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
