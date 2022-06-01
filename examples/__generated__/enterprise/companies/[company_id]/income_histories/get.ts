/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetCompaniesCompanyIdIncomeHistoriesUrlParams = {
  companyId: string
} | undefined

export type GetCompaniesCompanyIdIncomeHistoriesResponse = {
  incomeHistories?: (Types.IncomeHistory & {
    account?: Types.Account | undefined
  })[] | undefined
  totalDataNums?: number | undefined
}

export const getCompaniesCompanyIdIncomeHistories = new BaseRequest<
  undefined,
  GetCompaniesCompanyIdIncomeHistoriesResponse,
  GetCompaniesCompanyIdIncomeHistoriesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/income_histories",
  tokenKey: "AUTH_TOKEN",
});
