/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdRecruitmentInterestsResponse = Types.Recruitment & {
    company: Types.Company
  } & {
    workplace: Types.State
  } & {
    author: Types.Account & {
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
    }
  } & {
    externalService: Types.ExternalService
  } & {
    employmentStatuses: Types.EmploymentStatus[]
  } & {
    occupations: Types.Occupation[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  } & {
    employmentContractTerm: Types.EmploymentContractTerm[]
  } & {
    techStack: Types.TechStack[]
  }

export type PostAccountsAccountIdRecruitmentInterestsRequestBody = {
  recruitmentInterest: {
    recruitmentId: string
  }
}

export const postAccountsAccountIdRecruitmentInterests = new BaseRequest<
  PostAccountsAccountIdRecruitmentInterestsRequestBody,
  PostAccountsAccountIdRecruitmentInterestsResponse,
  PostAccountsAccountIdRecruitmentInterestsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
