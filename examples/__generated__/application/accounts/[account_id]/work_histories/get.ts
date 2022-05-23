import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/work_histories",
  tokenKey: "AUTH_TOKEN",
});
