import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdHopesResponse = {
  hopes: Types.Hope[]
}

export const getAccountsAccountIdHopes = new BaseRequest<
  undefined,
  GetAccountsAccountIdHopesResponse,
  GetAccountsAccountIdHopesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/accounts/:account_id/hopes",
  tokenKey: "AUTH_TOKEN",
});
