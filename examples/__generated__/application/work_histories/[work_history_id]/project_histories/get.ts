import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined

export type GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse = {
  projectHistories: (Types.ProjectHistory & {
    workHistory: Types.WorkHistory
  })[]
  totalDataNums: number
}

export const getWorkHistoriesWorkHistoryIdProjectHistories = new BaseRequest<
  undefined,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse,
  GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/work_histories/:work_history_id/project_histories",
  tokenKey: "AUTH_TOKEN",
});
