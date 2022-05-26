import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdAcademicHistoriesResponse = Types.AcademicHistory

export type PostAccountsAccountIdAcademicHistoriesRequestBody = {
  academicHistory: {
    name: string
    faculty?: string | undefined
    sinceDate: string
    untilDate: string
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type: 'graduate_school' | 'university' | 'community_college' | 'junior_college' | 'high_school'
  }
}

export const postAccountsAccountIdAcademicHistories = new BaseRequest<
  PostAccountsAccountIdAcademicHistoriesRequestBody,
  PostAccountsAccountIdAcademicHistoriesResponse,
  PostAccountsAccountIdAcademicHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:account_id/academic_histories",
  tokenKey: "AUTH_TOKEN",
});
