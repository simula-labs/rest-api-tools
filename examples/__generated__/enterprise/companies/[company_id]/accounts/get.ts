/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesIdAccountsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesIdAccountsResponse = {
  accounts: (Types.Account & {
    profile?: Types.Profile | undefined
  } & {
    employments?: Types.Employment[] | undefined
  } & {
    blockedCompanies?: Types.Company[] | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesIdAccountsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** 在籍企業名 */
  currentCompanyName?: string | undefined
  /** 役職・部署 */
  positionName?: string | undefined
  /** 職種 */
  'occupationHistories[][occupationId]'?: string | undefined
  /** 職種の経験年数（指定しなかった場合、0になる） */
  'occupationHistories[][yearOfOccupationExperience]'?: string | undefined
  /** 業種 */
  'industryHistories[][industryId]'?: string | undefined
  /** 業種の経験年数（指定しなかった場合、0になる） */
  'industryHistories[][yearOfIndustryExperience]'?: string | undefined
  /** 最終ログイン日時, この日付以降にログインしてる */
  lastSignInAt?: string | undefined
  /** 就労状況 */
  employmentStatus?: 'employed' | 'unemployed' | undefined
  /** スキル */
  skillIds?: string[] | undefined
  /** 性別 */
  gender?: 'male' | 'female' | 'other' | undefined
  /** 学歴 */
  academicBackgrounds?: ('graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junioer_college' | 'high_school')[] | undefined
  /** 語学力 */
  englishSkills?: ('daily_conversation' | 'business_conversation' | 'native')[] | undefined
  /** 現在の都道府県 */
  currentStateIds?: string[] | undefined
  /** スカウト設定 */
  scoutSettings?: ('accepting' | 'rejecting')[] | undefined
  /** 弊社への関心 */
  interestedInCompany?: boolean | undefined
  /** 弊社の募集への関心 */
  interestedInRecruitment?: boolean | undefined
  /** 最低直近収入 */
  minRecentIncomeAmount?: number | undefined
  /** 最高直近収入 */
  maxRecentIncomeAmount?: number | undefined
  /** 転職回数 */
  numberOfJobChanges?: 0 | 1 | 2 | 3 | 4 | undefined
  /** 転職希望時期・案件開始時期 */
  timeToChangeJob?: string | undefined
  /** 最低年齢 */
  minAge?: number | undefined
  /** 最高年齢 */
  maxAge?: number | undefined
  /** 最低マネジメント経験人数, これ以上すべて */
  managementExperience?: number | undefined
  /** 職務経歴更新日 */
  cvUpdatedIn?: 'three_day' | 'one_week' | 'one_month' | 'three_month' | 'half_year' | undefined
  /** キーワードOR検索するか */
  keywordOr?: boolean | undefined
  /** 在籍企業名OR検索するか */
  currentCompanyNameOr?: boolean | undefined
  /** 役職・部署をOR検索するか */
  positionNameOr?: boolean | undefined
  /** 自分が送ったスカウト */
  scoutFromMine?: boolean | undefined
  /** 他の社員が送ったスカウト */
  scoutFromOther?: boolean | undefined
  /** 足跡 */
  recruitmentPageView?: boolean | undefined
}

export const getCompaniesIdAccounts = new BaseRequest<
  undefined,
  GetCompaniesIdAccountsResponse,
  GetCompaniesIdAccountsUrlParams,
  GetCompaniesIdAccountsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/accounts",
  tokenKey: "AUTH_TOKEN",
});
