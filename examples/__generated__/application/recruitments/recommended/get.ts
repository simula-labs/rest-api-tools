/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type GetRecruitmentsRecommendedResponse = {
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

export const getRecruitmentsRecommended = new BaseRequest<
  undefined,
  GetRecruitmentsRecommendedResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/recruitments/recommended",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
