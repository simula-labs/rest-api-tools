/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../shared/index";

export type PatchHopesIdUrlParams = {
  id: string
} | undefined

export type PatchHopesIdResponse = Types.Hope & {
    industries: Types.Industry[]
  } & {
    occupations: Types.Occupation[]
  } & {
    workplaces: Types.State[]
  }

export type PatchHopesIdRequestBody = {
  hope: {
    /** 何ヶ月以内に転職したいか */
    timeToChangeJob?: number | undefined
    amount?: number | undefined
    /** 「時給」「月給」「年収」 */
    billingMethod?: 'hourly' | 'monthly' | 'yearly' | 'with_project' | undefined
    type?: 'career' | 'project' | undefined
    canMoving?: boolean | undefined
    specialNote?: string | undefined
    beginningPeriod?: number | undefined
    /** StateのID */
    workplaceId?: string | undefined
    industryIds?: string[] | undefined
    employmentStatusIds?: string[] | undefined
    occupationIds?: string[] | undefined
    /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
    ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
  }
}

export const patchHopesId = new BaseRequest<
  PatchHopesIdRequestBody,
  PatchHopesIdResponse,
  PatchHopesIdUrlParams,
  undefined
>({
  requiredAuth: false,
  method: "patch",
  baseURL: "https://api.example.com/public",
  path: "/hopes/:id",
  tokenKey: "AUTH_TOKEN",
  contentType: "json",
});
