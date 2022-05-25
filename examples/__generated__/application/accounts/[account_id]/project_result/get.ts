import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../@types";

export type GetAccountsAccountIdProjectResultsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProjectResultsResponse = Types.ProjectResult & {
    jobs: (Types.Job & {
      jobOrder: Types.JobOrder & {
        recruitment: Types.Recruitment & {
          workplace: Types.State
        } & {
          occpations: Types.Occupation[]
        } & {
          industries: Types.Industry[]
        }
      }
    } & {
      jobReviews: (Types.JobReview & {
        skills: Types.Skill[]
      })[]
    })[]
  }

export const getAccountsAccountIdProjectResults = new BaseRequest<
  undefined,
  GetAccountsAccountIdProjectResultsResponse,
  GetAccountsAccountIdProjectResultsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/project_result",
  tokenKey: "AUTH_TOKEN",
});
