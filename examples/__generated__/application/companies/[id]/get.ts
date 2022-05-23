import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../@types";

export type GetCompaniesIdUrlParams = {
  id: string
} | undefined

export type GetCompaniesIdResponse = Types.Company & {
    owner: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      }
    }
  } & {
    subscription: Types.Subscription & {
      price: Types.Price & {
        product: Types.Product
      }
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

export const getCompaniesId = new BaseRequest<
  undefined,
  GetCompaniesIdResponse,
  GetCompaniesIdUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/application",
  path: "/companies/:id",
  tokenKey: "AUTH_TOKEN",
});
