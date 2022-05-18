import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetProductsIdPricesUrlParams = {
  id: string
} | undefined
export type GetProductsIdPricesResponse = {
  prices: Types.Price[]
}
export const GetProducts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id/prices",
});