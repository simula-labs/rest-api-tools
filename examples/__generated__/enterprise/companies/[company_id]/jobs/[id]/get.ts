/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdWorksIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdWorksIdResponse = Types.Job & {
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

export const getCompaniesCompanyIdWorksId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdWorksIdResponse,
  GetCompaniesCompanyIdWorksIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/jobs/:id",
  tokenKey: "AUTH_TOKEN",
});
