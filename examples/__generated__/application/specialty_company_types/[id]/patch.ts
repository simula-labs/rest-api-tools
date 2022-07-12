/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

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
  requiredAuth: false,
  method: "patch",
  baseURL: API_HOST,
  path: "/specialty_company_types/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
