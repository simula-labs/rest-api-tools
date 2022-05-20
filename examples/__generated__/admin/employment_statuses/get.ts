import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type GetEmploymentStatusesResponse = {
  employmentStatuses: Types.EmploymentStatus[]
}

export const getEmploymentStatuses = new BaseRequest<
  undefined,
  GetEmploymentStatusesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
});
