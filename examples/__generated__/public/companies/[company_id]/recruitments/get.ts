import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsResponse = {
  recruitments: (Types.Recruitment & {
    company: Types.Company
  } & {
    workplace: Types.State
  } & {
    author: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      } & {
        specialtyCompanyTypes: Types.SpecialtyCompanyType[]
      } & {
        specialtyPositions: Types.SpecialtyPosition[]
      } & {
        occupationMainCategories: Types.OccupationMainCategory[]
      } & {
        industryCategories: Types.IndustryCategory[]
      }
    }
  } & {
    externalService: Types.ExternalService
  } & {
    employmentStatuses: Types.EmploymentStatus[]
  } & {
    occupations: Types.Occupation[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdRecruitmentsQueryParams = {
  /** 職種 */
  occupationIds?: string[] | undefined
  /** 業種 */
  industryIds?: string[] | undefined
  /** 勤務地 */
  workplaceIds?: string[] | undefined
  /** 雇用形態 */
  employmentStatusIds?: string | undefined
  /** タイプ */
  type?: string | undefined
  /** 年収最高金額（キャリア） */
  maxYearlyAmount?: number | undefined
  /** 年収最低金額（キャリア） */
  minYearlyAmount?: number | undefined
  /** 単価最高金額（プロジェクト） */
  maxUnitAmount?: number | undefined
  /** 単価最低金額（プロジェクト） */
  minUnitAmount?: number | undefined
  /** キーワード */
  keyword?: string | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscCreatedAt?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscAmount?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscApplicant?: boolean | undefined
} | undefined

export const getCompaniesCompanyIdRecruitments = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsResponse,
  GetCompaniesCompanyIdRecruitmentsUrlParams,
  GetCompaniesCompanyIdRecruitmentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/companies/:company_id/recruitments",
  tokenKey: "AUTH_TOKEN",
});
