import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: Types.WorkHistory[]
}

export const getAccountsAccountIdWorkHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdWorkHistoriesResponse,
  GetAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/work_histories",
  tokenKey: "AUTH_TOKEN",
});
