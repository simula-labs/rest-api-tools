import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetRecruitmentsResponse = {
  recruitments: Types.Recruitment[]
}

export type GetRecruitmentsQueryParams = {
  /** 「社員採用（キャリア）」「副業・フリーランス（プロジェクト）」 */
  type?: 'career' | 'project' | undefined
  /** 「全体公開」「限定公開」「停止」「差し止め」 */
  accessibleType?: 'public' | 'private' | 'archived' | 'rejected' | undefined
  /** 「自社募集」「他社募集」「クローリング募集」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** キーワード検索 */
  keyword?: string | undefined
  /** 企業内フラグ（表向きには「校閲済み」や「重要」など） */
  organizationalChecked?: boolean | undefined
  /** adminフラグ（主にクローリング募集に対する「校閲済み」など） */
  adminChecked?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
} | undefined

export const GetRecruitments = new BaseRequest<
  undefined,
  GetRecruitmentsResponse,
  undefined,
  GetRecruitmentsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/recruitments",
});
