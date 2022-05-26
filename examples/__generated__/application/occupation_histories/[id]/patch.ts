/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchOccupationHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchOccupationHistoriesIdResponse = Types.OccupationHistory & {
    account: Types.Account
  } & {
    occupation: Types.Occupation
  }

export type PatchOccupationHistoriesIdRequestBody = {
  occupationHistory: {
    yearOfExperience: number
    occupationId: string
  }
}

export const patchOccupationHistoriesId = new BaseRequest<
  PatchOccupationHistoriesIdRequestBody,
  PatchOccupationHistoriesIdResponse,
  PatchOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://a pi.example.com/public",
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
