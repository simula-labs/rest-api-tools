/* eslint-disable */
 import type * as Types from ".";
 
export const mockAdminAccount = (modification?: Partial< Types.AdminAccount>): Types.AdminAccount => {
  return {
    createdAt: "string",
    email: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAccount = (modification?: Partial< Types.Account>): Types.Account => {
  return {
    alreadyKeepFromCurrentCompany: false,
    avatarUrl: "string",
    createdAt: "string",
    deletedAt: "string",
    displayName: "string",
    email: "string",
    emailVerificationStatus: 'unspecified',
    existsApplicantResourceFromCurrentCompany: false,
    id: "string",
    identificationRequirements: [],
    identityVerificationStatus: 'unspecified',
    isCareerScoutTarget: false,
    isConcludedNda: false,
    isOpenedToLatestScout: false,
    isProjectScoutTarget: false,
    isPublicWithWork: false,
    isSample: false,
    isSupported: false,
    lastNotificationReadAt: "string",
    lastSignInAt: "string",
    missingRequirementsForAgent: [],
    missingRequirementsForGeneral: [],
    profileCompleteness: 0,
    projectResultTotal: "string",
    recentIncomeAmountRange: "string",
    registerAs: 'general',
    updatedAt: "string",
    workExperienced: false,
    workingExperience: "string",
    isReadAccountInterest: false,
    isFollowingCurrentCompany: false,
    ...modification
  }
}

export const mockEmployment = (modification?: Partial< Types.Employment>): Types.Employment => {
  return {
    createdAt: "string",
    department: "string",
    email: "string",
    id: "string",
    isValid: false,
    lastNotificationReadAt: "string",
    position: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockProfile = (modification?: Partial< Types.Profile>): Types.Profile => {
  return {
    address: "string",
    biography: "string",
    birthOfDate: "string",
    createdAt: "string",
    englishSkill: 'daily_conversation',
    files: [],
    firstName: "string",
    firstNameKana: "string",
    gender: 'male',
    id: "string",
    japaneseSkill: 'daily_conversation',
    lastName: "string",
    lastNameKana: "string",
    managementExperience: 'from_6_to_10',
    maritalStatus: 'single',
    nationality: "string",
    numberOfJobChanges: 0,
    phone: "string",
    postalCode: "string",
    recentIncomeAmount: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockAccountWithTokenRes = (modification?: Partial< Types.AccountWithTokenRes>): Types.AccountWithTokenRes => {
  return {
    account: mockAccount(),

    profile: mockProfile(),
    token: "string",
    ...modification
  }
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
    untilDate: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockState = (modification?: Partial< Types.State>): Types.State => {
  return {
    countryCode: "string",
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockAgentProfile = (modification?: Partial< Types.AgentProfile>): Types.AgentProfile => {
  return {
    academicBackground: "string",
    achievement: "string",
    adminVerificationStatus: 'pending',
    areaInCharge: "string",
    description: "string",
    id: "string",
    message: "string",
    selfPr: "string",
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

    offerLetters: [],
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

export const mockCompany = (modification?: Partial< Types.Company>): Types.Company => {
  return {
    adminVerificationStatus: 'unspecified',
    averageAge: 0,
    businessSummary: "string",
    capital: 0,
    corporatePr: "string",
    coverImageUrl: "string",
    createdAt: "string",
    deletedAt: "string",
    employmentPlacementPermitNumber: "string",
    followerNums: 0,
    headOfficeLocation: "string",
    hpUrl: "string",
    id: "string",
    introductionFeeRatio: 0,
    isFollowingByCurrentAccount: false,
    isListed: false,
    isSample: false,
    logoUrl: "string",
    name: "string",
    nameKana: "string",
    netSales: 0,
    numbersOfEmployees: "string",
    phone: "string",
    publicVerificationStatus: 'unspecified',
    recruitmentFeeRatio: 0,
    representative: "string",
    representativeKana: "string",
    type: 'account',
    updatedAt: "string",
    yearOfEstablishment: "string",
    ...modification
  }
}

export const mockRole = (modification?: Partial< Types.Role>): Types.Role => {
  return {
    category: 'owner',
    createdAt: "string",
    description: "string",
    id: "string",
    name: "string",
    type: 'official',
    updatedAt: "string",
    ...modification
  }
}

export const mockAcademicHistory = (modification?: Partial< Types.AcademicHistory>): Types.AcademicHistory => {
  return {
    createdAt: "string",
    faculty: "string",
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
    businessContent: "string",
    createdAt: "string",
    id: "string",
    isEmployed: false,
    name: "string",
    position: "string",
    sinceDate: "string",
    untilDate: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockHope = (modification?: Partial< Types.Hope>): Types.Hope => {
  return {
    amount: 0,
    billingMethod: 'hourly',
    createdAt: "string",
    id: "string",
    ratioOfOperation: 'once_a_week',
    specialNote: "string",
    timeToChangeJob: 0,
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
    description: "string",
    id: "string",
    sinceDate: "string",
    untilDate: "string",
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

export const mockRecruitment = (modification?: Partial< Types.Recruitment>): Types.Recruitment => {
  return {
    accessibleType: 'public',
    appliedAccounts: 0,
    billingMethod: 'hourly',
    canLiveAndWorkAnywhere: false,
    canNotReleaseReasons: [],
    createdAt: "string",
    department: "string",
    estimatedTimePerProject: 0,
    estimatedUnitAmount: 0,
    id: "string",
    interestedAccounts: 0,
    isAdminChecked: false,
    isAppliedByCurrentAccount: false,
    isInterestedByCurrentAccount: false,
    isOrganizationalChecked: false,
    isSample: false,
    isWorkedWithTargetAccount: false,
    jobDescription: "string",
    maxAmount: 0,
    maxAmountWithoutTax: 0,
    maxNumberOfHiring: "string",
    minAmount: 0,
    minAmountWithoutTax: 0,
    nearestStation: "string",
    pageViews: 0,
    position: "string",
    publishedSinceDate: "string",
    publishedUntilDate: "string",
    publishmentStatus: 'draft',
    qualificationRequirements: "string",
    recommendedPoint: "string",
    remoteWorkStatus: 'rarely',
    salaryRemarks: "string",
    selectionProcess: "string",
    smokingRegulation: 'no_smoking_indoors',
    sourceType: 'client',
    targetCompanyCertainName: "string",
    targetCompanyStatus: 'none',
    taxForMaxAmount: 0,
    taxForMinAmount: 0,
    techStackRemarks: "string",
    title: "string",
    type: 'CareerRecruitment',
    updatedAt: "string",
    workConditions: "string",
    workplaceDescription: "string",
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

export const mockAccountRes = (modification?: Partial< Types.AccountRes>): Types.AccountRes => {
  return mockAccount()
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
    projectClassification: 'contract',
    type: 'career',
    updatedAt: "string",
    ...modification
  }
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

export const mockSubscription = (modification?: Partial< Types.Subscription>): Types.Subscription => {
  return {
    createdAt: "string",
    id: "string",
    sinceDate: "string",
    status: 'active',
    untilDate: "string",
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
    taxForUnitAmount: 0,
    unitAmount: 0,
    unitAmountWithoutTax: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockProduct = (modification?: Partial< Types.Product>): Types.Product => {
  return {
    active: false,
    createdAt: "string",
    description: "string",
    id: "string",
    name: "string",
    planType: 'company',
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

export const mockOrgUnit = (modification?: Partial< Types.OrgUnit>): Types.OrgUnit => {
  return {
    createdAt: "string",
    description: "string",
    id: "string",
    isRoot: false,
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockCompanyRes = (modification?: Partial< Types.CompanyRes>): Types.CompanyRes => {
  return mockCompany()
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

export const mockEmploymentContractTermsRes = (modification?: Partial< Types.EmploymentContractTermsRes>): Types.EmploymentContractTermsRes => {
  return {
    employmentContractTerms: [],
    ...modification
  }
}

export const mockEmploymentStatusesRes = (modification?: Partial< Types.EmploymentStatusesRes>): Types.EmploymentStatusesRes => {
  return {
    employmentStatuses: [],
    ...modification
  }
}

export const mockEmploymentStatusRes = (modification?: Partial< Types.EmploymentStatusRes>): Types.EmploymentStatusRes => {
  return mockEmploymentStatus()
}

export const mockFeaturesRes = (modification?: Partial< Types.FeaturesRes>): Types.FeaturesRes => {
  return {
    features: [],
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

export const mockPrivacyPolicyHistory = (modification?: Partial< Types.PrivacyPolicyHistory>): Types.PrivacyPolicyHistory => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    version: "string",
    ...modification
  }
}

export const mockProductsRes = (modification?: Partial< Types.ProductsRes>): Types.ProductsRes => {
  return {
    products: [],
    ...modification
  }
}

export const mockProductRes = (modification?: Partial< Types.ProductRes>): Types.ProductRes => {
  return mockProduct()
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

export const mockStateCategory = (modification?: Partial< Types.StateCategory>): Types.StateCategory => {
  return {
    countryType: 'japan',
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockTechStacksRes = (modification?: Partial< Types.TechStacksRes>): Types.TechStacksRes => {
  return {
    techStacks: [],
    ...modification
  }
}

export const mockTermHistory = (modification?: Partial< Types.TermHistory>): Types.TermHistory => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    type: 'common',
    updatedAt: "string",
    version: "string",
    ...modification
  }
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

export const mockAchievementsRes = (modification?: Partial< Types.AchievementsRes>): Types.AchievementsRes => {
  return {
    achievements: [],
    ...modification
  }
}

export const mockAchievementRes = (modification?: Partial< Types.AchievementRes>): Types.AchievementRes => {
  return mockAchievement()
}

export const mockAgentProfileRes = (modification?: Partial< Types.AgentProfileRes>): Types.AgentProfileRes => {
  return mockAgentProfile()
}

export const mockSpecialtyCompanyTypesRes = (modification?: Partial< Types.SpecialtyCompanyTypesRes>): Types.SpecialtyCompanyTypesRes => {
  return {
    specialtyCompanyTypes: [],
    ...modification
  }
}

export const mockSpecialtyCompanyTypeRes = (modification?: Partial< Types.SpecialtyCompanyTypeRes>): Types.SpecialtyCompanyTypeRes => {
  return mockSpecialtyCompanyType()
}

export const mockSpecialtyPositionsRes = (modification?: Partial< Types.SpecialtyPositionsRes>): Types.SpecialtyPositionsRes => {
  return {
    specialtyPositions: [],
    ...modification
  }
}

export const mockSpecialtyPositionRes = (modification?: Partial< Types.SpecialtyPositionRes>): Types.SpecialtyPositionRes => {
  return mockSpecialtyPosition()
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

export const mockChannelsRes = (modification?: Partial< Types.ChannelsRes>): Types.ChannelsRes => {
  return {
    channels: [],
    totalDataNums: 0,
    ...modification
  }
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
    conditions: "string",
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

export const mockHopesRes = (modification?: Partial< Types.HopesRes>): Types.HopesRes => {
  return {
    hopes: [],
    ...modification
  }
}

export const mockHopeRes = (modification?: Partial< Types.HopeRes>): Types.HopeRes => {
  return mockHope()
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

export const mockIndustryHistoriesRes = (modification?: Partial< Types.IndustryHistoriesRes>): Types.IndustryHistoriesRes => {
  return {
    industryHistories: [],
    ...modification
  }
}

export const mockIndustryHistoryRes = (modification?: Partial< Types.IndustryHistoryRes>): Types.IndustryHistoryRes => {
  return mockIndustryHistory()
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

export const mockJobChangeCompletionReportsRes = (modification?: Partial< Types.JobChangeCompletionReportsRes>): Types.JobChangeCompletionReportsRes => {
  return {
    jobChangeCompletionReports: [],
    ...modification
  }
}

export const mockJobChangeCompletionReportRes = (modification?: Partial< Types.JobChangeCompletionReportRes>): Types.JobChangeCompletionReportRes => {
  return mockJobChangeCompletionReport()
}

/** appliedの場合はcustomer_name以外必須 */
export const mockJobOrder = (modification?: Partial< Types.JobOrder>): Types.JobOrder => {
  return {
    consumptionTaxCalculationMethod: 'floor',
    createdAt: "string",
    customerName: "string",
    feeCalculationSpan: 'monthly',
    feeType: 'time_based',
    files: [],
    fixedAmount: 0,
    fixedSubTotal: 0,
    fixedTotalAmount: 0,
    id: "string",
    isSample: false,
    isTargetWithholdingTax: false,
    jobDescription: "string",
    jobName: "string",
    logicalFeeAmount: 0,
    number: "string",
    orderDate: "string",
    otherConditions: "string",
    reviewComment: "string",
    sinceDate: "string",
    status: 'draft',
    taxRatio: 0,
    unitTimeFee: 0,
    untilDate: "string",
    updatedAt: "string",
    withholdingIncludedConsumptionTax: false,
    ...modification
  }
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

export const mockJobsRes = (modification?: Partial< Types.JobsRes>): Types.JobsRes => {
  return {
    jobs: [],
    totalDataNums: 0,
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

export const mockConsentMatter = (modification?: Partial< Types.ConsentMatter>): Types.ConsentMatter => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockNotification = (modification?: Partial< Types.Notification>): Types.Notification => {
  return {
    content: "string",
    createdAt: "string",
    iconUrl: "string",
    id: "string",
    isRead: false,
    notificationType: 'general',
    subject: "string",
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

export const mockOccupationHistoriesRes = (modification?: Partial< Types.OccupationHistoriesRes>): Types.OccupationHistoriesRes => {
  return {
    occupationHistories: [],
    ...modification
  }
}

export const mockOccupationHistoryRes = (modification?: Partial< Types.OccupationHistoryRes>): Types.OccupationHistoryRes => {
  return mockOccupationHistory()
}

export const mockProfileRes = (modification?: Partial< Types.ProfileRes>): Types.ProfileRes => {
  return mockProfile()
}

export const mockProjectResult = (modification?: Partial< Types.ProjectResult>): Types.ProjectResult => {
  return {
    totalJobsNum: 0,
    totalRate: 0,
    skills: [],
    ...modification
  }
}

export const mockJobReview = (modification?: Partial< Types.JobReview>): Types.JobReview => {
  return {
    createdAt: "string",
    id: "string",
    improvementPoint: "string",
    isSample: false,
    skillDescription: "string",
    starRating: 0,
    updatedAt: "string",
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

export const mockScoutsRes = (modification?: Partial< Types.ScoutsRes>): Types.ScoutsRes => {
  return {
    scouts: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockSkillsRes = (modification?: Partial< Types.SkillsRes>): Types.SkillsRes => {
  return {
    skills: [],
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

export const mockWorkHistoriesRes = (modification?: Partial< Types.WorkHistoriesRes>): Types.WorkHistoriesRes => {
  return {
    workHistories: [],
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

export const mockMessageRes = (modification?: Partial< Types.MessageRes>): Types.MessageRes => {
  return mockMessage()
}

export const mockChannelRes = (modification?: Partial< Types.ChannelRes>): Types.ChannelRes => {
  return mockChannel()
}

export const mockIndustryCategoriesRes = (modification?: Partial< Types.IndustryCategoriesRes>): Types.IndustryCategoriesRes => {
  return {
    industryCategories: [],
    ...modification
  }
}

export const mockInvoice = (modification?: Partial< Types.Invoice>): Types.Invoice => {
  return {
    amount: 0,
    approvedDate: "string",
    consumptionTaxCalculationMethod: 'floor',
    createdAt: "string",
    deadline: "string",
    feeAmount: 0,
    files: [],
    id: "string",
    isApproved: false,
    isSample: false,
    issuedDate: "string",
    issuingStatus: 'draft',
    note: "string",
    number: "string",
    paymentMethod: 'bank',
    status: 'waiting_for_payment',
    settlementDate: "string",
    stripeFeeAmount: 0,
    subTotal: 0,
    title: "string",
    totalAmount: 0,
    updatedAt: "string",
    withholdingIncludedConsumptionTax: false,
    ...modification
  }
}

export const mockInvoiceDetailedItem = (modification?: Partial< Types.InvoiceDetailedItem>): Types.InvoiceDetailedItem => {
  return {
    amount: 0,
    amountWithoutTax: 0,
    createdAt: "string",
    description: "string",
    id: "string",
    isTargetWithholdingTax: false,
    quantity: 0,
    unitLabel: "string",
    unitPrice: 0,
    updatedAt: "string",
    ...modification
  }
}

/** 請求で、消費税率ごとに金額を保持するテーブル */
export const mockInvoiceConsumptionTaxPrice = (modification?: Partial< Types.InvoiceConsumptionTaxPrice>): Types.InvoiceConsumptionTaxPrice => {
  return {
    amount: 0,
    id: "string",
    ...modification
  }
}

/** 請求で、源泉徴収税率ごとに金額を保持するテーブル */
export const mockInvoiceWithholdingTaxPrice = (modification?: Partial< Types.InvoiceWithholdingTaxPrice>): Types.InvoiceWithholdingTaxPrice => {
  return {
    amount: 0,
    id: "string",
    ...modification
  }
}

export const mockInvoiceRes = (modification?: Partial< Types.InvoiceRes>): Types.InvoiceRes => {
  return mockInvoice()
}

export const mockJobOrderRes = (modification?: Partial< Types.JobOrderRes>): Types.JobOrderRes => {
  return mockJobOrder()
}

export const mockJobReviewRes = (modification?: Partial< Types.JobReviewRes>): Types.JobReviewRes => {
  return mockJobReview()
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

export const mockNda = (modification?: Partial< Types.Nda>): Types.Nda => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    version: "string",
    ...modification
  }
}

export const mockConsentNda = (modification?: Partial< Types.ConsentNda>): Types.ConsentNda => {
  return {
    address: "string",
    createdAt: "string",
    id: "string",
    name: "string",
    ndaId: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockPoliciesRes = (modification?: Partial< Types.PoliciesRes>): Types.PoliciesRes => {
  return {
    policies: [],
    ...modification
  }
}

export const mockWorkHistoryRes = (modification?: Partial< Types.WorkHistoryRes>): Types.WorkHistoryRes => {
  return mockWorkHistory()
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

export const mockScoutRes = (modification?: Partial< Types.ScoutRes>): Types.ScoutRes => {
  return mockScout()
}

export const mockSkillRes = (modification?: Partial< Types.SkillRes>): Types.SkillRes => {
  return mockSkill()
}

export const mockStateCategoriesRes = (modification?: Partial< Types.StateCategoriesRes>): Types.StateCategoriesRes => {
  return {
    stateCategories: [],
    ...modification
  }
}

export const mockStateCategoryRes = (modification?: Partial< Types.StateCategoryRes>): Types.StateCategoryRes => {
  return mockStateCategory()
}

export const mockTechStackRes = (modification?: Partial< Types.TechStackRes>): Types.TechStackRes => {
  return mockTechStack()
}

export const mockProjectHistoriesRes = (modification?: Partial< Types.ProjectHistoriesRes>): Types.ProjectHistoriesRes => {
  return {
    projectHistories: [],
    ...modification
  }
}

export const mockProjectHistoryRes = (modification?: Partial< Types.ProjectHistoryRes>): Types.ProjectHistoryRes => {
  return mockProjectHistory()
}

export const mockRoom = (modification?: Partial< Types.Room>): Types.Room => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitmentCompletionReport = (modification?: Partial< Types.RecruitmentCompletionReport>): Types.RecruitmentCompletionReport => {
  return {
    acceptanceOfOfferDate: "string",
    amount: 0,
    billingEmails: [],
    createdAt: "string",
    id: "string",
    isEnable: false,
    joinedDate: "string",
    memo: "string",
    paymentStatus: 'unpaid',
    reasonForCancellation: "string",
    systemFee: 0,
    systemFeeRatio: 0,
    systemFeeWithoutTax: 0,
    taxForSystemFee: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockIntroductionCompletionReport = (modification?: Partial< Types.IntroductionCompletionReport>): Types.IntroductionCompletionReport => {
  return {
    acceptanceOfOfferDate: "string",
    amount: 0,
    billingEmails: [],
    commissionFee: 0,
    commissionFeeRatio: 0,
    commissionFeeWithoutTax: 0,
    createdAt: "string",
    id: "string",
    isEnable: false,
    joinedDate: "string",
    memo: "string",
    paymentStatus: 'unpaid',
    reasonForCancellation: "string",
    systemFee: 0,
    systemFeeRatio: 0,
    systemFeeWithoutTax: 0,
    taxForCommissionFee: 0,
    taxForSystemFee: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockRoomRes = (modification?: Partial< Types.RoomRes>): Types.RoomRes => {
  return mockRoom()
}

export const mockRoomsRes = (modification?: Partial< Types.RoomsRes>): Types.RoomsRes => {
  return {
    rooms: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockConsentMattersRes = (modification?: Partial< Types.ConsentMattersRes>): Types.ConsentMattersRes => {
  return {
    consentMatters: [],
    ...modification
  }
}

export const mockConsentMatterRes = (modification?: Partial< Types.ConsentMatterRes>): Types.ConsentMatterRes => {
  return mockConsentMatter()
}

export const mockFeatureRes = (modification?: Partial< Types.FeatureRes>): Types.FeatureRes => {
  return mockFeature()
}

export const mockIntroductionCompletionReportsRes = (modification?: Partial< Types.IntroductionCompletionReportsRes>): Types.IntroductionCompletionReportsRes => {
  return {
    introductionCompletionReports: [],
    ...modification
  }
}

export const mockOfficialInformation = (modification?: Partial< Types.OfficialInformation>): Types.OfficialInformation => {
  return {
    content: "string",
    createdAt: "string",
    htmlContent: "string",
    id: "string",
    isReleased: false,
    title: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockOfficialInformationsRes = (modification?: Partial< Types.OfficialInformationsRes>): Types.OfficialInformationsRes => {
  return {
    officialInformations: [],
    ...modification
  }
}

export const mockOfficialInformationRes = (modification?: Partial< Types.OfficialInformationRes>): Types.OfficialInformationRes => {
  return mockOfficialInformation()
}

export const mockPayout = (modification?: Partial< Types.Payout>): Types.Payout => {
  return {
    amount: 0,
    arrivalDate: "string",
    createdAt: "string",
    currency: "string",
    id: "string",
    status: 'pending',
    stripePoId: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockPayoutsRes = (modification?: Partial< Types.PayoutsRes>): Types.PayoutsRes => {
  return {
    payouts: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockPriceRes = (modification?: Partial< Types.PriceRes>): Types.PriceRes => {
  return mockPrice()
}

export const mockPrivacyPolicyHistoriesRes = (modification?: Partial< Types.PrivacyPolicyHistoriesRes>): Types.PrivacyPolicyHistoriesRes => {
  return {
    privacyPolicyHistories: [],
    ...modification
  }
}

export const mockPrivacyPolicyHistoryRes = (modification?: Partial< Types.PrivacyPolicyHistoryRes>): Types.PrivacyPolicyHistoryRes => {
  return mockPrivacyPolicyHistory()
}

export const mockPricesRes = (modification?: Partial< Types.PricesRes>): Types.PricesRes => {
  return {
    prices: [],
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

export const mockStatesRes = (modification?: Partial< Types.StatesRes>): Types.StatesRes => {
  return {
    states: [],
    ...modification
  }
}

export const mockStateRes = (modification?: Partial< Types.StateRes>): Types.StateRes => {
  return mockState()
}

export const mockTermHistoriesRes = (modification?: Partial< Types.TermHistoriesRes>): Types.TermHistoriesRes => {
  return {
    termHistories: [],
    totalDataNums: 0,
    ...modification
  }
}

export const mockTermHistoryRes = (modification?: Partial< Types.TermHistoryRes>): Types.TermHistoryRes => {
  return mockTermHistory()
}

export const mockEmploymentContractTermRes = (modification?: Partial< Types.EmploymentContractTermRes>): Types.EmploymentContractTermRes => {
  return mockEmploymentContractTerm()
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

export const mockFollowedAccountsRes = (modification?: Partial< Types.FollowedAccountsRes>): Types.FollowedAccountsRes => {
  return {
    accounts: [],

    meta: {
      totalDataNums: 0,
      totalUnreadNums: 0,
    
    },
    ...modification
  }
}

export const mockApplicantResource = (modification?: Partial< Types.ApplicantResource>): Types.ApplicantResource => {
  return {
    careerStatus: 'backlog',
    createdAt: "string",
    deletedAt: "string",
    id: "string",
    isCheckedCareer: false,
    isCheckedProject: false,
    isSample: false,
    isWatchedCareer: false,
    isWatchedProject: false,
    origin: 'applicant',
    projectStatus: 'backlog',
    recruitmentSourceType: 'client',
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

export const mockEmploymentRes = (modification?: Partial< Types.EmploymentRes>): Types.EmploymentRes => {
  return mockEmployment()
}

export const mockIntroductionCompletionReportRes = (modification?: Partial< Types.IntroductionCompletionReportRes>): Types.IntroductionCompletionReportRes => {
  return mockIntroductionCompletionReport()
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

export const mockRecruitmentCompletionReportRes = (modification?: Partial< Types.RecruitmentCompletionReportRes>): Types.RecruitmentCompletionReportRes => {
  return mockRecruitmentCompletionReport()
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
    usedAt: "string",
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

export const mockSubscriptionRes = (modification?: Partial< Types.SubscriptionRes>): Types.SubscriptionRes => {
  return mockSubscription()
}
