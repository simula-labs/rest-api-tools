/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PatchCompaniesCompanyIdApplicantResourcesUrlParams = {
  companyId: string
} | undefined

export type PatchCompaniesCompanyIdApplicantResourcesResponse = {
  applicantResources: (Types.ApplicantResource & {
    account?: Types.Account & {
      jobs?: (Types.Job & {
        jobReviews?: (Types.JobReview & {
          skills?: Types.Skill[] | undefined
        })[] | undefined

        jobOrder?: Types.JobOrder & {
          recruitment?: Types.Recruitment & {
            workplace?: Types.State | undefined
            occupations?: Types.Occupation[] | undefined
            industries?: Types.Industry[] | undefined
          } | undefined
        } | undefined

        invoices?: Types.Invoice[] | undefined
        company?: Types.Company | undefined
      })[] | undefined

      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined

      scoutFromCurrentCompany?: (Types.Scout & {
        message?: Types.Message & {
          recruitment?: Types.Recruitment | undefined
        } | undefined
      })[] | undefined
      hopes?: (Types.Hope & {
        occupations?: Types.Occupation[] | undefined
        industries?: Types.Industry[] | undefined
        workplaces?: Types.State[] | undefined
      })[] | undefined
      latestWorkHistory?: Types.WorkHistory | undefined
    } | undefined

    room?: Types.Room & {
      account?: Types.Account | undefined
      company?: Types.Company | undefined
      introductionCompletionReport?: Types.IntroductionCompletionReport | undefined
      recruitmentCompletionReport?: Types.RecruitmentCompletionReport | undefined
    } | undefined
  })[]
  totalDataNums: number
}

export type PatchCompaniesCompanyIdApplicantResourcesRequestBody = {
  applicantResources: {
    id: string
    careerStatus?: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected' | undefined
    projectStatus?: 'backlog' | 'in_progress' | 'closed' | undefined
    isCheckedCareer?: boolean | undefined
    isCheckedProject?: boolean | undefined
  }[]
}

export const patchCompaniesCompanyIdApplicantResources = new BaseRequest<
  PatchCompaniesCompanyIdApplicantResourcesRequestBody,
  PatchCompaniesCompanyIdApplicantResourcesResponse,
  PatchCompaniesCompanyIdApplicantResourcesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/applicant_resources",
  tokenKey: "AUTH_TOKEN",
});
