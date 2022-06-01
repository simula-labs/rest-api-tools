/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdWorksWorkIdContractsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdWorksWorkIdContractsResponse = Types.JobOrder & {
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
  }

export type PostCompaniesCompanyIdWorksWorkIdContractsRequestBody = {
  jobOrder: {
    recruitmentId: string
    accountId: string
    /** 「下書き」「先方確認中」「締結済み」「却下」 */
    status: 'draft' | 'applied'
    /** 取引先名 */
    customerName?: string | undefined
    /** 業務名 */
    jobName: string
    /** 「稼働報酬制」「固定報酬制」 */
    feeType: 'time_based' | 'fixed'
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
    orderDate: string
    /** 開始日 */
    sinceDate: string
    /** 終了日 */
    untilDate: string
    /** 金額 */
    amount: string
    /** 仕事内容 */
    jobDescription: string
    /** 諸条件 */
    otherConditions: string
  }
}

export const postCompaniesCompanyIdWorksWorkIdContracts = new BaseRequest<
  PostCompaniesCompanyIdWorksWorkIdContractsRequestBody,
  PostCompaniesCompanyIdWorksWorkIdContractsResponse,
  PostCompaniesCompanyIdWorksWorkIdContractsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders",
  tokenKey: "AUTH_TOKEN",
});
