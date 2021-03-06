/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
    occupationHistory?: {
      occupationId: string
      yearOfExperience: number
    } | undefined
  }[]
}

export const postAccountsAccountIdOccupationHistories = new BaseRequest<
  PostAccountsAccountIdOccupationHistoriesRequestBody,
  PostAccountsAccountIdOccupationHistoriesResponse,
  PostAccountsAccountIdOccupationHistoriesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/occupation_histories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
