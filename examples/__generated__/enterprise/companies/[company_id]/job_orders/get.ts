/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdJobOrdersUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdJobOrdersResponse = {
  jobOrders: (Types.JobOrder & {
    account?: Types.Account | undefined
  } & {
    company?: Types.Company & {
      industries?: string | undefined
    } & {
      owner?: string | undefined
    } | undefined
  } & {
    recruitment?: Types.Recruitment & {
      workplace?: Types.State | undefined
    } & {
      author?: Types.Account | undefined
    } & {
      externalService?: Types.ExternalService | undefined
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
    job?: Types.Job & {
      ''?: Types.Account | undefined
    } | undefined
  } & {
    jobServiceItems?: Types.JobServiceItem[] | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdJobOrdersQueryParams = {
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 受注者 */
  accountId?: string | undefined
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
}

export const getCompaniesCompanyIdJobOrders = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobOrdersResponse,
  GetCompaniesCompanyIdJobOrdersUrlParams,
  GetCompaniesCompanyIdJobOrdersQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders",
  tokenKey: "AUTH_TOKEN",
});
