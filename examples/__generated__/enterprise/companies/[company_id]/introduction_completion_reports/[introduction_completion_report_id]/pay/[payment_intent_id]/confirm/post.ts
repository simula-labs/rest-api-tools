/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../../../shared/index";

export type PostCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  introductionCompletionReportId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/introduction_completion_reports/:introductionCompletionReportId/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
});
