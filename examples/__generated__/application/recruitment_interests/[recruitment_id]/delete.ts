import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteRecruitmentInterestsRecruitmentIdUrlParams = {
  recruitmentId: string
} | undefined

export const deleteRecruitmentInterestsRecruitmentId = new BaseRequest<
  undefined,
  undefined,
  DeleteRecruitmentInterestsRecruitmentIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/recruitment_interests/:recruitment_id",
  tokenKey: "AUTH_TOKEN",
});