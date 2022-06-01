/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesCompanyIdScoutsUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdScoutsResponse = Types.Scout & {
    company: Types.Company
  } & {
    account: Types.Account
  } & {
    message: Types.Message
  }

export type PostCompaniesCompanyIdScoutsRequestBody = {
  scout: {
    acountId: string
    message: string
    type: 'career' | 'project'
    /** 渡すとMessageに紐付けられる */
    recruitmentId?: string | undefined
  }
}

export const postCompaniesCompanyIdScouts = new BaseRequest<
  PostCompaniesCompanyIdScoutsRequestBody,
  PostCompaniesCompanyIdScoutsResponse,
  PostCompaniesCompanyIdScoutsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scouts",
  tokenKey: "AUTH_TOKEN",
});
