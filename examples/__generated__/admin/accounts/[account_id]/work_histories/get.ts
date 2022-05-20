import BaseRequest from "../../../baseRequest";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWorkHistoriesResponse = {
  workHistories: Types.WorkHistory[]
}

export const GetAccountsAccountIdWorkHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdWorkHistoriesResponse,
  GetAccountsAccountIdWorkHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/work_histories",
});
