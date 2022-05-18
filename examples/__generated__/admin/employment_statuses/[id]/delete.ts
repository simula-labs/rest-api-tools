import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type DeleteEmploymentStatusesIdUrlParams = {
  id: string
} | undefined
export const DeleteEmploymentStatuses = new BaseRequest<>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses/:id",
});