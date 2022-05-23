import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/followings",
  tokenKey: "AUTH_TOKEN",
});
