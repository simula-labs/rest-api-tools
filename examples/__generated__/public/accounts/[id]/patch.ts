import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PatchAccountsIdUrlParams = {
  id: string
} | undefined

export type PatchAccountsIdResponse = Types.Account

export type PatchAccountsIdRequestBody = {
  account?: {
    newPassword: string
    newPasswordConfimation: string
  } | undefined

  /** パスワードリセットのURLにあるtoken */
  token: string
}

export const patchAccountsId = new BaseRequest<
  PatchAccountsIdRequestBody,
  PatchAccountsIdResponse,
  PatchAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
