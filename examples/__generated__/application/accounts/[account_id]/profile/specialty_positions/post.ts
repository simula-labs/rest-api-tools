/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

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
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
