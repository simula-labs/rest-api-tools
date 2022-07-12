/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PutAccountsAccountIdProfileFilesUrlParams = {
  accountId: string
} | undefined

export type PutAccountsAccountIdProfileFilesResponse = Types.Profile & {
    specialtyCompanyTypes: Types.SpecialtyCompanyType[]
    specialtyPositions: Types.SpecialtyPosition[]
    occupationMainCategories: Types.OccupationMainCategory[]
    industryCategories: Types.IndustryCategory[]
    placeOfResidence: Types.State
  }

export type PutAccountsAccountIdProfileFilesRequestBody = {
  files: File[]
}

export const putAccountsAccountIdProfileFiles = new BaseRequest<
  PutAccountsAccountIdProfileFilesRequestBody,
  PutAccountsAccountIdProfileFilesResponse,
  PutAccountsAccountIdProfileFilesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "put",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
