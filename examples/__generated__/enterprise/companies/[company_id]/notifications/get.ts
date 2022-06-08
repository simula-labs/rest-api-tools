/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdNotificationsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdNotificationsResponse = {
  companyNotifications: (Types.Notification & {
    company?: Types.Company | undefined
  } & {
    employment?: Types.Employment | undefined
  } & {
    room?: Types.Room | undefined
  })[]
  totalDataNums: number
}

export type GetCompaniesCompanyIdNotificationsRequestBody = {
}

export type GetCompaniesCompanyIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
  page?: number | undefined
}

export const getCompaniesCompanyIdNotifications = new BaseRequest<
  GetCompaniesCompanyIdNotificationsRequestBody,
  GetCompaniesCompanyIdNotificationsResponse,
  GetCompaniesCompanyIdNotificationsUrlParams,
  GetCompaniesCompanyIdNotificationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/notifications",
  tokenKey: "AUTH_TOKEN",
});
