import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  baseURL: "https://a pi.example.com/public",
  path: "/recruitment_interests/:recruitmentId",
  tokenKey: "AUTH_TOKEN",
});
