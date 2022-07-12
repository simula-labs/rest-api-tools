/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
