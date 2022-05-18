import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetProductResponse = {
  products: Types.Product[]
}
export const GetProducts = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products",
});