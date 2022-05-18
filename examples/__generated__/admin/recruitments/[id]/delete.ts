import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type DeleteRecruitmentsIdUrlParams = {
  id: string
} | undefined
export const DeleteRecruitments = new BaseRequest<>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/recruitments/:id",
});