/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteAccountsAccountIdFollowingCompanyIdUrlParams = {
  companyId: string
} | undefined

export const deleteAccountsAccountIdFollowingCompanyId = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsAccountIdFollowingCompanyIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/followings/:companyId",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
