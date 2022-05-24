import { getAccountsId } from "./accounts/[id]/get";
import { patchAccountsId } from "./accounts/[id]/patch";
import { deleteAccountsId } from "./accounts/[id]/delete";
import { getAccountsAccountIdFollowing } from "./accounts/[account_id]/followings/get";
import { postAccountsAccountIdFollowing } from "./accounts/[account_id]/followings/post";
import { getAccountsAccountIdRooms } from "./accounts/[account_id]/rooms/get";
import { getAccountsAccountIdNotifications } from "./accounts/[account_id]/notifications/get";
import { getAccountsAccountIdSearchConditions } from "./accounts/[account_id]/search_conditions/get";
import { postCompaniesCompanyIdSearchConditions } from "./accounts/[account_id]/search_conditions/post";
import { getAccountsAccountIdApplicants } from "./accounts/[account_id]/applicants/get";
import { postAccountsAccountIdApplicants } from "./accounts/[account_id]/applicants/post";
import { getAccountsAccountIdWorkHistories } from "./accounts/[account_id]/work_histories/get";
import { postAccountsAccountIdWorkHistories } from "./accounts/[account_id]/work_histories/post";
import { getAccountsAccountIdAcademicHistories } from "./accounts/[account_id]/academic_histories/get";
import { postAccountsAccountIdAcademicHistories } from "./accounts/[account_id]/academic_histories/post";
import { getAccountsAccountIdProfile } from "./accounts/[account_id]/profile/get";
import { postAccountsAccountIdProfile } from "./accounts/[account_id]/profile/post";
import { patchAccountsAccountIdProfile } from "./accounts/[account_id]/profile/patch";
import { putAccountsAccountIdProfileFiles } from "./accounts/[account_id]/profile/files/put";
import { deleteAccountsAccountIdProfileFilesId } from "./accounts/[account_id]/profile/files/[file_id]/delete";
import { getAccountsAccountIdProfileSpecialtyCompanyTypes } from "./accounts/[account_id]/profile/specialty_company_types/get";
import { postAccountsAccountIdProfileSpecialtyCompanyTypes } from "./accounts/[account_id]/profile/specialty_company_types/post";
import { getAccountsAccountIdProfileSpecialtyPositions } from "./accounts/[account_id]/profile/specialty_positions/get";
import { postAccountsAccountIdProfileSpecialtyPositions } from "./accounts/[account_id]/profile/specialty_positions/post";
import { getAccountsAccountIdEmployments } from "./accounts/[account_id]/employments/get";
import { deleteEmploymentsId } from "./accounts/[account_id]/employments/delete";
import { getAccountsAccountIdSkills } from "./accounts/[account_id]/skills/get";
import { patchAccountsAccountIdSkills } from "./accounts/[account_id]/skills/patch";
import { getAccountsAccountIdMessages } from "./accounts/[account_id]/messages/get";
import { getAccountsAccountIdIncomeHistories } from "./accounts/[account_id]/income_histories/get";
import { getAccountsAccountIdWithdrawals } from "./accounts/[account_id]/withdrawals/get";
import { postAccountsAccountIdWithdrawals } from "./accounts/[account_id]/withdrawals/post";
import { getAccountsAccountIdWithdrawalBalance } from "./accounts/[account_id]/withdrawal_balance/get";
import { getAccountsAccountIdBankAccount } from "./accounts/[account_id]/bank_account/get";
import { postAccountsAccountIdBankAccount } from "./accounts/[account_id]/bank_account/post";
import { postAccountsAccountIdBankAccountChange } from "./accounts/[account_id]/bank_account/change/post";
import { getAccountsAccountIdContracts } from "./accounts/[account_id]/job_orders/get";
import { getAccountsAccountIdWorks } from "./accounts/[account_id]/jobs/get";
import { getAccountsAccountIdRecruitmentInterests } from "./accounts/[account_id]/recruitment_interests/get";
import { postAccountsAccountIdRecruitmentInterests } from "./accounts/[account_id]/recruitment_interests/post";
import { postAccountsAccountIdSupport } from "./accounts/[account_id]/support/post";
import { deleteAccountsAccountIdSupport } from "./accounts/[account_id]/support/delete";
import { patchAccountsAccountIdSupport } from "./accounts/[account_id]/support/patch";
import { getAccountsAccountIdSupport } from "./accounts/[account_id]/support/get";
import { getAccountsAccountIdProjectResults } from "./accounts/[account_id]/project_result/get";
import { getAccountsAccountIdAchievements } from "./accounts/[account_id]/achievements/get";
import { postAccountsAccountIdAchievements } from "./accounts/[account_id]/achievements/post";
import { postAccountsAccountIdMarkAsRead } from "./accounts/[account_id]/mark_as_read/post";
import { postAccountsAccountIdHopes } from "./accounts/[account_id]/hopes/post";
import { getAccountsAccountIdHope } from "./accounts/[account_id]/hopes/get";
import { getAccountsAccountIdIndustryHistories } from "./accounts/[account_id]/industry_histories/get";
import { postAccountsAccountIdIndustryHistories } from "./accounts/[account_id]/industry_histories/post";
import { getAccountsAccountIdOccupationHistories } from "./accounts/[account_id]/occupation_histories/get";
import { postAccountsAccountIdOccupationHistories } from "./accounts/[account_id]/occupation_histories/post";
import { getAccountsAccountIdIdentification } from "./accounts/[account_id]/identification/get";
import { getaccountsAccountIdAgreeConsentMatters } from "./accounts/[account_id]/not_agreed_consent_matters/get";
import { postAccountsAccountIdCompletionReports } from "./accounts/[account_id]/job_change_completion_reports/post";
import { getAccountsAccountIdJobChangeCompletionReports } from "./accounts/[account_id]/job_change_completion_reports/get";
import { deleteAccountsAccountIdFollowingCompanyId } from "./followings/[company_id]/delete";
import { getRecruitments } from "./recruitments/get";
import { getRecruitmentsRecommended } from "./recruitments/recommended/get";
import { getRecruitmentsId } from "./recruitments/[id]/get";
import { getAccountsAccountIdRoomsId } from "./rooms/[id]/get";
import { getAccountsAccountIdRoomsRoomIdMessages } from "./rooms/[room_id]/messages/get";
import { postAccountsAccountIdRoomsRoomIdMessages } from "./rooms/[room_id]/messages/post";
import { postRoomsRoomIdMarkAsRead } from "./rooms/[room_id]/mark_as_read/post";
import { getAccountsAccountIdRoomsRoomIdMessagesId } from "./messages/[id]/get";
import { getContentMatters } from "./content_matters/get";
import { getContentMattersId } from "./consent_matters/[id]/get";
import { getSearchConditionsId } from "./search_conditions/[id]/get";
import { patchCompaniesCompanyIdSearchConditions } from "./search_conditions/[id]/patch";
import { deleteSearchConditionsId } from "./search_conditions/[id]/delete";
import { getJobChangeCompletionReportsId } from "./job_change_completion_reports/[id]/get";
import { getCities } from "./state_categories/get";
import { getCitiesId } from "./state_categories/[id]/get";
import { getWorkHistoriesId } from "./work_histories/[id]/get";
import { patchWorkHistoriesId } from "./work_histories/[id]/patch";
import { deleteWorkHistoriesId } from "./work_histories/[id]/delete";
import { getWorkHistoriesWorkHistoryIdProjectHistories } from "./work_histories/[work_history_id]/project_histories/get";
import { postWorkHistoriesWorkHistoryIdProjectHistories } from "./work_histories/[work_history_id]/project_histories/post";
import { patchProjectHistoriesId } from "./project_histories/[id]/patch";
import { deleteProjectHistoriesId } from "./project_histories/[id]/delete";
import { getAcademicHistoriesId } from "./academic_histories/[id]/get";
import { patchAcademicHistoriesId } from "./academic_histories/[id]/patch";
import { deleteAcademicHistoriesId } from "./academic_histories/[id]/delete";
import { deleteNotAgreedConsentMattersId } from "./not_agreed_consent_matters/[id]/delete";
import { getOccupationMainCategories } from "./occupation_main_categories/get";
import { getIndustryCategories } from "./industry_categories/get";
import { getCompanies } from "./companies/get";
import { postCompanies } from "./companies/post";
import { getCompaniesRecommended } from "./companies/recommended/get";
import { getCompaniesId } from "./companies/[id]/get";
import { getCompaniesCompanyIdRecruitments } from "./companies/[company_id]/recruitments/get";
import { getOccupationHistoriesId } from "./occupation_histories/[id]/get";
import { patchOccupationHistoriesId } from "./occupation_histories/[id]/patch";
import { deleteOccupationHistoriesId } from "./occupation_histories/[id]/delete";
import { getIndustryHistoriesId } from "./industry_histories/[id]/get";
import { patchIndustryHistoriesId } from "./industry_histories/[id]/patch";
import { deleteIndustryHistoriesId } from "./industry_histories/[id]/delete";
import { getHopesId } from "./hopes/[id]/get";
import { patchHopesId } from "./hopes/[id]/patch";
import { deleteHopesId } from "./hopes/[id]/delete";
import { getNda } from "./nda/get";
import { postNdaNdaIdConsent } from "./nda/[nda_id]/consent/post";
import { getEmploymentsVerifyEmail } from "./employments/verify_email/get";
import { postEmploymentsEmploymentIdJoin } from "./employments/[employment_id]/join/post";
import { getSkills } from "./skills/get";
import { postSkills } from "./skills/post";
import { getPolicies } from "./policies/get";
import { patchAchievementsId } from "./achievements/[id]/patch";
import { deleteAchievementsId } from "./achievements/[id]/delete";
import { deleteRecruitmentInterestsRecruitmentId } from "./recruitment_interests/[recruitment_id]/delete";
import { patchSpecialtyCompanyTypesId } from "./specialty_company_types/[id]/patch";
import { deleteSpecialtyCompanyTypesId } from "./specialty_company_types/[id]/delete";
import { patchSpecialtyPositionsId } from "./specialty_positions/[id]/patch";
import { deleteSpecialtyPositionsId } from "./specialty_positions/[id]/delete";
import { getJobOrdersId } from "./job_orders/[id]/get";
import { patchJobOrdersId } from "./job_orders/[id]/patch";
import { getJobsId } from "./jobs/[id]/get";
import { patchJobsId } from "./jobs/[id]/patch";
import { getJobsJobIdContracts } from "./jobs/[job_id]/invoices/get";
import { postJobsJobIdInvoices } from "./jobs/[job_id]/invoices/post";
import { postJobsJobIdInvoicesCheck } from "./jobs/[job_id]/invoices/check/post";
import { getInvoicesId } from "./invoices/[id]/get";
import { getJobsJobIdJobReviews } from "./jobs/[job_id]/job_reviews/get";
import { getJobReviewsId } from "./job_reviews/[id]/get"

export const applicationApi = () => {
 return {
    getAccountsId,
    patchAccountsId,
    deleteAccountsId,
    getAccountsAccountIdFollowing,
    postAccountsAccountIdFollowing,
    getAccountsAccountIdRooms,
    getAccountsAccountIdNotifications,
    getAccountsAccountIdSearchConditions,
    postCompaniesCompanyIdSearchConditions,
    getAccountsAccountIdApplicants,
    postAccountsAccountIdApplicants,
    getAccountsAccountIdWorkHistories,
    postAccountsAccountIdWorkHistories,
    getAccountsAccountIdAcademicHistories,
    postAccountsAccountIdAcademicHistories,
    getAccountsAccountIdProfile,
    postAccountsAccountIdProfile,
    patchAccountsAccountIdProfile,
    putAccountsAccountIdProfileFiles,
    deleteAccountsAccountIdProfileFilesId,
    getAccountsAccountIdProfileSpecialtyCompanyTypes,
    postAccountsAccountIdProfileSpecialtyCompanyTypes,
    getAccountsAccountIdProfileSpecialtyPositions,
    postAccountsAccountIdProfileSpecialtyPositions,
    getAccountsAccountIdEmployments,
    deleteEmploymentsId,
    getAccountsAccountIdSkills,
    patchAccountsAccountIdSkills,
    getAccountsAccountIdMessages,
    getAccountsAccountIdIncomeHistories,
    getAccountsAccountIdWithdrawals,
    postAccountsAccountIdWithdrawals,
    getAccountsAccountIdWithdrawalBalance,
    getAccountsAccountIdBankAccount,
    postAccountsAccountIdBankAccount,
    postAccountsAccountIdBankAccountChange,
    getAccountsAccountIdContracts,
    getAccountsAccountIdWorks,
    getAccountsAccountIdRecruitmentInterests,
    postAccountsAccountIdRecruitmentInterests,
    postAccountsAccountIdSupport,
    deleteAccountsAccountIdSupport,
    patchAccountsAccountIdSupport,
    getAccountsAccountIdSupport,
    getAccountsAccountIdProjectResults,
    getAccountsAccountIdAchievements,
    postAccountsAccountIdAchievements,
    postAccountsAccountIdMarkAsRead,
    postAccountsAccountIdHopes,
    getAccountsAccountIdHope,
    getAccountsAccountIdIndustryHistories,
    postAccountsAccountIdIndustryHistories,
    getAccountsAccountIdOccupationHistories,
    postAccountsAccountIdOccupationHistories,
    getAccountsAccountIdIdentification,
    getaccountsAccountIdAgreeConsentMatters,
    postAccountsAccountIdCompletionReports,
    getAccountsAccountIdJobChangeCompletionReports,
    deleteAccountsAccountIdFollowingCompanyId,
    getRecruitments,
    getRecruitmentsRecommended,
    getRecruitmentsId,
    getAccountsAccountIdRoomsId,
    getAccountsAccountIdRoomsRoomIdMessages,
    postAccountsAccountIdRoomsRoomIdMessages,
    postRoomsRoomIdMarkAsRead,
    getAccountsAccountIdRoomsRoomIdMessagesId,
    getContentMatters,
    getContentMattersId,
    getSearchConditionsId,
    patchCompaniesCompanyIdSearchConditions,
    deleteSearchConditionsId,
    getJobChangeCompletionReportsId,
    getCities,
    getCitiesId,
    getWorkHistoriesId,
    patchWorkHistoriesId,
    deleteWorkHistoriesId,
    getWorkHistoriesWorkHistoryIdProjectHistories,
    postWorkHistoriesWorkHistoryIdProjectHistories,
    patchProjectHistoriesId,
    deleteProjectHistoriesId,
    getAcademicHistoriesId,
    patchAcademicHistoriesId,
    deleteAcademicHistoriesId,
    deleteNotAgreedConsentMattersId,
    getOccupationMainCategories,
    getIndustryCategories,
    getCompanies,
    postCompanies,
    getCompaniesRecommended,
    getCompaniesId,
    getCompaniesCompanyIdRecruitments,
    getOccupationHistoriesId,
    patchOccupationHistoriesId,
    deleteOccupationHistoriesId,
    getIndustryHistoriesId,
    patchIndustryHistoriesId,
    deleteIndustryHistoriesId,
    getHopesId,
    patchHopesId,
    deleteHopesId,
    getNda,
    postNdaNdaIdConsent,
    getEmploymentsVerifyEmail,
    postEmploymentsEmploymentIdJoin,
    getSkills,
    postSkills,
    getPolicies,
    patchAchievementsId,
    deleteAchievementsId,
    deleteRecruitmentInterestsRecruitmentId,
    patchSpecialtyCompanyTypesId,
    deleteSpecialtyCompanyTypesId,
    patchSpecialtyPositionsId,
    deleteSpecialtyPositionsId,
    getJobOrdersId,
    patchJobOrdersId,
    getJobsId,
    patchJobsId,
    getJobsJobIdContracts,
    postJobsJobIdInvoices,
    postJobsJobIdInvoicesCheck,
    getInvoicesId,
    getJobsJobIdJobReviews,
    getJobReviewsId
  }
};