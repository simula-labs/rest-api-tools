import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type PatchEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export type PatchEmploymentStatusesIdResponse = Types.EmploymentStatus

export type PatchEmploymentStatusesIdRequestBody = {
  employmentStatus: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}

export const patchEmploymentStatusesId = new BaseRequest<
  PatchEmploymentStatusesIdRequestBody,
  PatchEmploymentStatusesIdResponse,
  PatchEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
});
