/* eslint-disable */
export type Company = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  type?: 'account' | 'stub' | undefined
  name?: string | undefined
  nameKana?: string | undefined
  headOfficeLocation?: string | undefined
  yearOfEstablishment?: string | undefined
  hpUrl?: string | undefined
  phone?: string | undefined
  /** 資本金（税の概念なし） */
  capital?: number | undefined
  isListed?: boolean | undefined
  representative?: string | undefined
  representativeKana?: string | undefined
  /** 前年度の売上高（税込） */
  netSales?: number | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  businessSummary?: string | undefined
  corporatePr?: string | undefined
  logoUrl?: string | undefined
  coverImageUrl?: string | undefined
  isSample?: boolean | undefined
  /** admin審査状態 */
  adminVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled' | undefined
  publicVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | undefined
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber?: string | undefined
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio?: number | undefined
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio?: number | undefined
  deletedAt?: string | undefined
  /** フォロワー数 */
  followerNums?: number | undefined
}

export type Recruitment = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  department?: string | undefined
  position?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  /** 「屋内禁煙」「喫煙室設置」「対策なし」「その他」 */
  smokingRegulation?: 'no_smoking_indoors' | 'exist_smoking_room' | 'none' | 'other' | undefined
  /** 「未選択」「不可・時折（0-10%）」「可（10-90%）」「フルリモート（90%以上）」 */
  remoteWorkStatus?: 'unselected' | 'rarely' | 'normally' | 'full_remote' | undefined
  /** 求人管理ID */
  recruitmentManageId?: string | undefined
  /** 勤務地詳細 */
  workplaceDescription?: string | undefined
  /** 年収・報酬の詳細 */
  salaryRemarks?: string | undefined
  qualificationRequirement?: string | undefined
  /** 採用人数 */
  maxNumberOfHiring?: string | undefined
  /** 選考プロセス */
  selectionProcess?: string | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | undefined
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  /** 最低金額（税込） */
  minAmount?: number | undefined
  /** 最高金額（税込） */
  maxAmount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** 推定単価（税込） */
  estimatedUnitAmount?: number | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
  /** 推薦ポイント */
  recommendedPoint?: string | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName?: string | undefined
  nearestStation?: string | undefined
  projectNumber?: string | undefined
  /** 掲載期間（開始） */
  publishedSinceDate?: string | undefined
  /** 掲載期間（終了） */
  publishedUntilDate?: string | undefined
  /** 企業内でのフラグ */
  isOrganizationalChecked?: boolean | undefined
  /** admin用のフラグ */
  isAdminChecked?: boolean | undefined
  /** PV数 */
  pageViews?: number | undefined
  /** 候補者数 */
  appliedAccounts?: number | undefined
  /** その募集を気になるしてるアカウントの数 */
  interestedAccounts?: number | undefined
  targetCompany?: Company | undefined
}

export type Industry = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type Feature = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  type?: 'default' | 'organizational' | undefined
  sourceType?: 'company' | 'recruitment' | undefined
}

export type State = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  countryCode?: string | undefined
  name?: string | undefined
}

export type Account = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  emailVerificationStatus?: 'unspecified' | 'request' | 'verified' | undefined
  avatarUrl?: string | undefined
  lastSignInAt?: string | undefined
  lastNotificationReadAt?: string | undefined
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget?: boolean | undefined
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget?: boolean | undefined
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork?: boolean | undefined
  identityVerificationStatus?: 'unspecified' | 'verified' | 'checking' | 'failed' | undefined
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements?: string[] | undefined
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral?: string[] | undefined
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent?: string[] | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  registerAs?: 'general' | 'organizational' | undefined
}

export type Profile = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  nationality?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  dateOfBirth?: string | undefined
  biography?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  /** 直近の年収（税の概念なし） */
  recentIncomeAmount?: number | undefined
  /** マネジメント経験人数 */
  managementExperience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  /** 転職回数 */
  numberOfJobChanges?: number | undefined
  academicBackground?: string | undefined
  yearOfAgentExperience?: number | undefined
  agentAreaInCharge?: string | undefined
  agentSelfMessage?: string | undefined
  agentSelfIntroduction?: string | undefined
  agentAchievement?: string | undefined

  /** 履歴書等のPDFファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    contentType?: string | undefined
    createdAt?: string | undefined
  } | undefined
}

export type SpecialtyCompanyType = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
}

export type SpecialtyPosition = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
}

export type OccupationMainCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type IndustryCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type ExternalService = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  isContracted?: boolean | undefined
}

export type EmploymentStatus = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  type?: 'CAREER' | 'PROJECT' | undefined
  /** 「請負」「準委任」「業務委託」 */
  projectClassification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  /** 募集作成の時に選択可能か */
  isSelectable?: boolean | undefined
}

export type Occupation = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
}

export type PrivacyPolicyHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
  version?: string | undefined
}

export type TermHistory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  content?: string | undefined
  version?: string | undefined
  type?: 'common' | 'plan' | undefined
}

export type Employment = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  email?: string | undefined
  lastNotificationReadAt?: string | undefined
  isValid?: boolean | undefined
  department?: string | undefined
  position?: string | undefined
}

export type StateCategory = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  /** 「日本」「海外」「その他」 */
  countryType?: 'japan' | 'international' | 'other' | undefined
}

export type Price = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  active?: string | undefined
  currency?: string | undefined
  /** 価格（税抜） */
  unitAmountWithoutTax?: number | undefined
  /** 価格（税） */
  taxForUnitAmount?: number | undefined
  /** 価格（税込） */
  unitAmount?: number | undefined
}

export type Product = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  name?: string | undefined
  description?: string | undefined
  active?: boolean | undefined
  type?: 'good' | 'service' | undefined
  planType?: 'standard' | 'agent' | 'starter' | undefined
  number?: number | undefined
  prices?: Price[] | undefined
}
