import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetRecruitmentsRecommendedResponse = {
  recruitments: (Types.Recruitment & {
    company: Types.Company
  } & {
    workplace: Types.State
  } & {
    author: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      } & {
        specialtyCompanyTypes: Types.SpecialtyCompanyType[]
      } & {
        specialtyPositions: Types.SpecialtyPosition[]
      } & {
        occupationMainCategories: Types.OccupationMainCategory[]
      } & {
        industryCategories: Types.IndustryCategory[]
      }
    }
  } & {
    externalService: Types.ExternalService
  } & {
    employmentStatuses: Types.EmploymentStatus[]
  } & {
    occupations: Types.Occupation[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
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
  baseURL: "https://a pi.example.com/public",
  path: "/recruitments/recommended",
  tokenKey: "AUTH_TOKEN",
});
