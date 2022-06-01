import type { ReadStream } from 'fs'

/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdRecruitments.csvImportResponse = {
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
  })[]
  totalDataNums: number
}

export type PostCompaniesCompanyIdRecruitments.csvImportRequestBody = {
  file: (File | ReadStream)
}

export const postCompaniesCompanyIdRecruitments.csvImport = new BaseRequest<
  PostCompaniesCompanyIdRecruitments.csvImportRequestBody,
  PostCompaniesCompanyIdRecruitments.csvImportResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments/csv_import",
  tokenKey: "AUTH_TOKEN",
});
