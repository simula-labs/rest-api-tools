import BaseRequest from "../../baseRequest";
import type * as Types from "../../@types";

export type DeleteEmploymentStatusesIdUrlParams = {
  id: string
} | undefined

export const DeleteEmploymentStatusesId = new BaseRequest<
  undefined,
  undefined,
  DeleteEmploymentStatusesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/employment_statuses/:id",
});
