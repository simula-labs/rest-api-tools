/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteAccountsIdUrlParams = {
  id: string
} | undefined

export type DeleteAccountsIdResponse = Types.Account & {
    profile: Types.Profile & {
      specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
      specialtyPositions?: Types.SpecialtyPosition[] | undefined
      occupationMainCategories?: Types.OccupationMainCategory[] | undefined
      industryCategories?: Types.IndustryCategory[] | undefined
      placeOfResidence?: Types.State | undefined
    }

    employments: (Types.Employment & {
      company?: Types.Company | undefined
      roles?: Types.Role[] | undefined
    })[]
    blockedCompanies: Types.Company[]
  }

export const deleteAccountsId = new BaseRequest<
  undefined,
  DeleteAccountsIdResponse,
  DeleteAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
