import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetRecruitmentCompletionReportsResponse = {
  recruitment_completion_reports: Types.RecruitmentCompletionReport[]
}
export const GetRecruitmentCompletionReports = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitment_completion_reports",
});