/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
