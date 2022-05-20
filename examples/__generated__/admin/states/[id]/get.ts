import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetStatesIdUrlParams = {
  id: string
} | undefined

export type GetStatesIdResponse = Types.State

export const GetStatesId = new BaseRequest<
  undefined,
  GetStatesIdResponse,
  GetStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
});
