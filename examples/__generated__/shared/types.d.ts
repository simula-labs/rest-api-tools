/* eslint-disable */
export type AdminAccount = {
  createdAt: string
  email: string
  id: string
  updatedAt: string
}

export type Account = {
  alreadyKeepFromCurrentCompany: boolean | null
  avatarUrl: string | null
  createdAt: string
  /** 論理削除時刻 */
  deletedAt: string | null
  displayName: string | null
  email: string
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  existsApplicantResourceFromCurrentCompany: boolean | null
  id: string
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements: string[] | null
  identityVerificationStatus: 'unspecified' | 'verified' | 'checking' | 'failed'
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget: boolean
  isConcludedNda: boolean
  /** 直近のスカウトを開封しているか */
  isOpenedToLatestScout?: boolean | null | undefined
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget: boolean
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork: boolean
  /** サンプルか */
  isSample: boolean
  isSupported: boolean
  lastNotificationReadAt: string | null
  lastSignInAt: string
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent: string[]
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral: string[]
  profileCompleteness: number
  /** PJT X件/XXX万円以上(enterpriseのみ) */
  projectResultTotal: string | null
  /** 直近の年収レンジ(enterpriseのみ) */
  recentIncomeAmountRange: string | null
  registerAs: 'general' | 'company' | 'agent' | null
  updatedAt: string
  workExperienced: boolean
  /** 社会人歴(enterpriseのみ) */
  workingExperience: string | null
  isReadAccountInterest: boolean | null
  isFollowingCurrentCompany: boolean | null
}

export type WorkHistory = {
  createdAt: string
  department: string
  id: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  name: string
  position: string
  sinceDate: string
  untilDate: string | null
  updatedAt: string
}

export type Profile = {
  address: string | null
  biography: string | null
  birthOfDate: string | null
  createdAt: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
  files: {
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  }[] | null
  firstName: string
  firstNameKana: string | null
  gender: 'male' | 'female' | 'other'
  id: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
  lastName: string
  lastNameKana: string | null
  /** マネジメント経験人数 */
  managementExperience: 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | 'nothing' | 'less_than_5'
  maritalStatus: 'single' | 'married' | null
  nationality: string | null
  /** 転職回数 */
  numberOfJobChanges: number | null
  phone: string | null
  postalCode: string | null
  /** 直近の年収（税の概念なし） */
  recentIncomeAmount: number | null
  updatedAt: string
}

export type State = {
  /** 国名コードの数字 */
  countryCode: string | null
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type AgentProfile = {
  academicBackground: string | null
  achievement: string | null
  /** admin審査状態 */
  adminVerificationStatus: 'pending' | 'requested' | 'verified' | 'rejected' | 'canceled' | 'deleted'
  areaInCharge: string | null
  description: string | null
  id: string
  message: string | null
  selfPr: string | null
  status: 'pending'
  updatedAt: string
  yearOfAgentExperience: number

  pledge: {
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  } | null

  offerLetters: {
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  }[] | null
}

export type SpecialtyCompanyType = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

export type SpecialtyPosition = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

/** 職種「大項目」 */
export type OccupationMainCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

/** 業種カテゴリー */
export type IndustryCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type AcademicHistory = {
  createdAt: string
  /** 学部・学科 */
  faculty: string | null
  id: string
  name: string
  sinceDate: string
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school'
  untilDate: string
  updatedAt: string
}

export type Hope = {
  amount: number | null
  /** 「時給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
  createdAt: string
  id: string
  ratioOfOperation: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | null
  /** 特筆事項 */
  specialNote: string | null
  /** 転職希望時期・案件開始時期 */
  timeToChangeJob: number | null
  type: 'career' | 'project'
  updatedAt: string
}

export type Skill = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Achievement = {
  content: string
  createdAt: string
  createdDate: string
  description: string | null
  id: string
  sinceDate: string | null
  untilDate: string | null
  updatedAt: string
}

export type OccupationHistory = {
  createdAt: string
  id: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

/** 職種 */
export type Occupation = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type IndustryHistory = {
  createdAt: string
  id: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

/** 業種 */
export type Industry = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Job = {
  createdAt: string
  id: string
  /** 公開するか */
  isPublic: boolean
  isSample: boolean
  /** 「進行中」「完了」 */
  status: 'in_progress' | 'completed'
  updatedAt: string
}

export type Applicant = {
  createdAt: string
  id: string
  updatedAt: string
}

export type Recruitment = {
  accessibleType: 'public' | 'private'
  appliedAccounts: number
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
  /** 勤務地不問か */
  canLiveAndWorkAnywhere: boolean
  /** 公開出来ない理由 */
  canNotReleaseReasons: string[] | null
  createdAt: string
  department: string | null
  /** 稼働時間目安 */
  estimatedTimePerProject: number | null
  /** 推定単価（税込） */
  estimatedUnitAmount: number | null
  id: string
  interestedAccounts: number
  /** admin用のフラグ */
  isAdminChecked: boolean
  isAppliedByCurrentAccount: boolean | null
  isInterestedByCurrentAccount: boolean | null
  /** 企業内でのフラグ */
  isOrganizationalChecked: boolean
  /** サンプルか */
  isSample: boolean
  isWorkedWithTargetAccount: boolean | null
  jobDescription: string | null
  /** 最高金額（税込） */
  maxAmount: number | null
  /** 最高金額（税抜） */
  maxAmountWithoutTax: number | null
  /** 採用人数 */
  maxNumberOfHiring: string | null
  /** 最低金額（税込） */
  minAmount: number | null
  /** 最低金額（税抜） */
  minAmountWithoutTax: number | null
  nearestStation: string | null
  pageViews: number
  position: string | null
  /** 掲載期間（開始） */
  publishedSinceDate: string | null
  /** 掲載期間（終了） */
  publishedUntilDate: string | null
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected'
  qualificationRequirements: string | null
  /** 推薦ポイント */
  recommendedPoint: string | null
  /** 「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus: 'rarely' | 'normally' | 'full_remote' | null
  /** 年収・報酬の詳細 */
  salaryRemarks: string | null
  /** 選考プロセス */
  selectionProcess: string | null
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | null
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType: 'client' | 'agent' | 'service'
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName: string | null
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus: 'none' | 'private' | 'certained' | 'specified' | null
  /** 最高金額（税） */
  taxForMaxAmount: number | null
  /** 最低金額（税） */
  taxForMinAmount: number | null
  /** 技術スタックの備考 */
  techStackRemarks: string | null
  title: string
  /** 「転職」「副業・フリーランス」 */
  type: 'CareerRecruitment' | 'ProjectRecruitment'
  updatedAt: string
  workConditions: string | null
  /** 勤務地詳細 */
  workplaceDescription: string | null
}

export type RecruitmentInterest = {
  createdAt: string
  id: string
  updatedAt: string
}

export type Scout = {
  /** 自動リマンド期間 */
  autoRemainderPeriod: 'nothing' | 'three_days' | 'five_days' | 'seven_days'
  createdAt: string
  id: string
  /** 重要フラグ */
  isChecked: boolean
  /** 開封済みか */
  isOpened: boolean
  /** 送信者種別(通常orエージェント) */
  senderType: 'basic' | 'agent'
  title: string
  type: 'CareerScout' | 'ProjectScout'
  updatedAt: string
}

export type Message = {
  actAs: 'personal' | 'organizational'

  attachment: {
    filename: string
    contentType: string
    url: string
  } | null

  /** 企業側のみ返ってくる */
  content: string
  createdAt: string
  id: string
  isDraft: boolean
  /** general側のみ返ってくる */
  transformedContent: string
  updatedAt: string
}

export type AccountsRes = {
  accounts: (Account & {
    latestWorkHistory?: WorkHistory | null | undefined

    profile: Profile & {
      placeOfResidence: State
    } | null

    agentProfile: AgentProfile & {
      specialtyCompanyTypes: SpecialtyCompanyType[]
      specialtyPositions: SpecialtyPosition[]
      occupationMainCategories: OccupationMainCategory[]
      industryCategories: IndustryCategory[]
    } | null

    academicHistories: AcademicHistory[]
    workHistories: (WorkHistory)[]
    hopes: Hope[]
    skills: Skill[]
    achievements: Achievement[]
    occupationHistories: (OccupationHistory & {
      occupation: Occupation
    })[]
    industryHistories: (IndustryHistory & {
      industry: Industry
    })[]
    jobs: Job[]
    applicantContactHistoriesFromCurrentCompany: ({
      typename: 'RecruitmentInterest' | 'Applicant'
      timestamp: string

      resource: Applicant & {
        recruitment?: Recruitment | undefined
      } | RecruitmentInterest & {
        recruitment?: Recruitment | undefined
      } | null
    })[]
    scoutsFromCurrentCompany: (Scout & {
      sender?: Account | null | undefined

      message?: Message | null | undefined

      recruitments: Recruitment[]
    })[]
    scoutsFromCurrentAccount: (Scout & {
      sender: Account | null

      message: Message | null

      recruitments: Recruitment[]
    })[]
  })[]
  totalDataNums: number
}

export type AcademicHistoriesRes = {
  academicHistories: AcademicHistory[]
}

export type AchievementsRes = {
  achievements: (Achievement)[]
}

export type HopesRes = {
  hopes: (Hope & {
    industries: Industry[]
  } & {
    occupations: Occupation[]
  } & {
    workplaces: State[]
  })[]
}

export type IndustryHistoriesRes = {
  industryHistories: (IndustryHistory & {
    account: Account
    industry: Industry
  })[]
}

export type OccupationHistoriesRes = {
  occupationHistories: (OccupationHistory & {
    account: Account
    occupation: Occupation
  })[]
}

export type ProjectResult = {
  totalJobsNum: number
  totalRate: number
  skills: string[]
}

/** appliedの場合はcustomer_name以外必須 */
export type JobOrder = {
  /** 消費税計算方法 */
  consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
  createdAt: string
  /** 取引先名 */
  customerName: string | null
  /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
  feeCalculationSpan: 'monthly' | 'daily' | 'hourly' | null
  /** 「稼働報酬制」「固定報酬制」 */
  feeType: 'time_based' | 'fixed'
  files: ({
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  } | {
  })[]
  /** 固定報酬制の金額(税込) */
  fixedAmount: number | null
  /** 固定報酬制の小計(税抜) */
  fixedSubTotal: number | null
  /** 固定報酬制の金額(税込)と論理手数料を合わせた総額 */
  fixedTotalAmount: number | null
  id: string
  isSample: boolean
  /** 稼動報酬制の源泉徴収の対象か */
  isTargetWithholdingTax: boolean
  /** 仕事内容 */
  jobDescription: string | null
  /** 業務名 */
  jobName: string | null
  /** 論理手数料（報酬額ときっかけを元に算出する手数料の予定額） */
  logicalFeeAmount: number | null
  /** 発注番号 */
  number: string | null
  /** 発注日 */
  orderDate: string | null
  /** 諸条件 */
  otherConditions: string | null
  /** 受注者からのコメント */
  reviewComment: string | null
  /** 開始日 */
  sinceDate: string | null
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status: 'draft' | 'applied' | 'certificated' | 'rejected'
  /** 稼働報酬制の税率 */
  taxRatio: number | null
  /** 稼働報酬制の金額 */
  unitTimeFee: number | null
  /** 終了日 */
  untilDate: string | null
  updatedAt: string
  /** 源泉徴収税計算に消費税を含めるか */
  withholdingIncludedConsumptionTax: boolean
}

export type JobReview = {
  createdAt: string
  id: string
  /** もっとこうして欲しかった点 */
  improvementPoint: string | null
  /** サンプルか */
  isSample: boolean
  /** スキルの詳細 */
  skillDescription: string | null
  starRating: number
  updatedAt: string
}

export type ProjectResultRes = ProjectResult & {
  jobs: (Job & {
    jobOrder: JobOrder & {
      recruitment?: Recruitment & {
        workplace?: State | undefined
        occpations?: Occupation[] | undefined
        industries?: Industry[] | undefined
      } | undefined
    }

    jobReviews: (JobReview & {
      skills?: Skill[] | undefined
    })[]
  })[]
}

export type SkillsRes = {
  skills: Skill[]
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export type ProjectHistory = {
  businessContent: string | null
  createdAt: string
  id: string
  isEmployed: boolean
  name: string
  position: string | null
  sinceDate: string
  untilDate: string | null
  updatedAt: string
}

export type WorkHistoriesRes = {
  workHistories: (WorkHistory & {
    account: Account
  } & {
    projectHistories: ProjectHistory[]
  })[]
}

export type Employment = {
  createdAt: string
  /** 所属部署 */
  department: string | null
  email: string
  id: string
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid: boolean
  lastNotificationReadAt: string | null
  /** 役職 */
  position: string | null
  updatedAt: string
}

export type Company = {
  /** admin審査状態 */
  adminVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled'
  averageAge: number | null
  businessSummary: string | null
  /** 資本金（税の概念なし） */
  capital: number | null
  corporatePr: string | null
  coverImageUrl: string | null
  createdAt: string
  deletedAt: string | null
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber: string | null
  followerNums: number | null
  headOfficeLocation: string | null
  hpUrl: string | null
  id: string
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio: number | null
  isFollowingByCurrentAccount: boolean | null
  isListed: boolean
  isSample: boolean
  logoUrl: string | null
  name: string
  nameKana: string | null
  /** 前年度の売上高（税込） */
  netSales: number | null
  numbersOfEmployees: string | null
  phone: string | null
  publicVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected'
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio: number | null
  representative: string | null
  representativeKana: string | null
  type: 'account' | 'stub'
  updatedAt: string
  yearOfEstablishment: string | null
}

export type Role = {
  category: 'owner' | 'manager' | 'member' | 'guest'
  createdAt: string
  description: string | null
  id: string
  /** 役割「general」「admin」など */
  name: string
  type: 'official' | 'custom'
  updatedAt: string
}

export type AccountRes = Account & {
  latestWorkHistory?: WorkHistory | null | undefined

  profile: Profile & {
    placeOfResidence: State
  } | null

  agentProfile: AgentProfile & {
    specialtyCompanyTypes: SpecialtyCompanyType[]
    specialtyPositions: SpecialtyPosition[]
    occupationMainCategories: OccupationMainCategory[]
    industryCategories: IndustryCategory[]
  } | null

  employments?: (Employment & {
    company?: Company | undefined
    roles?: Role[] | undefined
  })[] | undefined
  blockedCompanies?: Company[] | undefined
  academicHistories: AcademicHistory[]
  workHistories: (WorkHistory & {
    projectHistories: ProjectHistory[]
  })[]
  hopes: Hope[]
  skills: Skill[]
  achievements: Achievement[]
  occupationHistories: (OccupationHistory & {
    occupation: Occupation
  })[]
  industryHistories: (IndustryHistory & {
    industry: Industry
  })[]
  jobs: Job[]
  applicantContactHistoriesFromCurrentCompany: ({
    typename: 'RecruitmentInterest' | 'Applicant'
    timestamp: string

    resource: Applicant & {
      recruitment?: Recruitment | undefined
    } | RecruitmentInterest & {
      recruitment?: Recruitment | undefined
    } | null
  })[]
  scoutsFromCurrentCompany: (Scout & {
    sender: Account | null

    message: Message | null

    recruitments: Recruitment[]
  })[]
  scoutsFromCurrentAccount: (Scout & {
    sender: Account | null

    message: Message | null

    recruitments: Recruitment[]
  })[]
}

export type Feature = {
  createdAt: string
  id: string
  name: string
  sourceType: 'company' | 'recruitment'
  type: 'default' | 'organizational'
  updatedAt: string
}

export type CompaniesRes = {
  companies: (Company & {
    owner: Account & {
      profile: Profile & {
        placeOfResidence?: State | undefined
      }
    } | null

    recruitments: Recruitment[]
    industries: Industry[]
    features: Feature[]
  })[]
  totalDataNums: number
}

export type Subscription = {
  createdAt: string
  id: string
  sinceDate: string | null
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending'
  untilDate: string | null
  updatedAt: string
}

export type Price = {
  active: boolean
  createdAt: string
  currency: string
  id: string
  /** 価格（税） */
  taxForUnitAmount: number | null
  /** 価格（税込） */
  unitAmount: number
  /** 価格（税抜） */
  unitAmountWithoutTax: number | null
  updatedAt: string
}

export type Product = {
  active: boolean
  createdAt: string
  description: string | null
  id: string
  name: string
  planType: 'company' | 'agent' | null
  updatedAt: string
}

export type PaymentMethod = {
  brand: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners'
  createdAt: string
  expMonth: number
  expYear: number
  id: string
  isDefault: boolean
  last4: number
  updatedAt: string
}

export type OrgUnit = {
  createdAt: string
  description: string | null
  id: string
  isRoot: boolean
  name: string
  updatedAt: string
}

/** クローリングサービス */
export type ExternalService = {
  createdAt: string
  id: string
  isContracted: boolean
  name: string
  updatedAt: string
}

export type CompanyRes = Company & {
  owner: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
    }
  } | null

  subscription: Subscription & {
    price: Price & {
      product?: Product | undefined
    }
  } | {
  }

  recruitments: Recruitment[]
  industries: Industry[]
  features: Feature[]
  paymentMethods: PaymentMethod[]
  orgUnits: OrgUnit[]
  externalServices: ExternalService[]
}

export type ConsentMatter = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

export type ConsentMattersRes = {
  consentMatters: (ConsentMatter)[]
}

export type ConsentMatterRes = ConsentMatter

export type EmploymentContractTerm = {
  createdAt: string
  id: string
  name: string
  /** 「1ヵ月未満」「1ヵ月以上3ヵ月未満」「3ヵ月以上6ヵ月未満」「6ヵ月以上」 */
  term: 'less_than_one_month' | 'one_to_three_months' | 'three_to_six_months' | 'more_than_six_months'
  updatedAt: string
}

export type EmploymentContractTermsRes = {
  employmentContractTerms: (EmploymentContractTerm)[]
}

export type EmploymentStatus = {
  createdAt: string
  id: string
  /** 募集作成の時に選択可能か */
  isSelectable: boolean
  name: string
  /** 「請負」「準委任」「業務委託」 */
  projectClassification: 'contract' | 'quasi_mandate' | 'outsourcing' | null
  type: 'career' | 'project'
  updatedAt: string
}

export type EmploymentStatusesRes = {
  employmentStatuses: (EmploymentStatus)[]
}

export type EmploymentStatusRes = EmploymentStatus

export type FeaturesRes = {
  features: (Feature)[]
}

export type FeatureRes = Feature

export type IntroductionCompletionReport = {
  /** 内定承諾日 */
  acceptanceOfOfferDate: string | null
  /** 年収 */
  amount: number
  /** 請求先メールアドレス */
  billingEmails: string[] | null
  /** 紹介料（年収 x 紹介料比率） */
  commissionFee: number | null
  /** 紹介料比率 */
  commissionFeeRatio: number | null
  /** 紹介料（税抜） */
  commissionFeeWithoutTax: number | null
  createdAt: string | null
  id: string | null
  isEnable: boolean
  joinedDate: string | null
  memo: string | null
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  /** 取り消し理由 */
  reasonForCancellation: string | null
  /** 手数料（税込） */
  systemFee: number | null
  /** システム手数料比率 */
  systemFeeRatio: number | null
  /** 手数料（税抜） */
  systemFeeWithoutTax: number | null
  /** 紹介料（税） */
  taxForCommissionFee: number | null
  /** 手数料（税） */
  taxForSystemFee: number | null
  updatedAt: string | null
}

export type IntroductionCompletionReportsRes = {
  introductionCompletionReports: (IntroductionCompletionReport & {
    account: Account
    company: Company
    agent: Account
    occupation: Occupation
    industry: Industry
  })[]
}

export type JobChangeCompletionReport = {
  /** 年収（税の概念なし） */
  amount: number
  createdAt: string
  id: string
  updatedAt: string
}

export type JobChangeCompletionReportsRes = {
  jobChangeCompletionReports: (JobChangeCompletionReport & {
    account: Account
  } & {
    company: Company
  })[]
}

export type OfficialInformation = {
  content: string
  createdAt: string
  htmlContent: string
  id: string
  isReleased: boolean
  title: string
  updatedAt: string
}

export type OfficialInformationsRes = {
  officialInformations: (OfficialInformation)[]
}

export type OfficialInformationRes = OfficialInformation

export type Payout = {
  amount: number
  /** 支払完了予想日付 */
  arrivalDate: string
  createdAt: string
  currency: string
  id: string
  status: 'pending' | 'in_transit' | 'paid' | 'failed' | 'canceled'
  stripePoId: string
  updatedAt: string
}

export type PayoutsRes = {
  payouts: (Payout)[]
  totalDataNums: number
}

export type PriceRes = Price

export type PrivacyPolicyHistory = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
  version: string
}

export type PrivacyPolicyHistoriesRes = {
  privacyPolicyHistories: (PrivacyPolicyHistory)[]
}

export type PrivacyPolicyHistoryRes = PrivacyPolicyHistory

export type ProductsRes = {
  products: (Product)[]
}

export type ProductRes = Product

export type PricesRes = {
  prices: (Price)[]
}

export type RecruitmentCompletionReport = {
  /** 内定承諾日 */
  acceptanceOfOfferDate: string | null
  /** 年収（税の概念なし） */
  amount: number
  billingEmails: string[] | null
  createdAt?: string | null | undefined
  id: string | null
  isEnable: boolean
  /** 入社日 */
  joinedDate: string | null
  memo: string | null
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  /** 取り消し理由 */
  reasonForCancellation: string | null
  /** 手数料（税込） */
  systemFee: number
  systemFeeRatio: number | null
  /** 手数料（税抜） */
  systemFeeWithoutTax: number | null
  /** 手数料（税） */
  taxForSystemFee: number | null
  updatedAt: string | null
}

export type RecruitmentCompletionReportsRes = {
  recruitmentCompletionReports: (RecruitmentCompletionReport & {
    company: Company
    account: Account
    occupation: Occupation
    industry: Industry
  })[]
  totalDataNums: number
}

export type RecruitmentsRes = {
  recruitments: (Recruitment & {
    company?: Company | {
    } | undefined

    workplace?: State | {
    } | undefined

    author: Account & {
      profile: Profile & {
        placeOfResidence?: State | undefined
        specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
        specialtyPositions?: SpecialtyPosition[] | undefined
        occupationMainCategories?: OccupationMainCategory[] | undefined
        industryCategories?: IndustryCategory[] | undefined
      }

      agentProfile: AgentProfile
    } | {
    }

    externalService?: ExternalService | {
    } | undefined

    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    features: Feature[]
    employmentContractTerms: EmploymentContractTerm[]

    targetCompany?: Company | {
    } | undefined
  })[]
  totalDataNums: number
}

export type TechStack = {
  accessibility: 'public' | 'private'
  category: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type RecruitmentRes = Recruitment & {
  company?: Company | {
  } | undefined

  workplace?: State | {
  } | undefined

  author: Account & {
    profile: Profile & {
      placeOfResidence?: State | undefined
      specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
      specialtyPositions?: SpecialtyPosition[] | undefined
      occupationMainCategories?: OccupationMainCategory[] | undefined
      industryCategories?: IndustryCategory[] | undefined
    }

    agentProfile: AgentProfile
  } | {
  }

  externalService?: ExternalService | {
  } | undefined

  employmentStatuses: EmploymentStatus[]
  occupations: Occupation[]
  industries: Industry[]
  features: Feature[]
  employmentContractTerms: EmploymentContractTerm[]
  techStacks: TechStack[]

  targetCompany?: Company | {
  } | undefined
}

export type StatesRes = {
  states: (State)[]
}

export type StateRes = State

export type TechStacksRes = {
  techStacks: (TechStack)[]
}

export type TechStackRes = TechStack

export type TermHistory = {
  content: string
  createdAt: string
  id: string
  type: 'common' | 'plan'
  updatedAt: string
  version: string
}

export type TermHistoriesRes = {
  termHistories: (TermHistory)[]
  totalDataNums: number
}

export type TermHistoryRes = TermHistory

/** STIを使って実装する */
export type Withdrawal = {
  amount: number
  createdAt: string
  feeAmount: number
  id: string
  totalAmount: number
  updatedAt: string
}

export type WithdrawalsRes = {
  withdrawals: (Withdrawal & {
    account?: Account | {
    } | undefined

    company?: Company | {
    } | undefined
  })[]
  totalDataNums: number
}

export type EmploymentContractTermRes = EmploymentContractTerm

export type AccountWithTokenRes = {
  account: Account & {
    employments: Employment[]
  }

  profile: Profile
  token: string
}

/** 消費税 */
export type ConsumptionTax = {
  country: 'jpn'
  id: string
  /** 表示名 */
  name: string
  /** 税率 */
  ratio: number
}

/** 職種「中項目」 */
export type OccupationSubCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type OccupationMainCategoriesRes = {
  occupationMainCategories: (OccupationMainCategory & {
    occupationSubCategories: (OccupationSubCategory & {
      occupations?: Occupation[] | undefined
    })[]
  })[]
}

export type StateCategory = {
  /** 「日本」「海外」「その他」 */
  countryType: 'japan' | 'international' | 'other' | null
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type AcademicHistoryRes = AcademicHistory

export type AchievementRes = Achievement

export type AgentProfileRes = AgentProfile & {
  specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
  specialtyPositions?: SpecialtyPosition[] | undefined
  occupationMainCategories?: OccupationMainCategory[] | undefined
  industryCategories?: IndustryCategory[] | undefined
}

export type SpecialtyCompanyTypesRes = {
  specialtyCompanyTypes: (SpecialtyCompanyType)[]
}

export type SpecialtyCompanyTypeRes = SpecialtyCompanyType

export type SpecialtyPositionsRes = {
  specialtyPositions: (SpecialtyPosition)[]
}

export type SpecialtyPositionRes = SpecialtyPosition

export type ApplicantsRes = {
  applicants: (Applicant & {
    recruitment: Recruitment & {
      company?: Company & {
        industries?: Industry[] | undefined
      } | undefined

      workplace?: State | undefined
      employmentStatus?: EmploymentStatus | undefined
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
    }

    account: Account
  })[]
  totalDataNums: number
}

export type ApplicantRes = Applicant & {
  recruitment: Recruitment
  account: Account
}

/** STIを使って実装する */
export type BankAccount = {
  accountHolderName: string
  accountNumber: string
  bankCode: string
  bankName: string
  branchCode: string
  branchName: string
  createdAt: string
  id: string
  updatedAt: string
}

export type BankAccountRes = BankAccount & {
  company?: Company | null | undefined

  account?: Account | null | undefined
}

export type Channel = {
  createdAt: string
  id: string
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  title: string
  updatedAt: string
}

export type ChannelsRes = {
  channels: (Channel & {
    latestMessage?: Message | {
    } | undefined

    scout?: Scout | null | undefined

    applicant?: Applicant | {
    } | undefined

    messages: Message[]
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account: Account
    })[]
  })[]
  totalDataNums: number
}

export type Policy = {
  category: 'unspecified' | 'company' | 'employment' | 'career_recruitment' | 'career_scout' | 'career_applicant_resource' | 'career_selection' | 'career_payment' | 'project_recruitment' | 'project_scout' | 'project_applicant_resource' | 'project_selection' | 'project_job' | 'project_payment' | 'message' | 'scout'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Permission = {
  /** 権限「read:recruitment」「create:recruitment」など */
  action: string
  conditions: string | null
  createdAt: string
  id: string
  updatedAt: string
}

export type EmploymentsRes = {
  employments: (Employment & {
    account: Account & {
      profile?: Profile & {
        placeOfResidence: State
      } | null | undefined
    }

    company: Company

    roles: (Role & {
      policies?: (Policy & {
        permissions?: Permission[] | undefined
      })[] | undefined
    })[]
    orgUnits: OrgUnit[]
  })[]
}

export type HopeRes = Hope & {
  industries: Industry[]
} & {
  occupations: Occupation[]
} & {
  workplaces: State[]
}

export type IncomeHistory = {
  amount: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type IncomeHistoriesRes = {
  incomeHistories: (IncomeHistory & {
    account: Account | null

    company?: Company | null | undefined
  })[]
  totalDataNums: number
}

export type IndustryHistoryRes = IndustryHistory & {
  account: Account
  industry: Industry
}

export type JobChangeCompletionReportRes = JobChangeCompletionReport & {
  account: Account
} & {
  company: Company
}

/** 固定報酬制の場合の各品目 */
export type JobServiceItem = {
  /** 合計金額 */
  amount: number
  createdAt: string
  /** 品目名 */
  description: string
  id: string
  /** 源泉徴収の対象か */
  isTargetWithholding: boolean
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
}

/** 発注で、消費税率ごとに金額を保持するテーブル */
export type JobOrderConsumptionTaxPrice = {
  amount: number
  id: string
}

/** 発注で、源泉徴収税率ごとに金額を保持するテーブル */
export type JobOrderWithholdingTaxPrice = {
  amount: number
  id: string
}

export type JobOrdersRes = {
  jobOrders: (JobOrder & {
    account: Account

    company: Company

    recruitment: Recruitment

    job: Job & {
      account: Account
    } | null

    jobServiceItems: (JobServiceItem & {
      consumptionTax: ConsumptionTax
    })[]
    jobOrderConsumptionTaxPrices: (JobOrderConsumptionTaxPrice & {
      consumptionTax: ConsumptionTax
    })[]

    jobOrderWithholdingTaxPrice: JobOrderWithholdingTaxPrice | null
  })[]
  totalDataNums: number
}

export type JobsRes = {
  jobs: (Job & {
    account: Account

    company: Company

    jobOrder: JobOrder & {
      recruitment: Recruitment

      account: Account
    }
  })[]
  totalDataNums: number
}

export type MessagesRes = {
  messages: (Message & {
    sender: Account & {
      profile: Profile | {
      }

      agentProfile?: AgentProfile | {
      } | undefined
    }

    recruitments: (Recruitment)[]
    channel: Channel
  })[]
  totalDataNums: number
}

export type Notification = {
  content: string
  createdAt: string
  /** Accountであればavatar_url、Companyであればlogo_url */
  iconUrl: string | null
  id: string
  /** 「未読」「既読」 */
  isRead: boolean
  /** 「通常通知」or「メッセージ通知」 */
  notificationType: 'general' | 'message'
  subject: string | null
  updatedAt: string
  url: string
}

export type NotificationsRes = {
  notifications: (Notification & {
    account?: Account | {
    } | undefined

    company?: Company | {
    } | undefined

    employment?: Employment | null | undefined

    channel?: Channel | null | undefined
  })[]
  totalDataNums?: number | undefined
}

export type OccupationHistoryRes = OccupationHistory & {
  account: Account
  occupation: Occupation
}

export type ProfileRes = Profile & {
  placeOfResidence: State
}

export type RecruitmentInterestsRes = {
  recruitments: (Recruitment & {
    occupations: Occupation[]
    industries: Industry[]
    workplace: State
    company: Company
  })[]
  totalDataNums: number
}

export type ScoutsRes = {
  scouts: (Scout & {
    company: Company
    receiver: Account
    sender: Account
    message: Message
    channel: Channel
    recruitments: Recruitment[]
  })[]
  totalDataNums: number
}

export type Support = {
  career: boolean
  createdAt: string
  id: string
  project: boolean
  updatedAt: string
}

export type SupportRes = Support & {
  account: Account
}

export type WithdrawalRes = Withdrawal & {
  account?: Account | {
  } | undefined

  company?: Company | {
  } | undefined
}

export type MessageRes = Message & {
  sender: Account & {
    profile: Profile & {
      placeOfResidence: State
    } | null

    agentProfile: AgentProfile & {
      specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
      specialtyPositions?: SpecialtyPosition[] | undefined
      occupationMainCategories?: OccupationMainCategory[] | undefined
      industryCategories?: IndustryCategory[] | undefined
    } | null
  }

  recruitments: (Recruitment & {
    workplace: State
    author: Account
    externalService: ExternalService
    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    company: Company
  })[]
  channel: Channel
}

export type ChannelRes = Channel & {
  latestMessage?: Message | {
  } | undefined

  scout?: Scout | null | undefined

  applicant?: Applicant | {
  } | undefined

  messages: Message[]
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type IndustryCategoriesRes = {
  industryCategories: (IndustryCategory & {
    industries: Industry[]
  })[]
}

export type Invoice = {
  /** 請求額（税込） */
  amount: number | null
  /** 承認日 */
  approvedDate: string | null
  /** 消費税計算方法 */
  consumptionTaxCalculationMethod: 'floor' | 'ceil' | 'round'
  createdAt: string
  /** 支払期日 */
  deadline: string | null
  /** 請求額に応じたシステム手数料 */
  feeAmount: number | null
  files: {
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  }[] | null
  id: string
  /** 承認済みか */
  isApproved: boolean
  /** サンプルか */
  isSample: boolean
  /** 請求日 */
  issuedDate: string | null
  /** 「下書き」「公開」「取り下げ済み」 */
  issuingStatus: 'draft' | 'fixed' | 'withdrawn'
  /** 備考 */
  note: string | null
  /** 請求番号(発注番号と同じで任意の値) */
  number: string | null
  paymentMethod: 'bank' | 'credit_card' | null
  /** 「支払い待ち」「決済待ち」「支払いおよび決済待ち」「決済失敗」「完了」 */
  status: 'waiting_for_payment' | 'waiting_for_settlement' | 'waiting_for_payment_and_settlement' | 'failed_settlement' | 'completed' | null
  /** 決済日 */
  settlementDate: string | null
  /** Stripe決済手数料 */
  stripeFeeAmount: number | null
  /** 請求額の小計(税抜) */
  subTotal: number | null
  title: string | null
  /** 請求額（税込）とシステム手数料を合わせた総額 */
  totalAmount: number | null
  updatedAt: string
  /** 源泉徴収税計算に消費税を含めるか */
  withholdingIncludedConsumptionTax: boolean
}

export type InvoiceDetailedItem = {
  /** 金額(税込) */
  amount: number
  /** 金額(税抜) */
  amountWithoutTax: number | null
  createdAt: string
  /** 項目名 */
  description: string
  id: string
  /** 源泉徴収の対象か */
  isTargetWithholdingTax: boolean | null
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
}

/** 請求で、消費税率ごとに金額を保持するテーブル */
export type InvoiceConsumptionTaxPrice = {
  amount: number | null
  id: string
}

/** 請求で、源泉徴収税率ごとに金額を保持するテーブル */
export type InvoiceWithholdingTaxPrice = {
  amount: number | null
  id: string
}

export type InvoiceRes = Invoice & {
  job: Job & {
    jobOrder: JobOrder
  }

  invoiceDetailedItems: (InvoiceDetailedItem & {
    consumptionTax?: ConsumptionTax | {
    } | undefined
  })[]
  invoiceConsumptionTaxPrices: (InvoiceConsumptionTaxPrice & {
    consumptionTax?: ConsumptionTax | {
    } | undefined
  })[]

  invoiceWithholdingTaxPrice: InvoiceWithholdingTaxPrice | null
}

export type JobOrderRes = JobOrder & {
  account: Account | null

  company: Company & {
    industries: Industry[]

    owner: Account & {
      profile: Profile | null
    } | null
  }

  recruitment: Recruitment & {
    workplace?: Account | null | undefined

    author?: Account | null | undefined

    externalService?: ExternalService | null | undefined

    employmentStatuses: EmploymentStatus[]
    occupations: Occupation[]
    industries: Industry[]
    company: Company
  }

  job: Job & {
    account: Account
  } | null

  jobServiceItems: (JobServiceItem & {
    consumptionTax: ConsumptionTax
  })[]
  jobOrderConsumptionTaxPrices: (JobOrderConsumptionTaxPrice & {
    consumptionTax: ConsumptionTax
  })[]

  jobOrderWithholdingTaxPrice?: JobOrderWithholdingTaxPrice | null | undefined
}

export type JobReviewRes = JobReview & {
  skills: Skill[]
} & {
  job: Job
}

export type JobRes = Job & {
  account: Account

  company: Company & {
    industries: Industry[]

    owner: Account & {
      profile: Profile | null
    } | null
  }

  jobOrder: JobOrder & {
    recruitment: Recruitment & {
      workplace: Account | null

      author: Account | null

      externalService?: ExternalService | null | undefined

      employmentStatuses: EmploymentStatus[]
      occupations: Occupation[]
      industries: Industry[]
      company: Company
    }

    account: Account
  }

  jobReviews: JobReview[]
  invoices: Invoice[]
}

export type InvoicesRes = {
  invoices: (Invoice & {
    job: Job & {
      jobOrder?: JobOrder | undefined
    }

    invoiceDetailedItems: (InvoiceDetailedItem)[]
    invoiceConsumptionTaxPrices: (InvoiceConsumptionTaxPrice)[]

    invoiceWithholdingTaxPrice: InvoiceWithholdingTaxPrice | null
  })[]
  totalDataNums: number
}

export type JobReviewsRes = {
  jobReviews: (JobReview & {
    skills: Skill[]
  } & {
    job: Job
  })[]
}

export type Nda = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
  version: string
}

export type ConsentNda = {
  address: string
  createdAt: string
  id: string
  name: string
  ndaId: string | null
  updatedAt: string
}

export type PoliciesRes = {
  policies: (Policy & {
    permissions: Permission[]
  })[]
}

export type WorkHistoryRes = WorkHistory & {
  account: Account
} & {
  projectHistories: ProjectHistory[]
}

export type ScoutTemplate = {
  category: 'career' | 'project' | 'career_remainder' | 'project_remainder'
  content: string
  createdAt: string
  id: string
  /** お気に入りしているか */
  isInterested: boolean
  name: string
  /** 並び順 */
  position: number
  scope: 'mine' | 'organizational'
  title: string
  updatedAt: string
}

export type ScoutRes = Scout & {
  company: Company
  receiver: Account
  sender: Account
  message: Message
  channel: Channel

  autoRemainderTemplate?: ScoutTemplate | {
  } | undefined

  recruitments: Recruitment[]
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type SkillRes = Skill

export type StateCategoriesRes = {
  stateCategories: (StateCategory & {
    states: State[]
  })[]
}

export type StateCategoryRes = StateCategory & {
  states: State[]
}

export type ProjectHistoriesRes = {
  projectHistories: (ProjectHistory & {
    workHistory: WorkHistory
  })[]
}

export type ProjectHistoryRes = ProjectHistory & {
  workHistory: WorkHistory
}

export type Room = {
  createdAt: string
  id: string
  updatedAt: string
}

export type RoomRes = Room & {
  account: Account & {
    profile: Profile & {
      placeOfResidence: State
    } | null
  }

  company: Company & {
    industries: Industry[]
    features: Feature[]
  }

  jobChangeCompletionReport?: JobChangeCompletionReport | null | undefined

  recruitmentCompletionReport: RecruitmentCompletionReport | null

  introductionCompletionReport: IntroductionCompletionReport | null

  channels: (Channel & {
    messages: Message[]
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
}

export type RoomsRes = {
  rooms: (Room & {
    account: Account & {
      profile: Profile & {
        placeOfResidence: State
      } | null
    }

    company: Company & {
      industries?: Industry[] | undefined
      features?: Feature[] | undefined
    }

    jobChangeCompletionReport: JobChangeCompletionReport | null

    recruitmentCompletionReport: RecruitmentCompletionReport | null

    introductionCompletionReport: IntroductionCompletionReport | null

    channels: (Channel & {
      messages?: Message[] | undefined
      principalOrgUnits?: OrgUnit[] | undefined
      principalEmployments?: (Employment & {
        account?: Account | undefined
      })[] | undefined
    })[]
  })[]
  totalDataNums: number
}

export type AccountSearchCondition = {
  academicBackground?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
  createdAt: string
  currentCompanyName?: string | undefined
  currentCompanyNameOr?: boolean | undefined
  currentStateIds?: string[] | undefined
  cvUpdatedIn?: 'three_day' | 'one_week' | 'one_month' | 'three_month' | 'half_year' | undefined
  employmentStatus?: 'employed' | 'unemployed' | undefined
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  gender?: 'male' | 'female' | 'other' | undefined
  hopingIndustryIds?: string[] | undefined
  hopingMaxIncomeAmount?: number | undefined
  hopingMinIncomeAmount?: number | undefined
  hopingOccupationIds?: string[] | undefined
  hopingStateIds?: string[] | undefined
  id: string
  industryHistories?: {
    name: string
    industryId: string
    yearOfIndustryExperience: string
  }[] | undefined
  interestedInCompany?: boolean | undefined
  interestedInRecruitment?: boolean | undefined
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | undefined
  keyword?: string | undefined
  keywordOr?: boolean | undefined
  lastUsedDate: string
  lastSignInAt?: 'within_one_day' | 'within_one_week' | 'within_one_month' | undefined
  managementExperience?: 'everything' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  maritalStatus?: 'single' | 'married' | undefined
  maxAge?: number | undefined
  maxRecentIncomeAmount?: number | undefined
  minAge?: number | undefined
  minRecentIncomeAmount?: number | undefined
  numberOfJobChanges?: 'unspecified' | 'nothing' | 'one' | 'two' | 'three' | 'four' | undefined
  occupationHistories?: {
    name: string
    occupationId: string
    yearOfOccupationExperience: string
  }[] | undefined
  position: number
  positionName?: string | undefined
  positionNameOr?: boolean | undefined
  recruitmentPageView?: boolean | undefined
  scoutSettings?: ('career' | 'project')[] | undefined
  sortAscLastSignInAt?: boolean | undefined
  sortAscProfileUpdatedAt?: boolean | undefined
  title: string
  updatedAt: string
}

export type AccountSearchConditionsRes = {
  accountSearchConditions: (AccountSearchCondition)[]
  totalDataNums: number
}

export type AccountSearchConditionRes = AccountSearchCondition

export type FollowedAccountsRes = {
  accounts: (Account & {
    latestWorkHistory?: WorkHistory | null | undefined

    profile: Profile & {
      placeOfResidence: State
    } | null

    agentProfile: AgentProfile & {
      specialtyCompanyTypes: SpecialtyCompanyType[]
      specialtyPositions: SpecialtyPosition[]
      occupationMainCategories: OccupationMainCategory[]
      industryCategories: IndustryCategory[]
    } | null

    academicHistories: AcademicHistory[]
    workHistories: (WorkHistory & {
      projectHistories: ProjectHistory[]
    })[]
    hopes: Hope[]
    skills: Skill[]
    achievements: Achievement[]
    occupationHistories: (OccupationHistory & {
      occupation: Occupation
    })[]
    industryHistories: (IndustryHistory & {
      industry: Industry
    })[]
    jobs: Job[]
    applicantContactHistoriesFromCurrentCompany: ({
      typename: 'RecruitmentInterest' | 'Applicant'
      timestamp: string

      resource: Applicant & {
        recruitment?: Recruitment | undefined
      } | RecruitmentInterest & {
        recruitment?: Recruitment | undefined
      } | null
    })[]
    scoutsFromCurrentCompany: (Scout & {
      sender?: Account | null | undefined

      message?: Message | null | undefined

      recruitments: Recruitment[]
    })[]
    scoutsFromCurrentAccount: (Scout & {
      sender: Account | null

      message: Message | null

      recruitments: Recruitment[]
    })[]
  })[]

  meta: {
    totalDataNums: number
    totalUnreadNums: number
  }
}

export type ApplicantResource = {
  careerStatus: 'backlog' | 'checked' | 'interviewing' | 'offered' | 'joined' | 'rejected' | null
  createdAt: string
  /** 論理削除時刻 */
  deletedAt: string | null
  id: string
  /** 企業側の管理用フラグ（転職） */
  isCheckedCareer: boolean
  /** 企業側の管理用フラグ（副業・フリーランス） */
  isCheckedProject: boolean
  /** サンプルか */
  isSample: boolean
  /** 閲覧したか（Newマークの有無）（転職） */
  isWatchedCareer: boolean
  /** 閲覧したか（Newマークの有無）（副業・フリーランス） */
  isWatchedProject: boolean
  /** 人材管理追加のきっかけ */
  origin: 'applicant' | 'scout' | null
  projectStatus: 'backlog' | 'in_progress' | 'closed' | null
  /** 応募したRecruitmentのSourceType（応募じゃなければnil） */
  recruitmentSourceType: 'client' | 'agent' | null
  updatedAt: string
}

export type ApplicantResourcesRes = {
  applicantResources: (ApplicantResource & {
    account: Account & {
      jobs?: (Job & {
        jobReviews?: (JobReview & {
          skills?: Skill[] | undefined
        })[] | undefined

        jobOrder?: JobOrder & {
          recruitment?: Recruitment & {
            workplace?: State | undefined
            occupations?: Occupation[] | undefined
            industries?: Industry[] | undefined
          } | undefined
        } | undefined

        invoices?: Invoice[] | undefined
        company?: Company | undefined
      })[] | undefined

      profile?: Profile & {
        placeOfResidence?: State | undefined
      } | null | undefined

      scoutsFromCurrentCompany?: (Scout & {
        sender: Account | null

        message: Message | null

        recruitments: Recruitment[]
      })[] | undefined
      hopes?: (Hope & {
        occupations?: Occupation[] | undefined
        industries?: Industry[] | undefined
        workplaces?: State[] | undefined
      })[] | undefined
    }

    room: Room & {
      account: Account
      company: Company
    } | null

    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type ApplicantResourceRes = ApplicantResource & {
  account: Account & {
    jobs: (Job & {
      jobReviews?: (JobReview & {
        skills?: Skill[] | undefined
      })[] | undefined

      jobOrder?: JobOrder & {
        recruitment?: Recruitment & {
          workplace?: State | undefined
          occupations?: Occupation[] | undefined
          industries?: Industry[] | undefined
        } | undefined
      } | undefined

      invoices?: Invoice[] | undefined
      company?: Company | undefined
    })[]

    profile: Profile & {
      placeOfResidence?: State | undefined
    } | null

    scoutsFromCurrentCompany: (Scout & {
      sender: Account | null

      message: Message | null

      recruitments: Recruitment[]
    })[]
    hopes: (Hope & {
      occupations?: Occupation[] | undefined
      industries?: Industry[] | undefined
      workplaces?: State[] | undefined
    })[]
  }

  room: Room & {
    account: Account
    company: Company
  } | null

  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type EmploymentRes = Employment & {
  account: Account & {
    profile: Profile & {
      placeOfResidence: State
    } | null
  }

  company: Company & {
    owner: Account & {
      profile?: Profile & {
        placeOfResidence: State
      } | null | undefined
    }

    subscription: Subscription & {
      price?: Price & {
        product?: Product | undefined
      } | undefined
    }

    features: Feature[]
    industries: Industry[]
  }

  roles: (Role & {
    policies: (Policy & {
      permissions?: Permission[] | undefined
    })[]
  })[]
  orgUnits: OrgUnit[]
}

export type IntroductionCompletionReportRes = IntroductionCompletionReport & {
  account: Account
  company: Company
  agent: Account
  occupation: Occupation
  industry: Industry
}

export type KeepingList = {
  createdAt: string
  id: string
  /** リスト名 */
  name: string
  position: number
  /** params[target_account_id]がそのリストに存在するか */
  targetAccountExist: boolean
  updatedAt: string
}

export type KeepingListsRes = {
  keepingLists: (KeepingList & {
    lastUpdatedByAccount: Account
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type KeepingListRes = KeepingList & {
  lastUpdatedByAccount: Account
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type OrgUnitRes = OrgUnit & {
  childOrgUnits: (OrgUnit & {
    childOrgUnits: (OrgUnit & {
      childOrgUnits?: OrgUnit[] | undefined
    })[]
  })[]
}

export type OrgUnitsRes = {
  orgUnits: OrgUnit[]
}

export type PaymentHistory = {
  amount: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type PaymentHistoriesRes = {
  paymentHistories: (PaymentHistory & {
    company: Company
    paymentMethod: PaymentMethod
    price: Price
  })[]
  totalDataNums: number
}

export type PaymentHistoryRes = PaymentHistory & {
  company: Company
  paymentMethod: PaymentMethod
  price: Price
}

export type PaymentMethodsRes = {
  paymentMethods: (PaymentMethod & {
    company: Company
  })[]
}

export type PaymentMethodRes = PaymentMethod & {
  company: Company
}

export type RecruitmentCompletionReportRes = RecruitmentCompletionReport & {
  company: Company
  account: Account
  occupation: Occupation
  industry: Industry
}

export type RolesRes = {
  roles: (Role & {
    policies: Policy[]

    company?: Company | null | undefined
  })[]
}

export type RoleRes = Role & {
  policies: Policy[]

  company?: Company | null | undefined
}

export type ScoutTemplatesRes = {
  scoutTemplates: (ScoutTemplate & {
    company: Company
    creator: Account
    principalOrgUnits: OrgUnit[]
    principalEmployments: (Employment & {
      account?: Account | undefined
    })[]
  })[]
  totalDataNums: number
}

export type ScoutTemplateRes = ScoutTemplate & {
  company: Company
  creator: Account
  principalOrgUnits: OrgUnit[]
  principalEmployments: (Employment & {
    account: Account
  })[]
}

export type ScoutTicket = {
  createdAt: string
  id: string
  type: 'free' | 'bought'
  updatedAt: string
  usedAt: string | null
}

export type ScoutTicketsRes = {
  scoutTickets: ScoutTicket[]
  unusedScoutTicketNums: number
}

export type SubscriptionRes = Subscription & {
  company: Company
  price: Price
}
