import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type DeleteAccountsAccountIdFollowingCompanyIdUrlParams = {
  companyId: string
} | undefined

export const deleteAccountsAccountIdFollowingCompanyId = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsAccountIdFollowingCompanyIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/followings/:company_id",
  tokenKey: "AUTH_TOKEN",
});
