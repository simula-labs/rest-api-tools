import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdWorkHistoriesUrlParams = {
  accountId: string
  workHistoriesId: string
} | undefined
export type GetAccountsAccountIdWorkHistoriesResponse = {
  work_histories: Types.WorkHistory[]
}
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/work_histories/:work_histories_id",
});