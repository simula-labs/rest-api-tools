import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostAccountsAccountIdOccupationHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdOccupationHistoriesResponse = Types.OccupationHistory & {
    account: Types.Account
  } & {
    occupation: Types.Occupation
  }

export type PostAccountsAccountIdOccupationHistoriesRequestBody = {
  occupationHistories: {
    occupationHistory: {
      occupationId: string
      yearOfExperience: number
    }
  }[]
}

export const postAccountsAccountIdOccupationHistories = new BaseRequest<
  PostAccountsAccountIdOccupationHistoriesRequestBody,
  PostAccountsAccountIdOccupationHistoriesResponse,
  PostAccountsAccountIdOccupationHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/occupation_histories",
  tokenKey: "AUTH_TOKEN",
});