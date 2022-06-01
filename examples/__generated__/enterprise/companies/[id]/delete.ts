/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type DeleteCompaniesIdUrlParams = {
  id: string
} | undefined

export type DeleteCompaniesIdResponse = Types.Company & {
    owner: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    }
  } & {
    subscription: Types.Subscription & {
      price?: Types.Price & {
        product?: Types.Product | undefined
      } | undefined
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.Industry[]
  } & {
    features: Types.Feature[]
  } & {
    paymentMethods: Types.PaymentMethod[]
  }

export const deleteCompaniesId = new BaseRequest<
  undefined,
  DeleteCompaniesIdResponse,
  DeleteCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "delete",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
