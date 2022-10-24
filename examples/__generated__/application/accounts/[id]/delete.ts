/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type DeleteAccountsIdUrlParams = {
  id: string
} | undefined

export type DeleteAccountsIdResponse = Types.AccountRes

export const deleteAccountsId = new BaseRequest<
  undefined,
  DeleteAccountsIdResponse,
  DeleteAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: API_HOST,
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
