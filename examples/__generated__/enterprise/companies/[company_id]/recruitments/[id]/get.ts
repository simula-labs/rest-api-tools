/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsIdResponse = Types.Recruitment & {
    company: Types.Company
    workplace: Types.State

    author: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
        specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
        specialtyPositions?: Types.SpecialtyPosition[] | undefined
        occupationMainCategories?: Types.OccupationMainCategory[] | undefined
        industryCategories?: Types.IndustryCategory[] | undefined
      } | undefined
    }

    externalService: Types.ExternalService
    employmentStatuses: Types.EmploymentStatus[]
    occupations: Types.Occupation[]
    industries: Types.Industry[]
    features: Types.Feature[]
    techStacks: Types.TechStack[]
    targetCompany: Types.Company
    employmentContractTerms: Types.EmploymentContractTerm[]
  }

export const getCompaniesCompanyIdRecruitmentsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsIdResponse,
  GetCompaniesCompanyIdRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
});
