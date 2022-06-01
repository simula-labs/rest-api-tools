/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsResponse = {
  recruitments?: (Types.Recruitment & {
    company?: Types.Company | undefined
  } & {
    workplace?: Types.State | undefined
  } & {
    author?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } & {
        specialtyCompanyTypes?: Types.SpecialtyCompanyType[] | undefined
      } & {
        specialtyPositions?: Types.SpecialtyPosition[] | undefined
      } & {
        occupationMainCategories?: Types.OccupationMainCategory[] | undefined
      } & {
        industryCategories?: Types.IndustryCategory[] | undefined
      } | undefined
    } | undefined
  } & {
    externalService?: Types.ExternalService | undefined
  } & {
    employmentStatuses?: Types.EmploymentStatus[] | undefined
  } & {
    occupations?: Types.Occupation[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  })[] | undefined
  totalDataNums?: number | undefined
}

export type GetCompaniesCompanyIdRecruitmentsQueryParams = {
  /** 「社員採用（キャリア）」「副業・フリーランス（プロジェクト）」 */
  type?: 'career' | 'project' | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | 'archived' | 'rejected' | undefined
  /** target_accountとその募集のWorkがあるか */
  targetAccountId?: string | undefined
  /** 「下書き」「公開」「停止」「強制停止」 */
  publishmentStatus?: string | undefined
  /** 職種 */
  occupationIds?: string | undefined
  /** 業種 */
  industryIds?: string | undefined
  /** 雇用形態 */
  employmentStatusIds?: string | undefined
  /** 「自社募集」「他社募集」「クローリング募集」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** キーワード検索 */
  keyword?: string | undefined
  /** 企業内フラグ（表向きには「校閲済み」や「重要」など） */
  organizationalChecked?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
  /** 発注と紐付けられた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務と紐付けられた募集のみ（業務のフィルター用） */
  isJobed?: string | undefined
  /** サンプル除外 */
  exceptSample?: boolean | undefined
}

export const getCompaniesCompanyIdRecruitments = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsResponse,
  GetCompaniesCompanyIdRecruitmentsUrlParams,
  GetCompaniesCompanyIdRecruitmentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments",
  tokenKey: "AUTH_TOKEN",
});
