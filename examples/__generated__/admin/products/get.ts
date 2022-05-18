import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetProductResponse = {
  products: Types.Product[]
}

export const GetProduct = new BaseRequest<
  undefined,
  GetProductResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/products",
});
