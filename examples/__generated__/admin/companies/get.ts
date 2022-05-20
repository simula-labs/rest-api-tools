import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetCompaniesResponse = {
  companies: (Types.Company & {
    owner: Types.Account & {
      profile: Types.Profile
    }
  } & {
    subscription: Types.Subscription & {
      price: Types.Price
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.IndustryHistory[]
  } & {
    features: Types.Feature[]
  })[]
  totalDataNums: number
}

export type GetCompaniesQueryParams = {
  /** 企業名 */
  keyword?: string | undefined
  /** 担当者名 */
  ownerKeyword?: string | undefined
  /** 通常orスタブ */
  type?: 'account' | 'stub' | undefined
  /** admin審査状態 */
  adminVerificationStatus?: 'unspecified' | 'request' | 'verified' | 'rejected' | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscUpdatedAt?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscSubscribedAt?: boolean | undefined
} | undefined

export const GetCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  GetCompaniesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
});
