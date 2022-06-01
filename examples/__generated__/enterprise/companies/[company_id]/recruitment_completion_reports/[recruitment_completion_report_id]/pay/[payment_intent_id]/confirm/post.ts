/* eslint-disable */
import { BaseRequest } from "@simula-labs/rest-api-tools";
import type * as Types from "../../../../../../../../shared/index";

export type PostCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirmUrlParams = {
  companyId: string
  recruitmentCompletionReportId: string
  paymentIntentId: string
} | undefined

export const postCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirm = new BaseRequest<
  undefined,
  undefined,
  PostCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirmUrlParams,
  undefined
>({
  requiredAuth: true,
  method: "post",
  baseURL: "https://api.example.com/enterprise",
  path: "/companies/:companyId/recruitment_completion_reports/:recruitmentCompletionReportId/pay/:paymentIntentId/confirm",
  tokenKey: "AUTH_TOKEN",
});
