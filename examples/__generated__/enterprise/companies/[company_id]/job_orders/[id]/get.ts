/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdJobOrdersJobOrderIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdJobOrdersJobOrderIdResponse = Types.JobOrder & {
    account: Types.Account

    company: Types.Company & {
      industries?: string | undefined
      owner?: string | undefined
    }

    recruitment: Types.Recruitment & {
      workplace?: Types.State | undefined
      author?: Types.Account | undefined
      externalService?: Types.ExternalService | undefined
      employmentStatuses?: Types.EmploymentStatus[] | undefined
      occupations?: Types.Occupation[] | undefined
      industries?: Types.Industry[] | undefined
      company?: Types.Company | undefined
    }

    job: Types.Job & {
      account?: Types.Account | undefined
    }

    jobServiceItems: Types.JobServiceItem[]
  }

export const getCompaniesCompanyIdJobOrdersJobOrderId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdJobOrdersJobOrderIdResponse,
  GetCompaniesCompanyIdJobOrdersJobOrderIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
