import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchJobOrdersIdUrlParams = {
  id: string
} | undefined

export type PatchJobOrdersIdResponse = Types.JobOrder & {
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
  }

export type PatchJobOrdersIdRequestBody = {
  jobOrder: {
    status: 'certificated' | 'rejected'
    /** rejectedの場合、必須 */
    reviewComment: string
  }
}

export const patchJobOrdersId = new BaseRequest<
  PatchJobOrdersIdRequestBody,
  PatchJobOrdersIdResponse,
  PatchJobOrdersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
