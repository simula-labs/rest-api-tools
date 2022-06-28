/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type DeleteAccountsAccountIdProfileFilesIdUrlParams = {
  accountId: string
  fileId: string
} | undefined

export type DeleteAccountsAccountIdProfileFilesIdResponse = Types.Profile & {
    specialtyCompanyTypes: Types.SpecialtyCompanyType[]
    specialtyPositions: Types.SpecialtyPosition[]
    occupationMainCategories: Types.OccupationMainCategory[]
    industryCategories: Types.IndustryCategory[]
    placeOfResidence: Types.State
  }

export const deleteAccountsAccountIdProfileFilesId = new BaseRequest<
  undefined,
  DeleteAccountsAccountIdProfileFilesIdResponse,
  DeleteAccountsAccountIdProfileFilesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "delete",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/profile/files/:fileId",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
