/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdFollowingUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdFollowingResponse = Types.Company

export type PostAccountsAccountIdFollowingRequestBody = {
  following: {
    companyId: string
  }
}

export const postAccountsAccountIdFollowing = new BaseRequest<
  PostAccountsAccountIdFollowingRequestBody,
  PostAccountsAccountIdFollowingResponse,
  PostAccountsAccountIdFollowingUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/followings",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
