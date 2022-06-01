/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsUrlParams = {
  companyId: string
  recruitmentId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsResponse = {
  applicants: (Types.Applicant & {
    recruitment?: Types.Recruitment & {
      company?: Types.Company & {
        industries?: Types.Industry[] | undefined
      } | undefined
    } & {
      workplace?: Types.State | undefined
    } & {
      employmentStatus?: Types.EmploymentStatus | undefined
    } & {
      occupations?: Types.Occupation[] | undefined
    } & {
      industries?: Types.Industry[] | undefined
    } | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsQueryParams = {
  /** 職種絞り込み */
  occupationId?: string | undefined
  /** 募集絞り込み */
  recruitmentId?: string | undefined
}

export const getCompaniesCompanyIdRecruitmentsRecruitmentIdApplicants = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsResponse,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsUrlParams,
  GetCompaniesCompanyIdRecruitmentsRecruitmentIdApplicantsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments/:recruitmentId/applicants",
  tokenKey: "AUTH_TOKEN",
});
