import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type DeleteAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export const deleteAccountsAccountIdSupport = new BaseRequest<
  undefined,
  undefined,
  DeleteAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/support",
  tokenKey: "AUTH_TOKEN",
});
