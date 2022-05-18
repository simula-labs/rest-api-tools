import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetJobChangeCompletionReportsResponse = {
  job_change_completion_reports: Types.JobChangeCompletionReport[]
}
export const GetJobChangeCompletionReports = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/job_change_completion_reports",
});