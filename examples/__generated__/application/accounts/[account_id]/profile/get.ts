/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileResponse = Types.Profile & {
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

export const getAccountsAccountIdProfile = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileResponse,
  GetAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
});
