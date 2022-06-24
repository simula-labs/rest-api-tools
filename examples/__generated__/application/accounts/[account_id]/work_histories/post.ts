/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdWorkHistoriesResponse = Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  }

export type PostAccountsAccountIdWorkHistoriesRequestBody = {
  workHistory: {
    /** 「在職中」「離職中」 */
    isEmployed: boolean
    position: string
    sinceDate: string
    untilDate?: string | undefined
    name: string
    department: string
  }
}

export const postAccountsAccountIdWorkHistories = new BaseRequest<
  PostAccountsAccountIdWorkHistoriesRequestBody,
  PostAccountsAccountIdWorkHistoriesResponse,
  PostAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/work_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
