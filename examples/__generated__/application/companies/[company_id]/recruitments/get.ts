/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdRecruitmentsResponse = {
  recruitments: (Types.Recruitment & {
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
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdRecruitmentsQueryParams = {
  /** 職種 */
  'occupationIds[]'?: string | undefined
  /** 業種 */
  'industryIds[]'?: string | undefined
  /** 勤務地 */
  'workplaceIds[]'?: string | undefined
  /** 雇用形態 */
  'employmentStatusIds[]'?: string | undefined
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
}

export const getCompaniesCompanyIdRecruitments = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRecruitmentsResponse,
  GetCompaniesCompanyIdRecruitmentsUrlParams,
  GetCompaniesCompanyIdRecruitmentsQueryParams
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/companies/:companyId/recruitments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
