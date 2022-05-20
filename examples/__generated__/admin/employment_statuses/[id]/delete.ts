import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type DeleteEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export const deleteEmploymentStatusesId = new BaseRequest<
  undefined,
  undefined,
  DeleteEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses/:id",
  tokenKey: "AUTH_TOKEN",
});
