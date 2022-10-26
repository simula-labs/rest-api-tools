/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetPricesIdUrlParams = {
  id: string
} | undefined

export type GetPricesIdResponse = Types.PriceRes

export const getPricesId = new BaseRequest<
  undefined,
  GetPricesIdResponse,
  GetPricesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/prices/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
