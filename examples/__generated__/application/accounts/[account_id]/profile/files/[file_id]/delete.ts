import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../@types";

export type DeleteAccountsAccountIdProfileFiles:fileIdUrlParams = {
  accountId: string
  fileId: string
} | undefined

export type DeleteAccountsAccountIdProfileFiles:fileIdResponse = Types.Profile & {
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

export const deleteAccountsAccountIdProfileFiles:fileId = new BaseRequest<
  undefined,
  DeleteAccountsAccountIdProfileFiles:fileIdResponse,
  DeleteAccountsAccountIdProfileFiles:fileIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:account_id/profile/files/:file_id",
  tokenKey: "AUTH_TOKEN",
});
