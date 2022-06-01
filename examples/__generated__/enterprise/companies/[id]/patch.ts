/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchCompaniesIdUrlParams = {
  id: string
} | undefined

export type PatchCompaniesIdResponse = Types.Company & {
    owner: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    subscription: Types.Subscription & {
      price?: Types.Price & {
        product?: Types.Product | undefined
      } | undefined
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  } & {
    paymentMethods: Types.PaymentMethod[]
  }

export type PatchCompaniesIdRequestBody = {
  company: {
    name?: string | undefined
    nameKana?: string | undefined
    headOfficeLocation?: string | undefined
    yearOfEstablishment?: string | undefined
    hpUrl?: string | undefined
    phone?: string | undefined
    capital?: number | undefined
    isListed?: boolean | undefined
    representative?: string | undefined
    representativeKana?: string | undefined
    netSales?: string | undefined
    numbersOfEmployees?: string | undefined
    averageAge?: number | undefined
    businessSummary?: string | undefined
    corporatePr?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    logo?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    employmentPlacementPermitNumber?: string | undefined
    ownerId?: string | undefined
    featureIds?: string[] | undefined
    industryIds?: string[] | undefined
  }
}

export const patchCompaniesId = new BaseRequest<
  PatchCompaniesIdRequestBody,
  PatchCompaniesIdResponse,
  PatchCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
