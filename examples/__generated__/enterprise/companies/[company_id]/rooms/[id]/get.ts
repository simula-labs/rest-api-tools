/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type GetCompaniesCompanyIdRoomsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type GetCompaniesCompanyIdRoomsIdResponse = Types.Room & {
    account: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    company: Types.Company & {
      industries?: Types.Industry[] | undefined
    } & {
      features?: Types.Feature[] | undefined
    }
  }

export const getCompaniesCompanyIdRoomsId = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdRoomsIdResponse,
  GetCompaniesCompanyIdRoomsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms/:id",
  tokenKey: "AUTH_TOKEN",
});
