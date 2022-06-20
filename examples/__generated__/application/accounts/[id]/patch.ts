/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchAccountsIdUrlParams = {
  id: string
} | undefined

export type PatchAccountsIdResponse = Types.Account & {
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

export type PatchAccountsIdRequestBody = {
  account: {
    email?: string | undefined
    avatar?: File | undefined
    workExperienced?: boolean | undefined
    isCareerScoutTarget?: boolean | undefined
    isProjectScoutTarget?: boolean | undefined
    isPublicWork?: boolean | undefined
    isStudent?: boolean | undefined
    /** 新パスワードを設定する時に必要 */
    currentPassword?: string | undefined
    newPassword?: string | undefined
    newPasswordConfirmation?: string | undefined
    blockCompanyIds?: string[] | undefined
  }
}

export const patchAccountsId = new BaseRequest<
  PatchAccountsIdRequestBody,
  PatchAccountsIdResponse,
  PatchAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "formData",
});
