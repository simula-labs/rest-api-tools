import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

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
    firstName: string
    lastName: string
    firstNameKana: string
    lastNameKana: string
    gender: 'MALE' | 'FEMALE' | 'OTHER'
    phone: string
    nationality: string
    placeOfResidenceId: string
    postalCode: string
    address: string
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    englishSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
    birthOfDate: string
    biography: string
    jobSummary: string
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    japaneseSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
    /** 直近の年収 */
    recentIncomeAmount: number
    /** マネジメント経験人数 */
    managemntExperience: number
    /** 転職回数 */
    numberOfJobChanges: number
    /** エージェント経験年数 */
    yearOfAgentExperience: string
    /** エージェント担当エリア */
    agentAreaInCharge: string
    /** エージェント自己紹介メッセージ */
    agentSelfMessage: string
    /** エージェント自己PR */
    agentSelfIntroduction: string
    /** エージェント実績 */
    agentAchievement: string
    /** 「配偶者無」「配偶者有」 */
    maritalStatus: 'single' | 'married'
    /** エージェント得意職種 */
    occupationMainCategoryIds: string[]
    /** エージェント得意業種 */
    industryCategoryIds: string[]
  }
}

export const patchAccountsAccountIdProfile = new BaseRequest<
  PatchAccountsAccountIdProfileRequestBody,
  PatchAccountsAccountIdProfileResponse,
  PatchAccountsAccountIdProfileUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/profile",
  tokenKey: "AUTH_TOKEN",
});
