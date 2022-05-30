/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdProfileResponse = Types.Profile & {
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

export type PostAccountsAccountIdProfileRequestBody = {
  profile: {
    firstName: string
    lastName: string
    firstNameKana?: string | undefined
    lastNameKana?: string | undefined
    gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
    phone?: string | undefined
    nationality?: string | undefined
    placeOfResidenceId?: string | undefined
    postalCode?: string | undefined
    address?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
    englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    birthOfDate?: string | undefined
    biography?: string | undefined
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
    japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
    /** 直近の年収 */
    recentIncomeAmount?: number | undefined
    /** マネジメント経験人数 */
    managemntExperience?: number | undefined
    /** 転職回数 */
    numberOfJobChanges?: number | undefined
    /** エージェント経験年数 */
    yearOfAgentExperience?: string | undefined
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

export const postAccountsAccountIdProfile = new BaseRequest<
  PostAccountsAccountIdProfileRequestBody,
  PostAccountsAccountIdProfileResponse,
  PostAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
});
