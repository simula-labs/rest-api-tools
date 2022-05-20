import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../@types";

export type PostEmploymentStatusesResponse = Types.EmploymentStatus

export type PostEmploymentStatusesRequestBody = {
  employmentStatus: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}

export const postEmploymentStatuses = new BaseRequest<
  PostEmploymentStatusesRequestBody,
  PostEmploymentStatusesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses",
  tokenKey: "AUTH_TOKEN",
});
