import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetOccupationMainCategoriesResponse = {
  occupationMainCategories: Types.OccupationMainCategory[]
}

export const getOccupationMainCategories = new BaseRequest<
  undefined,
  GetOccupationMainCategoriesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/occupation_main_categories",
  tokenKey: "AUTH_TOKEN",
});
