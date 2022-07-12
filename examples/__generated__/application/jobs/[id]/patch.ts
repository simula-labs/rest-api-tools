/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchJobsIdUrlParams = {
  id: string
} | undefined

export type PatchJobsIdResponse = Types.Job & {
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

export type PatchJobsIdRequestBody = {
  job: {
    isPublic?: boolean | undefined
  }
}

export const patchJobsId = new BaseRequest<
  PatchJobsIdRequestBody,
  PatchJobsIdResponse,
  PatchJobsIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/jobs/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
