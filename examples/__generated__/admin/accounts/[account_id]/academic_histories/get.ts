import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdAcademicHistoriesResponse = {
  academic_histories: Types.AcademicHistory[]
}
export type GetAccountsAccountIdAcademicHistoriesQueryParams = {
} | undefined
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/academic_histories",
});