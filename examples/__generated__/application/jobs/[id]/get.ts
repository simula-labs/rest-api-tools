import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetJobsIdUrlParams = {
  id: string
} | undefined

export type GetJobsIdResponse = Types.Job & {
    account: Types.Account
  } & {
    company: Types.Company & {
      industries: Types.Industry[]
    } & {
      owner: Types.Account & {
        profile: Types.Profile & {
          placeOfResidence: Types.State
        }
      }
    }
  } & {
    jobOrder: Types.JobOrder & {
      recruitment: Types.Recruitment & {
        workplace: Types.State
      } & {
        author: Types.Account
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
      account: Types.Account
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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/jobs/:id",
  tokenKey: "AUTH_TOKEN",
});
