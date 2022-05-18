import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetRecruitmentCompletionReportsResponse = {
  recruitmentCompletionReports: Types.RecruitmentCompletionReport[]
}

export const GetRecruitmentCompletionReports = new BaseRequest<
  undefined,
  GetRecruitmentCompletionReportsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitment_completion_reports",
});
