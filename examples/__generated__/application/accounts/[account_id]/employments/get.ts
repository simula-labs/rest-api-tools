/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdEmploymentsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdEmploymentsResponse = {
  employments: (Types.Employment & {
    account: Types.Account & {
      profile: Types.Profile & {
        placeOfResidence: Types.State
      }
    }
  } & {
    company: Types.Company & {
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
      features: Types.Feature[]
    } & {
      industries: Types.Industry[]
    }
  } & {
    roles: (Types.Role & {
      policies: (Types.Policy & {
        permissions: Types.Permission[]
      })[]
    })[]
  })[]
}

export const getAccountsAccountIdEmployments = new BaseRequest<
  undefined,
  GetAccountsAccountIdEmploymentsResponse,
  GetAccountsAccountIdEmploymentsUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "get",
  baseURL: "https://api.example.com/public",
  path: "/accounts/:accountId/employments",
  tokenKey: "AUTH_TOKEN",
});
