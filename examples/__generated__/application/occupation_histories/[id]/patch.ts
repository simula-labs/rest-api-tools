/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

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
    yearOfExperience?: number | undefined
    occupationId?: string | undefined
  }
}

export const patchOccupationHistoriesId = new BaseRequest<
  PatchOccupationHistoriesIdRequestBody,
  PatchOccupationHistoriesIdResponse,
  PatchOccupationHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/occupation_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
