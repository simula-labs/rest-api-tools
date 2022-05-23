import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type PutAccountsAccountIdProfileFilesUrlParams = {
  accountId: string
} | undefined

export type PutAccountsAccountIdProfileFilesResponse = Types.Profile & {
    specialtyCompanyTypes: Types.SpecialtyCompanyType[]
  } & {
    specialtyPositions: Types.SpecialtyPosition[]
  } & {
    occupationMainCategories: Types.OccupationMainCategory[]
  } & {
    industryCategories: Types.IndustryCategory[]
  } & {
    placeOfResidence: Types.State
  }

export type PutAccountsAccountIdProfileFilesRequestBody = {
  files: string[]
}

export const putAccountsAccountIdProfileFiles = new BaseRequest<
  PutAccountsAccountIdProfileFilesRequestBody,
  PutAccountsAccountIdProfileFilesResponse,
  PutAccountsAccountIdProfileFilesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "put",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/profile/files",
  tokenKey: "AUTH_TOKEN",
});
