/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";
import { API_HOST } from "../urls";

export type GetIndustryCategoriesResponse = {
  industryCategories: (Types.IndustryCategory & {
    industries?: Types.Industry[] | undefined
  })[]
}

export const getIndustryCategories = new BaseRequest<
  undefined,
  GetIndustryCategoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/industry_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
