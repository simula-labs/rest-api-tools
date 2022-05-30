/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdOccupationHistoriesResponse = {
  occupationHistories: (Types.OccupationHistory & {
    account: Types.Account
  } & {
    occupation: Types.Occupation
  })[]
}

export const getAccountsAccountIdOccupationHistories = new BaseRequest<
  undefined,
  GetAccountsAccountIdOccupationHistoriesResponse,
  GetAccountsAccountIdOccupationHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/occupation_histories",
  tokenKey: "AUTH_TOKEN",
});
