import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type DeleteAccountsAccountIdProfileFilesIdUrlParams = {
  accountId: string
  fileId: string
} | undefined

export type DeleteAccountsAccountIdProfileFilesIdResponse = Types.Profile & {
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

export const deleteAccountsAccountIdProfileFilesId = new BaseRequest<
  undefined,
  DeleteAccountsAccountIdProfileFilesIdResponse,
  DeleteAccountsAccountIdProfileFilesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/profile/files/:file_id",
  tokenKey: "AUTH_TOKEN",
});
