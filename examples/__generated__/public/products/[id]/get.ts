import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetPlansIdUrlParams = {
  id: string
} | undefined

export type GetPlansIdResponse = Types.Product

export const getPlansId = new BaseRequest<
  undefined,
  GetPlansIdResponse,
  GetPlansIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
});
