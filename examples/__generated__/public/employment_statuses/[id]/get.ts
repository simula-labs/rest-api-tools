import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export type GetEmploymentStatusesIdResponse = Types.EmploymentStatus

export const getEmploymentStatusesId = new BaseRequest<
  undefined,
  GetEmploymentStatusesIdResponse,
  GetEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
});
