/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdRecruitmentsCsvImportUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentsCsvImportResponse = {
  recruitments: (Types.Recruitment & {
    company?: Types.Company | undefined
  } & {
    workplace?: Types.State | undefined
  } & {
    author?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } & {
        specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
      } & {
        specialtyPositions?: Types.SpecialtyPosition[] | undefined
      } & {
        occupationMainCategories?: Types.OccupationMainCategory[] | undefined
      } & {
        industryCategories?: Types.IndustryCategory[] | undefined
      } | undefined
    } | undefined
  } & {
    externalService?: Types.ExternalService | undefined
  } & {
    employmentStatuses?: Types.EmploymentStatus[] | undefined
  } & {
    occupations?: Types.Occupation[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  } & {
    techStacks?: Types.TechStack[] | undefined
  } & {
    employmentContractTerms?: Types.EmploymentContractTerm[] | undefined
  })[]
  totalDataNums: number
}

export type PostCompaniesCompanyIdRecruitmentsCsvImportRequestBody = {
  file: (File)
}

export const postCompaniesCompanyIdRecruitmentsCsvImport = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentsCsvImportRequestBody,
  PostCompaniesCompanyIdRecruitmentsCsvImportResponse,
  PostCompaniesCompanyIdRecruitmentsCsvImportUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments/csv_import",
  tokenKey: "AUTH_TOKEN",
});
