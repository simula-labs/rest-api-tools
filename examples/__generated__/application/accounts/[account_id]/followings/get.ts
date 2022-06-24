/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdFollowingResponse = {
  companies: (Types.Company & {
    recruitments?: Types.Recruitment[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdFollowingQueryParams = {
  page?: number | undefined
}

export const getAccountsAccountIdFollowing = new BaseRequest<
  undefined,
  GetAccountsAccountIdFollowingResponse,
  GetAccountsAccountIdFollowingUrlParams,
  GetAccountsAccountIdFollowingQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/followings",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
