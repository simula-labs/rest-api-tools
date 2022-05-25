import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetIndustryCategoriesResponse = {
  industryCategories: Types.IndustryCategory[]
}

export const getIndustryCategories = new BaseRequest<
  undefined,
  GetIndustryCategoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/industry_categories",
  tokenKey: "AUTH_TOKEN",
});
