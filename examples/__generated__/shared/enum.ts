/* eslint-disable */
export const COMPANY_ADMIN_VERIFICATION_STATUS = {
  'unspecified': 'unspecified',
  'requested': 'requested',
  'verified': 'verified',
  'rejected': 'rejected',
  'canceled': 'canceled'
} as const
export type CompanyAdminVerificationStatus = typeof COMPANY_ADMIN_VERIFICATION_STATUS[keyof typeof COMPANY_ADMIN_VERIFICATION_STATUS]

export const COMPANY_PUBLIC_VERIFICATION_STATUS = {
  'unspecified': 'unspecified',
  'requested': 'requested',
  'verified': 'verified',
  'rejected': 'rejected'
} as const
export type CompanyPublicVerificationStatus = typeof COMPANY_PUBLIC_VERIFICATION_STATUS[keyof typeof COMPANY_PUBLIC_VERIFICATION_STATUS]

export const COMPANY_TYPE = {
  'account': 'account',
  'stub': 'stub'
} as const
export type CompanyType = typeof COMPANY_TYPE[keyof typeof COMPANY_TYPE]

export const ACCOUNT_EMAIL_VERIFICATION_STATUS = {
  'unspecified': 'unspecified',
  'request': 'request',
  'verified': 'verified'
} as const
export type AccountEmailVerificationStatus = typeof ACCOUNT_EMAIL_VERIFICATION_STATUS[keyof typeof ACCOUNT_EMAIL_VERIFICATION_STATUS]

export const ACCOUNT_IDENTITY_VERIFICATION_STATUS = {
  'unspecified': 'unspecified',
  'verified': 'verified',
  'checking': 'checking',
  'failed': 'failed'
} as const
export type AccountIdentityVerificationStatus = typeof ACCOUNT_IDENTITY_VERIFICATION_STATUS[keyof typeof ACCOUNT_IDENTITY_VERIFICATION_STATUS]

export const ACCOUNT_REGISTER_AS = {
  general: general,
  company: company,
  agent: agent
} as const
export type AccountRegisterAs = typeof ACCOUNT_REGISTER_AS[keyof typeof ACCOUNT_REGISTER_AS]

export const PROFILE_ENGLISH_SKILL = {
  'daily_conversation': 'daily_conversation',
  'business_conversation': 'business_conversation',
  'native': 'native',
  'nothing': 'nothing'
} as const
export type ProfileEnglishSkill = typeof PROFILE_ENGLISH_SKILL[keyof typeof PROFILE_ENGLISH_SKILL]

export const PROFILE_GENDER = {
  'male': 'male',
  'female': 'female',
  'other': 'other'
} as const
export type ProfileGender = typeof PROFILE_GENDER[keyof typeof PROFILE_GENDER]

export const PROFILE_JAPANESE_SKILL = {
  'daily_conversation': 'daily_conversation',
  'business_conversation': 'business_conversation',
  'native': 'native',
  'nothing': 'nothing'
} as const
export type ProfileJapaneseSkill = typeof PROFILE_JAPANESE_SKILL[keyof typeof PROFILE_JAPANESE_SKILL]

export const PROFILE_MANAGEMENT_EXPERIENCE = {
  'from_6_to_10': 'from_6_to_10',
  'from_11_to_20': 'from_11_to_20',
  'from_21_to_50': 'from_21_to_50',
  'from_51_to_100': 'from_51_to_100',
  'from_101_to_500': 'from_101_to_500',
  'more_than_501': 'more_than_501',
  'nothing': 'nothing',
  'less_than_5': 'less_than_5'
} as const
export type ProfileManagementExperience = typeof PROFILE_MANAGEMENT_EXPERIENCE[keyof typeof PROFILE_MANAGEMENT_EXPERIENCE]

export const PROFILE_MARITAL_STATUS = {
  single: single,
  married: married
} as const
export type ProfileMaritalStatus = typeof PROFILE_MARITAL_STATUS[keyof typeof PROFILE_MARITAL_STATUS]

export const RECRUITMENT_ACCESSIBLE_TYPE = {
  'public': 'public',
  'private': 'private'
} as const
export type RecruitmentAccessibleType = typeof RECRUITMENT_ACCESSIBLE_TYPE[keyof typeof RECRUITMENT_ACCESSIBLE_TYPE]

export const RECRUITMENT_BILLING_METHOD = {
  'hourly': 'hourly',
  'monthly': 'monthly',
  'yearly': 'yearly',
  'with_project': 'with_project'
} as const
export type RecruitmentBillingMethod = typeof RECRUITMENT_BILLING_METHOD[keyof typeof RECRUITMENT_BILLING_METHOD]

export const RECRUITMENT_PUBLISHMENT_STATUS = {
  'draft': 'draft',
  'published': 'published',
  'suspending': 'suspending',
  'terminated': 'terminated',
  'rejected': 'rejected'
} as const
export type RecruitmentPublishmentStatus = typeof RECRUITMENT_PUBLISHMENT_STATUS[keyof typeof RECRUITMENT_PUBLISHMENT_STATUS]

export const RECRUITMENT_REMOTE_WORK_STATUS = {
  rarely: rarely,
  normally: normally,
  full_remote: full_remote
} as const
export type RecruitmentRemoteWorkStatus = typeof RECRUITMENT_REMOTE_WORK_STATUS[keyof typeof RECRUITMENT_REMOTE_WORK_STATUS]

export const RECRUITMENT_SMOKING_REGULATION = {
  no_smoking_indoors: no_smoking_indoors,
  exist_smoking_room: exist_smoking_room,
  none: none,
  other: other
} as const
export type RecruitmentSmokingRegulation = typeof RECRUITMENT_SMOKING_REGULATION[keyof typeof RECRUITMENT_SMOKING_REGULATION]

export const RECRUITMENT_SOURCE_TYPE = {
  'client': 'client',
  'agent': 'agent',
  'service': 'service'
} as const
export type RecruitmentSourceType = typeof RECRUITMENT_SOURCE_TYPE[keyof typeof RECRUITMENT_SOURCE_TYPE]

export const RECRUITMENT_TARGET_COMPANY_STATUS = {
  none: none,
  private: private,
  certained: certained,
  specified: specified
} as const
export type RecruitmentTargetCompanyStatus = typeof RECRUITMENT_TARGET_COMPANY_STATUS[keyof typeof RECRUITMENT_TARGET_COMPANY_STATUS]

export const RECRUITMENT_TYPE = {
  'CareerRecruitment': 'CareerRecruitment',
  'ProjectRecruitment': 'ProjectRecruitment'
} as const
export type RecruitmentType = typeof RECRUITMENT_TYPE[keyof typeof RECRUITMENT_TYPE]

export const FEATURE_SOURCE_TYPE = {
  'company': 'company',
  'recruitment': 'recruitment'
} as const
export type FeatureSourceType = typeof FEATURE_SOURCE_TYPE[keyof typeof FEATURE_SOURCE_TYPE]

export const FEATURE_TYPE = {
  'default': 'default',
  'organizational': 'organizational'
} as const
export type FeatureType = typeof FEATURE_TYPE[keyof typeof FEATURE_TYPE]

export const ACCOUNT_SEARCH_CONDITION_ACADEMIC_BACKGROUND = {
  'graduate_school_doctor': 'graduate_school_doctor',
  'graduate_school_master': 'graduate_school_master',
  'university': 'university',
  'technical_college': 'technical_college',
  'vocational_school': 'vocational_school',
  'junior_college': 'junior_college',
  'high_school': 'high_school'
} as const
export type AccountSearchConditionAcademicBackground = typeof ACCOUNT_SEARCH_CONDITION_ACADEMIC_BACKGROUND[keyof typeof ACCOUNT_SEARCH_CONDITION_ACADEMIC_BACKGROUND]

export const ACCOUNT_SEARCH_CONDITION_CV_UPDATED_IN = {
  'three_day': 'three_day',
  'one_week': 'one_week',
  'one_month': 'one_month',
  'three_month': 'three_month',
  'half_year': 'half_year'
} as const
export type AccountSearchConditionCvUpdatedIn = typeof ACCOUNT_SEARCH_CONDITION_CV_UPDATED_IN[keyof typeof ACCOUNT_SEARCH_CONDITION_CV_UPDATED_IN]

export const ACCOUNT_SEARCH_CONDITION_EMPLOYMENT_STATUS = {
  'employed': 'employed',
  'unemployed': 'unemployed'
} as const
export type AccountSearchConditionEmploymentStatus = typeof ACCOUNT_SEARCH_CONDITION_EMPLOYMENT_STATUS[keyof typeof ACCOUNT_SEARCH_CONDITION_EMPLOYMENT_STATUS]

export const ACCOUNT_SEARCH_CONDITION_ENGLISH_SKILL = {
  'daily_conversation': 'daily_conversation',
  'business_conversation': 'business_conversation',
  'native': 'native'
} as const
export type AccountSearchConditionEnglishSkill = typeof ACCOUNT_SEARCH_CONDITION_ENGLISH_SKILL[keyof typeof ACCOUNT_SEARCH_CONDITION_ENGLISH_SKILL]

export const ACCOUNT_SEARCH_CONDITION_GENDER = {
  'male': 'male',
  'female': 'female',
  'other': 'other'
} as const
export type AccountSearchConditionGender = typeof ACCOUNT_SEARCH_CONDITION_GENDER[keyof typeof ACCOUNT_SEARCH_CONDITION_GENDER]

export const ACCOUNT_SEARCH_CONDITION_JAPANESE_SKILL = {
  'daily_conversation': 'daily_conversation',
  'business_conversation': 'business_conversation',
  'native': 'native'
} as const
export type AccountSearchConditionJapaneseSkill = typeof ACCOUNT_SEARCH_CONDITION_JAPANESE_SKILL[keyof typeof ACCOUNT_SEARCH_CONDITION_JAPANESE_SKILL]

export const ACCOUNT_SEARCH_CONDITION_LAST_SIGN_IN_AT = {
  'within_one_day': 'within_one_day',
  'within_one_week': 'within_one_week',
  'within_one_month': 'within_one_month'
} as const
export type AccountSearchConditionLastSignInAt = typeof ACCOUNT_SEARCH_CONDITION_LAST_SIGN_IN_AT[keyof typeof ACCOUNT_SEARCH_CONDITION_LAST_SIGN_IN_AT]

export const ACCOUNT_SEARCH_CONDITION_MANAGEMENT_EXPERIENCE = {
  'everything': 'everything',
  'from_6_to_10': 'from_6_to_10',
  'from_11_to_20': 'from_11_to_20',
  'from_21_to_50': 'from_21_to_50',
  'from_51_to_100': 'from_51_to_100',
  'from_101_to_500': 'from_101_to_500',
  'more_than_501': 'more_than_501'
} as const
export type AccountSearchConditionManagementExperience = typeof ACCOUNT_SEARCH_CONDITION_MANAGEMENT_EXPERIENCE[keyof typeof ACCOUNT_SEARCH_CONDITION_MANAGEMENT_EXPERIENCE]

export const ACCOUNT_SEARCH_CONDITION_MARITAL_STATUS = {
  'single': 'single',
  'married': 'married'
} as const
export type AccountSearchConditionMaritalStatus = typeof ACCOUNT_SEARCH_CONDITION_MARITAL_STATUS[keyof typeof ACCOUNT_SEARCH_CONDITION_MARITAL_STATUS]

export const ACCOUNT_SEARCH_CONDITION_NUMBER_OF_JOB_CHANGES = {
  'unspecified': 'unspecified',
  'nothing': 'nothing',
  'one': 'one',
  'two': 'two',
  'three': 'three',
  'four': 'four'
} as const
export type AccountSearchConditionNumberOfJobChanges = typeof ACCOUNT_SEARCH_CONDITION_NUMBER_OF_JOB_CHANGES[keyof typeof ACCOUNT_SEARCH_CONDITION_NUMBER_OF_JOB_CHANGES]

export const AGENT_PROFILE_ADMIN_VERIFICATION_STATUS = {
  'pending': 'pending',
  'requested': 'requested',
  'verified': 'verified',
  'rejected': 'rejected',
  'canceled': 'canceled',
  'deleted': 'deleted'
} as const
export type AgentProfileAdminVerificationStatus = typeof AGENT_PROFILE_ADMIN_VERIFICATION_STATUS[keyof typeof AGENT_PROFILE_ADMIN_VERIFICATION_STATUS]

export const AGENT_PROFILE_STATUS = {
  'pending': 'pending'
} as const
export type AgentProfileStatus = typeof AGENT_PROFILE_STATUS[keyof typeof AGENT_PROFILE_STATUS]

export const ACADEMIC_HISTORY_TYPE = {
  'graduate_school_doctor': 'graduate_school_doctor',
  'graduate_school_master': 'graduate_school_master',
  'university': 'university',
  'technical_college': 'technical_college',
  'vocational_school': 'vocational_school',
  'junior_college': 'junior_college',
  'high_school': 'high_school'
} as const
export type AcademicHistoryType = typeof ACADEMIC_HISTORY_TYPE[keyof typeof ACADEMIC_HISTORY_TYPE]

export const HOPE_BILLING_METHOD = {
  'hourly': 'hourly',
  'monthly': 'monthly',
  'yearly': 'yearly',
  'with_project': 'with_project'
} as const
export type HopeBillingMethod = typeof HOPE_BILLING_METHOD[keyof typeof HOPE_BILLING_METHOD]

export const HOPE_RATIO_OF_OPERATION = {
  once_a_week: once_a_week,
  few_days_a_week: few_days_a_week,
  four_days_a_week: four_days_a_week
} as const
export type HopeRatioOfOperation = typeof HOPE_RATIO_OF_OPERATION[keyof typeof HOPE_RATIO_OF_OPERATION]

export const HOPE_TYPE = {
  'career': 'career',
  'project': 'project'
} as const
export type HopeType = typeof HOPE_TYPE[keyof typeof HOPE_TYPE]

export const JOB_STATUS = {
  'in_progress': 'in_progress',
  'completed': 'completed'
} as const
export type JobStatus = typeof JOB_STATUS[keyof typeof JOB_STATUS]

export const SCOUT_AUTO_REMAINDER_PERIOD = {
  'nothing': 'nothing',
  'three_days': 'three_days',
  'five_days': 'five_days',
  'seven_days': 'seven_days'
} as const
export type ScoutAutoRemainderPeriod = typeof SCOUT_AUTO_REMAINDER_PERIOD[keyof typeof SCOUT_AUTO_REMAINDER_PERIOD]

export const SCOUT_SENDER_TYPE = {
  'basic': 'basic',
  'agent': 'agent'
} as const
export type ScoutSenderType = typeof SCOUT_SENDER_TYPE[keyof typeof SCOUT_SENDER_TYPE]

export const SCOUT_TYPE = {
  'CareerScout': 'CareerScout',
  'ProjectScout': 'ProjectScout'
} as const
export type ScoutType = typeof SCOUT_TYPE[keyof typeof SCOUT_TYPE]

export const MESSAGE_ACT_AS = {
  'personal': 'personal',
  'organizational': 'organizational'
} as const
export type MessageActAs = typeof MESSAGE_ACT_AS[keyof typeof MESSAGE_ACT_AS]

export const ROLE_CATEGORY = {
  'owner': 'owner',
  'manager': 'manager',
  'member': 'member',
  'guest': 'guest'
} as const
export type RoleCategory = typeof ROLE_CATEGORY[keyof typeof ROLE_CATEGORY]

export const ROLE_TYPE = {
  'official': 'official',
  'custom': 'custom'
} as const
export type RoleType = typeof ROLE_TYPE[keyof typeof ROLE_TYPE]

export const APPLICANT_RESOURCE_CAREER_STATUS = {
  backlog: backlog,
  checked: checked,
  interviewing: interviewing,
  offered: offered,
  joined: joined,
  rejected: rejected
} as const
export type ApplicantResourceCareerStatus = typeof APPLICANT_RESOURCE_CAREER_STATUS[keyof typeof APPLICANT_RESOURCE_CAREER_STATUS]

export const APPLICANT_RESOURCE_ORIGIN = {
  applicant: applicant,
  scout: scout
} as const
export type ApplicantResourceOrigin = typeof APPLICANT_RESOURCE_ORIGIN[keyof typeof APPLICANT_RESOURCE_ORIGIN]

export const APPLICANT_RESOURCE_PROJECT_STATUS = {
  backlog: backlog,
  in_progress: in_progress,
  closed: closed
} as const
export type ApplicantResourceProjectStatus = typeof APPLICANT_RESOURCE_PROJECT_STATUS[keyof typeof APPLICANT_RESOURCE_PROJECT_STATUS]

export const APPLICANT_RESOURCE_RECRUITMENT_SOURCE_TYPE = {
  client: client,
  agent: agent
} as const
export type ApplicantResourceRecruitmentSourceType = typeof APPLICANT_RESOURCE_RECRUITMENT_SOURCE_TYPE[keyof typeof APPLICANT_RESOURCE_RECRUITMENT_SOURCE_TYPE]

export const JOB_ORDER_CONSUMPTION_TAX_CALCULATION_METHOD = {
  'floor': 'floor',
  'ceil': 'ceil',
  'round': 'round'
} as const
export type JobOrderConsumptionTaxCalculationMethod = typeof JOB_ORDER_CONSUMPTION_TAX_CALCULATION_METHOD[keyof typeof JOB_ORDER_CONSUMPTION_TAX_CALCULATION_METHOD]

export const JOB_ORDER_FEE_CALCULATION_SPAN = {
  monthly: monthly,
  daily: daily,
  hourly: hourly
} as const
export type JobOrderFeeCalculationSpan = typeof JOB_ORDER_FEE_CALCULATION_SPAN[keyof typeof JOB_ORDER_FEE_CALCULATION_SPAN]

export const JOB_ORDER_FEE_TYPE = {
  'time_based': 'time_based',
  'fixed': 'fixed'
} as const
export type JobOrderFeeType = typeof JOB_ORDER_FEE_TYPE[keyof typeof JOB_ORDER_FEE_TYPE]

export const JOB_ORDER_STATUS = {
  'draft': 'draft',
  'applied': 'applied',
  'certificated': 'certificated',
  'rejected': 'rejected'
} as const
export type JobOrderStatus = typeof JOB_ORDER_STATUS[keyof typeof JOB_ORDER_STATUS]

export const INVOICE_CONSUMPTION_TAX_CALCULATION_METHOD = {
  'floor': 'floor',
  'ceil': 'ceil',
  'round': 'round'
} as const
export type InvoiceConsumptionTaxCalculationMethod = typeof INVOICE_CONSUMPTION_TAX_CALCULATION_METHOD[keyof typeof INVOICE_CONSUMPTION_TAX_CALCULATION_METHOD]

export const INVOICE_ISSUING_STATUS = {
  'draft': 'draft',
  'fixed': 'fixed',
  'withdrawn': 'withdrawn'
} as const
export type InvoiceIssuingStatus = typeof INVOICE_ISSUING_STATUS[keyof typeof INVOICE_ISSUING_STATUS]

export const INVOICE_PAYMENT_METHOD = {
  bank: bank,
  credit_card: credit_card
} as const
export type InvoicePaymentMethod = typeof INVOICE_PAYMENT_METHOD[keyof typeof INVOICE_PAYMENT_METHOD]

export const INVOICE_STATUS = {
  waiting_for_payment: waiting_for_payment,
  waiting_for_settlement: waiting_for_settlement,
  waiting_for_payment_and_settlement: waiting_for_payment_and_settlement,
  failed_settlement: failed_settlement,
  completed: completed
} as const
export type InvoiceStatus = typeof INVOICE_STATUS[keyof typeof INVOICE_STATUS]

export const EMPLOYMENT_STATUS_PROJECT_CLASSIFICATION = {
  contract: contract,
  quasi_mandate: quasi_mandate,
  outsourcing: outsourcing
} as const
export type EmploymentStatusProjectClassification = typeof EMPLOYMENT_STATUS_PROJECT_CLASSIFICATION[keyof typeof EMPLOYMENT_STATUS_PROJECT_CLASSIFICATION]

export const EMPLOYMENT_STATUS_TYPE = {
  'career': 'career',
  'project': 'project'
} as const
export type EmploymentStatusType = typeof EMPLOYMENT_STATUS_TYPE[keyof typeof EMPLOYMENT_STATUS_TYPE]

export const SUBSCRIPTION_STATUS = {
  'active': 'active',
  'past_due': 'past_due',
  'unpaid': 'unpaid',
  'canceled': 'canceled',
  'incomplete': 'incomplete',
  'incomplete_expired': 'incomplete_expired',
  'trialing': 'trialing',
  'all': 'all',
  'ended': 'ended',
  'pending': 'pending'
} as const
export type SubscriptionStatus = typeof SUBSCRIPTION_STATUS[keyof typeof SUBSCRIPTION_STATUS]

export const PRODUCT_PLAN_TYPE = {
  company: company,
  agent: agent
} as const
export type ProductPlanType = typeof PRODUCT_PLAN_TYPE[keyof typeof PRODUCT_PLAN_TYPE]

export const PAYMENT_METHOD_BRAND = {
  'visa': 'visa',
  'mastercard': 'mastercard',
  'jcb': 'jcb',
  'american_express': 'american_express',
  'diners': 'diners'
} as const
export type PaymentMethodBrand = typeof PAYMENT_METHOD_BRAND[keyof typeof PAYMENT_METHOD_BRAND]

export const POLICY_CATEGORY = {
  'unspecified': 'unspecified',
  'company': 'company',
  'employment': 'employment',
  'career_recruitment': 'career_recruitment',
  'career_scout': 'career_scout',
  'career_applicant_resource': 'career_applicant_resource',
  'career_selection': 'career_selection',
  'career_payment': 'career_payment',
  'project_recruitment': 'project_recruitment',
  'project_scout': 'project_scout',
  'project_applicant_resource': 'project_applicant_resource',
  'project_selection': 'project_selection',
  'project_job': 'project_job',
  'project_payment': 'project_payment',
  'message': 'message',
  'scout': 'scout'
} as const
export type PolicyCategory = typeof POLICY_CATEGORY[keyof typeof POLICY_CATEGORY]

export const INTRODUCTION_COMPLETION_REPORT_PAYMENT_STATUS = {
  'unpaid': 'unpaid',
  'paid': 'paid',
  'failed': 'failed',
  'pending': 'pending'
} as const
export type IntroductionCompletionReportPaymentStatus = typeof INTRODUCTION_COMPLETION_REPORT_PAYMENT_STATUS[keyof typeof INTRODUCTION_COMPLETION_REPORT_PAYMENT_STATUS]

export const CONSUMPTION_TAX_COUNTRY = {
  'jpn': 'jpn'
} as const
export type ConsumptionTaxCountry = typeof CONSUMPTION_TAX_COUNTRY[keyof typeof CONSUMPTION_TAX_COUNTRY]

export const NOTIFICATION_NOTIFICATION_TYPE = {
  'general': 'general',
  'message': 'message'
} as const
export type NotificationNotificationType = typeof NOTIFICATION_NOTIFICATION_TYPE[keyof typeof NOTIFICATION_NOTIFICATION_TYPE]

export const RECRUITMENT_COMPLETION_REPORT_PAYMENT_STATUS = {
  'unpaid': 'unpaid',
  'paid': 'paid',
  'failed': 'failed',
  'pending': 'pending'
} as const
export type RecruitmentCompletionReportPaymentStatus = typeof RECRUITMENT_COMPLETION_REPORT_PAYMENT_STATUS[keyof typeof RECRUITMENT_COMPLETION_REPORT_PAYMENT_STATUS]

export const EMPLOYMENT_CONTRACT_TERM_TERM = {
  'less_than_one_month': 'less_than_one_month',
  'one_to_three_months': 'one_to_three_months',
  'three_to_six_months': 'three_to_six_months',
  'more_than_six_months': 'more_than_six_months'
} as const
export type EmploymentContractTermTerm = typeof EMPLOYMENT_CONTRACT_TERM_TERM[keyof typeof EMPLOYMENT_CONTRACT_TERM_TERM]

export const TECH_STACK_ACCESSIBILITY = {
  'public': 'public',
  'private': 'private'
} as const
export type TechStackAccessibility = typeof TECH_STACK_ACCESSIBILITY[keyof typeof TECH_STACK_ACCESSIBILITY]

export const TECH_STACK_CATEGORY = {
  'language': 'language',
  'framework': 'framework',
  'infrastructure': 'infrastructure',
  'design_tool': 'design_tool',
  'other': 'other'
} as const
export type TechStackCategory = typeof TECH_STACK_CATEGORY[keyof typeof TECH_STACK_CATEGORY]

export const SCOUT_TEMPLATE_CATEGORY = {
  'career': 'career',
  'project': 'project',
  'career_remainder': 'career_remainder',
  'project_remainder': 'project_remainder'
} as const
export type ScoutTemplateCategory = typeof SCOUT_TEMPLATE_CATEGORY[keyof typeof SCOUT_TEMPLATE_CATEGORY]

export const SCOUT_TEMPLATE_SCOPE = {
  'mine': 'mine',
  'organizational': 'organizational'
} as const
export type ScoutTemplateScope = typeof SCOUT_TEMPLATE_SCOPE[keyof typeof SCOUT_TEMPLATE_SCOPE]

export const SCOUT_TICKET_TYPE = {
  'free': 'free',
  'bought': 'bought'
} as const
export type ScoutTicketType = typeof SCOUT_TICKET_TYPE[keyof typeof SCOUT_TICKET_TYPE]

export const STATE_CATEGORY_COUNTRY_TYPE = {
  japan: japan,
  international: international,
  other: other
} as const
export type StateCategoryCountryType = typeof STATE_CATEGORY_COUNTRY_TYPE[keyof typeof STATE_CATEGORY_COUNTRY_TYPE]