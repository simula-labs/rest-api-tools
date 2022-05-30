/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdFollowingResponse = {
  followings: Types.Company[]
  totalDataNums: number
}

export const getAccountsAccountIdFollowing = new BaseRequest<
  undefined,
  GetAccountsAccountIdFollowingResponse,
  GetAccountsAccountIdFollowingUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/followings",
  tokenKey: "AUTH_TOKEN",
});
