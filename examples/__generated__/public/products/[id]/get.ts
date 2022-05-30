/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

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
  requiredAuth: false,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/products/:id",
  tokenKey: "AUTH_TOKEN",
});
