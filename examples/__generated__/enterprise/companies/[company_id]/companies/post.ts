/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostCompaniesResponse = Types.Company & {
    owner?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } | undefined
  } & {
    subscription?: Types.Subscription & {
      price?: Types.Price & {
        product?: Types.Product | undefined
      } | undefined
    } | undefined
  } & {
    recruitments?: Types.Recruitment[] | undefined
  } & {
    industries?: Types.Industry[] | undefined
  } & {
    features?: Types.Feature[] | undefined
  } & {
    paymentMethods?: Types.PaymentMethod[] | undefined
  }

export type PostCompaniesRequestBody = {
  company?: {
    name: string
    nameKana: string
  } | undefined
}

export const postCompanies = new BaseRequest<
  PostCompaniesRequestBody,
  PostCompaniesResponse,
  undefined,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/companies",
  tokenKey: "AUTH_TOKEN",
});
