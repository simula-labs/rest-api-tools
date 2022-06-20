/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetJobChangeCompletionReportsIdUrlParams = {
  id: string
} | undefined

export type GetJobChangeCompletionReportsIdResponse = Types.JobChangeCompletionReport & {
    account: Types.Account
  } & {
    company: Types.Company
  }

export const getJobChangeCompletionReportsId = new BaseRequest<
  undefined,
  GetJobChangeCompletionReportsIdResponse,
  GetJobChangeCompletionReportsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/job_change_completion_reports/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
