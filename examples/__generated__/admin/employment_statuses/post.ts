import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type PostEmploymentStatusesResponse = Types.EmploymentStatus
export type PostEmploymentStatusesRequestBody = {
  employment_status: {
    name: string
    type: 'CAREER' | 'PROJECT'
  }
}
export const PostEmploymentStatuses = new BaseRequest<>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses",
});