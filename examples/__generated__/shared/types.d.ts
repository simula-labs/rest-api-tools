/* eslint-disable */
export type AcademicHistory = {
  createdAt: string
  /** 学部・学科 */
  faculty?: string | undefined
  id: string
  name: string
  sinceDate: string
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school'
  untilDate: string
  updatedAt: string
}

export type Achievement = {
  content: string
  createdAt: string
  createdDate: string
  description?: string | undefined
  id: string
  updatedAt: string
}

export type Applicant = {
  createdAt?: string | undefined
  id?: string | undefined
  updatedAt?: string | undefined
}

export type Recruitment = {
  accessibleType?: 'public' | 'private' | undefined
  appliedAccounts?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 勤務地不問か */
  canLiveAndWorkAnywhere?: boolean | undefined
  /** 公開出来ない理由 */
  canNotReleaseReasons?: string[] | undefined
  createdAt: string
  department?: string | undefined
  /** 稼働時間目安 */
  estimatedTimePerProject?: number | undefined
  /** 推定単価（税込） */
  estimatedUnitAmount?: number | undefined
  id: string
  interestedAccounts?: number | undefined
  /** admin用のフラグ */
  isAdminChecked?: boolean | undefined
  isApplied?: boolean | undefined
  isInterested?: boolean | undefined
  /** 企業内でのフラグ */
  isOrganizationalChecked?: boolean | undefined
  /** サンプルか */
  isSample: boolean
  isWorkedWithTargetAccount?: boolean | undefined
  jobDescription?: string | undefined
  /** 最高金額（税込） */
  maxAmount?: number | undefined
  /** 最高金額（税抜） */
  maxAmountWithoutTax?: number | undefined
  /** 採用人数 */
  maxNumberOfHiring?: string | undefined
  /** 最低金額（税込） */
  minAmount?: number | undefined
  /** 最低金額（税抜） */
  minAmountWithoutTax?: number | undefined
  nearestStation?: string | undefined
  pageViews?: number | undefined
  position?: string | undefined
  /** 掲載期間（開始） */
  publishedSinceDate?: string | undefined
  /** 掲載期間（終了） */
  publishedUntilDate?: string | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  qualificationRequirements?: string | undefined
  /** 推薦ポイント */
  recommendedPoint?: string | undefined
  /** 「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus?: 'rarely' | 'normally' | 'full_remote' | undefined
  /** 年収・報酬の詳細 */
  salaryRemarks?: string | undefined
  /** 選考プロセス */
  selectionProcess?: string | undefined
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName?: string | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
  /** 最高金額（税） */
  taxForMaxAmount?: number | undefined
  /** 最低金額（税） */
  taxForMinAmount?: number | undefined
  taxType?: 'included' | 'excluded' | undefined
  /** 技術スタックの備考 */
  techStackRemarks?: string | undefined
  title: string
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  updatedAt: string
  workConditions?: string | undefined
  /** 勤務地詳細 */
  workplaceDescription?: string | undefined
}

export type Company = {
  /** admin審査状態 */
  adminVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled'
  averageAge?: number | undefined
  businessSummary?: string | undefined
  /** 資本金（税の概念なし） */
  capital?: number | undefined
  corporatePr?: string | undefined
  coverImageUrl?: string | undefined
  createdAt: string
  deletedAt?: string | undefined
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber?: string | undefined
  followerNums?: number | undefined
  headOfficeLocation?: string | undefined
  hpUrl?: string | undefined
  id: string
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio?: number | undefined
  isFollowing?: boolean | undefined
  isListed?: boolean | undefined
  isSample?: boolean | undefined
  logoUrl?: string | undefined
  name: string
  nameKana?: string | undefined
  /** 前年度の売上高（税込） */
  netSales?: number | undefined
  numbersOfEmployees?: string | undefined
  ownerEmail?: string | undefined
  phone?: string | undefined
  publicVerificationStatus: 'unspecified' | 'requested' | 'verified' | 'rejected'
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio?: number | undefined
  representative?: string | undefined
  representativeKana?: string | undefined
  type: 'account' | 'stub'
  updatedAt: string
  yearOfEstablishment?: string | undefined
}

/** 業種 */
export type Industry = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type State = {
  /** 国名コードの数字 */
  countryCode: number
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type EmploymentStatus = {
  createdAt: string
  id: string
  /** 募集作成の時に選択可能か */
  isSelectable: boolean
  name: string
  /** 「請負」「準委任」「業務委託」 */
  projectClassification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  type: 'CAREER' | 'PROJECT'
  updatedAt: string
}

/** 職種 */
export type Occupation = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Account = {
  alreadyKeepFromCurrentCompany?: boolean | undefined
  avatarUrl?: string | undefined
  /** 同意したNDAのバージョン */
  consentNdaVersion?: string | undefined
  createdAt: string
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  displayName?: string | undefined
  email?: string | undefined
  emailVerificationStatus: 'unspecified' | 'request' | 'verified'
  existsApplicantResourceFromCurrentCompany?: boolean | undefined
  id: string
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements?: string[] | undefined
  identityVerificationStatus: 'unspecified' | 'verified' | 'checking' | 'failed'
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget: boolean
  isConcludedNda?: boolean | undefined
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget: boolean
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork: boolean
  /** サンプルか */
  isSample: boolean
  isStudent: boolean
  isSupported?: boolean | undefined
  lastNotificationReadAt?: string | undefined
  lastSignInAt?: string | undefined
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent?: string[] | undefined
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral?: string[] | undefined
  profileCompleteness?: number | undefined
  registerAs?: 'general' | 'organizational' | undefined
  updatedAt: string
  workExperienced: boolean
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

export type Employment = {
  createdAt: string
  /** 所属部署 */
  department?: string | undefined
  email: string
  id: string
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid: boolean
  lastNotificationReadAt?: string | undefined
  /** 役職 */
  position?: string | undefined
  updatedAt: string
}

export type Profile = {
  academicBackground?: string | undefined
  address?: string | undefined
  agentAchievement?: string | undefined
  agentAreaInCharge?: string | undefined
  agentSelfIntroduction?: string | undefined
  agentSelfMessage?: string | undefined
  biography?: string | undefined
  birthOfDate?: string | undefined
  createdAt: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  files?: {
    id: string
    name: string
    contentType: string
    url: string
    createdAt: string
  }[] | undefined
  firstName?: string | undefined
  firstNameKana?: string | undefined
  gender?: 'male' | 'female' | 'other' | undefined
  id: string
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  lastName?: string | undefined
  lastNameKana?: string | undefined
  /** マネジメント経験人数 */
  managementExperience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  maritalStatus?: 'single' | 'married' | undefined
  nationality?: string | undefined
  /** 転職回数 */
  numberOfJobChanges?: number | undefined
  phone?: string | undefined
  postalCode?: string | undefined
  /** 直近の年収（税の概念なし） */
  recentIncomeAmount?: number | undefined
  updatedAt: string
  yearOfAgentExperience?: number | undefined
}

export type Subscription = {
  createdAt: string
  id: string
  sinceDate: string
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending'
  untilDate: string
  updatedAt: string
}

export type Price = {
  active: string
  createdAt: string
  currency: string
  id: string
  /** 価格（税） */
  taxForUnitAmount?: number | undefined
  /** 価格（税込） */
  unitAmount: number
  /** 価格（税抜） */
  unitAmountWithoutTax?: number | undefined
  updatedAt: string
}

export type Product = {
  active: boolean
  createdAt: string
  description?: string | undefined
  id: string
  name: string
  planType?: 'standard' | 'agent' | 'starter' | undefined
  type: 'good' | 'service'
  updatedAt: string
}

export type Feature = {
  createdAt: string
  id: string
  name: string
  sourceType: 'company' | 'recruitment'
  type: 'default' | 'organizational'
  updatedAt: string
}

export type Role = {
  createdAt: string
  description?: string | undefined
  id: string
  /** 役割「general」「admin」など */
  name: string
  type: 'default' | 'organizational'
  updatedAt: string
}

export type Policy = {
  category: 'unspecified' | 'account' | 'applicant' | 'recruitment' | 'payment'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type Permission = {
  /** 権限「read:recruitment」「create:recruitment」など */
  action: string
  conditions?: string | undefined
  createdAt: string
  id: string
  updatedAt: string
}

export type Hope = {
  amount?: number | undefined
  /** 「時給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'monthly' | 'yearly' | 'with_project'
  createdAt: string
  id: string
  ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
  /** 特筆事項 */
  specialNote?: string | undefined
  /** 転職希望時期・案件開始時期 */
  timeToChangeJob?: number | undefined
  type: 'career' | 'project'
  updatedAt: string
}

export type IncomeHistory = {
  amount: number
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

export type JobChangeCompletionReport = {
  /** 年収（税の概念なし） */
  amount: number
  createdAt: string
  id: string
  updatedAt: string
}

/** appliedの場合はcustomer_name以外必須 */
export type JobOrder = {
  createdAt: string
  /** 取引先名 */
  customerName?: string | undefined
  /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
  feeCalculationSpan?: 'monthly' | 'daily' | 'hourly' | undefined
  /** 「稼働報酬制」「固定報酬制」 */
  feeType?: 'time_based' | 'fixed' | undefined
  /** 固定報酬制の金額（税込） */
  fixedAmount?: number | undefined
  /** 固定報酬制の小計 */
  fixedSubTotal?: number | undefined
  /** 固定報酬制の税額 */
  fixedTax?: number | undefined
  /** 固定報酬制の金額（税込）と論理手数料を合わせた総額 */
  fixedTotalAmount?: number | undefined
  id: string
  isPublic?: boolean | undefined
  isSample: boolean
  /** 仕事内容 */
  jobDescription?: string | undefined
  /** 業務名 */
  jobName?: string | undefined
  /** 論理手数料（報酬額ときっかけを元に算出する手数料の予定額） */
  logicalFeeAmount?: number | undefined
  /** 発注番号 */
  number?: string | undefined
  /** 発注日 */
  orderDate?: string | undefined
  /** 諸条件 */
  otherConditions?: string | undefined
  /** 受注者からのコメント */
  reviewComment?: string | undefined
  /** 開始日 */
  sinceDate?: string | undefined
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status: 'draft' | 'applied' | 'certificated' | 'rejected'
  /** 稼働報酬制の税率 */
  taxRatio?: number | undefined
  /** 稼働報酬制の金額 */
  unitTimeFee?: number | undefined
  /** 終了日 */
  untilDate?: string | undefined
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

export type JobServiceItem = {
  /** 合計金額 */
  amount: number
  createdAt: string
  /** 項目名 */
  description: string
  id: string
  /** 数量 */
  quantity: number
  /** 消費税 */
  taxRatio: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
}

export type Message = {
  actAs: 'personal' | 'organizational'

  attachment?: {
    filename?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
  } | undefined

  content: string
  createdAt: string
  id: string
  updatedAt: string
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

export type Room = {
  createdAt: string
  /** 未返信メッセージがあるか */
  existsNotReplied: boolean
  id: string
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  latestMessage?: Message | undefined
  recruitmentCompletionReport?: string | undefined
  updatedAt: string
}

export type ConsentMatter = {
  content: string
  createdAt: string
  id: string
  updatedAt: string
}

/** STIを使って実装する */
export type Notification = {
  content: string
  createdAt: string
  /** Accountであればavatar_url、Companyであればlogo_url */
  iconUrl?: string | undefined
  id: string
  /** 「未読」「既読」 */
  isRead: boolean
  /** 「通常通知」or「メッセージ通知」 */
  notificationType: 'general' | 'message'
  subject?: string | undefined
  updatedAt: string
  url?: string | undefined
}

export type OccupationHistory = {
  createdAt: string
  id: string
  updatedAt: string
  /** 年単位 */
  yearOfExperience: number
}

export type ProjectResult = {
  totalJobsNum?: number | undefined
  totalRate?: number | undefined
}

export type JobReview = {
  createdAt: string
  id: string
  /** もっとこうして欲しかった点 */
  improvementPoint?: string | undefined
  /** サンプルか */
  isSample: boolean
  /** スキルの詳細 */
  skillDescription?: string | undefined
  starRating?: number | undefined
  updatedAt: string
}

export type Skill = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type EmploymentContractTerm = {
  createdAt: string
  id: string
  name: string
  /** 「1ヵ月未満」「1ヵ月以上3ヵ月未満」「3ヵ月以上6ヵ月未満」「6ヵ月以上」 */
  term: 'less_than_one_month' | 'one_to_three_months' | 'three_to_six_months' | 'more_than_six_months'
  updatedAt: string
}

export type TechStack = {
  accessibility?: 'public' | 'private' | undefined
  category: 'language' | 'framework' | 'infrastructure' | 'design_tool' | 'other'
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type SearchCondition = {
  createdAt: string
  filters: {
    /** クエリパラメータのキー */
    key: string
  }[]
  id: string
  target: 'recruitment' | 'company' | 'account'
  title: string
  updatedAt: string
}

export type Support = {
  career: boolean
  createdAt: string
  id: string
  project: boolean
  updatedAt: string
}

/** STIを使って実装する */
export type Withdrawal = {
  amount: number
  createdAt: string
  feeAmount: number
  id: string
  totalAmount: number
  updatedAt: string
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
  untilDate?: string | undefined
  updatedAt: string
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export type ProjectHistory = {
  businessContent?: string | undefined
  createdAt: string
  id: string
  isEmployed: boolean
  name?: string | undefined
  position?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  updatedAt: string
}

export type PaymentMethod = {
  brand: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners'
  createdAt: string
  expMonth: string
  expYear: string
  id: string
  isDefault: boolean
  last4: string
  updatedAt: string
}

export type Invoice = {
  /** 請求額（税込） */
  amount?: number | undefined
  /** 承認日 */
  approvedDate?: string | undefined
  createdAt: string
  /** 支払期日 */
  deadline?: string | undefined
  /** 請求額に応じたシステム手数料 */
  feeAmount?: number | undefined
  files?: {
    id?: string | undefined
    name?: string | undefined
    contentType?: string | undefined
    url?: string | undefined
    createdAt?: string | undefined
  }[] | undefined
  id: string
  /** 承認済みか */
  isApproved: boolean
  /** サンプルか */
  isSample: boolean
  /** 請求日 */
  issuedDate?: string | undefined
  /** 「下書き」「公開」「取り下げ済み」 */
  issuingStatus: 'draft' | 'fixed' | 'withdrawn'
  /** 備考 */
  note?: string | undefined
  paymentMethod?: 'bank' | 'credit_card' | undefined
  /** 決済日 */
  settlementDate?: string | undefined
  /** 「支払い待ち」「決済待ち」「支払いおよび決済待ち」「決済失敗」「完了」 */
  status?: 'waiting_for_payment' | 'waiting_for_settlement' | 'waiting_for_payment_and_settlement' | 'failed_settlement' | 'completed' | undefined
  /** Stripe決済手数料 */
  stripeFeeAmount?: number | undefined
  /** 請求額（小計） */
  subTotal?: number | undefined
  /** 税額 */
  tax?: number | undefined
  title?: string | undefined
  /** 請求額（税込）とシステム手数料を合わせた総額 */
  totalAmount?: number | undefined
  updatedAt: string
}

export type InvoiceDetailedItem = {
  /** 金額(税込) */
  amount: number
  /** 金額(税抜) */
  amountWithoutTax?: number | undefined
  createdAt: string
  /** 項目名 */
  description: string
  id: string
  /** 数量 */
  quantity: number
  /** 消費税 */
  taxRatio: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  updatedAt: string
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
  ndaId?: string | undefined
  updatedAt: string
}

/** 職種「中項目」 */
export type OccupationSubCategory = {
  createdAt: string
  id: string
  name: string
  updatedAt: string
}

export type StateCategory = {
  /** 「日本」「海外」「その他」 */
  countryType?: 'japan' | 'international' | 'other' | undefined
  createdAt: string
  id: string
  name: string
  states?: State[] | undefined
  updatedAt: string
}
