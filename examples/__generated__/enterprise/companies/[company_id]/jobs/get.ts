/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdWorksUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdWorksResponse = {
  jobs: Types.Job & {
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
  }

  totalDataNums: number
}

export type GetCompaniesCompanyIdWorksQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 未払請求書 */
  existsUnpaidInvoice?: boolean | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 受注者 */
  accountId?: string | undefined
}

export const getCompaniesCompanyIdWorks = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksResponse,
  GetCompaniesCompanyIdWorksUrlParams,
  GetCompaniesCompanyIdWorksQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs",
  tokenKey: "AUTH_TOKEN",
});
