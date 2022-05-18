import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type GetEmploymentStatusesResponse = {
  employment_statuses: Types.EmploymentStatus[]
}
export const GetEmploymentStatuses = new BaseRequest<>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses",
});