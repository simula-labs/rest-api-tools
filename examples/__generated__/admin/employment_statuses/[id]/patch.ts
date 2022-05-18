import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PatchEmploymentStatusesIdUrlParams = {
  id: string
} | undefined
export type PatchEmploymentStatusesIdResponse = Types.EmploymentStatus
export type PatchEmploymentStatusesIdRequestBody = {
  employment_status: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}
export const PatchEmploymentStatuses = new BaseRequest<>({
  requiredAuth: true,
  method: "patch",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses/:id",
});