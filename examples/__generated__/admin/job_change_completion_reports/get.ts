import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetJobChangeCompletionReportsResponse = {
  jobChangeCompletionReports: Types.JobChangeCompletionReport[]
}

export const getJobChangeCompletionReports = new BaseRequest<
  undefined,
  GetJobChangeCompletionReportsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/job_change_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
