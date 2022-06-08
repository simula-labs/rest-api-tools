/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdJobsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdJobsIdResponse = Types.Job & {
    account: Types.Account
  } & {
    company: Types.Company & {
      industries?: Types.Industry[] | undefined
    } & {
      owner?: Types.Account & {
        profile?: Types.Profile & {
          placeOfResidence?: Types.State | undefined
        } | undefined
      } | undefined
    }
  } & {
    jobOrder: Types.JobOrder & {
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
    }
  } & {
    jobReviews: string
  } & {
    invoices: string
  }

export type PatchCompaniesCompanyIdJobsIdRequestBody = {
  job: {
    status?: 'in_progress' | 'completed' | undefined
  }
}

export const patchCompaniesCompanyIdJobsId = new BaseRequest<
  PatchCompaniesCompanyIdJobsIdRequestBody,
  PatchCompaniesCompanyIdJobsIdResponse,
  PatchCompaniesCompanyIdJobsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs/:id",
  tokenKey: "AUTH_TOKEN",
});
