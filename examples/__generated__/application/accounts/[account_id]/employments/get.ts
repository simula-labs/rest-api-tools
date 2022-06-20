/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type GetAccountsAccountIdEmploymentsUrlParams = {
  accountId: string
} | undefined

export type GetAccountsAccountIdEmploymentsResponse = {
  employments: (Types.Employment & {
    account?: Types.Account & {
      profile?: Types.Profile & {
        placeOfResidence?: Types.State | undefined
      } | undefined
    } | undefined
  } & {
    company?: Types.Company & {
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
      features?: Types.Feature[] | undefined
    } & {
      industries?: Types.Industry[] | undefined
    } | undefined
  } & {
    roles?: (Types.Role & {
      policies?: (Types.Policy & {
        permissions?: Types.Permission[] | undefined
      })[] | undefined
    })[] | undefined
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
  baseURL: "https://api.example.com/application",
  path: "/accounts/:accountId/employments",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
