import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/occupation_histories",
  tokenKey: "AUTH_TOKEN",
});
