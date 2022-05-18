import BaseRequest from "../../../baseRequest";
import type * as Types from "../../../@types";

export type GetProductsIdPricesUrlParams = {
  id: string
} | undefined

export type GetProductsIdPricesResponse = {
  prices: Types.Price[]
}

export const GetProductsIdPrices = new BaseRequest<
  undefined,
  GetProductsIdPricesResponse,
  GetProductsIdPricesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id/prices",
});
