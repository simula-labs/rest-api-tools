import BaseRequest from "../baseRequest";
import type * as Types from "../@types";

export type GetEmploymentStatusesResponse = {
  employmentStatuses: Types.EmploymentStatus[]
}

export const GetEmploymentStatuses = new BaseRequest<
  undefined,
  GetEmploymentStatusesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses",
});
