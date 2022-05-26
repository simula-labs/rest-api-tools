import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdContractsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdContractsResponse = {
  jobOrders: (Types.JobOrder & {
    account: Types.Account
  } & {
    company: Types.Company & {
      industries: string
    } & {
      owner: string
    }
  } & {
    recruitment: Types.Recruitment & {
      workplace: Types.State
    } & {
      author: Types.Account
    } & {
      externalService: Types.ExternalService
    } & {
      employmentStatuses: Types.EmploymentStatus[]
    } & {
      occupations: Types.Occupation[]
    } & {
      industries: Types.Industry[]
    } & {
      company: Types.Company
    }
  } & {
    job: Types.Job & {
      '': Types.Account
    }
  } & {
    jobServiceItems: Types.JobServiceItem[]
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdContractsQueryParams = {
  /** ステータス */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
} | undefined

export const getAccountsAccountIdContracts = new BaseRequest<
  undefined,
  GetAccountsAccountIdContractsResponse,
  GetAccountsAccountIdContractsUrlParams,
  GetAccountsAccountIdContractsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/job_orders",
  tokenKey: "AUTH_TOKEN",
});
