/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
