/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type PatchAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type PatchAccountsAccountIdProfileResponse = Types.Profile & {
    specialtyCompanyTypes: Types.SpecialtyCompanyType[]
  } & {
    specialtyPositions: Types.SpecialtyPosition[]
  } & {
    occupationMainCategories: Types.OccupationMainCategory[]
  } & {
    industryCategories: Types.IndustryCategory[]
  } & {
    placeOfResidence: Types.State
  }

export type PatchAccountsAccountIdProfileRequestBody = {
  profile: {
    firstName?: string | undefined
    lastName?: string | undefined
    firstNameKana?: string | undefined
    lastNameKana?: string | undefined
    gender?: 'male' | 'other' | 'female' | undefined
    phone?: string | undefined
    nationality?: string | undefined
    placeOfResidenceId?: string | undefined
    postalCode?: string | undefined
    address?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    birthOfDate?: string | undefined
    biography?: string | undefined
    jobSummary?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    /** 直近の年収 */
    recentIncomeAmount?: number | undefined
    /** マネジメント経験人数 */
    managementExperience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
    /** 転職回数 */
    numberOfJobChanges?: number | undefined
    /** エージェント経験年数 */
    yearOfAgentExperience?: number | undefined
    /** エージェント担当エリア */
    agentAreaInCharge?: string | undefined
    /** エージェント自己紹介メッセージ */
    agentSelfMessage?: string | undefined
    /** エージェント自己PR */
    agentSelfIntroduction?: string | undefined
    /** エージェント実績 */
    agentAchievement?: string | undefined
    /** 「配偶者無」「配偶者有」 */
    maritalStatus?: 'single' | 'married' | undefined
    /** エージェント得意職種 */
    occupationMainCategoryIds?: string[] | undefined
    /** エージェント得意業種 */
    industryCategoryIds?: string[] | undefined
  }
}

export const patchAccountsAccountIdProfile = new BaseRequest<
  PatchAccountsAccountIdProfileRequestBody,
  PatchAccountsAccountIdProfileResponse,
  PatchAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
