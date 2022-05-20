import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteCompaniesIdUrlParams = {
  id: string
} | undefined

export const deleteCompaniesId = new BaseRequest<
  undefined,
  undefined,
  DeleteCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
