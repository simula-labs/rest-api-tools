/* eslint-disable */
import { getCompanies } from "./companies/get";
import { getCompaniesIdAccounts } from "./companies/[company_id]/accounts/get";
import { getCompaniesCompanyIdAccountsId } from "./companies/[company_id]/accounts/[id]/get";
import { getCompaniesCompanyIdApplicantResources } from "./companies/[company_id]/applicant_resources/get";
import { patchCompaniesCompanyIdApplicantResources } from "./companies/[company_id]/applicant_resources/patch";
import { getCompaniesCompanyIdApplicantStatusesId } from "./companies/[company_id]/applicant_resources/[id]/get";
import { patchCompaniesCompanyIdApplicantStatusesId } from "./companies/[company_id]/applicant_resources/[id]/patch";
import { patchCompaniesCompanyIdApplicantResourcesIdAdd } from "./companies/[company_id]/applicant_resources/[id]/add_type/patch";
import { getCompaniesCompanyIdBankAccount } from "./companies/[company_id]/bank_account/get";
import { postCompaniesCompanyIdBankAccount } from "./companies/[company_id]/bank_account/post";
import { deleteCompaniesCompanyIdBankAccount } from "./companies/[company_id]/bank_account/delete";
import { postCompanies } from "./companies/[company_id]/companies/post";
import { getCompaniesCompanyIdEmployments } from "./companies/[company_id]/employments/get";
import { postCompaniesCompanyIdEmployments } from "./companies/[company_id]/employments/post";
import { postCompaniesCompanyIdEmploymentsInvite } from "./companies/[company_id]/employments/invite/post";
import { getCompaniesCompanyIdEmploymentsId } from "./companies/[company_id]/employments/[id]/get";
import { patchCompaniesCompanyIdEmploymentsId } from "./companies/[company_id]/employments/[id]/patch";
import { deleteCompaniesCompanyIdEmploymentsId } from "./companies/[company_id]/employments/[id]/delete";
import { getCompaniesCompanyIdIdentification } from "./companies/[company_id]/identification/get";
import { getCompaniesCompanyIdIncomeHistories } from "./companies/[company_id]/income_histories/get";
import { getCompaniesCompanyIdIntroductionCompletionReports } from "./companies/[company_id]/introduction_completion_reports/get";
import { postCompaniesCompanyIdIntroductionCompletionReports } from "./companies/[company_id]/introduction_completion_reports/post";
import { postCompaniesCompanyIdIntroductionCompletionReportsCheck } from "./companies/[company_id]/introduction_completion_reports/check/post";
import { getCompaniesCompanyIdIntroductionCompletionReportsId } from "./companies/[company_id]/introduction_completion_reports/[id]/get";
import { patchCompaniesCompanyIdIntroductionCompletionReportsId } from "./companies/[company_id]/introduction_completion_reports/[id]/patch";
import { postCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirm } from "./companies/[company_id]/introduction_completion_reports/[introduction_completion_report_id]/pay/[payment_intent_id]/confirm/post";
import { getCompaniesCompanyIdInvoicesId } from "./companies/[company_id]/invoices/[id]/get";
import { postCompaniesCompanyIdInvoicesIdApproved } from "./companies/[company_id]/invoices/[id]/approved/post";
import { postCompaniesCompanyIdInvoicesIdConfirm } from "./companies/[company_id]/invoices/[id]/confirm/post";
import { postCompaniesCompanyIdInvoicesIdPay } from "./companies/[company_id]/invoices/[id]/pay/post";
import { getCompaniesCompanyIdJobOrders } from "./companies/[company_id]/job_orders/get";
import { postCompaniesCompanyIdJobOrders } from "./companies/[company_id]/job_orders/post";
import { postCompaniesCompanyIdJobOrdersCheck } from "./companies/[company_id]/job_orders/check/post";
import { getCompaniesCompanyIdJobOrdersJobOrderId } from "./companies/[company_id]/job_orders/[id]/get";
import { patchCompaniesCompanyIdJobOrdersJobOrderId } from "./companies/[company_id]/job_orders/[id]/patch";
import { deleteCompaniesCompanyIdJobOrdersJobOrderId } from "./companies/[company_id]/job_orders/[id]/delete";
import { getCompaniesCompanyIdWorkReviewsId } from "./companies/[company_id]/job_reviews/[id]/get";
import { patchCompaniesCompanyIdWorkReviewsId } from "./companies/[company_id]/job_reviews/[id]/patch";
import { deleteCompaniesCompanyIdJobReviewsId } from "./companies/[company_id]/job_reviews/[id]/delete";
import { getCompaniesCompanyIdJobs } from "./companies/[company_id]/jobs/get";
import { getCompaniesCompanyIdJobsId } from "./companies/[company_id]/jobs/[id]/get";
import { patchCompaniesCompanyIdJobsId } from "./companies/[company_id]/jobs/[id]/patch";
import { getCompaniesCompanyIdWorksWorkIdInvoices } from "./companies/[company_id]/jobs/[job_id]/invoices/get";
import { getCompaniesCompanyIdWorksWorkIdContractReviews } from "./companies/[company_id]/jobs/[job_id]/job_reviews/get";
import { postCompaniesCompanyIdJobsJobIdJobReviews } from "./companies/[company_id]/jobs/[job_id]/job_reviews/post";
import { getCompaniesCompanyIdKeepingLists } from "./companies/[company_id]/keeping_lists/get";
import { postCompaniesCompanyIdKeepingLists } from "./companies/[company_id]/keeping_lists/post";
import { getCompaniesCompanyIdKeepingListsId } from "./companies/[company_id]/keeping_lists/[id]/get";
import { patchCompaniesCompanyIdKeepingListsId } from "./companies/[company_id]/keeping_lists/[id]/patch";
import { deleteCompaniesCompanyIdKeepingListsId } from "./companies/[company_id]/keeping_lists/[id]/delete";
import { postCompaniesCompanyIdKeepingListsKeepingListIdAccounts } from "./companies/[company_id]/keeping_lists/[keeping_list_id]/accounts/post";
import { deleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsId } from "./companies/[company_id]/keeping_lists/[keeping_list_id]/accounts/[id]/delete";
import { postCompaniesCompanyIdMarkAsRead } from "./companies/[company_id]/mark_as_read/post";
import { getCompaniesCompanyIdMessages } from "./companies/[company_id]/messages/get";
import { getCompaniesCompanyIdNotifications } from "./companies/[company_id]/notifications/get";
import { getCompaniesCompanyIdPaymentHistories } from "./companies/[company_id]/payment_histories/get";
import { getCompaniesCompanyIdPaymentHistoriesId } from "./companies/[company_id]/payment_histories/[id]/get";
import { getCompaniesCompanyIdPaymentMethods } from "./companies/[company_id]/payment_methods/get";
import { postCompaniesCompanyIdPaymentMethods } from "./companies/[company_id]/payment_methods/post";
import { getCompaniesCompanyIdPaymentMethodsId } from "./companies/[company_id]/payment_methods/[id]/get";
import { deleteCompaniesCompanyIdPaymentMethodsId } from "./companies/[company_id]/payment_methods/[id]/delete";
import { getCompaniesCompanyIdRecruitmentCompletionReports } from "./companies/[company_id]/recruitment_completion_reports/get";
import { postCompaniesCompanyIdRecruitmentCompletionReports } from "./companies/[company_id]/recruitment_completion_reports/post";
import { postCompaniesCompanyIdRecruitmentCompletionReportsCheck } from "./companies/[company_id]/recruitment_completion_reports/check/post";
import { getCompaniesCompanyIdRecruitmentCompletionReportsId } from "./companies/[company_id]/recruitment_completion_reports/[id]/get";
import { patchCompaniesCompanyIdRecruitmentCompletionReportsId } from "./companies/[company_id]/recruitment_completion_reports/[id]/patch";
import { postCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirm } from "./companies/[company_id]/recruitment_completion_reports/[recruitment_completion_report_id]/pay/[payment_intent_id]/confirm/post";
import { getCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/get";
import { postCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/post";
import { postCompaniesCompanyIdRecruitmentsCsvImport } from "./companies/[company_id]/recruitments/csv_import/post";
import { getCompaniesCompanyIdRecruitmentsId } from "./companies/[company_id]/recruitments/[id]/get";
import { patchCompaniesCompanyIdRecruitmentsId } from "./companies/[company_id]/recruitments/[id]/patch";
import { deleteCompaniesCompanyIdRecruitmentsId } from "./companies/[company_id]/recruitments/[id]/delete";
import { getCompaniesCompanyIdRecruitmentsRecruitmentIdApplicants } from "./companies/[company_id]/recruitments/[recruitment_id]/applicants/get";
import { getCompaniesCompanyIdRoles } from "./companies/[company_id]/roles/get";
import { postCompaniesCompanyIdRoles } from "./companies/[company_id]/roles/post";
import { getCompaniesCompanyIdRolesId } from "./companies/[company_id]/roles/[id]/get";
import { patchCompaniesCompanyIdRolesId } from "./companies/[company_id]/roles/[id]/patch";
import { deleteCompaniesCompanyIdRolesId } from "./companies/[company_id]/roles/[id]/delete";
import { getCompaniesCompanyIdRooms } from "./companies/[company_id]/rooms/get";
import { getCompaniesCompanyIdRoomsId } from "./companies/[company_id]/rooms/[id]/get";
import { patchCompaniesCompanyIdRoomsId } from "./companies/[company_id]/rooms/[id]/patch";
import { postCompaniesCompanyIdRoomsRoomIdMarkAsRead } from "./companies/[company_id]/rooms/[room_id]/mark_as_read/post";
import { getCompaniesCompanyIdRoomsRoomIdMessages } from "./companies/[company_id]/rooms/[room_id]/messages/get";
import { postCompaniesCompanyIdRoomsRoomIdMessages } from "./companies/[company_id]/rooms/[room_id]/messages/post";
import { getCompaniesCompanyIdScoutTemplates } from "./companies/[company_id]/scout_templates/get";
import { postCompaniesCompanyIdScoutTemplates } from "./companies/[company_id]/scout_templates/post";
import { getCompaniesCompanyIdScoutTemplatesId } from "./companies/[company_id]/scout_templates/[id]/get";
import { patchCompaniesCompanyIdScoutTemplatesId } from "./companies/[company_id]/scout_templates/[id]/patch";
import { deleteCompaniesCompanyIdScoutTemplatesId } from "./companies/[company_id]/scout_templates/[id]/delete";
import { postCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested } from "./companies/[company_id]/scout_templates/[id]/interested/post";
import { deleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested } from "./companies/[company_id]/scout_templates/[id]/interested/delete";
import { getCompaniesCompanyIdScoutTickets } from "./companies/[company_id]/scout_tickets/get";
import { postCompaniesCompanyIdScoutTicketsPay } from "./companies/[company_id]/scout_tickets/pay/post";
import { postCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirm } from "./companies/[company_id]/scout_tickets/pay/[payment_intent_id]/confirm/post";
import { getCompaniesCompanyIdScouts } from "./companies/[company_id]/scouts/get";
import { postCompaniesCompanyIdScouts } from "./companies/[company_id]/scouts/post";
import { getCompaniesCompanyIdScoutsId } from "./companies/[company_id]/scouts/[id]/get";
import { getCompaniesCompanyIdSearchConditions } from "./companies/[company_id]/search_conditions/get";
import { postCompaniesCompanyIdSearchConditions } from "./companies/[company_id]/search_conditions/post";
import { patchCompaniesCompanyIdStubId } from "./companies/[company_id]/stub/[id]/patch";
import { getCompaniesCompanyIdPlanSubscriptionsId } from "./companies/[company_id]/subscription/get";
import { patchCompaniesCompanyIdPlanSubscriptionsId } from "./companies/[company_id]/subscription/patch";
import { deleteCompaniesCompanyIdPlanSubscriptionsId } from "./companies/[company_id]/subscription/delete";
import { postCompaniesCompanyIdSubscriptionsId } from "./companies/[company_id]/subscription/post";
import { postCompaniesCompanyIdSubscriptionConfirm } from "./companies/[company_id]/subscription/confirm/post";
import { getCompaniesCompanyIdWithdrawalBalance } from "./companies/[company_id]/withdrawal_balance/get";
import { getCompaniesCompanyIdWithdrawals } from "./companies/[company_id]/withdrawals/get";
import { postCompaniesCompanyIdWithdrawals } from "./companies/[company_id]/withdrawals/post";
import { getCompaniesId } from "./companies/[id]/get";
import { patchCompaniesId } from "./companies/[id]/patch";
import { deleteCompaniesId } from "./companies/[id]/delete";
import { getCompaniesCompanyIdSearchConditionsId } from "./[company_id]/search_conditions/[id]/get";
import { patchCompaniesCompanyIdSearchConditionsId } from "./[company_id]/search_conditions/[id]/patch";
import { deleteCompaniesCompanyIdSearchConditionsId } from "./[company_id]/search_conditions/[id]/delete"

export const enterpriseApi = {
  getCompanies,
  getCompaniesIdAccounts,
  getCompaniesCompanyIdAccountsId,
  getCompaniesCompanyIdApplicantResources,
  patchCompaniesCompanyIdApplicantResources,
  getCompaniesCompanyIdApplicantStatusesId,
  patchCompaniesCompanyIdApplicantStatusesId,
  patchCompaniesCompanyIdApplicantResourcesIdAdd,
  getCompaniesCompanyIdBankAccount,
  postCompaniesCompanyIdBankAccount,
  deleteCompaniesCompanyIdBankAccount,
  postCompanies,
  getCompaniesCompanyIdEmployments,
  postCompaniesCompanyIdEmployments,
  postCompaniesCompanyIdEmploymentsInvite,
  getCompaniesCompanyIdEmploymentsId,
  patchCompaniesCompanyIdEmploymentsId,
  deleteCompaniesCompanyIdEmploymentsId,
  getCompaniesCompanyIdIdentification,
  getCompaniesCompanyIdIncomeHistories,
  getCompaniesCompanyIdIntroductionCompletionReports,
  postCompaniesCompanyIdIntroductionCompletionReports,
  postCompaniesCompanyIdIntroductionCompletionReportsCheck,
  getCompaniesCompanyIdIntroductionCompletionReportsId,
  patchCompaniesCompanyIdIntroductionCompletionReportsId,
  postCompaniesCompanyIdIntroductionCompletionReportsIntroductionCompletionReportIdPayPaymentIntentIdConfirm,
  getCompaniesCompanyIdInvoicesId,
  postCompaniesCompanyIdInvoicesIdApproved,
  postCompaniesCompanyIdInvoicesIdConfirm,
  postCompaniesCompanyIdInvoicesIdPay,
  getCompaniesCompanyIdJobOrders,
  postCompaniesCompanyIdJobOrders,
  postCompaniesCompanyIdJobOrdersCheck,
  getCompaniesCompanyIdJobOrdersJobOrderId,
  patchCompaniesCompanyIdJobOrdersJobOrderId,
  deleteCompaniesCompanyIdJobOrdersJobOrderId,
  getCompaniesCompanyIdWorkReviewsId,
  patchCompaniesCompanyIdWorkReviewsId,
  deleteCompaniesCompanyIdJobReviewsId,
  getCompaniesCompanyIdJobs,
  getCompaniesCompanyIdJobsId,
  patchCompaniesCompanyIdJobsId,
  getCompaniesCompanyIdWorksWorkIdInvoices,
  getCompaniesCompanyIdWorksWorkIdContractReviews,
  postCompaniesCompanyIdJobsJobIdJobReviews,
  getCompaniesCompanyIdKeepingLists,
  postCompaniesCompanyIdKeepingLists,
  getCompaniesCompanyIdKeepingListsId,
  patchCompaniesCompanyIdKeepingListsId,
  deleteCompaniesCompanyIdKeepingListsId,
  postCompaniesCompanyIdKeepingListsKeepingListIdAccounts,
  deleteCompaniesCompanyIdKeepingListsKeepingListIdAccountsId,
  postCompaniesCompanyIdMarkAsRead,
  getCompaniesCompanyIdMessages,
  getCompaniesCompanyIdNotifications,
  getCompaniesCompanyIdPaymentHistories,
  getCompaniesCompanyIdPaymentHistoriesId,
  getCompaniesCompanyIdPaymentMethods,
  postCompaniesCompanyIdPaymentMethods,
  getCompaniesCompanyIdPaymentMethodsId,
  deleteCompaniesCompanyIdPaymentMethodsId,
  getCompaniesCompanyIdRecruitmentCompletionReports,
  postCompaniesCompanyIdRecruitmentCompletionReports,
  postCompaniesCompanyIdRecruitmentCompletionReportsCheck,
  getCompaniesCompanyIdRecruitmentCompletionReportsId,
  patchCompaniesCompanyIdRecruitmentCompletionReportsId,
  postCompaniesCompanyIdRecruitmentCompletionReportsRecruitmentCompletionReportIdPayPaymentIntentIdConfirm,
  getCompaniesCompanyIdRecruitments,
  postCompaniesCompanyIdRecruitments,
  postCompaniesCompanyIdRecruitmentsCsvImport,
  getCompaniesCompanyIdRecruitmentsId,
  patchCompaniesCompanyIdRecruitmentsId,
  deleteCompaniesCompanyIdRecruitmentsId,
  getCompaniesCompanyIdRecruitmentsRecruitmentIdApplicants,
  getCompaniesCompanyIdRoles,
  postCompaniesCompanyIdRoles,
  getCompaniesCompanyIdRolesId,
  patchCompaniesCompanyIdRolesId,
  deleteCompaniesCompanyIdRolesId,
  getCompaniesCompanyIdRooms,
  getCompaniesCompanyIdRoomsId,
  patchCompaniesCompanyIdRoomsId,
  postCompaniesCompanyIdRoomsRoomIdMarkAsRead,
  getCompaniesCompanyIdRoomsRoomIdMessages,
  postCompaniesCompanyIdRoomsRoomIdMessages,
  getCompaniesCompanyIdScoutTemplates,
  postCompaniesCompanyIdScoutTemplates,
  getCompaniesCompanyIdScoutTemplatesId,
  patchCompaniesCompanyIdScoutTemplatesId,
  deleteCompaniesCompanyIdScoutTemplatesId,
  postCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested,
  deleteCompaniesCompanyIdScoutTemplatesScoutTemplateIdInterested,
  getCompaniesCompanyIdScoutTickets,
  postCompaniesCompanyIdScoutTicketsPay,
  postCompaniesCompanyIdScoutTicketsPayPaymentIntentIdConfirm,
  getCompaniesCompanyIdScouts,
  postCompaniesCompanyIdScouts,
  getCompaniesCompanyIdScoutsId,
  getCompaniesCompanyIdSearchConditions,
  postCompaniesCompanyIdSearchConditions,
  patchCompaniesCompanyIdStubId,
  getCompaniesCompanyIdPlanSubscriptionsId,
  patchCompaniesCompanyIdPlanSubscriptionsId,
  deleteCompaniesCompanyIdPlanSubscriptionsId,
  postCompaniesCompanyIdSubscriptionsId,
  postCompaniesCompanyIdSubscriptionConfirm,
  getCompaniesCompanyIdWithdrawalBalance,
  getCompaniesCompanyIdWithdrawals,
  postCompaniesCompanyIdWithdrawals,
  getCompaniesId,
  patchCompaniesId,
  deleteCompaniesId,
  getCompaniesCompanyIdSearchConditionsId,
  patchCompaniesCompanyIdSearchConditionsId,
  deleteCompaniesCompanyIdSearchConditionsId
};