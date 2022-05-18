import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type DeleteProductsIdUrlParams = {
  id: string
} | undefined

export const DeleteProductsId = new BaseRequest<
  undefined,
  undefined,
  DeleteProductsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/products/:id",
});
