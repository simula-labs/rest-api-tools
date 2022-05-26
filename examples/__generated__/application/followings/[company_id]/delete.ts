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
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/followings/:company_id",
  tokenKey: "AUTH_TOKEN",
});
