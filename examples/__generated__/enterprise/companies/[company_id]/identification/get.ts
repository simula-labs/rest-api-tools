/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";
import { API_HOST } from "../../../urls";

export type GetCompaniesCompanyIdIdentificationUrlParams = {
  companyId: string
} | undefined

export const getCompaniesCompanyIdIdentification = new BaseRequest<
  undefined,
  undefined,
  GetCompaniesCompanyIdIdentificationUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: API_HOST,
  path: "/companies/:companyId/identification",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
