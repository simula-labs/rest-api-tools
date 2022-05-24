import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetOccupationMainCategoriesResponse = {
  occupationMainCategories: (Types.OccupationMainCategory & {
    occupationSubCategories: (Types.OccupationSubCategory & {
      occupations: Types.Occupation[]
    })[]
  })[]
}

export const getOccupationMainCategories = new BaseRequest<
  undefined,
  GetOccupationMainCategoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/occupation_main_categories",
  tokenKey: "AUTH_TOKEN",
});