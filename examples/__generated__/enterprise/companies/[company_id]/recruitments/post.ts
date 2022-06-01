/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdRecruitmentsResponse = Types.Recruitment & {
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
  }

export type PostCompaniesCompanyIdRecruitmentsRequestBody = {
  recruitment?: {
    title: string
    department?: string | undefined
    position?: string | undefined
    workplaceId?: string | undefined
    jobDescription?: string | undefined
    workConditions?: string | undefined
    /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
    smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
    /** 「未選択」「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
    remoteWorkStatus?: 'unselected' | 'rarely' | 'normally' | 'full_remote' | undefined
    /** 勤務地詳細 */
    workplaceDescription?: string | undefined
    /** 勤務地不問か */
    canLiveAndWorkAnywhere?: boolean | undefined
    /** 年収・報酬の詳細 */
    salaryRemarks?: string | undefined
    qualificationRequirements?: string | undefined
    /** 採用人数 */
    maxNumberOfHiring?: string | undefined
    /** 選考プロセス */
    selectionProcess?: string | undefined
    publishmentStatus: 'draft' | 'published'
    type: 'career' | 'project'
    sourceType: 'client' | 'agent' | 'service'
    accessibleType: 'public' | 'private'
    taxType?: 'included' | 'excluded' | undefined
    minAmount?: number | undefined
    maxAmount?: number | undefined
    /** 「時給」「日給」「月給」「年収」「1案件」 */
    billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
    /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
    targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
    /** 募集元企業を指定する場合は必須 */
    targetCompanyId?: string | undefined
    /** target_company_statusがcertainedの時、表示名を指定 */
    targetCompanyCertainName?: string | undefined
    /** 推薦ポイント */
    recommendedPoint?: string | undefined
    employmentStatusIds?: string[] | undefined
    occupationIds?: string[] | undefined
    industryIds?: string[] | undefined
    featureIds?: string[] | undefined
  } | undefined
}

export const postCompaniesCompanyIdRecruitments = new BaseRequest<
  PostCompaniesCompanyIdRecruitmentsRequestBody,
  PostCompaniesCompanyIdRecruitmentsResponse,
  PostCompaniesCompanyIdRecruitmentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitments",
  tokenKey: "AUTH_TOKEN",
});
