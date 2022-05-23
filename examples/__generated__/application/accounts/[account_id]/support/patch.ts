import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PatchAccountsAccountIdSupportUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdSupportResponse = Types.Support & {
    account: Types.Account
  }

export type PatchAccountsAccountIdSupportRequestBody = {
  support: {
    project: boolean
    career: boolean
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
  path: "/accounts/:account_id/support",
  tokenKey: "AUTH_TOKEN",
});
