/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../shared/index";

export type PostCompaniesCompanyIdScoutTicketsPayUrlParams = {
  companyId: string
} | undefined

export type PostCompaniesCompanyIdScoutTicketsPayResponse = {
  requiresAction?: boolean | undefined
  /** intentのclient_secret */
  paymentIntentClientSecret?: string | undefined
}

export type PostCompaniesCompanyIdScoutTicketsPayRequestBody = {
  scoutTicket?: {
    count: number
  } | undefined
}

export const postCompaniesCompanyIdScoutTicketsPay = new BaseRequest<
  PostCompaniesCompanyIdScoutTicketsPayRequestBody,
  PostCompaniesCompanyIdScoutTicketsPayResponse,
  PostCompaniesCompanyIdScoutTicketsPayUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_tickets/pay",
  tokenKey: "AUTH_TOKEN",
});
