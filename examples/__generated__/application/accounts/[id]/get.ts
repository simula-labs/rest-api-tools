/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetAccountsIdUrlParams = {
  id: string
} | undefined

export type GetAccountsIdResponse = Types.Account & {
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

export const getAccountsId = new BaseRequest<
  undefined,
  GetAccountsIdResponse,
  GetAccountsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
