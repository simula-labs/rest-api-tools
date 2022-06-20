/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdJobsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobsResponse = {
  jobs: (Types.Job & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company & {
      industries?: Types.Industry[] | undefined
    } & {
      owner?: Types.Account & {
        profile?: Types.Profile & {
          placeOfResidence?: Types.State | undefined
        } | undefined
      } | undefined
    } | undefined
  } & {
    jobOrder?: Types.JobOrder & {
      recruitment?: Types.Recruitment & {
        workplace?: Types.State | undefined
      } & {
        author?: Types.Account | undefined
      } & {
        employmentStatuses?: Types.EmploymentStatus[] | undefined
      } & {
        occupations?: Types.Occupation[] | undefined
      } & {
        industries?: Types.Industry[] | undefined
      } & {
        company?: Types.Company | undefined
      } | undefined
    } & {
      account?: Types.Account | undefined
    } | undefined
  } & {
    jobReviews?: string | undefined
  } & {
    invoices?: string | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdJobsQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
}

export const getAccountsAccountIdJobs = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobsResponse,
  GetAccountsAccountIdJobsUrlParams,
  GetAccountsAccountIdJobsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/jobs",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
