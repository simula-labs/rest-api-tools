import type { ReadStream } from 'fs'

import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PatchAccountsIdUrlParams = {
  id: string
} | undefined

export type PatchAccountsIdResponse = Types.Account & {
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

export type PatchAccountsIdRequestBody = {
  account: {
    email: string
    avatar: (File | ReadStream)
    isCareerScoutTarget: boolean
    isProjectScoutTarget: boolean
    isPublicWork: boolean
    isStudent: boolean
    /** 新パスワードを設定する時に必要 */
    currentPassword: string
    newPassword: string
    newPasswordConfirmation: string
    blockCompanyIds: string[]
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
  baseURL: "https://api.example.com/public",
  path: "/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
