import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteSearchConditionsIdUrlParams = {
  id: string
} | undefined

export const deleteSearchConditionsId = new BaseRequest<
  undefined,
  undefined,
  DeleteSearchConditionsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/search_conditions/:id",
  tokenKey: "AUTH_TOKEN",
});
