/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdKeepingListsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdKeepingListsIdResponse = Types.KeepingList & {
    accounts?: (Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } & {
      hopes?: (Types.Hope & {
        occupations?: Types.Occupation[] | undefined
      } & {
        employmentStatuses?: Types.EmploymentStatus[] | undefined
      })[] | undefined
    })[] | undefined
  }

export type PatchCompaniesCompanyIdKeepingListsIdRequestBody = {
  keepingList?: {
    name?: string | undefined
    accountIds?: string[] | undefined
  } | undefined
}

export const patchCompaniesCompanyIdKeepingListsId = new BaseRequest<
  PatchCompaniesCompanyIdKeepingListsIdRequestBody,
  PatchCompaniesCompanyIdKeepingListsIdResponse,
  PatchCompaniesCompanyIdKeepingListsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists/:id",
  tokenKey: "AUTH_TOKEN",
});
