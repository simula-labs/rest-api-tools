/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchRecruitmentsIdUrlParams = {
  id: string
} | undefined

export type PatchRecruitmentsIdResponse = Types.RecruitmentRes

export type PatchRecruitmentsIdRequestBody = {
  recruitment: {
    department?: string | undefined
    position?: string | undefined
    title?: string | undefined
    workplaceId?: string | undefined
    jobDescription?: string | undefined
    workConditions?: string | undefined
    /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
    smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
    /** 「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
    remoteWorkStatus?: 'rarely' | 'normally' | 'full_remote' | undefined
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
    isReleased?: boolean | undefined
    type?: 'CareerRecruitment' | 'ProjectRecruitment' | undefined
    accessibleType?: 'public' | 'private' | undefined
    taxType?: 'included' | 'excluded' | undefined
    minAmount?: number | undefined
    maxAmount?: number | undefined
    /** 「時給」「月給」「年収」「1案件」 */
    billingMethod?: 'hourly' | 'monthly' | 'yearly' | 'with_project' | undefined
    /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
    targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
    /** 募集元企業を指定する場合は必須 */
    targetCompanyId?: string | undefined
    /** target_company_statusがcertainedの時、表示名を指定 */
    targetCompanyCertainName?: string | undefined
    /** 推薦ポイント */
    recommendedPoint?: string | undefined
    /** 技術スタックの備考 */
    techStackRemarks?: string | undefined
    nearestStation?: string | undefined
    projectNumber?: string | undefined
    /** 企業内でのフラグ */
    isOrganizationalChecked?: boolean | undefined
    /** adminのフラグ */
    isAdminChecked?: boolean | undefined
    employmentStatusIds?: string[] | undefined
    occupationIds?: string[] | undefined
    industryIds?: string[] | undefined
    featureIds?: string[] | undefined
    techStackIds?: string[] | undefined
    employmentContractTermIds?: string[] | undefined
  }
}

export const patchRecruitmentsId = new BaseRequest<
  PatchRecruitmentsIdRequestBody,
  PatchRecruitmentsIdResponse,
  PatchRecruitmentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: API_HOST,
  path: "/recruitments/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
