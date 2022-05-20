import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetAccountsResponse = {
  accounts: Types.Account[]
  totalDataNums: number
}

export type GetAccountsQueryParams = {
  /** 'applicant'を指定すると、応募者のアカウント一覧を取得する */
  type?: 'applicant' | undefined
  /** アカウントの名前検索 */
  keyword?: string | undefined
} | undefined

export const getAccounts = new BaseRequest<
  undefined,
  GetAccountsResponse,
  undefined,
  GetAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts",
  tokenKey: "AUTH_TOKEN",
});
