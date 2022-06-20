/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteSpecialtyCompanyTypesIdUrlParams = {
  id: string
} | undefined

export const deleteSpecialtyCompanyTypesId = new BaseRequest<
  undefined,
  undefined,
  DeleteSpecialtyCompanyTypesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/application",
  path: "/specialty_company_types/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
