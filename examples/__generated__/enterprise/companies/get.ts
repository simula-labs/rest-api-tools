/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../shared/index";

export type GetCompaniesResponse = {
  companies?: (Types.Company & {
    recruitments?: Types.Recruitment[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  })[] | undefined
  totalDataNums?: number | undefined
}

export const getCompanies = new BaseRequest<
  undefined,
  GetCompaniesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies",
  tokenKey: "AUTH_TOKEN",
});
