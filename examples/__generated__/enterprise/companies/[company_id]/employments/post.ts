/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdEmploymentsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdEmploymentsResponse = Types.Employment & {
    account?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } | undefined
  } & {
    company?: Types.Company & {
      owner?: Types.Account & {
        profile?: Types.Profile & {
          placeOfResidence?: Types.State | undefined
        } | undefined
      } | undefined
    } & {
      subscription?: Types.Subscription & {
        price?: Types.Price & {
          product?: Types.Product | undefined
        } | undefined
      } | undefined
    } & {
      features?: Types.Feature[] | undefined
    } & {
      industries?: Types.Industry[] | undefined
    } | undefined
  } & {
    roles?: (Types.Role & {
      policies?: (Types.Policy & {
        permissions?: Types.Permission[] | undefined
      })[] | undefined
    })[] | undefined
  }

export type PostCompaniesCompanyIdEmploymentsRequestBody = {
  employment?: {
    accountId: string
    email: string
    roleIds?: string[] | undefined
  } | undefined
}

export const postCompaniesCompanyIdEmployments = new BaseRequest<
  PostCompaniesCompanyIdEmploymentsRequestBody,
  PostCompaniesCompanyIdEmploymentsResponse,
  PostCompaniesCompanyIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/employments",
  tokenKey: "AUTH_TOKEN",
});
