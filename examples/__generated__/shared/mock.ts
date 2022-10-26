/* eslint-disable */
 import type * as Types from ".";
 
export const mockCompany = (modification?: Partial< Types.Company>): Types.Company => {
  return {
    adminVerificationStatus: 'unspecified',
    createdAt: "string",
    id: "string",
    isListed: false,
    isSample: false,
    name: "string",
    publicVerificationStatus: 'unspecified',
    type: 'account',
    updatedAt: "string",
    ...modification
  }
}

export const mockAccount = (modification?: Partial< Types.Account>): Types.Account => {
  return {
    createdAt: "string",
    email: "string",
    emailVerificationStatus: 'unspecified',
    id: "string",
    identityVerificationStatus: 'unspecified',
    isCareerScoutTarget: false,
    isConcludedNda: false,
    isProjectScoutTarget: false,
    isPublicWithWork: false,
    isSample: false,
    isSupported: false,
    lastSignInAt: "string",
    missingRequirementsForAgent: [],
    missingRequirementsForGeneral: [],
    profileCompleteness: 0,
    registerAs: general,
    updatedAt: "string",
    workExperienced: false,
    ...modification
  }
}

export const mockProfile = (modification?: Partial< Types.Profile>): Types.Profile => {
  return {
    createdAt: "string",
    englishSkill: 'daily_conversation',
    firstName: "string",
    gender: 'male',
    id: "string",
    japaneseSkill: 'daily_conversation',
    lastName: "string",
    managementExperience: 'from_6_to_10',
    maritalStatus: single,
    updatedAt: "string",
    ...modification
  }
}

export const mockState = (modification?: Partial< Types.State>): Types.State => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitment = (modification?: Partial< Types.Recruitment>): Types.Recruitment => {
  return {
    accessibleType: 'public',
    appliedAccounts: 0,
    billingMethod: 'hourly',
    canLiveAndWorkAnywhere: false,
    createdAt: "string",
    id: "string",
    interestedAccounts: 0,
    isAdminChecked: false,
    isOrganizationalChecked: false,
    isSample: false,
    pageViews: 0,
    publishmentStatus: 'draft',
    remoteWorkStatus: rarely,
    smokingRegulation: no_smoking_indoors,
    sourceType: 'client',
    targetCompanyStatus: none,
    title: "string",
    type: 'CareerRecruitment',
    updatedAt: "string",
    ...modification
  }
}

/** 業種 */
export const mockIndustry = (modification?: Partial< Types.Industry>): Types.Industry => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockFeature = (modification?: Partial< Types.Feature>): Types.Feature => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    sourceType: 'company',
    type: 'default',
    updatedAt: "string",
    ...modification
  }
}

export const mockCompaniesRes = (modification?: Partial< Types.CompaniesRes>): Types.CompaniesRes => {
  return {
    companies: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockAccountSearchCondition = (modification?: Partial< Types.AccountSearchCondition>): Types.AccountSearchCondition => {
  return {
    academicBackground: 'graduate_school_doctor',
    createdAt: "string",
    currentCompanyName: "string",
    currentCompanyNameOr: false,
    currentStateIds: [],
    cvUpdatedIn: 'three_day',
    employmentStatus: 'employed',
    englishSkill: 'daily_conversation',
    gender: 'male',
    hopingIndustryIds: [],
    hopingMaxIncomeAmount: 0,
    hopingMinIncomeAmount: 0,
    hopingOccupationIds: [],
    hopingStateIds: [],
    id: "string",
    industryHistories: [],
    interestedInCompany: false,
    interestedInRecruitment: false,
    japaneseSkill: 'daily_conversation',
    keyword: "string",
    keywordOr: false,
    lastUsedDate: "string",
    lastSignInAt: 'within_one_day',
    managementExperience: 'everything',
    maritalStatus: 'single',
    maxAge: 0,
    maxRecentIncomeAmount: 0,
    minAge: 0,
    minRecentIncomeAmount: 0,
    numberOfJobChanges: 'unspecified',
    occupationHistories: [],
    position: 0,
    positionName: "string",
    positionNameOr: false,
    recruitmentPageView: false,
    scoutSettings: [],
    sortAscLastSignInAt: false,
    sortAscProfileUpdatedAt: false,
    title: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAccountSearchConditionsRes = (modification?: Partial< Types.AccountSearchConditionsRes>): Types.AccountSearchConditionsRes => {
  return {
    accountSearchConditions: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockAccountSearchConditionRes = (modification?: Partial< Types.AccountSearchConditionRes>): Types.AccountSearchConditionRes => {
  return mockAccountSearchCondition()
}

export const mockWorkHistory = (modification?: Partial< Types.WorkHistory>): Types.WorkHistory => {
  return {
    createdAt: "string",
    department: "string",
    id: "string",
    isEmployed: false,
    name: "string",
    position: "string",
    sinceDate: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAgentProfile = (modification?: Partial< Types.AgentProfile>): Types.AgentProfile => {
  return {
    adminVerificationStatus: 'pending',
    id: "string",
    status: 'pending',
    updatedAt: "string",
    yearOfAgentExperience: 0,

    pledge: {
      id: "string",
      name: "string",
      contentType: "string",
      url: "string",
      createdAt: "string",
    
    },
    ...modification
  }
}

export const mockSpecialtyCompanyType = (modification?: Partial< Types.SpecialtyCompanyType>): Types.SpecialtyCompanyType => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockSpecialtyPosition = (modification?: Partial< Types.SpecialtyPosition>): Types.SpecialtyPosition => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

/** 職種「大項目」 */
export const mockOccupationMainCategory = (modification?: Partial< Types.OccupationMainCategory>): Types.OccupationMainCategory => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

/** 業種カテゴリー */
export const mockIndustryCategory = (modification?: Partial< Types.IndustryCategory>): Types.IndustryCategory => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAcademicHistory = (modification?: Partial< Types.AcademicHistory>): Types.AcademicHistory => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    sinceDate: "string",
    type: 'graduate_school_doctor',
    untilDate: "string",
    updatedAt: "string",
    ...modification
  }
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export const mockProjectHistory = (modification?: Partial< Types.ProjectHistory>): Types.ProjectHistory => {
  return {
    createdAt: "string",
    id: "string",
    isEmployed: false,
    name: "string",
    sinceDate: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockHope = (modification?: Partial< Types.Hope>): Types.Hope => {
  return {
    billingMethod: 'hourly',
    createdAt: "string",
    id: "string",
    ratioOfOperation: once_a_week,
    type: 'career',
    updatedAt: "string",
    ...modification
  }
}

export const mockSkill = (modification?: Partial< Types.Skill>): Types.Skill => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAchievement = (modification?: Partial< Types.Achievement>): Types.Achievement => {
  return {
    content: "string",
    createdAt: "string",
    createdDate: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockOccupationHistory = (modification?: Partial< Types.OccupationHistory>): Types.OccupationHistory => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    yearOfExperience: 0,
    ...modification
  }
}

/** 職種 */
export const mockOccupation = (modification?: Partial< Types.Occupation>): Types.Occupation => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockIndustryHistory = (modification?: Partial< Types.IndustryHistory>): Types.IndustryHistory => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    yearOfExperience: 0,
    ...modification
  }
}

export const mockJob = (modification?: Partial< Types.Job>): Types.Job => {
  return {
    createdAt: "string",
    id: "string",
    isPublic: false,
    isSample: false,
    status: 'in_progress',
    updatedAt: "string",
    ...modification
  }
}

export const mockApplicant = (modification?: Partial< Types.Applicant>): Types.Applicant => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitmentInterest = (modification?: Partial< Types.RecruitmentInterest>): Types.RecruitmentInterest => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockScout = (modification?: Partial< Types.Scout>): Types.Scout => {
  return {
    autoRemainderPeriod: 'nothing',
    createdAt: "string",
    id: "string",
    isChecked: false,
    isOpened: false,
    senderType: 'basic',
    title: "string",
    type: 'CareerScout',
    updatedAt: "string",
    ...modification
  }
}

export const mockMessage = (modification?: Partial< Types.Message>): Types.Message => {
  return {
    actAs: 'personal',

    attachment: {
      filename: "string",
      contentType: "string",
      url: "string",
    
    },

    content: "string",
    createdAt: "string",
    id: "string",
    isDraft: false,
    transformedContent: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAccountsRes = (modification?: Partial< Types.AccountsRes>): Types.AccountsRes => {
  return {
    accounts: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockEmployment = (modification?: Partial< Types.Employment>): Types.Employment => {
  return {
    createdAt: "string",
    email: "string",
    id: "string",
    isValid: false,
    updatedAt: "string",
    ...modification
  }
}

export const mockRole = (modification?: Partial< Types.Role>): Types.Role => {
  return {
    category: 'owner',
    createdAt: "string",
    id: "string",
    name: "string",
    type: 'official',
    updatedAt: "string",
    ...modification
  }
}

export const mockAccountRes = (modification?: Partial< Types.AccountRes>): Types.AccountRes => {
  return mockAccount()
}

export const mockApplicantResource = (modification?: Partial< Types.ApplicantResource>): Types.ApplicantResource => {
  return {
    careerStatus: backlog,
    createdAt: "string",
    id: "string",
    isCheckedCareer: false,
    isCheckedProject: false,
    isSample: false,
    isWatchedCareer: false,
    isWatchedProject: false,
    origin: applicant,
    projectStatus: backlog,
    recruitmentSourceType: client,
    updatedAt: "string",
    ...modification
  }
}

export const mockJobReview = (modification?: Partial< Types.JobReview>): Types.JobReview => {
  return {
    createdAt: "string",
    id: "string",
    isSample: false,
    starRating: 0,
    updatedAt: "string",
    ...modification
  }
}

/** appliedの場合はcustomer_name以外必須 */
export const mockJobOrder = (modification?: Partial< Types.JobOrder>): Types.JobOrder => {
  return {
    consumptionTaxCalculationMethod: 'floor',
    createdAt: "string",
    feeCalculationSpan: monthly,
    feeType: 'time_based',
    files: [],
    id: "string",
    isSample: false,
    isTargetWithholdingTax: false,
    status: 'draft',
    updatedAt: "string",
    withholdingIncludedConsumptionTax: false,
    ...modification
  }
}

export const mockInvoice = (modification?: Partial< Types.Invoice>): Types.Invoice => {
  return {
    consumptionTaxCalculationMethod: 'floor',
    createdAt: "string",
    id: "string",
    isApproved: false,
    isSample: false,
    issuingStatus: 'draft',
    paymentMethod: bank,
    status: waiting_for_payment,
    updatedAt: "string",
    withholdingIncludedConsumptionTax: false,
    ...modification
  }
}

export const mockRoom = (modification?: Partial< Types.Room>): Types.Room => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockOrgUnit = (modification?: Partial< Types.OrgUnit>): Types.OrgUnit => {
  return {
    createdAt: "string",
    id: "string",
    isRoot: false,
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockApplicantResourcesRes = (modification?: Partial< Types.ApplicantResourcesRes>): Types.ApplicantResourcesRes => {
  return {
    applicantResources: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockApplicantResourceRes = (modification?: Partial< Types.ApplicantResourceRes>): Types.ApplicantResourceRes => {
  return mockApplicantResource()
}

/** STIを使って実装する */
export const mockBankAccount = (modification?: Partial< Types.BankAccount>): Types.BankAccount => {
  return {
    accountHolderName: "string",
    accountNumber: "string",
    bankCode: "string",
    bankName: "string",
    branchCode: "string",
    branchName: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockBankAccountRes = (modification?: Partial< Types.BankAccountRes>): Types.BankAccountRes => {
  return mockBankAccount()
}

export const mockChannel = (modification?: Partial< Types.Channel>): Types.Channel => {
  return {
    createdAt: "string",
    id: "string",
    isReadMessage: false,
    title: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockMessagesRes = (modification?: Partial< Types.MessagesRes>): Types.MessagesRes => {
  return {
    messages: [],
    totalDataNums: 0,
    ...modification
  }
}

/** クローリングサービス */
export const mockExternalService = (modification?: Partial< Types.ExternalService>): Types.ExternalService => {
  return {
    createdAt: "string",
    id: "string",
    isContracted: false,
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockEmploymentStatus = (modification?: Partial< Types.EmploymentStatus>): Types.EmploymentStatus => {
  return {
    createdAt: "string",
    id: "string",
    isSelectable: false,
    name: "string",
    projectClassification: contract,
    type: 'career',
    updatedAt: "string",
    ...modification
  }
}

export const mockMessageRes = (modification?: Partial< Types.MessageRes>): Types.MessageRes => {
  return mockMessage()
}

export const mockChannelRes = (modification?: Partial< Types.ChannelRes>): Types.ChannelRes => {
  return mockChannel()
}

export const mockSubscription = (modification?: Partial< Types.Subscription>): Types.Subscription => {
  return {
    createdAt: "string",
    id: "string",
    status: 'active',
    updatedAt: "string",
    ...modification
  }
}

export const mockPrice = (modification?: Partial< Types.Price>): Types.Price => {
  return {
    active: false,
    createdAt: "string",
    currency: "string",
    id: "string",
    unitAmount: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockProduct = (modification?: Partial< Types.Product>): Types.Product => {
  return {
    active: false,
    createdAt: "string",
    id: "string",
    name: "string",
    planType: company,
    updatedAt: "string",
    ...modification
  }
}

export const mockPaymentMethod = (modification?: Partial< Types.PaymentMethod>): Types.PaymentMethod => {
  return {
    brand: 'visa',
    createdAt: "string",
    expMonth: 0,
    expYear: 0,
    id: "string",
    isDefault: false,
    last4: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockCompanyRes = (modification?: Partial< Types.CompanyRes>): Types.CompanyRes => {
  return mockCompany()
}

export const mockPolicy = (modification?: Partial< Types.Policy>): Types.Policy => {
  return {
    category: 'unspecified',
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockPermission = (modification?: Partial< Types.Permission>): Types.Permission => {
  return {
    action: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockEmploymentsRes = (modification?: Partial< Types.EmploymentsRes>): Types.EmploymentsRes => {
  return {
    employments: [],
    ...modification
  }
}

export const mockEmploymentRes = (modification?: Partial< Types.EmploymentRes>): Types.EmploymentRes => {
  return mockEmployment()
}

export const mockIncomeHistory = (modification?: Partial< Types.IncomeHistory>): Types.IncomeHistory => {
  return {
    amount: 0,
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockIncomeHistoriesRes = (modification?: Partial< Types.IncomeHistoriesRes>): Types.IncomeHistoriesRes => {
  return {
    incomeHistories: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockIntroductionCompletionReport = (modification?: Partial< Types.IntroductionCompletionReport>): Types.IntroductionCompletionReport => {
  return {
    amount: 0,
    isEnable: false,
    paymentStatus: 'unpaid',
    ...modification
  }
}

export const mockIntroductionCompletionReportsRes = (modification?: Partial< Types.IntroductionCompletionReportsRes>): Types.IntroductionCompletionReportsRes => {
  return {
    introductionCompletionReports: [],
    ...modification
  }
}

export const mockIntroductionCompletionReportRes = (modification?: Partial< Types.IntroductionCompletionReportRes>): Types.IntroductionCompletionReportRes => {
  return mockIntroductionCompletionReport()
}

export const mockInvoiceDetailedItem = (modification?: Partial< Types.InvoiceDetailedItem>): Types.InvoiceDetailedItem => {
  return {
    amount: 0,
    createdAt: "string",
    description: "string",
    id: "string",
    quantity: 0,
    unitLabel: "string",
    unitPrice: 0,
    updatedAt: "string",
    ...modification
  }
}

/** 消費税 */
export const mockConsumptionTax = (modification?: Partial< Types.ConsumptionTax>): Types.ConsumptionTax => {
  return {
    country: 'jpn',
    id: "string",
    name: "string",
    ratio: 0,
    ...modification
  }
}

/** 請求で、消費税率ごとに金額を保持するテーブル */
export const mockInvoiceConsumptionTaxPrice = (modification?: Partial< Types.InvoiceConsumptionTaxPrice>): Types.InvoiceConsumptionTaxPrice => {
  return {
    id: "string",
    ...modification
  }
}

/** 請求で、源泉徴収税率ごとに金額を保持するテーブル */
export const mockInvoiceWithholdingTaxPrice = (modification?: Partial< Types.InvoiceWithholdingTaxPrice>): Types.InvoiceWithholdingTaxPrice => {
  return {
    id: "string",
    ...modification
  }
}

export const mockInvoiceRes = (modification?: Partial< Types.InvoiceRes>): Types.InvoiceRes => {
  return mockInvoice()
}

/** 固定報酬制の場合の各品目 */
export const mockJobServiceItem = (modification?: Partial< Types.JobServiceItem>): Types.JobServiceItem => {
  return {
    amount: 0,
    createdAt: "string",
    description: "string",
    id: "string",
    isTargetWithholding: false,
    quantity: 0,
    unitLabel: "string",
    unitPrice: 0,
    updatedAt: "string",
    ...modification
  }
}

/** 発注で、消費税率ごとに金額を保持するテーブル */
export const mockJobOrderConsumptionTaxPrice = (modification?: Partial< Types.JobOrderConsumptionTaxPrice>): Types.JobOrderConsumptionTaxPrice => {
  return {
    amount: 0,
    id: "string",
    ...modification
  }
}

/** 発注で、源泉徴収税率ごとに金額を保持するテーブル */
export const mockJobOrderWithholdingTaxPrice = (modification?: Partial< Types.JobOrderWithholdingTaxPrice>): Types.JobOrderWithholdingTaxPrice => {
  return {
    amount: 0,
    id: "string",
    ...modification
  }
}

export const mockJobOrdersRes = (modification?: Partial< Types.JobOrdersRes>): Types.JobOrdersRes => {
  return {
    jobOrders: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockJobOrderRes = (modification?: Partial< Types.JobOrderRes>): Types.JobOrderRes => {
  return mockJobOrder()
}

export const mockJobReviewRes = (modification?: Partial< Types.JobReviewRes>): Types.JobReviewRes => {
  return mockJobReview()
}

export const mockJobsRes = (modification?: Partial< Types.JobsRes>): Types.JobsRes => {
  return {
    jobs: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockJobRes = (modification?: Partial< Types.JobRes>): Types.JobRes => {
  return mockJob()
}

export const mockInvoicesRes = (modification?: Partial< Types.InvoicesRes>): Types.InvoicesRes => {
  return {
    invoices: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockJobReviewsRes = (modification?: Partial< Types.JobReviewsRes>): Types.JobReviewsRes => {
  return {
    jobReviews: [],
    ...modification
  }
}

export const mockKeepingList = (modification?: Partial< Types.KeepingList>): Types.KeepingList => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    position: 0,
    targetAccountExist: false,
    updatedAt: "string",
    ...modification
  }
}

export const mockKeepingListsRes = (modification?: Partial< Types.KeepingListsRes>): Types.KeepingListsRes => {
  return {
    keepingLists: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockKeepingListRes = (modification?: Partial< Types.KeepingListRes>): Types.KeepingListRes => {
  return mockKeepingList()
}

export const mockNotification = (modification?: Partial< Types.Notification>): Types.Notification => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    isRead: false,
    notificationType: 'general',
    updatedAt: "string",
    url: "string",
    ...modification
  }
}

export const mockNotificationsRes = (modification?: Partial< Types.NotificationsRes>): Types.NotificationsRes => {
  return {
    notifications: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockOrgUnitRes = (modification?: Partial< Types.OrgUnitRes>): Types.OrgUnitRes => {
  return mockOrgUnit()
}

export const mockOrgUnitsRes = (modification?: Partial< Types.OrgUnitsRes>): Types.OrgUnitsRes => {
  return {
    orgUnits: [],
    ...modification
  }
}

export const mockPaymentHistory = (modification?: Partial< Types.PaymentHistory>): Types.PaymentHistory => {
  return {
    amount: 0,
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockPaymentHistoriesRes = (modification?: Partial< Types.PaymentHistoriesRes>): Types.PaymentHistoriesRes => {
  return {
    paymentHistories: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockPaymentHistoryRes = (modification?: Partial< Types.PaymentHistoryRes>): Types.PaymentHistoryRes => {
  return mockPaymentHistory()
}

export const mockPaymentMethodsRes = (modification?: Partial< Types.PaymentMethodsRes>): Types.PaymentMethodsRes => {
  return {
    paymentMethods: [],
    ...modification
  }
}

export const mockPaymentMethodRes = (modification?: Partial< Types.PaymentMethodRes>): Types.PaymentMethodRes => {
  return mockPaymentMethod()
}

export const mockRecruitmentCompletionReport = (modification?: Partial< Types.RecruitmentCompletionReport>): Types.RecruitmentCompletionReport => {
  return {
    amount: 0,
    isEnable: false,
    paymentStatus: 'unpaid',
    systemFee: 0,
    ...modification
  }
}

export const mockRecruitmentCompletionReportsRes = (modification?: Partial< Types.RecruitmentCompletionReportsRes>): Types.RecruitmentCompletionReportsRes => {
  return {
    recruitmentCompletionReports: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockRecruitmentCompletionReportRes = (modification?: Partial< Types.RecruitmentCompletionReportRes>): Types.RecruitmentCompletionReportRes => {
  return mockRecruitmentCompletionReport()
}

export const mockEmploymentContractTerm = (modification?: Partial< Types.EmploymentContractTerm>): Types.EmploymentContractTerm => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    term: 'less_than_one_month',
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitmentsRes = (modification?: Partial< Types.RecruitmentsRes>): Types.RecruitmentsRes => {
  return {
    recruitments: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockTechStack = (modification?: Partial< Types.TechStack>): Types.TechStack => {
  return {
    accessibility: 'public',
    category: 'language',
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitmentRes = (modification?: Partial< Types.RecruitmentRes>): Types.RecruitmentRes => {
  return mockRecruitment()
}

export const mockApplicantsRes = (modification?: Partial< Types.ApplicantsRes>): Types.ApplicantsRes => {
  return {
    applicants: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockApplicantRes = (modification?: Partial< Types.ApplicantRes>): Types.ApplicantRes => {
  return mockApplicant()
}

export const mockRolesRes = (modification?: Partial< Types.RolesRes>): Types.RolesRes => {
  return {
    roles: [],
    ...modification
  }
}

export const mockRoleRes = (modification?: Partial< Types.RoleRes>): Types.RoleRes => {
  return mockRole()
}

export const mockJobChangeCompletionReport = (modification?: Partial< Types.JobChangeCompletionReport>): Types.JobChangeCompletionReport => {
  return {
    amount: 0,
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockRoomsRes = (modification?: Partial< Types.RoomsRes>): Types.RoomsRes => {
  return {
    rooms: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockRoomRes = (modification?: Partial< Types.RoomRes>): Types.RoomRes => {
  return mockRoom()
}

export const mockChannelsRes = (modification?: Partial< Types.ChannelsRes>): Types.ChannelsRes => {
  return {
    channels: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockScoutTemplate = (modification?: Partial< Types.ScoutTemplate>): Types.ScoutTemplate => {
  return {
    category: 'career',
    content: "string",
    createdAt: "string",
    id: "string",
    isInterested: false,
    name: "string",
    position: 0,
    scope: 'mine',
    title: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockScoutTemplatesRes = (modification?: Partial< Types.ScoutTemplatesRes>): Types.ScoutTemplatesRes => {
  return {
    scoutTemplates: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockScoutTemplateRes = (modification?: Partial< Types.ScoutTemplateRes>): Types.ScoutTemplateRes => {
  return mockScoutTemplate()
}

export const mockScoutTicket = (modification?: Partial< Types.ScoutTicket>): Types.ScoutTicket => {
  return {
    createdAt: "string",
    id: "string",
    type: 'free',
    updatedAt: "string",
    ...modification
  }
}

export const mockScoutTicketsRes = (modification?: Partial< Types.ScoutTicketsRes>): Types.ScoutTicketsRes => {
  return {
    scoutTickets: [],
    unusedScoutTicketNums: 0,
    ...modification
  }
}

export const mockScoutsRes = (modification?: Partial< Types.ScoutsRes>): Types.ScoutsRes => {
  return {
    scouts: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockScoutRes = (modification?: Partial< Types.ScoutRes>): Types.ScoutRes => {
  return mockScout()
}

export const mockSubscriptionRes = (modification?: Partial< Types.SubscriptionRes>): Types.SubscriptionRes => {
  return mockSubscription()
}

/** STIを使って実装する */
export const mockWithdrawal = (modification?: Partial< Types.Withdrawal>): Types.Withdrawal => {
  return {
    amount: 0,
    createdAt: "string",
    feeAmount: 0,
    id: "string",
    totalAmount: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockWithdrawalsRes = (modification?: Partial< Types.WithdrawalsRes>): Types.WithdrawalsRes => {
  return {
    withdrawals: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockWithdrawalRes = (modification?: Partial< Types.WithdrawalRes>): Types.WithdrawalRes => {
  return mockWithdrawal()
}

export const mockAcademicHistoryRes = (modification?: Partial< Types.AcademicHistoryRes>): Types.AcademicHistoryRes => {
  return mockAcademicHistory()
}

export const mockAcademicHistoriesRes = (modification?: Partial< Types.AcademicHistoriesRes>): Types.AcademicHistoriesRes => {
  return {
    academicHistories: [],
    ...modification
  }
}

export const mockAchievementRes = (modification?: Partial< Types.AchievementRes>): Types.AchievementRes => {
  return mockAchievement()
}

export const mockAchievementsRes = (modification?: Partial< Types.AchievementsRes>): Types.AchievementsRes => {
  return {
    achievements: [],
    ...modification
  }
}

export const mockHopeRes = (modification?: Partial< Types.HopeRes>): Types.HopeRes => {
  return mockHope()
}

export const mockHopesRes = (modification?: Partial< Types.HopesRes>): Types.HopesRes => {
  return {
    hopes: [],
    ...modification
  }
}

export const mockIndustryCategoriesRes = (modification?: Partial< Types.IndustryCategoriesRes>): Types.IndustryCategoriesRes => {
  return {
    industryCategories: [],
    ...modification
  }
}

export const mockIndustryHistoryRes = (modification?: Partial< Types.IndustryHistoryRes>): Types.IndustryHistoryRes => {
  return mockIndustryHistory()
}

export const mockIndustryHistoriesRes = (modification?: Partial< Types.IndustryHistoriesRes>): Types.IndustryHistoriesRes => {
  return {
    industryHistories: [],
    ...modification
  }
}

export const mockJobChangeCompletionReportRes = (modification?: Partial< Types.JobChangeCompletionReportRes>): Types.JobChangeCompletionReportRes => {
  return mockJobChangeCompletionReport()
}

export const mockJobChangeCompletionReportsRes = (modification?: Partial< Types.JobChangeCompletionReportsRes>): Types.JobChangeCompletionReportsRes => {
  return {
    jobChangeCompletionReports: [],
    ...modification
  }
}

export const mockOccupationHistoryRes = (modification?: Partial< Types.OccupationHistoryRes>): Types.OccupationHistoryRes => {
  return mockOccupationHistory()
}

export const mockOccupationHistoriesRes = (modification?: Partial< Types.OccupationHistoriesRes>): Types.OccupationHistoriesRes => {
  return {
    occupationHistories: [],
    ...modification
  }
}

/** 職種「中項目」 */
export const mockOccupationSubCategory = (modification?: Partial< Types.OccupationSubCategory>): Types.OccupationSubCategory => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockOccupationMainCategoriesRes = (modification?: Partial< Types.OccupationMainCategoriesRes>): Types.OccupationMainCategoriesRes => {
  return {
    occupationMainCategories: [],
    ...modification
  }
}

export const mockPoliciesRes = (modification?: Partial< Types.PoliciesRes>): Types.PoliciesRes => {
  return {
    policies: [],
    ...modification
  }
}

export const mockProfileRes = (modification?: Partial< Types.ProfileRes>): Types.ProfileRes => {
  return mockProfile()
}

export const mockProjectHistoryRes = (modification?: Partial< Types.ProjectHistoryRes>): Types.ProjectHistoryRes => {
  return mockProjectHistory()
}

export const mockProjectHistoriesRes = (modification?: Partial< Types.ProjectHistoriesRes>): Types.ProjectHistoriesRes => {
  return {
    projectHistories: [],
    ...modification
  }
}

export const mockProjectResult = (modification?: Partial< Types.ProjectResult>): Types.ProjectResult => {
  return {
    totalJobsNum: 0,
    totalRate: 0,
    skills: [],
    ...modification
  }
}

export const mockProjectResultRes = (modification?: Partial< Types.ProjectResultRes>): Types.ProjectResultRes => {
  return mockProjectResult()
}

export const mockRecruitmentInterestsRes = (modification?: Partial< Types.RecruitmentInterestsRes>): Types.RecruitmentInterestsRes => {
  return {
    recruitments: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockSkillRes = (modification?: Partial< Types.SkillRes>): Types.SkillRes => {
  return mockSkill()
}

export const mockSkillsRes = (modification?: Partial< Types.SkillsRes>): Types.SkillsRes => {
  return {
    skills: [],
    ...modification
  }
}

export const mockSpecialtyCompanyTypeRes = (modification?: Partial< Types.SpecialtyCompanyTypeRes>): Types.SpecialtyCompanyTypeRes => {
  return mockSpecialtyCompanyType()
}

export const mockSpecialtyCompanyTypesRes = (modification?: Partial< Types.SpecialtyCompanyTypesRes>): Types.SpecialtyCompanyTypesRes => {
  return {
    specialtyCompanyTypes: [],
    ...modification
  }
}

export const mockSpecialtyPositionRes = (modification?: Partial< Types.SpecialtyPositionRes>): Types.SpecialtyPositionRes => {
  return mockSpecialtyPosition()
}

export const mockSpecialtyPositionsRes = (modification?: Partial< Types.SpecialtyPositionsRes>): Types.SpecialtyPositionsRes => {
  return {
    specialtyPositions: [],
    ...modification
  }
}

export const mockStateCategory = (modification?: Partial< Types.StateCategory>): Types.StateCategory => {
  return {
    countryType: japan,
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockStateCategoryRes = (modification?: Partial< Types.StateCategoryRes>): Types.StateCategoryRes => {
  return mockStateCategory()
}

export const mockStateCategoriesRes = (modification?: Partial< Types.StateCategoriesRes>): Types.StateCategoriesRes => {
  return {
    stateCategories: [],
    ...modification
  }
}

export const mockSupport = (modification?: Partial< Types.Support>): Types.Support => {
  return {
    career: false,
    createdAt: "string",
    id: "string",
    project: false,
    updatedAt: "string",
    ...modification
  }
}

export const mockSupportRes = (modification?: Partial< Types.SupportRes>): Types.SupportRes => {
  return mockSupport()
}

export const mockTechStackRes = (modification?: Partial< Types.TechStackRes>): Types.TechStackRes => {
  return mockTechStack()
}

export const mockWorkHistoryRes = (modification?: Partial< Types.WorkHistoryRes>): Types.WorkHistoryRes => {
  return mockWorkHistory()
}

export const mockWorkHistoriesRes = (modification?: Partial< Types.WorkHistoriesRes>): Types.WorkHistoriesRes => {
  return {
    workHistories: [],
    ...modification
  }
}
