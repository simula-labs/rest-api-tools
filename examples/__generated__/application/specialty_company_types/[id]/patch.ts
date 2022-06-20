/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchSpecialtyCompanyTypesIdUrlParams = {
  id: string
} | undefined

export type PatchSpecialtyCompanyTypesIdResponse = Types.SpecialtyCompanyType

export type PatchSpecialtyCompanyTypesIdRequestBody = {
  specialtyCompanyType: {
    content?: string | undefined
  }
}

export const patchSpecialtyCompanyTypesId = new BaseRequest<
  PatchSpecialtyCompanyTypesIdRequestBody,
  PatchSpecialtyCompanyTypesIdResponse,
  PatchSpecialtyCompanyTypesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/application",
  path: "/specialty_company_types/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
