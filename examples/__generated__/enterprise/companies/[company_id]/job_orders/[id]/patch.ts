/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdContractsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdContractsIdResponse = Types.JobOrder & {
    account: Types.Account
  } & {
    company: Types.Company & {
      industries?: string | undefined
    } & {
      owner?: string | undefined
    }
  } & {
    recruitment: Types.Recruitment & {
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
    }
  } & {
    job: Types.Job & {
      ''?: Types.Account | undefined
    }
  } & {
    jobServiceItems: Types.JobServiceItem[]
  }

export type PatchCompaniesCompanyIdContractsIdRequestBody = {
  jobOrder: {
    recruitmentId?: string | undefined
    accountId?: string | undefined
    /** 「下書き」「先方確認中」「締結済み」「却下」 */
    status?: 'draft' | 'applied' | undefined
    /** 取引先名 */
    customerName?: string | undefined
    /** 業務名 */
    jobName?: string | undefined
    /** 「稼働報酬制」「固定報酬制」 */
    feeType?: 'time_based' | 'fixed' | undefined
    /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
    feeCalculationSpan?: monthly | daily | hourly | undefined
    /** 稼働報酬制の金額 */
    unitTimeFee?: number | undefined
    /** 稼働報酬制の税率 */
    taxRatio?: number | undefined
    jobServiceItems?: {
      jobServiceItem?: {
        /** 項目名 */
        description?: string | undefined
        /** 数量 */
        quantity?: number | undefined
        /** 単位 */
        unitLabel?: string | undefined
        /** 単価 */
        unitPrice?: number | undefined
        /** 消費税 */
        taxRatio?: string | undefined
        /** 合計金額 */
        amount?: number | undefined
      } | undefined
    }[] | undefined
    /** 発注番号 */
    number?: string | undefined
    /** 発注日 */
    orderDate?: string | undefined
    /** 開始日 */
    sinceDate?: string | undefined
    /** 終了日 */
    untilDate?: string | undefined
    /** 報酬形態 */
    billingMethod?: 'monthly' | 'all' | undefined
    /** 金額 */
    amount?: string | undefined
    /** 仕事内容 */
    jobDescription?: string | undefined
    /** 諸条件 */
    otherConditions?: string | undefined
  }
}

export const patchCompaniesCompanyIdContractsId = new BaseRequest<
  PatchCompaniesCompanyIdContractsIdRequestBody,
  PatchCompaniesCompanyIdContractsIdResponse,
  PatchCompaniesCompanyIdContractsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
