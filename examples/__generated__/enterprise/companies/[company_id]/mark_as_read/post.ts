/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdMarkAsReadUrlParams = {
  companyId: string
} | undefined

export const postCompaniesCompanyIdMarkAsRead = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdMarkAsReadUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/mark_as_read",
  tokenKey: "AUTH_TOKEN",
});
