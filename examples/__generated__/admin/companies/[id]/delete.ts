import BaseRequest from "../../baseRequest";
import type * as Types from './@types';
export type DeleteCompaniesIdUrlParams = {
  id: string
} | undefined
export const DeleteCompanies = new BaseRequest<>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/admin",
  path: "/companies/:id",
});