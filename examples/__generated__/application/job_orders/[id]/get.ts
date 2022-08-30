/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";
import { API_HOST } from "../../urls";

export type GetJobOrdersIdUrlParams = {
  id: string
} | undefined

export type GetJobOrdersIdResponse = Types.JobOrder & {
    account: Types.Account

    company: Types.Company & {
      industries?: string | undefined
      owner?: string | undefined
    }

    recruitment: Types.Recruitment & {
      workplace?: Types.State | undefined
      author?: Types.Account | undefined
      externalService?: Types.ExternalService | undefined
      employmentStatuses?: Types.EmploymentStatus[] | undefined
      occupations?: Types.Occupation[] | undefined
      industries?: Types.Industry[] | undefined
      company?: Types.Company | undefined
    }

    job: Types.Job & {
      account?: Types.Account | undefined
    }

    jobServiceItems: (Types.JobServiceItem & {
      consumptionTax?: Types.ConsumptionTax | undefined
    })[]
    jobOrderConsumptionTaxPrices: (Types.JobOrderConsumptionTaxPrice & {
      consumptionTax?: Types.ConsumptionTax | undefined
    })[]
    jobOrderWithholdingTaxPrice: Types.JobOrderWithholdingTaxPrice
  }

export const getJobOrdersId = new BaseRequest<
  undefined,
  GetJobOrdersIdResponse,
  GetJobOrdersIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "get",
  baseURL: API_HOST,
  path: "/job_orders/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
