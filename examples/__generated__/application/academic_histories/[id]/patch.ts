/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchAcademicHistoriesIdResponse = Types.AcademicHistory

export type PatchAcademicHistoriesIdRequestBody = {
  academicHistory: {
    name: string
    faculty: string
    sinceDate: string
    untilDate: string
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type: 'graduate_school' | 'university' | 'community_college' | 'junior_college' | 'high_school'
  }
}

export const patchAcademicHistoriesId = new BaseRequest<
  PatchAcademicHistoriesIdRequestBody,
  PatchAcademicHistoriesIdResponse,
  PatchAcademicHistoriesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://a pi.example.com/public",
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
});
