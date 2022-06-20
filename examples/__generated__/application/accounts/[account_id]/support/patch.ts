/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PatchAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdSupportResponse = Types.Support & {
    account: Types.Account
  }

export type PatchAccountsAccountIdSupportRequestBody = {
  support: {
    project?: boolean | undefined
    career?: boolean | undefined
  }
}

export const patchAccountsAccountIdSupport = new BaseRequest<
  PatchAccountsAccountIdSupportRequestBody,
  PatchAccountsAccountIdSupportResponse,
  PatchAccountsAccountIdSupportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
