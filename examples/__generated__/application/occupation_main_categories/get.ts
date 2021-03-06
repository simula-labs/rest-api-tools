/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetOccupationMainCategoriesResponse = {
  occupationMainCategories: (Types.OccupationMainCategory & {
    occupationSubCategories?: (Types.OccupationSubCategory & {
      occupations?: Types.Occupation[] | undefined
    })[] | undefined
  })[]
}

export const getOccupationMainCategories = new BaseRequest<
  undefined,
  GetOccupationMainCategoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/occupation_main_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
