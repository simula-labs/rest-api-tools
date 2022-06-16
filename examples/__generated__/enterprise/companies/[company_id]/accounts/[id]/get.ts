/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdAccountsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdAccountsIdResponse = Types.Account & {
    profile: Types.Profile & {
      specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
      specialtyPositions?: Types.SpecialtyPosition[] | undefined
      occupationMainCategories?: Types.OccupationMainCategory[] | undefined
      industryCategories?: Types.IndustryCategory[] | undefined
    }

    employments: (Types.Employment & {
      company?: Types.Company | undefined
      roles?: Types.Role[] | undefined
    })[]
    blockedCompanies: Types.Company[]
    workHistories: (Types.WorkHistory & {
      projectHistories?: Types.ProjectHistory[] | undefined
    })[]
    industryHistories: (Types.IndustryHistory & {
      industry?: Types.Industry | undefined
    })[]
    academicHistories: Types.AcademicHistory[]
    hopes: Types.Hope[]
    skills: Types.Skill[]
    achievements: Types.Achievement[]
    occupationHistories: (Types.OccupationHistory & {
      occupation?: Types.Occupation | undefined
    })[]
  }

export const getCompaniesCompanyIdAccountsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdAccountsIdResponse,
  GetCompaniesCompanyIdAccountsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/accounts/:id",
  tokenKey: "AUTH_TOKEN",
});
