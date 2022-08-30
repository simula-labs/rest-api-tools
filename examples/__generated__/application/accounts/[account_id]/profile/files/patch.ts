/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";
import { API_HOST } from "../../../../urls";

export type PatchAccountsAccountIdProfileFilesUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdProfileFilesResponse = Types.Profile & {
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

export type PatchAccountsAccountIdProfileFilesRequestBody = {
  files: File[]
}

export const patchAccountsAccountIdProfileFiles = new BaseRequest<
  PatchAccountsAccountIdProfileFilesRequestBody,
  PatchAccountsAccountIdProfileFilesResponse,
  PatchAccountsAccountIdProfileFilesUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile/files",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
