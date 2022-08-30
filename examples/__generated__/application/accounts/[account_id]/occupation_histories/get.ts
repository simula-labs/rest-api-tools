/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdOccupationHistoriesResponse = {
  occupationHistories: (Types.OccupationHistory & {
    account: Types.Account
    occupation: Types.Occupation
  })[]
}

export const getAccountsAccountIdOccupationHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdOccupationHistoriesResponse,
  GetAccountsAccountIdOccupationHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/occupation_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
