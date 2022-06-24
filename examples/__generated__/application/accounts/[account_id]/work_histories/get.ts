/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: (Types.WorkHistory & {
    account?: Types.Account | undefined
  } & {
    projectHistories?: Types.ProjectHistory[] | undefined
  })[]
  totalDataNums: string
}

export const getAccountsAccountIdWorkHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdWorkHistoriesResponse,
  GetAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/work_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
