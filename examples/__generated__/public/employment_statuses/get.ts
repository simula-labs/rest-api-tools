import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

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
  baseURL: "https://api.example.com/public",
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
});
