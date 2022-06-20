/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdProjectResultsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdProjectResultsResponse = Types.ProjectResult & {
    jobs: (Types.Job & {
      jobOrder?: Types.JobOrder & {
        recruitment?: Types.Recruitment & {
          workplace?: Types.State | undefined
          occpations?: Types.Occupation[] | undefined
          industries?: Types.Industry[] | undefined
        } | undefined
      } | undefined

      jobReviews?: (Types.JobReview & {
        skills?: Types.Skill[] | undefined
      })[] | undefined
    })[]
    skills: Types.Skill[]
  }

export const getAccountsAccountIdProjectResults = new BaseRequest<
  undefined,
  GetAccountsAccountIdProjectResultsResponse,
  GetAccountsAccountIdProjectResultsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/project_result",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
