/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetJobsIdUrlParams = {
  id: string
} | undefined

export type GetJobsIdResponse = Types.Job & {
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

export const getJobsId = new BaseRequest<
  undefined,
  GetJobsIdResponse,
  GetJobsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
