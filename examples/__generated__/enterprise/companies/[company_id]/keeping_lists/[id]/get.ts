/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdKeepingListsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdKeepingListsIdResponse = Types.KeepingList & {
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

export const getCompaniesCompanyIdKeepingListsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdKeepingListsIdResponse,
  GetCompaniesCompanyIdKeepingListsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/keeping_lists/:id",
  tokenKey: "AUTH_TOKEN",
});
