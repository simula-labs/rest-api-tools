import { getEmploymentStatuses } from "./employment_statuses/get";
import { postEmploymentStatuses } from "./employment_statuses/post";
import { getEmploymentStatusesId } from "./employment_statuses/[id]/get";
import { patchEmploymentStatusesId } from "./employment_statuses/[id]/patch";
import { deleteEmploymentStatusesId } from "./employment_statuses/[id]/delete";
import { getStates } from "./states/get";
import { postStates } from "./states/post";
import { getStatesId } from "./states/[id]/get";
import { patchStatesId } from "./states/[id]/patch";
import { deleteStatesId } from "./states/[id]/delete";
import { getTermHistories } from "./term_histories/get";
import { postTermHistories } from "./term_histories/post";
import { getTermHistoriesId } from "./term_histories/[id]/get";
import { getPrivacyPolicyHistories } from "./privacy_policy_histories/get";
import { postPrivacyPolicyHistories } from "./privacy_policy_histories/post";
import { getPrivacyPolicyHistoriesId } from "./privacy_policy_histories/[id]/get";
import { getConsentMatters } from "./consent_matters/get";
import { postConsentMatters } from "./consent_matters/post";
import { getConsentMattersId } from "./consent_matters/[id]/get";
import { getProduct } from "./products/get";
import { postProduct } from "./products/post";
import { getProductsId } from "./products/[id]/get";
import { patchProductsId } from "./products/[id]/patch";
import { deleteProductsId } from "./products/[id]/delete";
import { getProductsIdPrices } from "./products/[id]/prices/get";
import { postProductsIdPrices } from "./products/[id]/prices/post";
import { getPricesId } from "./prices/[id]/get";
import { patchPricesId } from "./prices/[id]/patch";
import { getJobChangeCompletionReports } from "./job_change_completion_reports/get";
import { getRecruitmentCompletionReports } from "./recruitment_completion_reports/get";
import { getRecruitments } from "./recruitments/get";
import { getRecruitmentsId } from "./recruitments/[id]/get";
import { patchRecruitmentsId } from "./recruitments/[id]/patch";
import { deleteRecruitmentsId } from "./recruitments/[id]/delete";
import { getCompanies } from "./companies/get";
import { getCompaniesId } from "./companies/[id]/get";
import { patchCompaniesId } from "./companies/[id]/patch";
import { deleteCompaniesId } from "./companies/[id]/delete";
import { postCompaniesCompanyIdAccept } from "./companies/[company_id]/accept/post";
import { postCompaniesCompanyIdReject } from "./companies/[company_id]/reject/post";
import { postCompaniesCompanyIdForcedCancel } from "./companies/[company_id]/forced_cancel/post";
import { getAccounts } from "./accounts/get";
import { getAccountsId } from "./accounts/[id]/get";
import { patchAccountsId } from "./accounts/[id]/patch";
import { deleteAccountsId } from "./accounts/[id]/delete";
import { getAccountsAccountIdAcademicHistories } from "./accounts/[account_id]/academic_histories/get";
import { getAccountsAccountIdWorkHistories } from "./accounts/[account_id]/work_histories/get";
import { getAccountsAccountIdSkills } from "./accounts/[account_id]/skills/get";
import { getAccountsAccountIdHopes } from "./accounts/[account_id]/hopes/get";
import { getAccountsAccountIdProjectResult } from "./accounts/[account_id]/project_result/get";
import { getAccountsAccountIdOccupationHistories } from "./accounts/[account_id]/occupation_histories/get";
import { getAccountsAccountIdIndustryHistories } from "./accounts/[account_id]/industry_histories/get";
import { getAccountsAccountIdAchievements } from "./accounts/[account_id]/achievements/get";
import { getWithdrawals } from "./withdrawals/get";
import { getPayouts } from "./payouts/get";
import { getFeatures } from "./features/get";
import { postFeatures } from "./features/post";
import { getOfficialInformations } from "./official_informations/get";
import { postOfficialInformations } from "./official_informations/post";
import { getOfficialInformationsId } from "./official_informations/[id]/get";
import { patchOfficialInformationsId } from "./official_informations/[id]/patch";
import { deleteOfficialInformationsId } from "./official_informations/[id]/delete"

export const adminApi = () => {
 return {
    getEmploymentStatuses,
    postEmploymentStatuses,
    getEmploymentStatusesId,
    patchEmploymentStatusesId,
    deleteEmploymentStatusesId,
    getStates,
    postStates,
    getStatesId,
    patchStatesId,
    deleteStatesId,
    getTermHistories,
    postTermHistories,
    getTermHistoriesId,
    getPrivacyPolicyHistories,
    postPrivacyPolicyHistories,
    getPrivacyPolicyHistoriesId,
    getConsentMatters,
    postConsentMatters,
    getConsentMattersId,
    getProduct,
    postProduct,
    getProductsId,
    patchProductsId,
    deleteProductsId,
    getProductsIdPrices,
    postProductsIdPrices,
    getPricesId,
    patchPricesId,
    getJobChangeCompletionReports,
    getRecruitmentCompletionReports,
    getRecruitments,
    getRecruitmentsId,
    patchRecruitmentsId,
    deleteRecruitmentsId,
    getCompanies,
    getCompaniesId,
    patchCompaniesId,
    deleteCompaniesId,
    postCompaniesCompanyIdAccept,
    postCompaniesCompanyIdReject,
    postCompaniesCompanyIdForcedCancel,
    getAccounts,
    getAccountsId,
    patchAccountsId,
    deleteAccountsId,
    getAccountsAccountIdAcademicHistories,
    getAccountsAccountIdWorkHistories,
    getAccountsAccountIdSkills,
    getAccountsAccountIdHopes,
    getAccountsAccountIdProjectResult,
    getAccountsAccountIdOccupationHistories,
    getAccountsAccountIdIndustryHistories,
    getAccountsAccountIdAchievements,
    getWithdrawals,
    getPayouts,
    getFeatures,
    postFeatures,
    getOfficialInformations,
    postOfficialInformations,
    getOfficialInformationsId,
    patchOfficialInformationsId,
    deleteOfficialInformationsId
  }
};