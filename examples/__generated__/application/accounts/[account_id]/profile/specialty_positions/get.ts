import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../@types";

export type GetAccountsAccountIdProfileSpecialtyPositionsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileSpecialtyPositionsResponse = {
  specialtyPositions: Types.SpecialtyPosition[]
}

export const getAccountsAccountIdProfileSpecialtyPositions = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileSpecialtyPositionsResponse,
  GetAccountsAccountIdProfileSpecialtyPositionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
});
