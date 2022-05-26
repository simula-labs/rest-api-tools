/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetEmploymentStatusesResponse = {
  employmentStatuses: Types.EmploymentStatus[]
}

export type GetEmploymentStatusesQueryParams = {
  type?: 'project' | 'career' | undefined
} | undefined

export const getEmploymentStatuses = new BaseRequest<
  undefined,
  GetEmploymentStatusesResponse,
  undefined,
  GetEmploymentStatusesQueryParams
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://a pi.example.com/public",
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
});
