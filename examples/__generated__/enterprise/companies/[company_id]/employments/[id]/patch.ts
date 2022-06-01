/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdEmploymentsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdEmploymentsIdResponse = Types.Employment & {
    account: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    company: Types.Company & {
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
    }
  } & {
    roles: (Types.Role & {
      policies?: (Types.Policy & {
        permissions?: Types.Permission[] | undefined
      })[] | undefined
    })[]
  }

export type PatchCompaniesCompanyIdEmploymentsIdRequestBody = {
  employment: {
    email?: string | undefined
    roleIds?: string[] | undefined
  }
}

export const patchCompaniesCompanyIdEmploymentsId = new BaseRequest<
  PatchCompaniesCompanyIdEmploymentsIdRequestBody,
  PatchCompaniesCompanyIdEmploymentsIdResponse,
  PatchCompaniesCompanyIdEmploymentsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/employments/:id",
  tokenKey: "AUTH_TOKEN",
});
