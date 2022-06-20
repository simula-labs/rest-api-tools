/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchAcademicHistoriesIdUrlParams = {
  id: string
} | undefined

export type PatchAcademicHistoriesIdResponse = Types.AcademicHistory

export type PatchAcademicHistoriesIdRequestBody = {
  academicHistory: {
    name?: string | undefined
    faculty?: string | undefined
    sinceDate?: string | undefined
    untilDate?: string | undefined
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type?: 'university' | 'junior_college' | 'high_school' | 'graduate_school_doctor' | 'graduate_school_master' | 'technical_college' | 'vocational_school' | undefined
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
  baseURL: "https://api.example.com/application",
  path: "/academic_histories/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
