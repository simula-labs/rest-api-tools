import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteStatesIdUrlParams = {
  id: string
} | undefined

export const DeleteStatesId = new BaseRequest<
  undefined,
  undefined,
  DeleteStatesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/states/:id",
  tokenKey: "AUTH_TOKEN",
});
