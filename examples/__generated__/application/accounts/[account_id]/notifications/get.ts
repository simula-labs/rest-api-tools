/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdNotificationsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdNotificationsResponse = {
  accountNotifications: (Types.Notification & {
    account?: Types.Account | undefined
  } & {
    room?: Types.Room | undefined
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
}

export const getAccountsAccountIdNotifications = new BaseRequest<
  undefined,
  GetAccountsAccountIdNotificationsResponse,
  GetAccountsAccountIdNotificationsUrlParams,
  GetAccountsAccountIdNotificationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/notifications",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
