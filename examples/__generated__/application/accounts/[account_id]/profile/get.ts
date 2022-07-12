/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProfileResponse = Types.Profile & {
    specialtyCompanyTypes: Types.SpecialtyCompanyType[]
    specialtyPositions: Types.SpecialtyPosition[]
    occupationMainCategories: Types.OccupationMainCategory[]
    industryCategories: Types.IndustryCategory[]
    placeOfResidence: Types.State
  }

export const getAccountsAccountIdProfile = new BaseRequest<
  undefined,
  GetAccountsAccountIdProfileResponse,
  GetAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
