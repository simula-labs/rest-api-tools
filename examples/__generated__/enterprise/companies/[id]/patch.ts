/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type PatchCompaniesIdUrlParams = {
  id: string
} | undefined

export type PatchCompaniesIdResponse = Types.CompanyRes

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
  baseURL: API_HOST,
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
