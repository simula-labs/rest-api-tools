/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

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
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/accounts/:accountId/project_result",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
