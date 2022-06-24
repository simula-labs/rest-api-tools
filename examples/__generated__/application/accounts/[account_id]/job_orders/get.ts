/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdJobOrdersUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdJobOrdersResponse = {
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

export type GetAccountsAccountIdJobOrdersQueryParams = {
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
}

export const getAccountsAccountIdJobOrders = new BaseRequest<
  undefined,
  GetAccountsAccountIdJobOrdersResponse,
  GetAccountsAccountIdJobOrdersUrlParams,
  GetAccountsAccountIdJobOrdersQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/job_orders",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
