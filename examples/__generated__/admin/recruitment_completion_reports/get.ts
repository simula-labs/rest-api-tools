import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetRecruitmentCompletionReportsResponse = {
  recruitmentCompletionReports: Types.RecruitmentCompletionReport[]
}

export const getRecruitmentCompletionReports = new BaseRequest<
  undefined,
  GetRecruitmentCompletionReportsResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitment_completion_reports",
  tokenKey: "AUTH_TOKEN",
});
