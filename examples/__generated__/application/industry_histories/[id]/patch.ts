/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchIndustryHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchIndustryHistoriesIdResponse = Types.IndustryHistory & {
    account: Types.Account
  } & {
    industry: Types.Industry
  }

export type PatchIndustryHistoriesIdRequestBody = {
  industryHistory: {
    yearOfExperience?: number | undefined
    industryId?: string | undefined
  }
}

export const patchIndustryHistoriesId = new BaseRequest<
  PatchIndustryHistoriesIdRequestBody,
  PatchIndustryHistoriesIdResponse,
  PatchIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
