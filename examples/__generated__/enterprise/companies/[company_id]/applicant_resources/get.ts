/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdApplicantResourcesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdApplicantResourcesResponse = {
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

export type GetCompaniesCompanyIdApplicantResourcesQueryParams = {
  /** 転職ステータス */
  careerStatuses?: ('backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected')[] | undefined
  /** 副業・フリーランスステータス */
  projectStatuses?: ('backlog' | 'in_progress' | 'closed')[] | undefined
  /** フラグ */
  isChecked?: boolean | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 未返信 */
  existsNotReplied?: boolean | undefined
  /** サンプルを除外 */
  exceptSample?: boolean | undefined
  /** 論理削除されたアカウントを除外 */
  exceptDeletedAccount?: boolean | undefined
  /** 業務と紐付けられた人材のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
  /** 発注と紐付けられた人材のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  page?: number | undefined
}

export const getCompaniesCompanyIdApplicantResources = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdApplicantResourcesResponse,
  GetCompaniesCompanyIdApplicantResourcesUrlParams,
  GetCompaniesCompanyIdApplicantResourcesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/applicant_resources",
  tokenKey: "AUTH_TOKEN",
});
