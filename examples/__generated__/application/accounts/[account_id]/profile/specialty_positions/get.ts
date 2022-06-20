/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
