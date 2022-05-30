/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetPlansResponse = {
  products: Types.Product[]
}

export const getPlans = new BaseRequest<
  undefined,
  GetPlansResponse,
  undefined,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/products",
  tokenKey: "AUTH_TOKEN",
});
