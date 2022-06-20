/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

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
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/industry_categories",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
