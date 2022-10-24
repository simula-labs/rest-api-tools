/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetRecruitmentsRecommendedResponse = Types.RecruitmentsRes

export const getRecruitmentsRecommended = new BaseRequest<
  undefined,
  GetRecruitmentsRecommendedResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/recruitments/recommended",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
