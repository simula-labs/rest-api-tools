import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../@types";

export type GetProductsIdPricesUrlParams = {
  id: string
} | undefined

export type GetProductsIdPricesResponse = {
  prices: Types.Price[]
}

export const getProductsIdPrices = new BaseRequest<
  undefined,
  GetProductsIdPricesResponse,
  GetProductsIdPricesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id/prices",
  tokenKey: "AUTH_TOKEN",
});
