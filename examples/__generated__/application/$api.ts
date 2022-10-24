/* eslint-disable */
import { getAcademicHistoriesId } from "./academic_histories/[id]/get";
import { patchAcademicHistoriesId } from "./academic_histories/[id]/patch";
import { deleteAcademicHistoriesId } from "./academic_histories/[id]/delete";
import { getAccountsAccountIdAcademicHistories } from "./accounts/[account_id]/academic_histories/get";
import { postAccountsAccountIdAcademicHistories } from "./accounts/[account_id]/academic_histories/post";
import { getAccountsAccountIdAchievements } from "./accounts/[account_id]/achievements/get";
import { postAccountsAccountIdAchievements } from "./accounts/[account_id]/achievements/post";
import { getAccountsAccountIdAgentProfile } from "./accounts/[account_id]/agent_profile/get";
import { postAccountsAccountIdAgentProfile } from "./accounts/[account_id]/agent_profile/post";
import { patchAccountsAccountIdAgentProfile } from "./accounts/[account_id]/agent_profile/patch";
import { getAccountsAccountIdProfileSpecialtyCompanyTypes } from "./accounts/[account_id]/agent_profile/specialty_company_types/get";
import { postAccountsAccountIdProfileSpecialtyCompanyTypes } from "./accounts/[account_id]/agent_profile/specialty_company_types/post";
import { getAccountsAccountIdProfileSpecialtyPositions } from "./accounts/[account_id]/agent_profile/specialty_positions/get";
import { postAccountsAccountIdProfileSpecialtyPositions } from "./accounts/[account_id]/agent_profile/specialty_positions/post";
import { getAccountsAccountIdApplicants } from "./accounts/[account_id]/applicants/get";
import { postAccountsAccountIdApplicants } from "./accounts/[account_id]/applicants/post";
import { getAccountsAccountIdBankAccount } from "./accounts/[account_id]/bank_account/get";
import { postAccountsAccountIdBankAccount } from "./accounts/[account_id]/bank_account/post";
import { postAccountsAccountIdBankAccountChange } from "./accounts/[account_id]/bank_account/change/post";
import { postAccountsAccountIdBlockCompanies } from "./accounts/[account_id]/block_companies/post";
import { getAccountsAccountIdBlockCompanies } from "./accounts/[account_id]/block_companies/get";
import { getAccountsAccountIdChannels } from "./accounts/[account_id]/channels/get";
import { getAccountsAccountIdEmployments } from "./accounts/[account_id]/employments/get";
import { deleteEmploymentsId } from "./accounts/[account_id]/employments/delete";
import { getAccountsAccountIdFollowing } from "./accounts/[account_id]/followings/get";
import { postAccountsAccountIdFollowing } from "./accounts/[account_id]/followings/post";
import { postAccountsAccountIdHopes } from "./accounts/[account_id]/hopes/post";
import { getAccountsAccountIdHopes } from "./accounts/[account_id]/hopes/get";
import { getAccountsAccountIdIdentification } from "./accounts/[account_id]/identification/get";
import { getAccountsAccountIdIncomeHistories } from "./accounts/[account_id]/income_histories/get";
import { getAccountsAccountIdIndustryHistories } from "./accounts/[account_id]/industry_histories/get";
import { postAccountsAccountIdIndustryHistories } from "./accounts/[account_id]/industry_histories/post";
import { postAccountsAccountIdIndustryHistory } from "./accounts/[account_id]/industry_history/post";
import { postAccountsAccountIdCompletionReports } from "./accounts/[account_id]/job_change_completion_reports/post";
import { getAccountsAccountIdJobChangeCompletionReports } from "./accounts/[account_id]/job_change_completion_reports/get";
import { getAccountsAccountIdJobOrders } from "./accounts/[account_id]/job_orders/get";
import { getAccountsAccountIdJobs } from "./accounts/[account_id]/jobs/get";
import { postAccountsAccountIdMarkAsRead } from "./accounts/[account_id]/mark_as_read/post";
import { getAccountsAccountIdMessages } from "./accounts/[account_id]/messages/get";
import { getaccountsAccountIdAgreeConsentMatters } from "./accounts/[account_id]/not_agreed_consent_matters/get";
import { getAccountsAccountIdNotifications } from "./accounts/[account_id]/notifications/get";
import { getAccountsAccountIdOccupationHistories } from "./accounts/[account_id]/occupation_histories/get";
import { postAccountsAccountIdOccupationHistories } from "./accounts/[account_id]/occupation_histories/post";
import { postAccountsAccountIdOccupationHistory } from "./accounts/[account_id]/occupation_history/post";
import { getAccountsAccountIdProfile } from "./accounts/[account_id]/profile/get";
import { postAccountsAccountIdProfile } from "./accounts/[account_id]/profile/post";
import { patchAccountsAccountIdProfile } from "./accounts/[account_id]/profile/patch";
import { patchAccountsAccountIdProfileFiles } from "./accounts/[account_id]/profile/files/patch";
import { deleteAccountsAccountIdProfileFilesId } from "./accounts/[account_id]/profile/files/[file_id]/delete";
import { getAccountsAccountIdProjectResults } from "./accounts/[account_id]/project_result/get";
import { getAccountsAccountIdRecruitmentInterests } from "./accounts/[account_id]/recruitment_interests/get";
import { postAccountsAccountIdRecruitmentInterests } from "./accounts/[account_id]/recruitment_interests/post";
import { getAccountsAccountIdScouts } from "./accounts/[account_id]/scouts/get";
import { patchAccountsAccountIdScouts } from "./accounts/[account_id]/scouts/patch";
import { getAccountsAccountIdSkills } from "./accounts/[account_id]/skills/get";
import { patchAccountsAccountIdSkills } from "./accounts/[account_id]/skills/patch";
import { postAccountsAccountIdSupport } from "./accounts/[account_id]/support/post";
import { deleteAccountsAccountIdSupport } from "./accounts/[account_id]/support/delete";
import { patchAccountsAccountIdSupport } from "./accounts/[account_id]/support/patch";
import { getAccountsAccountIdSupport } from "./accounts/[account_id]/support/get";
import { getAccountsAccountIdWithdrawalBalance } from "./accounts/[account_id]/withdrawal_balance/get";
import { getAccountsAccountIdWithdrawals } from "./accounts/[account_id]/withdrawals/get";
import { postAccountsAccountIdWithdrawals } from "./accounts/[account_id]/withdrawals/post";
import { getAccountsAccountIdWorkHistories } from "./accounts/[account_id]/work_histories/get";
import { postAccountsAccountIdWorkHistories } from "./accounts/[account_id]/work_histories/post";
import { getAccounts } from "./accounts/get";
import { getAccountsId } from "./accounts/[id]/get";
import { patchAccountsId } from "./accounts/[id]/patch";
import { deleteAccountsId } from "./accounts/[id]/delete";
import { patchAchievementsId } from "./achievements/[id]/patch";
import { deleteAchievementsId } from "./achievements/[id]/delete";
import { deleteBlockCompanies } from "./block_companies/[company_id]/delete";
import { postChannelsChannelIdMarkAsRead } from "./channels/[channel_id]/mark_as_read/post";
import { getChannelsChannelIdMessages } from "./channels/[channel_id]/messages/get";
import { postChannelsChannelIdMessagesSaveDraft } from "./channels/[channel_id]/messages/save_draft/post";
import { postChannelsChannelIdMessagesSubmit } from "./channels/[channel_id]/messages/submit/post";
import { getChannelsId } from "./channels/[id]/get";
import { getCompanies } from "./companies/get";
import { postCompanies } from "./companies/post";
import { getCompaniesRecommended } from "./companies/recommended/get";
import { getCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/get";
import { getCompaniesId } from "./companies/[id]/get";
import { getContentMattersId } from "./consent_matters/[id]/get";
import { getContentMatters } from "./content_matters/get";
import { getEmploymentsVerifyEmail } from "./employments/verify_email/get";
import { postEmploymentsEmploymentIdJoin } from "./employments/[employment_id]/join/post";
import { deleteAccountsAccountIdFollowingCompanyId } from "./followings/[company_id]/delete";
import { getHopesId } from "./hopes/[id]/get";
import { patchHopesId } from "./hopes/[id]/patch";
import { deleteHopesId } from "./hopes/[id]/delete";
import { getIndustryCategories } from "./industry_categories/get";
import { getIndustryHistoriesId } from "./industry_histories/[id]/get";
import { patchIndustryHistoriesId } from "./industry_histories/[id]/patch";
import { deleteIndustryHistoriesId } from "./industry_histories/[id]/delete";
import { getInvoicesId } from "./invoices/[id]/get";
import { patchInvoicesId } from "./invoices/[id]/patch";
import { patchInvoicesInvoiceIdFiles } from "./invoices/[invoice_id]/files/patch";
import { deleteInvoicesInvoiceIdFilesFileId } from "./invoices/[invoice_id]/files/[file_id]/delete";
import { getJobChangeCompletionReportsId } from "./job_change_completion_reports/[id]/get";
import { getJobOrdersId } from "./job_orders/[id]/get";
import { patchJobOrdersId } from "./job_orders/[id]/patch";
import { getJobReviewsId } from "./job_reviews/[id]/get";
import { getJobsId } from "./jobs/[id]/get";
import { patchJobsId } from "./jobs/[id]/patch";
import { getJobsJobIdInvoices } from "./jobs/[job_id]/invoices/get";
import { postJobsJobIdInvoices } from "./jobs/[job_id]/invoices/post";
import { getJobsJobIdJobReviews } from "./jobs/[job_id]/job_reviews/get";
import { getMessagesId } from "./messages/[id]/get";
import { getNda } from "./nda/get";
import { postNdaNdaIdConsent } from "./nda/[nda_id]/consent/post";
import { deleteNotAgreedConsentMattersId } from "./not_agreed_consent_matters/[id]/delete";
import { getOccupationHistoriesId } from "./occupation_histories/[id]/get";
import { patchOccupationHistoriesId } from "./occupation_histories/[id]/patch";
import { deleteOccupationHistoriesId } from "./occupation_histories/[id]/delete";
import { getOccupationMainCategories } from "./occupation_main_categories/get";
import { getPolicies } from "./policies/get";
import { patchProjectHistoriesId } from "./project_histories/[id]/patch";
import { deleteProjectHistoriesId } from "./project_histories/[id]/delete";
import { deleteRecruitmentInterestsRecruitmentId } from "./recruitment_interests/[recruitment_id]/delete";
import { getRecruitments } from "./recruitments/get";
import { getRecruitmentsRecommended } from "./recruitments/recommended/get";
import { getRecruitmentsId } from "./recruitments/[id]/get";
import { getScoutsId } from "./scouts/[id]/get";
import { getSkills } from "./skills/get";
import { postSkills } from "./skills/post";
import { patchSpecialtyCompanyTypesId } from "./specialty_company_types/[id]/patch";
import { deleteSpecialtyCompanyTypesId } from "./specialty_company_types/[id]/delete";
import { patchSpecialtyPositionsId } from "./specialty_positions/[id]/patch";
import { deleteSpecialtyPositionsId } from "./specialty_positions/[id]/delete";
import { getCities } from "./state_categories/get";
import { getCitiesId } from "./state_categories/[id]/get";
import { postTechStack } from "./tech_stacks/post";
import { getWorkHistoriesId } from "./work_histories/[id]/get";
import { patchWorkHistoriesId } from "./work_histories/[id]/patch";
import { deleteWorkHistoriesId } from "./work_histories/[id]/delete";
import { getWorkHistoriesWorkHistoryIdProjectHistories } from "./work_histories/[work_history_id]/project_histories/get";
import { postWorkHistoriesWorkHistoryIdProjectHistories } from "./work_histories/[work_history_id]/project_histories/post"

export const applicationApi = {
  getAcademicHistoriesId,
  patchAcademicHistoriesId,
  deleteAcademicHistoriesId,
  getAccountsAccountIdAcademicHistories,
  postAccountsAccountIdAcademicHistories,
  getAccountsAccountIdAchievements,
  postAccountsAccountIdAchievements,
  getAccountsAccountIdAgentProfile,
  postAccountsAccountIdAgentProfile,
  patchAccountsAccountIdAgentProfile,
  getAccountsAccountIdProfileSpecialtyCompanyTypes,
  postAccountsAccountIdProfileSpecialtyCompanyTypes,
  getAccountsAccountIdProfileSpecialtyPositions,
  postAccountsAccountIdProfileSpecialtyPositions,
  getAccountsAccountIdApplicants,
  postAccountsAccountIdApplicants,
  getAccountsAccountIdBankAccount,
  postAccountsAccountIdBankAccount,
  postAccountsAccountIdBankAccountChange,
  postAccountsAccountIdBlockCompanies,
  getAccountsAccountIdBlockCompanies,
  getAccountsAccountIdChannels,
  getAccountsAccountIdEmployments,
  deleteEmploymentsId,
  getAccountsAccountIdFollowing,
  postAccountsAccountIdFollowing,
  postAccountsAccountIdHopes,
  getAccountsAccountIdHopes,
  getAccountsAccountIdIdentification,
  getAccountsAccountIdIncomeHistories,
  getAccountsAccountIdIndustryHistories,
  postAccountsAccountIdIndustryHistories,
  postAccountsAccountIdIndustryHistory,
  postAccountsAccountIdCompletionReports,
  getAccountsAccountIdJobChangeCompletionReports,
  getAccountsAccountIdJobOrders,
  getAccountsAccountIdJobs,
  postAccountsAccountIdMarkAsRead,
  getAccountsAccountIdMessages,
  getaccountsAccountIdAgreeConsentMatters,
  getAccountsAccountIdNotifications,
  getAccountsAccountIdOccupationHistories,
  postAccountsAccountIdOccupationHistories,
  postAccountsAccountIdOccupationHistory,
  getAccountsAccountIdProfile,
  postAccountsAccountIdProfile,
  patchAccountsAccountIdProfile,
  patchAccountsAccountIdProfileFiles,
  deleteAccountsAccountIdProfileFilesId,
  getAccountsAccountIdProjectResults,
  getAccountsAccountIdRecruitmentInterests,
  postAccountsAccountIdRecruitmentInterests,
  getAccountsAccountIdScouts,
  patchAccountsAccountIdScouts,
  getAccountsAccountIdSkills,
  patchAccountsAccountIdSkills,
  postAccountsAccountIdSupport,
  deleteAccountsAccountIdSupport,
  patchAccountsAccountIdSupport,
  getAccountsAccountIdSupport,
  getAccountsAccountIdWithdrawalBalance,
  getAccountsAccountIdWithdrawals,
  postAccountsAccountIdWithdrawals,
  getAccountsAccountIdWorkHistories,
  postAccountsAccountIdWorkHistories,
  getAccounts,
  getAccountsId,
  patchAccountsId,
  deleteAccountsId,
  patchAchievementsId,
  deleteAchievementsId,
  deleteBlockCompanies,
  postChannelsChannelIdMarkAsRead,
  getChannelsChannelIdMessages,
  postChannelsChannelIdMessagesSaveDraft,
  postChannelsChannelIdMessagesSubmit,
  getChannelsId,
  getCompanies,
  postCompanies,
  getCompaniesRecommended,
  getCompaniesCompanyIdRecruitments,
  getCompaniesId,
  getContentMattersId,
  getContentMatters,
  getEmploymentsVerifyEmail,
  postEmploymentsEmploymentIdJoin,
  deleteAccountsAccountIdFollowingCompanyId,
  getHopesId,
  patchHopesId,
  deleteHopesId,
  getIndustryCategories,
  getIndustryHistoriesId,
  patchIndustryHistoriesId,
  deleteIndustryHistoriesId,
  getInvoicesId,
  patchInvoicesId,
  patchInvoicesInvoiceIdFiles,
  deleteInvoicesInvoiceIdFilesFileId,
  getJobChangeCompletionReportsId,
  getJobOrdersId,
  patchJobOrdersId,
  getJobReviewsId,
  getJobsId,
  patchJobsId,
  getJobsJobIdInvoices,
  postJobsJobIdInvoices,
  getJobsJobIdJobReviews,
  getMessagesId,
  getNda,
  postNdaNdaIdConsent,
  deleteNotAgreedConsentMattersId,
  getOccupationHistoriesId,
  patchOccupationHistoriesId,
  deleteOccupationHistoriesId,
  getOccupationMainCategories,
  getPolicies,
  patchProjectHistoriesId,
  deleteProjectHistoriesId,
  deleteRecruitmentInterestsRecruitmentId,
  getRecruitments,
  getRecruitmentsRecommended,
  getRecruitmentsId,
  getScoutsId,
  getSkills,
  postSkills,
  patchSpecialtyCompanyTypesId,
  deleteSpecialtyCompanyTypesId,
  patchSpecialtyPositionsId,
  deleteSpecialtyPositionsId,
  getCities,
  getCitiesId,
  postTechStack,
  getWorkHistoriesId,
  patchWorkHistoriesId,
  deleteWorkHistoriesId,
  getWorkHistoriesWorkHistoryIdProjectHistories,
  postWorkHistoriesWorkHistoryIdProjectHistories
};