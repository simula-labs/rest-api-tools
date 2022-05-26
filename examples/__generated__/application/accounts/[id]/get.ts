/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetAccountsIdUrlParams = {
  id: string
} | undefined

export type GetAccountsIdResponse = Types.Account & {
    profile: Types.Profile & {
      specialtyCompanyTypes: Types.SpecialtyCompanyType[]
    } & {
      specialtyPositions: Types.SpecialtyPosition[]
    } & {
      occupationMainCategories: Types.OccupationMainCategory[]
    } & {
      industryCategories: Types.IndustryCategory[]
    }
  } & {
    employments: (Types.Employment & {
      company: Types.Company
    } & {
      roles: Types.Role[]
    })[]
  } & {
    blockedCompanies: Types.Company[]
  }

export const getAccountsId = new BaseRequest<
  undefined,
  GetAccountsIdResponse,
  GetAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
