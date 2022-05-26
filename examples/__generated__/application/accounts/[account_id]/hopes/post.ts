import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../shared/index";

export type PostAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined

export type PostAccountsAccountIdHopesResponse = Types.Hope & {
    industries: Types.Industry[]
  } & {
    occupations: Types.Occupation[]
  } & {
    workplaces: Types.State[]
  }

export type PostAccountsAccountIdHopesRequestBody = {
  hope: {
    /** 何ヶ月以内に転職したいか */
    timeToChangeJob: number
    amount: number
    /** 「時給」「日給」「月給」「年収」「1案件」 */
    billingMethod: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project'
    type: 'career' | 'project'
    specialNote?: string | undefined
    beginningPeriod?: number | undefined
    /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
    ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
    /** StateのID */
    workplaceIds: string[]
    industryIds: string[]
    occupationIds: string[]
  }
}

export const postAccountsAccountIdHopes = new BaseRequest<
  PostAccountsAccountIdHopesRequestBody,
  PostAccountsAccountIdHopesResponse,
  PostAccountsAccountIdHopesUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://a pi.example.com/public",
  path: "/accounts/:accountId/hopes",
  tokenKey: "AUTH_TOKEN",
});
