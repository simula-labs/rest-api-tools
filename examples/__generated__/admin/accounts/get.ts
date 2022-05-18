import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetAccountsResponse = {
  accounts: Types.Account[]
  total_data_nums: number
}
export type GetAccountsQueryParams = {
  /** 'applicant'を指定すると、応募者のアカウント一覧を取得する */
  type?: 'applicant' | undefined
  /** アカウントの名前検索 */
  keyword?: string | undefined
} | undefined
export const GetAccounts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts",
});