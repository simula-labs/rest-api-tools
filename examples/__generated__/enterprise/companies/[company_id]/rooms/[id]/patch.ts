/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PatchCompaniesCompanyIdRoomsIdUrlParams = {
  companyId: string
  id: string
} | undefined

export type PatchCompaniesCompanyIdRoomsIdResponse = Types.Room & {
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

export type PatchCompaniesCompanyIdRoomsIdRequestBody = {
  room: {
    existsNotReplied?: boolean | undefined
  }
}

export const patchCompaniesCompanyIdRoomsId = new BaseRequest<
  PatchCompaniesCompanyIdRoomsIdRequestBody,
  PatchCompaniesCompanyIdRoomsIdResponse,
  PatchCompaniesCompanyIdRoomsIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/rooms/:id",
  tokenKey: "AUTH_TOKEN",
});
