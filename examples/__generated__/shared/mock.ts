/* eslint-disable */
 import type * as Types from ".";
 
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
    isFollowing: false,
    isListed: false,
    isSample: false,
    logoUrl: "string",
    name: "string",
    nameKana: "string",
    netSales: 0,
    numbersOfEmployees: "string",
    ownerEmail: "string",
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
    isApplied: false,
    isInterested: false,
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
    taxType: 'included',
    techStackRemarks: "string",
    title: "string",
    type: 'career',
    updatedAt: "string",
    workConditions: "string",
    workplaceDescription: "string",
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

export const mockAccount = (modification?: Partial< Types.Account>): Types.Account => {
  return {
    alreadyKeepFromCurrentCompany: false,
    avatarUrl: "string",
    consentNdaVersion: "string",
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
    isProjectScoutTarget: false,
    isPublicWithWork: false,
    isSample: false,
    isStudent: false,
    isSupported: false,
    lastNotificationReadAt: "string",
    lastSignInAt: "string",
    missingRequirementsForAgent: [],
    missingRequirementsForGeneral: [],
    profileCompleteness: 0,
    registerAs: 'general',
    updatedAt: "string",
    workExperienced: false,
    ...modification
  }
}

export const mockProfile = (modification?: Partial< Types.Profile>): Types.Profile => {
  return {
    academicBackground: "string",
    address: "string",
    agentAchievement: "string",
    agentAreaInCharge: "string",
    agentSelfIntroduction: "string",
    agentSelfMessage: "string",
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
    managementExperience: 'nothing',
    maritalStatus: 'single',
    nationality: "string",
    numberOfJobChanges: 0,
    phone: "string",
    postalCode: "string",
    recentIncomeAmount: 0,
    updatedAt: "string",
    yearOfAgentExperience: 0,
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

export const mockRole = (modification?: Partial< Types.Role>): Types.Role => {
  return {
    createdAt: "string",
    description: "string",
    id: "string",
    name: "string",
    type: 'default',
    updatedAt: "string",
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

export const mockIndustryHistory = (modification?: Partial< Types.IndustryHistory>): Types.IndustryHistory => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    yearOfExperience: 0,
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

export const mockHope = (modification?: Partial< Types.Hope>): Types.Hope => {
  return {
    amount: 0,
    billingMethod: 'hourly',
    createdAt: "string",
    id: "string",
    ratioOfOperation: 'once_a_week',
    specialNote: "string",
    timeToChangeJobs: 0,
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

/** appliedの場合はcustomer_name以外必須 */
export const mockJobOrder = (modification?: Partial< Types.JobOrder>): Types.JobOrder => {
  return {
    createdAt: "string",
    customerName: "string",
    feeCalculationSpan: 'monthly',
    feeType: 'time_based',
    fixedAmount: 0,
    fixedSubTotal: 0,
    fixedTax: 0,
    fixedTotalAmount: 0,
    id: "string",
    isPublic: false,
    isSample: false,
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
    ...modification
  }
}

export const mockState = (modification?: Partial< Types.State>): Types.State => {
  return {
    countryCode: 0,
    createdAt: "string",
    id: "string",
    name: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockInvoice = (modification?: Partial< Types.Invoice>): Types.Invoice => {
  return {
    amount: 0,
    approvedDate: "string",
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
    paymentMethod: 'bank',
    settlementDate: "string",
    status: 'waiting_for_payment',
    stripeFeeAmount: 0,
    subTotal: 0,
    tax: 0,
    title: "string",
    totalAmount: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockScout = (modification?: Partial< Types.Scout>): Types.Scout => {
  return {
    createdAt: "string",
    id: "string",
    type: 'career',
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
    updatedAt: "string",
    ...modification
  }
}

export const mockRoom = (modification?: Partial< Types.Room>): Types.Room => {
  return {
    createdAt: "string",
    existsNotReplied: false,
    id: "string",
    isReadMessage: false,
    latestMessage: mockMessage(),
    recruitmentCompletionReport: "string",
    updatedAt: "string",
    ...modification
  }
}

export const mockIntroductionCompletionReport = (modification?: Partial< Types.IntroductionCompletionReport>): Types.IntroductionCompletionReport => {
  return {
    amount: 0,
    commissionFee: 0,
    commissionFeeRatio: 0,
    commissionFeeWithoutTax: 0,
    createdAt: "string",
    id: "string",
    isEnable: false,
    joinedDate: "string",
    memo: "string",
    paymentStatus: 'unpaid',
    systemFee: 0,
    systemFeeRatio: 0,
    systemFeeWithoutTax: 0,
    taxForCommissionFee: 0,
    taxForSystemFee: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockRecruitmentCompletionReport = (modification?: Partial< Types.RecruitmentCompletionReport>): Types.RecruitmentCompletionReport => {
  return {
    amount: 0,
    createdAt: "string",
    id: "string",
    isEnable: false,
    joinedDate: "string",
    memo: "string",
    paymentStatus: 'unpaid',
    systemFee: 0,
    systemFeeRatio: 0,
    systemFeeWithoutTax: 0,
    taxForSystemFee: 0,
    updatedAt: "string",
    ...modification
  }
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
    active: "string",
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
    planType: 'standard',
    type: 'good',
    updatedAt: "string",
    ...modification
  }
}

export const mockPaymentMethod = (modification?: Partial< Types.PaymentMethod>): Types.PaymentMethod => {
  return {
    brand: 'visa',
    createdAt: "string",
    expMonth: "string",
    expYear: "string",
    id: "string",
    isDefault: false,
    last4: "string",
    updatedAt: "string",
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

export const mockInvoiceDetailedItem = (modification?: Partial< Types.InvoiceDetailedItem>): Types.InvoiceDetailedItem => {
  return {
    amount: 0,
    createdAt: "string",
    description: "string",
    id: "string",
    quantity: 0,
    taxRatio: 0,
    unitLabel: "string",
    unitPrice: 0,
    updatedAt: "string",
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
    type: 'CAREER',
    updatedAt: "string",
    ...modification
  }
}

export const mockJobServiceItem = (modification?: Partial< Types.JobServiceItem>): Types.JobServiceItem => {
  return {
    amount: 0,
    createdAt: "string",
    description: "string",
    id: "string",
    quantity: 0,
    taxRatio: 0,
    unitLabel: "string",
    unitPrice: 0,
    updatedAt: "string",
    ...modification
  }
}

export const mockKeepingList = (modification?: Partial< Types.KeepingList>): Types.KeepingList => {
  return {
    createdAt: "string",
    id: "string",
    name: "string",
    targetAccountExist: false,
    updatedAt: "string",
    ...modification
  }
}

/** STIを使って実装する */
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

export const mockApplicant = (modification?: Partial< Types.Applicant>): Types.Applicant => {
  return {
    createdAt: "string",
    id: "string",
    updatedAt: "string",
    ...modification
  }
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

export const mockScoutTemplate = (modification?: Partial< Types.ScoutTemplate>): Types.ScoutTemplate => {
  return {
    content: "string",
    createdAt: "string",
    id: "string",
    isInterested: false,
    name: "string",
    updatedAt: "string",
    ...modification
  }
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

export const mockSearchCondition = (modification?: Partial< Types.SearchCondition>): Types.SearchCondition => {
  return {
    createdAt: "string",
    filters: [],
    id: "string",
    target: 'recruitment',
    title: "string",
    updatedAt: "string",
    ...modification
  }
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

export const mockProjectResult = (modification?: Partial< Types.ProjectResult>): Types.ProjectResult => {
  return {
    totalJobsNum: 0,
    totalRate: 0,
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

export const mockStateCategory = (modification?: Partial< Types.StateCategory>): Types.StateCategory => {
  return {
    countryType: 'japan',
    createdAt: "string",
    id: "string",
    name: "string",
    states: [],
    updatedAt: "string",
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
