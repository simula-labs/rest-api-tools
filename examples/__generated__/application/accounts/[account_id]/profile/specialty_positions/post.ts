import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:account_id/profile/specialty_positions",
  tokenKey: "AUTH_TOKEN",
});
