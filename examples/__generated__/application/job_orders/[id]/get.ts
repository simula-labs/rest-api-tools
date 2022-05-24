import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetJobOrdersIdUrlParams = {
  id: string
} | undefined

export type GetJobOrdersIdResponse = Types.JobOrder & {
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

export const getJobOrdersId = new BaseRequest<
  undefined,
  GetJobOrdersIdResponse,
  GetJobOrdersIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
});
