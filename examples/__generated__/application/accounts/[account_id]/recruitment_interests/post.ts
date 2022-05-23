import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type PostAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdRecruitmentInterestsResponse = Types.Recruitment & {
    company: Types.Company
  } & {
    workplace: Types.State
  } & {
    author: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      } & {
        specialtyCompanyTypes: Types.SpecialtyCompanyType[]
      } & {
        specialtyPositions: Types.SpecialtyPosition[]
      } & {
        occupationMainCategories: Types.OccupationMainCategory[]
      } & {
        industryCategories: Types.IndustryCategory[]
      }
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
  path: "/accounts/:account_id/recruitment_interests",
  tokenKey: "AUTH_TOKEN",
});
