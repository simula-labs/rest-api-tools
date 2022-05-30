/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdNotificationsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdNotificationsResponse = {
  accountNotifications: (Types.Notification & {
    account: Types.Account
  } & {
    room: Types.Room
  })[]
  totalDataNums: number
}

export type GetAccountsAccountIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
} | undefined

export const getAccountsAccountIdNotifications = new BaseRequest<
  undefined,
  GetAccountsAccountIdNotificationsResponse,
  GetAccountsAccountIdNotificationsUrlParams,
  GetAccountsAccountIdNotificationsQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/notifications",
  tokenKey: "AUTH_TOKEN",
});
