/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PostAccountsAccountIdOccupationHistoryUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdOccupationHistoryResponse = Types.OccupationHistory & {
    account: Types.Account
    occupation: Types.Occupation
  }

export type PostAccountsAccountIdOccupationHistoryRequestBody = {
  occupationHistory: {
    occupationId: string
    yearOfExperience: number
  }
}

export const postAccountsAccountIdOccupationHistory = new BaseRequest<
  PostAccountsAccountIdOccupationHistoryRequestBody,
  PostAccountsAccountIdOccupationHistoryResponse,
  PostAccountsAccountIdOccupationHistoryUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "post",
  baseURL: API_HOST,
  path: "/accounts/:accountId/occupation_history",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
