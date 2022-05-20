import { BaseRequest } from "@simula-labs/rest-api-tools";
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
  tokenKey: "AUTH_TOKEN",
});
