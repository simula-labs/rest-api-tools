/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdJobOrdersCheckUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdJobOrdersCheckResponse = Types.JobOrder & {
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

export type PostCompaniesCompanyIdJobOrdersCheckRequestBody = {
  jobOrder: {
    accountId: string
    amount: string
  }
}

export const postCompaniesCompanyIdJobOrdersCheck = new BaseRequest<
  PostCompaniesCompanyIdJobOrdersCheckRequestBody,
  PostCompaniesCompanyIdJobOrdersCheckResponse,
  PostCompaniesCompanyIdJobOrdersCheckUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders/check",
  tokenKey: "AUTH_TOKEN",
});
