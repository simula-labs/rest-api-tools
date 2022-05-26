import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteAccountsIdUrlParams = {
  id: string
} | undefined

export type DeleteAccountsIdResponse = Types.Account & {
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

export const deleteAccountsId = new BaseRequest<
  undefined,
  DeleteAccountsIdResponse,
  DeleteAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
