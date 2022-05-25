import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdWorksUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdWorksResponse = {
  jobs: Types.Job & {
    account: Types.Account
  } & {
    company: Types.Company & {
      industries: Types.Industry[]
    } & {
      owner: Types.Account & {
        profile: Types.Profile & {
          placeOfResidence: Types.State
        }
      }
    }
  } & {
    jobOrder: Types.JobOrder & {
      recruitment: Types.Recruitment & {
        workplace: Types.State
      } & {
        author: Types.Account
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
      account: Types.Account
    }
  } & {
    jobReviews: string
  } & {
    invoices: string
  }

  totalDataNums: number
}

export type GetAccountsAccountIdWorksQueryParams = {
  /** ステータス */
  status?: 'in_progress' | 'completed' | undefined
  /** キーワード */
  keyword?: string | undefined
  /** 募集 */
  recruitmentId?: string | undefined
  /** 発注者 */
  companyId?: string | undefined
} | undefined

export const getAccountsAccountIdWorks = new BaseRequest<
  undefined,
  GetAccountsAccountIdWorksResponse,
  GetAccountsAccountIdWorksUrlParams,
  GetAccountsAccountIdWorksQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/jobs",
  tokenKey: "AUTH_TOKEN",
});
