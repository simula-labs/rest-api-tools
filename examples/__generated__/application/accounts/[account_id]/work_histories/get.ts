/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: (Types.WorkHistory & {
    account: Types.Account
  } & {
    projectHistories: Types.ProjectHistory[]
  })[]
  totalDataNums: string
}

export const getAccountsAccountIdWorkHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdWorkHistoriesResponse,
  GetAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/work_histories",
  tokenKey: "AUTH_TOKEN",
});
