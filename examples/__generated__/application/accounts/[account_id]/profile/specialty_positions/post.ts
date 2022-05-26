/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostAccountsAccountIdProfileSpecialtyPositionsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileSpecialtyPositionsResponse = Types.SpecialtyPosition

export const postAccountsAccountIdProfileSpecialtyPositions = new BaseRequest<
  undefined,
  PostAccountsAccountIdProfileSpecialtyPositionsResponse,
  PostAccountsAccountIdProfileSpecialtyPositionsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
});
