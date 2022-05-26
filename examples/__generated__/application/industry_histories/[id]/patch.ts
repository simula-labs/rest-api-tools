import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
    yearOfExperience: number
    industryId: string
  }
}

export const patchIndustryHistoriesId = new BaseRequest<
  PatchIndustryHistoriesIdRequestBody,
  PatchIndustryHistoriesIdResponse,
  PatchIndustryHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://a pi.example.com/public",
  path: "/industry_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
