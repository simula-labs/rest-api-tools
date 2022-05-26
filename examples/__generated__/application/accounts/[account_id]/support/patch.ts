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
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/support",
  tokenKey: "AUTH_TOKEN",
});
