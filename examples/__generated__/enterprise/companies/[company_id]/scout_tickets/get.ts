/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdScoutTicketsUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdScoutTicketsResponse = {
  scoutTickets?: Types.ScoutTicket[] | undefined
  totalDataNums?: number | undefined
}

export const getCompaniesCompanyIdScoutTickets = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdScoutTicketsResponse,
  GetCompaniesCompanyIdScoutTicketsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/scout_tickets",
  tokenKey: "AUTH_TOKEN",
});
