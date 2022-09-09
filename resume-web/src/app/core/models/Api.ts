/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResumeAppendicesAppendixCreateDto {
  resumeCode?: string | null;
  appendixName?: string | null;
  appendixType?: string | null;
  appendixContent?: string | null;
}

export interface ResumeAppendicesAppendixDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  resumeCode?: string | null;
  appendixName?: string | null;
  appendixType?: string | null;
  appendixContent?: string | null;
  isFinish?: boolean;
}

export interface ResumeAppendicesAppendixUpdateDto {
  resumeCode?: string | null;
  appendixName?: string | null;
  appendixType?: string | null;
  appendixContent?: string | null;
}

export interface ResumeAutobiographiesAutobiographyCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  languageCode?: string | null;
  content?: string | null;
}

export interface ResumeAutobiographiesAutobiographyDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  languageCode?: string | null;
  content?: string | null;
}

export interface ResumeAutobiographiesAutobiographyUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  languageCode?: string | null;
  content?: string | null;
}

export interface ResumeBaseBasicsBaseBasicCreateDto {
  code: string;
  resumeCode: string;
  nameC: string;
  nameE?: string | null;
  admitChannelCode?: string | null;
  idNo: string;

  /** @format date-time */
  birthDate: string;
  sexCode: string;
  blood?: string | null;
  mirrageCode: string;
  introducer?: string | null;
  birthPlaceCode?: string | null;
  armyCode: string;
  passportName?: string | null;
  passportNo?: string | null;
  disabledType?: string | null;
  cellPhone: string;

  /** @format email */
  email: string;
  account_AD?: string | null;
  photo: string;
  hobby?: string | null;
  currentTel: string;
  currentAdd: string;
  permanentTel: string;
  permanentAdd: string;
  validCode?: string | null;
  country?: string | null;
  specialStatus?: string | null;
  drivingLicence?: string | null;
  transportation?: string | null;
  residenceNo?: string | null;
}

export interface ResumeBaseBasicsBaseBasicDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  nameC?: string | null;
  nameE?: string | null;
  admitChannelCode?: string | null;
  idNo?: string | null;

  /** @format date-time */
  birthDate?: string;
  sexCode?: string | null;
  blood?: string | null;
  mirrageCode?: string | null;
  introducer?: string | null;
  birthPlaceCode?: string | null;
  armyCode?: string | null;
  passportName?: string | null;
  passportNo?: string | null;
  disabledType?: string | null;
  cellPhone?: string | null;
  email?: string | null;
  account_AD?: string | null;
  photo?: string | null;
  hobby?: string | null;
  currentTel?: string | null;
  currentAdd?: string | null;
  permanentTel?: string | null;
  permanentAdd?: string | null;
  validCode?: string | null;
  country?: string | null;
  specialStatus?: string | null;
  drivingLicence?: string | null;
  transportation?: string | null;
  residenceNo?: string | null;
  isFinish?: boolean;
}

export interface ResumeBaseBasicsBaseBasicUpdateDto {
  code: string;
  resumeCode: string;
  nameC: string;
  nameE?: string | null;
  admitChannelCode?: string | null;
  idNo: string;

  /** @format date-time */
  birthDate: string;
  sexCode: string;
  blood?: string | null;
  mirrageCode: string;
  introducer?: string | null;
  birthPlaceCode?: string | null;
  armyCode: string;
  passportName?: string | null;
  passportNo?: string | null;
  disabledType?: string | null;
  cellPhone: string;

  /** @format email */
  email: string;
  account_AD?: string | null;
  photo: string;
  hobby?: string | null;
  currentTel: string;
  currentAdd: string;
  permanentTel: string;
  permanentAdd: string;
  validCode?: string | null;
  country?: string | null;
  specialStatus?: string | null;
  drivingLicence?: string | null;
  transportation?: string | null;
  residenceNo?: string | null;
}

export interface ResumeCellphonesCellphoneCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  number?: string | null;
}

export interface ResumeCellphonesCellphoneDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  number?: string | null;
}

export interface ResumeCellphonesCellphoneUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  number?: string | null;
}

export interface ResumeCommunicationsCommunicationCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  currentTel?: string | null;
  currentAdd?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeCommunicationsCommunicationDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  currentTel?: string | null;
  currentAdd?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeCommunicationsCommunicationUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  currentTel?: string | null;
  currentAdd?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeCompanyJobsCompanyJobCreateDto {
  code?: string | null;
  jobName?: string | null;
  jobType?: string | null;
  jobOpening?: boolean;
  mailTplCode?: string | null;
  smsTplCode?: string | null;
}

export interface ResumeCompanyJobsCompanyJobDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  companyId?: string | null;
  jobName?: string | null;
  jobType?: string | null;
  jobOpening?: boolean;
  mailTplCode?: string | null;
  smsTplCode?: string | null;
}

export interface ResumeCompanyJobsCompanyJobUpdateDto {
  code?: string | null;
  companyId?: string | null;
  jobName?: string | null;
  jobType?: string | null;
  jobOpening?: boolean;
  mailTplCode?: string | null;
  smsTplCode?: string | null;
}

export interface ResumeCustomSettingsCustomSettingCreateDto {
  code?: string | null;
  customSettingName?: string | null;
  rule?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeCustomSettingsCustomSettingDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  customSettingName?: string | null;
  rule?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeCustomSettingsCustomSettingUpdateDto {
  code?: string | null;
  customSettingName?: string | null;
  rule?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeDependentssDependentsCreateDto {
  resumeCode?: string | null;
  dependentsNo?: string | null;
  dependentsType?: string | null;
  dependentsBirthday?: string | null;
  dependentsAdd?: string | null;
}

export interface ResumeDependentssDependentsDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  resumeCode?: string | null;
  dependentsNo?: string | null;
  dependentsType?: string | null;
  dependentsBirthday?: string | null;
  dependentsAdd?: string | null;
}

export interface ResumeDependentssDependentsUpdateDto {
  resumeCode?: string | null;
  dependentsNo?: string | null;
  dependentsType?: string | null;
  dependentsBirthday?: string | null;
  dependentsAdd?: string | null;
}

export interface ResumeEducationsEducationCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  educationCode?: string | null;
  school?: string | null;
  major?: string | null;
  majorDetail?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  daySchoolCode?: string | null;
  graduationCode?: string | null;
  note?: string | null;
  schoolLocation?: string | null;
}

export interface ResumeEducationsEducationDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  educationCode?: string | null;
  school?: string | null;
  major?: string | null;
  majorDetail?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  daySchoolCode?: string | null;
  graduationCode?: string | null;
  note?: string | null;
  schoolLocation?: string | null;
}

export interface ResumeEducationsEducationUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  educationCode?: string | null;
  school?: string | null;
  major?: string | null;
  majorDetail?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  daySchoolCode?: string | null;
  graduationCode?: string | null;
  note?: string | null;
  schoolLocation?: string | null;
}

export interface ResumeEmailsEmailCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  emailAccount?: string | null;
}

export interface ResumeEmailsEmailDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  emailAccount?: string | null;
}

export interface ResumeEmailsEmailUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  emailAccount?: string | null;
}

export interface ResumeExperiencesExperienceCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  name?: string | null;
  jobTitle?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  jobDescription?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  totalSeniority?: string | null;
  seniority?: string | null;
  jobCategory?: string | null;
  stillEmployed?: boolean;
}

export interface ResumeExperiencesExperienceDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  name?: string | null;
  jobTitle?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  jobDescription?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  totalSeniority?: string | null;
  seniority?: string | null;
  jobCategory?: string | null;
  stillEmployed?: boolean;
  isFinish?: boolean;
}

export interface ResumeExperiencesExperienceUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  name?: string | null;
  jobTitle?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  jobDescription?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  totalSeniority?: string | null;
  seniority?: string | null;
  jobCategory?: string | null;
  stillEmployed?: boolean;
}

export interface ResumeExpertisesExpertiseCreateDto {
  resumeCode?: string | null;
  expertiseName?: string | null;
  expertiseDetail?: string | null;
  expertiseFeature?: string | null;
  workSpell?: string | null;
  anotherTool?: string | null;
}

export interface ResumeExpertisesExpertiseDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  resumeCode?: string | null;
  expertiseName?: string | null;
  expertiseDetail?: string | null;
  expertiseFeature?: string | null;
  workSpell?: string | null;
  anotherTool?: string | null;
}

export interface ResumeExpertisesExpertiseUpdateDto {
  resumeCode?: string | null;
  expertiseName?: string | null;
  expertiseDetail?: string | null;
  expertiseFeature?: string | null;
  workSpell?: string | null;
  anotherTool?: string | null;
}

export interface ResumeFileBlobDto {
  /** @format byte */
  content?: string | null;
  name?: string | null;
}

export interface ResumeFileSaveBlobInputDto {
  /** @format byte */
  content?: string | null;
  name: string;
}

export interface ResumeGroupSettingsGroupSettingCreateDto {
  accountId?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeGroupSettingsGroupSettingDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  accountId?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeGroupSettingsGroupSettingUpdateDto {
  accountId?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeJobConditionsJobConditionCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  workingTimeType?: string | null;
  workingTime?: string | null;
  otherWorkingTime?: string | null;
  shift?: string | null;
  enabledWorkTime?: string | null;
  treatment?: string | null;
  workingPlace?: string | null;
  remoteWork?: boolean;
  jobTitle?: string | null;
  jobType?: string | null;
  duty?: string | null;
  job?: string | null;
  holidaySystem?: string | null;
}

export interface ResumeJobConditionsJobConditionDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  workingTimeType?: string | null;
  workingTime?: string | null;
  otherWorkingTime?: string | null;
  shift?: string | null;
  enabledWorkTime?: string | null;
  treatment?: string | null;
  workingPlace?: string | null;
  remoteWork?: boolean;
  jobTitle?: string | null;
  jobType?: string | null;
  duty?: string | null;
  job?: string | null;
  holidaySystem?: string | null;
}

export interface ResumeJobConditionsJobConditionUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  workingTimeType?: string | null;
  workingTime?: string | null;
  otherWorkingTime?: string | null;
  shift?: string | null;
  enabledWorkTime?: string | null;
  treatment?: string | null;
  workingPlace?: string | null;
  remoteWork?: boolean;
  jobTitle?: string | null;
  jobType?: string | null;
  duty?: string | null;
  job?: string | null;
  holidaySystem?: string | null;
}

export interface ResumeJobGroupSettingsJobGroupSettingCreateDto {
  code?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeJobGroupSettingsJobGroupSettingDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeJobGroupSettingsJobGroupSettingUpdateDto {
  code?: string | null;
  groupName?: string | null;
  validCode?: string | null;
}

export interface ResumeJobsJobCreateDto {
  code?: string | null;
  accountCode?: string | null;
  companyJobsCode?: string | null;
  replyType?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeJobsJobDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  accountCode?: string | null;
  companyJobsCode?: string | null;
  replyType?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeJobsJobUpdateDto {
  code?: string | null;
  accountCode?: string | null;
  companyJobsCode?: string | null;
  replyType?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeLanguageAbilitiesLanguageAbilityCreateDto {
  resumeCode: string;
  language?: string | null;
  listen?: string | null;
  speak?: string | null;
  read?: string | null;
  write?: string | null;
  dialect?: string | null;
  dialectLevel?: string | null;
}

export interface ResumeLanguageAbilitiesLanguageAbilityDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  resumeCode?: string | null;
  language?: string | null;
  listen?: string | null;
  speak?: string | null;
  read?: string | null;
  write?: string | null;
  dialect?: string | null;
  dialectLevel?: string | null;
}

export interface ResumeLanguageAbilitiesLanguageAbilityUpdateDto {
  resumeCode: string;
  language?: string | null;
  listen?: string | null;
  speak?: string | null;
  read?: string | null;
  write?: string | null;
  dialect?: string | null;
  dialectLevel?: string | null;
}

export interface ResumeLicensesLicenseCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  releaseAgent?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  nationalExam?: boolean;
  licenseNo?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeLicensesLicenseDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  releaseAgent?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  nationalExam?: boolean;
  licenseNo?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
  isFinish?: boolean;
}

export interface ResumeLicensesLicenseUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  releaseAgent?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  nationalExam?: boolean;
  licenseNo?: string | null;
  note?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeMailQuenesMailQueneCreateDto {
  systemCode?: string | null;
  code?: string | null;

  /** @format email */
  from_Addr?: string | null;
  from_Name?: string | null;

  /** @format email */
  to_Addr?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId: string;
  resumeCode?: string | null;
  stage?: string | null;
  jobName?: string | null;
}

export interface ResumeMailQuenesMailQueneDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  systemCode?: string | null;
  code?: string | null;
  from_Addr?: string | null;
  from_Name?: string | null;
  to_Addr?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId?: string | null;
  resumeCode?: string | null;
  stage?: string | null;
  jobName?: string | null;
}

export interface ResumeMailQuenesMailQueneUpdateDto {
  systemCode?: string | null;
  code?: string | null;

  /** @format email */
  from_Addr?: string | null;
  from_Name?: string | null;

  /** @format email */
  to_Addr?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId: string;
  resumeCode?: string | null;
  stage?: string | null;
  jobName?: string | null;
}

export interface ResumeMailTplsMailTplCreateDto {
  systemCode: string;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code: string;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;

  /** @format int32 */
  sort?: number;
  status?: string | null;
}

export interface ResumeMailTplsMailTplDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  systemCode?: string | null;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code?: string | null;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;

  /** @format int32 */
  sort?: number;
  status?: string | null;
}

export interface ResumeMailTplsMailTplUpdateDto {
  systemCode: string;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code: string;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;

  /** @format int32 */
  sort?: number;
  status?: string | null;
}

export interface ResumeMemosMemoCreateDto {
  code?: string | null;
  memoContent?: string | null;

  /** @format date-time */
  memoDate?: string | null;
  validCode?: string | null;
}

export interface ResumeMemosMemoDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  memoContent?: string | null;

  /** @format date-time */
  memoDate?: string | null;
  validCode?: string | null;
}

export interface ResumeMemosMemoUpdateDto {
  code?: string | null;
  memoContent?: string | null;

  /** @format date-time */
  memoDate?: string | null;
  validCode?: string | null;
}

export interface ResumeRegisterRegisterInputDto {
  extraProperties?: Record<string, any>;
  userName: string;

  /** @format email */
  emailAddress: string;

  /** @format password */
  password: string;
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
  captchaResponse?: string | null;
  phone?: string | null;
  idno?: string | null;
}

export interface ResumeResumeInvitationsResumeInvitationCreateDto {
  code?: string | null;
  companyName?: string | null;
  jobName?: string | null;
  sendType?: string | null;
  sendStatus?: string | null;
  isOpening?: boolean;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  validCode?: string | null;
  accountCode?: string | null;
  stage?: string | null;
  resumeCode?: string | null;
  phone: string;

  /** @format email */
  email: string;
  companyId?: string | null;
}

export interface ResumeResumeInvitationsResumeInvitationDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  companyName?: string | null;
  jobName?: string | null;
  sendType?: string | null;
  sendStatus?: string | null;
  isOpening?: boolean;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  validCode?: string | null;
  accountCode?: string | null;
  stage?: string | null;
  resumeCode?: string | null;
  phone?: string | null;
  email?: string | null;
  companyId?: string | null;
  url?: string | null;
}

export interface ResumeResumeInvitationsResumeInvitationUpdateDto {
  code?: string | null;
  companyName?: string | null;
  jobName?: string | null;
  sendType?: string | null;
  sendStatus?: string | null;
  isOpening?: boolean;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  validCode?: string | null;
  accountCode?: string | null;
  stage?: string | null;
  resumeCode?: string | null;
  phone: string;

  /** @format email */
  email: string;
  companyId?: string | null;
}

export interface ResumeResumeMainsResumeMainCreateDto {
  code?: string | null;
  accountCode?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  status?: string | null;
  validCode?: string | null;
  companyCode?: string | null;
  json?: string | null;
}

export interface ResumeResumeMainsResumeMainDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  accountCode?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  status?: string | null;
  validCode?: string | null;
  companyCode?: string | null;
  json?: string | null;
}

export interface ResumeResumeMainsResumeMainUpdateDto {
  code?: string | null;
  accountCode?: string | null;
  name?: string | null;

  /** @format date-time */
  dateA?: string;

  /** @format date-time */
  dateD?: string;
  status?: string | null;
  validCode?: string | null;
  companyCode?: string | null;
  json?: string | null;
}

export interface ResumeResumeSettingsResumeSettingCreateDto {
  code?: string | null;
  resumeCode?: string | null;
  customSetting?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeResumeSettingsResumeSettingDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  resumeCode?: string | null;
  customSetting?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeResumeSettingsResumeSettingUpdateDto {
  code?: string | null;
  resumeCode?: string | null;
  customSetting?: string | null;
  insertMan?: string | null;

  /** @format date-time */
  insertDate?: string | null;
  updateMan?: string | null;

  /** @format date-time */
  updateDate?: string | null;
  validCode?: string | null;
}

export interface ResumeShareCodesShareCodeCreateDto {
  category: string;
  code: string;
  name: string;
  sort?: string | null;
  display?: boolean;
}

export interface ResumeShareCodesShareCodeDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  category?: string | null;
  code?: string | null;
  name?: string | null;
  sort?: string | null;
  display?: boolean;
}

export interface ResumeShareCodesShareCodeUpdateDto {
  category: string;
  code: string;
  name: string;
  sort?: string | null;
  display?: boolean;
}

export interface ResumeSMSQuenesSMSQueneCreateDto {
  systemCode: string;
  code: string;
  from_Phone?: string | null;
  from_Name?: string | null;
  to_Phone?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId: string;
}

export interface ResumeSMSQuenesSMSQueneDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  systemCode?: string | null;
  code?: string | null;
  from_Phone?: string | null;
  from_Name?: string | null;
  to_Phone?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId?: string | null;
}

export interface ResumeSMSQuenesSMSQueneUpdateDto {
  systemCode: string;
  code: string;
  from_Phone?: string | null;
  from_Name?: string | null;
  to_Phone?: string | null;
  to_Name?: string | null;
  subject?: string | null;
  body?: string | null;
  success?: boolean;

  /** @format date-time */
  send_Date?: string;
  isOpened?: boolean;
  companyId: string;
}

export interface ResumeSMSTplsSMSTplCreateDto {
  systemCode: string;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code?: string | null;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;
  sort?: string | null;
  status?: string | null;
}

export interface ResumeSMSTplsSMSTplDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  systemCode?: string | null;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code?: string | null;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;
  sort?: string | null;
  status?: string | null;
}

export interface ResumeSMSTplsSMSTplUpdateDto {
  systemCode: string;
  key1?: string | null;
  key2?: string | null;
  key3?: string | null;
  code?: string | null;
  name?: string | null;
  statement?: string | null;
  subject?: string | null;
  body?: string | null;
  note?: string | null;
  sort?: string | null;
  status?: string | null;
}

export interface ResumeTestBobsTestBobCreateDto {
  test?: string | null;
}

export interface ResumeTestBobsTestBobDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  test?: string | null;
}

export interface ResumeTestBobsTestBobUpdateDto {
  test?: string | null;
}

export interface ResumeTestCardsTestCardCreateDto {
  nameCard?: string | null;
  cardId?: string | null;
}

export interface ResumeTestCardsTestCardDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  nameCard?: string | null;
  cardId?: string | null;
}

export interface ResumeTestCardsTestCardUpdateDto {
  nameCard?: string | null;
  cardId?: string | null;
}

export interface ResumeThirdPartiesThirdPartyCreateDto {
  /** @format uuid */
  userCode?: string;
  thirdPartyAccountCode: string;
  thirdPartyTypeCode: string;
}

export interface ResumeThirdPartiesThirdPartyDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  userCode?: string;
  thirdPartyAccountCode?: string | null;
  thirdPartyTypeCode?: string | null;
}

export interface ResumeThirdPartiesThirdPartyUpdateDto {
  /** @format uuid */
  userCode?: string;
  thirdPartyAccountCode: string;
  thirdPartyTypeCode: string;
}

export interface ResumeUserDatasUserDataCreateDto {
  /** @format uuid */
  accountId: string;

  /** @format date-time */
  birthDay?: string;
}

export interface ResumeUserDatasUserDataDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  accountId?: string;

  /** @format date-time */
  birthDay?: string;
}

export interface ResumeUserDatasUserDataUpdateDto {
  /** @format uuid */
  accountId: string;

  /** @format date-time */
  birthDay?: string;
}

export interface ResumeVerifyCodesVerifyCodeCreateDto {
  verifyPhone: string;
}

export interface ResumeVerifyCodesVerifyCodeDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;
  code?: string | null;
  verifyPhone?: string | null;

  /** @format date-time */
  beginTime?: string;

  /** @format date-time */
  endTime?: string;
}

export interface ResumeVerifyCodesVerifyCodeUpdateDto {
  code?: string | null;
  verifyPhone: string;

  /** @format date-time */
  beginTime?: string;

  /** @format date-time */
  endTime?: string;
}

/**
 * @format int32
 */
export type SystemNetHttpStatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

export interface VoloAbpAccountAccountExternalProviderSettingsDto {
  settings?: VoloAbpAccountExternalProvidersExternalProviderSettings[] | null;
}

export interface VoloAbpAccountAccountLdapSettingsDto {
  enableLdapLogin?: boolean;
  ldapServerHost?: string | null;
  ldapServerPort?: string | null;
  ldapBaseDc?: string | null;
  ldapDomain?: string | null;
  ldapUserName?: string | null;
  ldapPassword?: string | null;
}

export interface VoloAbpAccountAccountRecaptchaSettingsDto {
  useCaptchaOnLogin?: boolean;
  useCaptchaOnRegistration?: boolean;
  verifyBaseUrl?: string | null;
  siteKey?: string | null;
  siteSecret?: string | null;

  /**
   * @format int32
   * @min 2
   * @max 3
   */
  version?: number;

  /**
   * @format double
   * @min 0.1
   * @max 1
   */
  score?: number;
}

export interface VoloAbpAccountAccountSettingsDto {
  isSelfRegistrationEnabled?: boolean;
  enableLocalLogin?: boolean;
}

export interface VoloAbpAccountAccountTwoFactorSettingsDto {
  twoFactorBehaviour?: VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour;
  isRememberBrowserEnabled?: boolean;
  usersCanChange?: boolean;
}

export interface VoloAbpAccountChangePasswordInput {
  currentPassword?: string | null;
  newPassword: string;
}

export interface VoloAbpAccountConfirmEmailInput {
  /** @format uuid */
  userId: string;
  token: string;
}

export interface VoloAbpAccountConfirmPhoneNumberInput {
  /** @format uuid */
  userId: string;
  token: string;
}

export interface VoloAbpAccountExternalProvidersExternalProviderDto {
  providers?: VoloAbpAccountExternalProvidersExternalProviderItemDto[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemDto {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto {
  success?: boolean;
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettings {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountExternalProvidersExternalProviderSettingsProperty {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpAccountIdentityUserConfirmationStateDto {
  emailConfirmed?: boolean;
  phoneNumberConfirmed?: boolean;
}

export interface VoloAbpAccountIsLinkedInput {
  /** @format uuid */
  userId?: string;

  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAccountLinkUserDto {
  /** @format uuid */
  targetUserId?: string;
  targetUserName?: string | null;

  /** @format uuid */
  targetTenantId?: string | null;
  targetTenantName?: string | null;
  directlyLinked?: boolean;
}

export interface VoloAbpAccountLinkUserInput {
  /** @format uuid */
  userId?: string;

  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpAccountProfileDto {
  extraProperties?: Record<string, any>;
  userName?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  name?: string | null;
  surname?: string | null;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  isExternal?: boolean;
  hasPassword?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpAccountProfilePictureSourceDto {
  type?: VoloAbpAccountProfilePictureType;
  source?: string | null;

  /** @format byte */
  fileContent?: string | null;
}

/**
 * @format int32
 */
export type VoloAbpAccountProfilePictureType = 0 | 1 | 2;

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult {
  result?: VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType;
  description?: string | null;
}

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo {
  /** @format uuid */
  linkUserId: string;

  /** @format uuid */
  linkTenantId?: string | null;
}

/**
 * @format int32
 */
export type VoloAbpAccountPublicWebAreasAccountControllersModelsLoginResultType = 1 | 2 | 3 | 4 | 5 | 6;

export interface VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo {
  userNameOrEmailAddress: string;

  /** @format password */
  password: string;
  rememberMe?: boolean;

  /** @format uuid */
  tenanId?: string | null;
}

export interface VoloAbpAccountRegisterDto {
  extraProperties?: Record<string, any>;
  userName: string;

  /** @format email */
  emailAddress: string;

  /** @format password */
  password: string;
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
  captchaResponse?: string | null;
}

export interface VoloAbpAccountResetPasswordDto {
  /** @format uuid */
  userId?: string;
  resetToken: string;
  password: string;
}

export interface VoloAbpAccountSendEmailConfirmationTokenDto {
  appName: string;

  /** @format uuid */
  userId: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
}

export interface VoloAbpAccountSendPasswordResetCodeDto {
  /** @format email */
  email: string;
  appName: string;
  returnUrl?: string | null;
  returnUrlHash?: string | null;
}

export interface VoloAbpAccountSendPhoneNumberConfirmationTokenDto {
  /** @format uuid */
  userId: string;
  phoneNumber?: string | null;
}

export interface VoloAbpAccountSendTwoFactorCodeInput {
  /** @format uuid */
  userId: string;
  provider: string;
  token: string;
}

export interface VoloAbpAccountUnLinkUserInput {
  /** @format uuid */
  userId?: string;

  /** @format uuid */
  tenantId?: string | null;
}

export interface VoloAbpAccountUpdateExternalProviderDto {
  name?: string | null;
  enabled?: boolean;
  properties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
  secretProperties?: VoloAbpAccountExternalProvidersExternalProviderSettingsProperty[] | null;
}

export interface VoloAbpAccountUpdateProfileDto {
  extraProperties?: Record<string, any>;
  userName: string;
  email?: string | null;
  name?: string | null;
  surname?: string | null;
  phoneNumber?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpAccountVerifyLinkLoginTokenInput {
  /** @format uuid */
  userId: string;

  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpAccountVerifyLinkTokenInput {
  /** @format uuid */
  userId: string;

  /** @format uuid */
  tenantId?: string | null;
  token: string;
}

export interface VoloAbpApplicationDtosListResultDto1ResumeAppendicesAppendixDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeAppendicesAppendixDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1ResumeAutobiographiesAutobiographyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeAutobiographiesAutobiographyDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1ResumeBaseBasicsBaseBasicDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeBaseBasicsBaseBasicDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1ResumeExperiencesExperienceDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeExperiencesExperienceDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1ResumeLicensesLicenseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeLicensesLicenseDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAccountLinkUserDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpUsersUserData[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloFileManagementDirectoriesDirectoryDescriptorInfoDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloFileManagementDirectoriesDirectoryDescriptorInfoDto[] | null;
}

export interface VoloAbpApplicationDtosListResultDto1VoloFileManagementFilesFileDescriptorDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloFileManagementFilesFileDescriptorDto[] | null;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeAppendicesAppendixDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeAppendicesAppendixDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeAutobiographiesAutobiographyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeAutobiographiesAutobiographyDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeBaseBasicsBaseBasicDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeBaseBasicsBaseBasicDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeCellphonesCellphoneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeCellphonesCellphoneDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeCommunicationsCommunicationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeCommunicationsCommunicationDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeCompanyJobsCompanyJobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeCompanyJobsCompanyJobDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeCustomSettingsCustomSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeCustomSettingsCustomSettingDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeDependentssDependentsDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeDependentssDependentsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeEducationsEducationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeEducationsEducationDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeEmailsEmailDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeEmailsEmailDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeExperiencesExperienceDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeExperiencesExperienceDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeExpertisesExpertiseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeExpertisesExpertiseDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeGroupSettingsGroupSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeGroupSettingsGroupSettingDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeJobConditionsJobConditionDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeJobConditionsJobConditionDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeJobGroupSettingsJobGroupSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeJobGroupSettingsJobGroupSettingDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeJobsJobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeJobsJobDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeLanguageAbilitiesLanguageAbilityDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeLanguageAbilitiesLanguageAbilityDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeLicensesLicenseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeLicensesLicenseDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeMailQuenesMailQueneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeMailQuenesMailQueneDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeMailTplsMailTplDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeMailTplsMailTplDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeMemosMemoDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeMemosMemoDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeResumeInvitationsResumeInvitationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeResumeInvitationsResumeInvitationDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeResumeMainsResumeMainDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeResumeMainsResumeMainDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeResumeSettingsResumeSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeResumeSettingsResumeSettingDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeShareCodesShareCodeDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeShareCodesShareCodeDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeSMSQuenesSMSQueneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeSMSQuenesSMSQueneDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeSMSTplsSMSTplDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeSMSTplsSMSTplDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeTestBobsTestBobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeTestBobsTestBobDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeTestCardsTestCardDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeTestCardsTestCardDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeThirdPartiesThirdPartyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeThirdPartiesThirdPartyDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeUserDatasUserDataDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeUserDatasUserDataDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1ResumeVerifyCodesVerifyCodeDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull {
  items?: ResumeVerifyCodesVerifyCodeDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingAuditLogDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpAuditLoggingEntityChangeDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityClaimTypeDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentitySecurityLogDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityIdentityUserDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityOrganizationUnitWithDetailsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerClientDtosClientWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerClientDtosClientWithDetailsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpLanguageManagementDtoLanguageTextDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloFileManagementDirectoriesDirectoryContentDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloFileManagementDirectoriesDirectoryContentDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosEditionDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull {
  items?: VoloSaasHostDtosSaasTenantDto[] | null;

  /** @format int64 */
  totalCount?: number;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto {
  policies?: Record<string, boolean>;
  grantedPolicies?: Record<string, boolean>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto {
  localization?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto;
  auth?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationAuthConfigurationDto;
  setting?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto;
  currentUser?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto;
  features?: VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto;
  multiTenancy?: VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto;
  currentTenant?: VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto;
  timing?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto;
  clock?: VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto;
  objectExtensions?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationFeatureConfigurationDto {
  values?: Record<string, string>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationLocalizationConfigurationDto {
  values?: Record<string, Record<string, string>>;
  languages?: VoloAbpLocalizationLanguageInfo[] | null;
  currentCulture?: VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto;
  defaultResourceName?: string | null;
  languagesMap?: Record<string, VoloAbpNameValue[]>;
  languageFilesMap?: Record<string, VoloAbpNameValue[]>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationSettingConfigurationDto {
  values?: Record<string, string>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsClockDto {
  kind?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentCultureDto {
  displayName?: string | null;
  englishName?: string | null;
  threeLetterIsoLanguageName?: string | null;
  twoLetterIsoLanguageName?: string | null;
  isRightToLeft?: boolean;
  cultureName?: string | null;
  name?: string | null;
  nativeName?: string | null;
  dateTimeFormat?: VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsCurrentUserDto {
  isAuthenticated?: boolean;

  /** @format uuid */
  id?: string | null;

  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  impersonatorUserId?: string | null;

  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorUserName?: string | null;
  impersonatorTenantName?: string | null;
  userName?: string | null;
  name?: string | null;
  surName?: string | null;
  email?: string | null;
  emailVerified?: boolean;
  phoneNumber?: string | null;
  phoneNumberVerified?: boolean;
  roles?: string[] | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsDateTimeFormatDto {
  calendarAlgorithmType?: string | null;
  dateTimeFormatLong?: string | null;
  shortDatePattern?: string | null;
  fullDateTimePattern?: string | null;
  dateSeparator?: string | null;
  shortTimePattern?: string | null;
  longTimePattern?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone {
  timeZoneName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto {
  properties?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto>;
  configuration?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto {
  fields?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto[] | null;
  localizationResource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumFieldDto {
  name?: string | null;
  value?: any;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto {
  onGet?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto;
  onCreate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiCreateDto;
  onUpdate?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiGetDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiUpdateDto {
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto {
  typeSimple?: string | null;
  config?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyDto {
  type?: string | null;
  typeSimple?: string | null;
  displayName?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto;
  api?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyApiDto;
  ui?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto;
  attributes?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyAttributeDto[] | null;
  configuration?: Record<string, any>;
  defaultValue?: any;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiDto {
  onTable?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto;
  onCreateForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  onEditForm?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto;
  lookup?: VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiFormDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiLookupDto {
  url?: string | null;
  resultListPropertyName?: string | null;
  displayPropertyName?: string | null;
  valuePropertyName?: string | null;
  filterParamName?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionPropertyUiTableDto {
  isVisible?: boolean;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingLocalizableStringDto {
  name?: string | null;
  resource?: string | null;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto {
  entities?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingEntityExtensionDto>;
  configuration?: Record<string, any>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingObjectExtensionsDto {
  modules?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingModuleExtensionDto>;
  enums?: Record<string, VoloAbpAspNetCoreMvcApplicationConfigurationsObjectExtendingExtensionEnumDto>;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone {
  iana?: VoloAbpAspNetCoreMvcApplicationConfigurationsIanaTimeZone;
  windows?: VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsTimingDto {
  timeZone?: VoloAbpAspNetCoreMvcApplicationConfigurationsTimeZone;
}

export interface VoloAbpAspNetCoreMvcApplicationConfigurationsWindowsTimeZone {
  timeZoneId?: string | null;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyCurrentTenantDto {
  /** @format uuid */
  id?: string | null;
  name?: string | null;
  isAvailable?: boolean;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto {
  success?: boolean;

  /** @format uuid */
  tenantId?: string | null;
  name?: string | null;
  isActive?: boolean;
}

export interface VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto {
  isEnabled?: boolean;
}

/**
 * @format int32
 */
export type VoloAbpAuditingEntityChangeType = 0 | 1 | 2;

export interface VoloAbpAuditLoggingAuditLogActionDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  auditLogId?: string;
  serviceName?: string | null;
  methodName?: string | null;
  parameters?: string | null;

  /** @format date-time */
  executionTime?: string;

  /** @format int32 */
  executionDuration?: number;
}

export interface VoloAbpAuditLoggingAuditLogDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format uuid */
  userId?: string | null;
  userName?: string | null;

  /** @format uuid */
  tenantId?: string | null;
  tenantName?: string | null;

  /** @format uuid */
  impersonatorUserId?: string | null;
  impersonatorUserName?: string | null;

  /** @format uuid */
  impersonatorTenantId?: string | null;
  impersonatorTenantName?: string | null;

  /** @format date-time */
  executionTime?: string;

  /** @format int32 */
  executionDuration?: number;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  httpMethod?: string | null;
  url?: string | null;
  exceptions?: string | null;
  comments?: string | null;

  /** @format int32 */
  httpStatusCode?: number | null;
  applicationName?: string | null;
  correlationId?: string | null;
  entityChanges?: VoloAbpAuditLoggingEntityChangeDto[] | null;
  actions?: VoloAbpAuditLoggingAuditLogActionDto[] | null;
}

export interface VoloAbpAuditLoggingEntityChangeDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format uuid */
  auditLogId?: string;

  /** @format uuid */
  tenantId?: string | null;

  /** @format date-time */
  changeTime?: string;
  changeType?: VoloAbpAuditingEntityChangeType;
  entityId?: string | null;
  entityTypeFullName?: string | null;
  propertyChanges?: VoloAbpAuditLoggingEntityPropertyChangeDto[] | null;
}

export interface VoloAbpAuditLoggingEntityChangeWithUsernameDto {
  entityChange?: VoloAbpAuditLoggingEntityChangeDto;
  userName?: string | null;
}

export interface VoloAbpAuditLoggingEntityPropertyChangeDto {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  entityChangeId?: string;
  newValue?: string | null;
  originalValue?: string | null;
  propertyName?: string | null;
  propertyTypeFullName?: string | null;
}

export interface VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput {
  data?: Record<string, number>;
}

export interface VoloAbpAuditLoggingGetErrorRateOutput {
  data?: Record<string, number>;
}

export interface VoloAbpFeatureManagementFeatureDto {
  name?: string | null;
  displayName?: string | null;
  value?: string | null;
  provider?: VoloAbpFeatureManagementFeatureProviderDto;
  description?: string | null;
  valueType?: VoloAbpValidationStringValuesIStringValueType;

  /** @format int32 */
  depth?: number;
  parentName?: string | null;
}

export interface VoloAbpFeatureManagementFeatureGroupDto {
  name?: string | null;
  displayName?: string | null;
  features?: VoloAbpFeatureManagementFeatureDto[] | null;
}

export interface VoloAbpFeatureManagementFeatureProviderDto {
  name?: string | null;
  key?: string | null;
}

export interface VoloAbpFeatureManagementGetFeatureListResultDto {
  groups?: VoloAbpFeatureManagementFeatureGroupDto[] | null;
}

export interface VoloAbpFeatureManagementUpdateFeatureDto {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpFeatureManagementUpdateFeaturesDto {
  features?: VoloAbpFeatureManagementUpdateFeatureDto[] | null;
}

export interface VoloAbpHttpModelingActionApiDescriptionModel {
  uniqueName?: string | null;
  name?: string | null;
  httpMethod?: string | null;
  url?: string | null;
  supportedVersions?: string[] | null;
  parametersOnMethod?: VoloAbpHttpModelingMethodParameterApiDescriptionModel[] | null;
  parameters?: VoloAbpHttpModelingParameterApiDescriptionModel[] | null;
  returnValue?: VoloAbpHttpModelingReturnValueApiDescriptionModel;
  allowAnonymous?: boolean | null;
  implementFrom?: string | null;
}

export interface VoloAbpHttpModelingApplicationApiDescriptionModel {
  modules?: Record<string, VoloAbpHttpModelingModuleApiDescriptionModel>;
  types?: Record<string, VoloAbpHttpModelingTypeApiDescriptionModel>;
}

export interface VoloAbpHttpModelingControllerApiDescriptionModel {
  controllerName?: string | null;
  controllerGroupName?: string | null;
  isRemoteService?: boolean;
  apiVersion?: string | null;
  type?: string | null;
  interfaces?: VoloAbpHttpModelingControllerInterfaceApiDescriptionModel[] | null;
  actions?: Record<string, VoloAbpHttpModelingActionApiDescriptionModel>;
}

export interface VoloAbpHttpModelingControllerInterfaceApiDescriptionModel {
  type?: string | null;
}

export interface VoloAbpHttpModelingMethodParameterApiDescriptionModel {
  name?: string | null;
  typeAsString?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isOptional?: boolean;
  defaultValue?: any;
}

export interface VoloAbpHttpModelingModuleApiDescriptionModel {
  rootPath?: string | null;
  remoteServiceName?: string | null;
  controllers?: Record<string, VoloAbpHttpModelingControllerApiDescriptionModel>;
}

export interface VoloAbpHttpModelingParameterApiDescriptionModel {
  nameOnMethod?: string | null;
  name?: string | null;
  jsonName?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isOptional?: boolean;
  defaultValue?: any;
  constraintTypes?: string[] | null;
  bindingSourceId?: string | null;
  descriptorName?: string | null;
}

export interface VoloAbpHttpModelingPropertyApiDescriptionModel {
  name?: string | null;
  jsonName?: string | null;
  type?: string | null;
  typeSimple?: string | null;
  isRequired?: boolean;
}

export interface VoloAbpHttpModelingReturnValueApiDescriptionModel {
  type?: string | null;
  typeSimple?: string | null;
}

export interface VoloAbpHttpModelingTypeApiDescriptionModel {
  baseType?: string | null;
  isEnum?: boolean;
  enumNames?: string[] | null;
  enumValues?: any[] | null;
  genericArguments?: string[] | null;
  properties?: VoloAbpHttpModelingPropertyApiDescriptionModel[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorInfo {
  code?: string | null;
  message?: string | null;
  details?: string | null;
  data?: Record<string, any>;
  validationErrors?: VoloAbpHttpRemoteServiceValidationErrorInfo[] | null;
}

export interface VoloAbpHttpRemoteServiceErrorResponse {
  error?: VoloAbpHttpRemoteServiceErrorInfo;
}

export interface VoloAbpHttpRemoteServiceValidationErrorInfo {
  message?: string | null;
  members?: string[] | null;
}

export interface VoloAbpIdentityClaimTypeDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
  required?: boolean;
  isStatic?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  valueTypeAsString?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityCreateClaimTypeDto {
  extraProperties?: Record<string, any>;
  name: string;
  required?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
}

/**
 * @format int32
 */
export type VoloAbpIdentityFeaturesIdentityProTwoFactorBehaviour = 0 | 1 | 2;

/**
 * @format int32
 */
export type VoloAbpIdentityIdentityClaimValueType = 0 | 1 | 2 | 3;

export interface VoloAbpIdentityIdentityLockoutSettingsDto {
  allowedForNewUsers?: boolean;

  /** @format int32 */
  lockoutDuration?: number;

  /** @format int32 */
  maxFailedAccessAttempts?: number;
}

export interface VoloAbpIdentityIdentityPasswordSettingsDto {
  /**
   * @format int32
   * @min 2
   * @max 128
   */
  requiredLength?: number;

  /**
   * @format int32
   * @min 1
   * @max 128
   */
  requiredUniqueChars?: number;
  requireNonAlphanumeric?: boolean;
  requireLowercase?: boolean;
  requireUppercase?: boolean;
  requireDigit?: boolean;
}

export interface VoloAbpIdentityIdentityRoleClaimDto {
  /** @format uuid */
  roleId?: string;
  claimType?: string | null;
  claimValue?: string | null;
}

export interface VoloAbpIdentityIdentityRoleCreateDto {
  extraProperties?: Record<string, any>;
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
}

export interface VoloAbpIdentityIdentityRoleDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
  isDefault?: boolean;
  isStatic?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentityRoleLookupDto {
  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloAbpIdentityIdentityRoleUpdateDto {
  extraProperties?: Record<string, any>;
  name: string;
  isDefault?: boolean;
  isPublic?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentitySecurityLogDto {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  tenantId?: string | null;
  applicationName?: string | null;
  identity?: string | null;
  action?: string | null;

  /** @format uuid */
  userId?: string | null;
  userName?: string | null;
  tenantName?: string | null;
  clientId?: string | null;
  correlationId?: string | null;
  clientIpAddress?: string | null;
  browserInfo?: string | null;

  /** @format date-time */
  creationTime?: string;
  extraProperties?: Record<string, any>;
}

export interface VoloAbpIdentityIdentitySettingsDto {
  password?: VoloAbpIdentityIdentityPasswordSettingsDto;
  lockout?: VoloAbpIdentityIdentityLockoutSettingsDto;
  signIn?: VoloAbpIdentityIdentitySignInSettingsDto;
  user?: VoloAbpIdentityIdentityUserSettingsDto;
}

export interface VoloAbpIdentityIdentitySignInSettingsDto {
  requireConfirmedEmail?: boolean;
  enablePhoneNumberConfirmation?: boolean;
  requireConfirmedPhoneNumber?: boolean;
}

export interface VoloAbpIdentityIdentityUser {
  /** @format uuid */
  id?: string;
  extraProperties?: Record<string, any>;
  concurrencyStamp?: string | null;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
  normalizedUserName?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  normalizedEmail?: string | null;
  emailConfirmed?: boolean;
  passwordHash?: string | null;
  securityStamp?: string | null;
  isExternal?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  isActive?: boolean;
  twoFactorEnabled?: boolean;

  /** @format date-time */
  lockoutEnd?: string | null;
  lockoutEnabled?: boolean;

  /** @format int32 */
  accessFailedCount?: number;
  roles?: VoloAbpIdentityIdentityUserRole[] | null;
  claims?: VoloAbpIdentityIdentityUserClaim[] | null;
  logins?: VoloAbpIdentityIdentityUserLogin[] | null;
  tokens?: VoloAbpIdentityIdentityUserToken[] | null;
  organizationUnits?: VoloAbpIdentityIdentityUserOrganizationUnit[] | null;
}

export interface VoloAbpIdentityIdentityUserClaim {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  tenantId?: string | null;
  claimType?: string | null;
  claimValue?: string | null;

  /** @format uuid */
  userId?: string;
}

export interface VoloAbpIdentityIdentityUserClaimDto {
  /** @format uuid */
  userId?: string;
  claimType?: string | null;
  claimValue?: string | null;
}

export interface VoloAbpIdentityIdentityUserCreateDto {
  extraProperties?: Record<string, any>;
  userName: string;
  name?: string | null;
  surname?: string | null;

  /** @format email */
  email: string;
  phoneNumber?: string | null;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[] | null;
  organizationUnitIds?: string[] | null;
  password: string;
  sendConfirmationEmail?: boolean;
}

export interface VoloAbpIdentityIdentityUserDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;

  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
  email?: string | null;
  name?: string | null;
  surname?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
  supportTwoFactor?: boolean;
  twoFactorEnabled?: boolean;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  isLockedOut?: boolean;

  /** @format date-time */
  lockoutEnd?: string | null;
  concurrencyStamp?: string | null;
  roleNames?: string[] | null;

  /** @format int32 */
  accessFailedCount?: number;
}

export interface VoloAbpIdentityIdentityUserLogin {
  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  userId?: string;
  loginProvider?: string | null;
  providerKey?: string | null;
  providerDisplayName?: string | null;
}

export interface VoloAbpIdentityIdentityUserOrganizationUnit {
  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  userId?: string;

  /** @format uuid */
  organizationUnitId?: string;
}

export interface VoloAbpIdentityIdentityUserRole {
  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  userId?: string;

  /** @format uuid */
  roleId?: string;
}

export interface VoloAbpIdentityIdentityUserSettingsDto {
  isUserNameUpdateEnabled?: boolean;
  isEmailUpdateEnabled?: boolean;
}

export interface VoloAbpIdentityIdentityUserToken {
  /** @format uuid */
  tenantId?: string | null;

  /** @format uuid */
  userId?: string;
  loginProvider?: string | null;
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityIdentityUserUpdateDto {
  extraProperties?: Record<string, any>;
  userName: string;
  name?: string | null;
  surname?: string | null;

  /** @format email */
  email: string;
  phoneNumber?: string | null;
  isActive?: boolean;
  lockoutEnabled?: boolean;
  roleNames?: string[] | null;
  organizationUnitIds?: string[] | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityIdentityUserUpdatePasswordInput {
  newPassword: string;
}

export interface VoloAbpIdentityIdentityUserUpdateRolesDto {
  roleNames: string[];
}

export interface VoloAbpIdentityOrganizationUnitCreateDto {
  extraProperties?: Record<string, any>;
  displayName: string;

  /** @format uuid */
  parentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  parentId?: string | null;
  code?: string | null;
  displayName?: string | null;
  roles?: VoloAbpIdentityOrganizationUnitRoleDto[] | null;
}

export interface VoloAbpIdentityOrganizationUnitLookupDto {
  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitMoveInput {
  /** @format uuid */
  newParentId?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitRoleDto {
  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format uuid */
  organizationUnitId?: string;

  /** @format uuid */
  roleId?: string;
}

export interface VoloAbpIdentityOrganizationUnitRoleInput {
  roleIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitUpdateDto {
  extraProperties?: Record<string, any>;
  displayName: string;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityOrganizationUnitUserInput {
  userIds?: string[] | null;
}

export interface VoloAbpIdentityOrganizationUnitWithDetailsDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  isDeleted?: boolean;

  /** @format uuid */
  deleterId?: string | null;

  /** @format date-time */
  deletionTime?: string | null;

  /** @format uuid */
  parentId?: string | null;
  code?: string | null;
  displayName?: string | null;
  roles?: VoloAbpIdentityIdentityRoleDto[] | null;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityUpdateClaimTypeDto {
  extraProperties?: Record<string, any>;
  name: string;
  required?: boolean;
  regex?: string | null;
  regexDescription?: string | null;
  description?: string | null;
  valueType?: VoloAbpIdentityIdentityClaimValueType;
  concurrencyStamp?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto {
  /** @format uuid */
  apiResourceId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto {
  /** @format uuid */
  apiResourceId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto {
  /** @format uuid */
  apiResourceId?: string;
  scope?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto {
  /** @format uuid */
  apiResourceId?: string;
  type?: string | null;
  value?: string | null;
  description?: string | null;

  /** @format date-time */
  expiration?: string | null;
}

export interface VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  enabled?: boolean;
  allowedAccessTokenSigningAlgorithms?: string | null;
  showInDiscoveryDocument?: boolean;
  secrets?: VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto[] | null;
  scopes?: VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto[] | null;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
  properties?: VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto[] | null;
}

export interface VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto {
  extraProperties?: Record<string, any>;
  name: string;
  displayName?: string | null;
  description?: string | null;
  allowedAccessTokenSigningAlgorithms?: string | null;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
}

export interface VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  description?: string | null;
  allowedAccessTokenSigningAlgorithms?: string | null;
  enabled?: boolean;
  secrets?: VoloAbpIdentityServerApiResourceDtosApiResourceSecretDto[] | null;
  scopes?: VoloAbpIdentityServerApiResourceDtosApiResourceScopeDto[] | null;
  userClaims?: VoloAbpIdentityServerApiResourceDtosApiResourceClaimDto[] | null;
  properties?: VoloAbpIdentityServerApiResourceDtosApiResourcePropertyDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto {
  /** @format uuid */
  apiScopeId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto {
  /** @format uuid */
  apiScopeId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  enabled?: boolean;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  required?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto {
  extraProperties?: Record<string, any>;
  name: string;
  displayName?: string | null;
  description?: string | null;
  required?: boolean;
  enabled?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
}

export interface VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  description?: string | null;
  required?: boolean;
  enabled?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerApiScopeDtosApiScopeClaimDto[] | null;
  properties?: VoloAbpIdentityServerApiScopeDtosApiScopePropertyDto[] | null;
}

export interface VoloAbpIdentityServerClaimTypeDtosIdentityClaimTypeDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientClaimDto {
  type?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientCorsOriginDto {
  /** @format uuid */
  clientId?: string;
  origin?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientGrantTypeDto {
  /** @format uuid */
  clientId?: string;
  grantType?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientIdentityProviderRestrictionDto {
  /** @format uuid */
  clientId?: string;
  provider?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientPostLogoutRedirectUriDto {
  /** @format uuid */
  clientId?: string;
  postLogoutRedirectUri?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientPropertyDto {
  /** @format uuid */
  clientId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientRedirectUriDto {
  /** @format uuid */
  clientId?: string;
  redirectUri?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientScopeDto {
  /** @format uuid */
  clientId?: string;
  scope?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientSecretDto {
  /** @format uuid */
  clientId?: string;
  type?: string | null;
  value?: string | null;
  description?: string | null;

  /** @format date-time */
  expiration?: string | null;
}

export interface VoloAbpIdentityServerClientDtosClientWithDetailsDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  clientId?: string | null;
  clientName?: string | null;
  description?: string | null;
  clientUri?: string | null;
  logoUri?: string | null;
  enabled?: boolean;
  protocolType?: string | null;
  requireClientSecret?: boolean;
  requireConsent?: boolean;
  allowRememberConsent?: boolean;
  alwaysIncludeUserClaimsInIdToken?: boolean;
  requirePkce?: boolean;
  allowPlainTextPkce?: boolean;
  requireRequestObject?: boolean;
  allowAccessTokensViaBrowser?: boolean;
  frontChannelLogoutUri?: string | null;
  frontChannelLogoutSessionRequired?: boolean;
  backChannelLogoutUri?: string | null;
  backChannelLogoutSessionRequired?: boolean;
  allowOfflineAccess?: boolean;

  /** @format int32 */
  identityTokenLifetime?: number;
  allowedIdentityTokenSigningAlgorithms?: string | null;

  /** @format int32 */
  accessTokenLifetime?: number;

  /** @format int32 */
  authorizationCodeLifetime?: number;

  /** @format int32 */
  consentLifetime?: number | null;

  /** @format int32 */
  absoluteRefreshTokenLifetime?: number;

  /** @format int32 */
  slidingRefreshTokenLifetime?: number;

  /** @format int32 */
  refreshTokenUsage?: number;
  updateAccessTokenClaimsOnRefresh?: boolean;

  /** @format int32 */
  refreshTokenExpiration?: number;

  /** @format int32 */
  accessTokenType?: number;
  enableLocalLogin?: boolean;
  includeJwtId?: boolean;
  alwaysSendClientClaims?: boolean;
  clientClaimsPrefix?: string | null;
  pairWiseSubjectSalt?: string | null;

  /** @format int32 */
  userSsoLifetime?: number | null;
  userCodeType?: string | null;

  /** @format int32 */
  deviceCodeLifetime?: number;
  clientSecrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
  allowedScopes?: VoloAbpIdentityServerClientDtosClientScopeDto[] | null;
  claims?: VoloAbpIdentityServerClientDtosClientClaimDto[] | null;
  allowedGrantTypes?: VoloAbpIdentityServerClientDtosClientGrantTypeDto[] | null;
  identityProviderRestrictions?: VoloAbpIdentityServerClientDtosClientIdentityProviderRestrictionDto[] | null;
  properties?: VoloAbpIdentityServerClientDtosClientPropertyDto[] | null;
  allowedCorsOrigins?: VoloAbpIdentityServerClientDtosClientCorsOriginDto[] | null;
  redirectUris?: VoloAbpIdentityServerClientDtosClientRedirectUriDto[] | null;
  postLogoutRedirectUris?: VoloAbpIdentityServerClientDtosClientPostLogoutRedirectUriDto[] | null;
}

export interface VoloAbpIdentityServerClientDtosCreateClientDto {
  extraProperties?: Record<string, any>;
  clientId: string;
  clientName: string;
  description?: string | null;
  clientUri?: string | null;
  logoUri?: string | null;
  requireConsent?: boolean;
  callbackUrl?: string | null;
  logoutUrl?: string | null;
  secrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
  scopes?: string[] | null;
}

export interface VoloAbpIdentityServerClientDtosUpdateClientDto {
  extraProperties?: Record<string, any>;
  clientName?: string | null;
  description?: string | null;
  clientUri?: string | null;
  logoUri?: string | null;
  enabled?: boolean;
  requireConsent?: boolean;
  allowOfflineAccess?: boolean;
  allowRememberConsent?: boolean;
  allowAccessTokensViaBrowser?: boolean;
  requirePkce?: boolean;
  requireClientSecret?: boolean;
  requireRequestObject?: boolean;

  /** @format int32 */
  accessTokenLifetime?: number;

  /** @format int32 */
  consentLifetime?: number | null;

  /** @format int32 */
  accessTokenType?: number;
  enableLocalLogin?: boolean;
  frontChannelLogoutUri?: string | null;
  frontChannelLogoutSessionRequired?: boolean;
  backChannelLogoutUri?: string | null;
  allowedIdentityTokenSigningAlgorithms?: string | null;
  backChannelLogoutSessionRequired?: boolean;
  includeJwtId?: boolean;
  alwaysSendClientClaims?: boolean;
  pairWiseSubjectSalt?: string | null;

  /** @format int32 */
  userSsoLifetime?: number | null;
  userCodeType?: string | null;

  /** @format int32 */
  deviceCodeLifetime?: number;
  clientSecrets?: VoloAbpIdentityServerClientDtosClientSecretDto[] | null;
  claims?: VoloAbpIdentityServerClientDtosClientClaimDto[] | null;
  properties?: VoloAbpIdentityServerClientDtosClientPropertyDto[] | null;
  allowedGrantTypes?: string[] | null;
  identityProviderRestrictions?: string[] | null;
  scopes?: string[] | null;
  allowedCorsOrigins?: string[] | null;
  redirectUris?: string[] | null;
  postLogoutRedirectUris?: string[] | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto {
  extraProperties?: Record<string, any>;
  name: string;
  displayName?: string | null;
  description?: string | null;
  enabled?: boolean;
  required?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto {
  /** @format uuid */
  identityResourceId?: string;
  type?: string | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto {
  /** @format uuid */
  identityResourceId?: string;
  key?: string | null;
  value?: string | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  enabled?: boolean;
  required?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
}

export interface VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto {
  extraProperties?: Record<string, any>;
  name: string;
  displayName?: string | null;
  description?: string | null;
  enabled?: boolean;
  required?: boolean;
  emphasize?: boolean;
  showInDiscoveryDocument?: boolean;
  userClaims?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourceClaimDto[] | null;
  properties?: VoloAbpIdentityServerIdentityResourceDtosIdentityResourcePropertyDto[] | null;
}

export interface VoloAbpLanguageManagementDtoCreateLanguageDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  cultureName?: string | null;
  uiCultureName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
}

export interface VoloAbpLanguageManagementDtoCultureInfoDto {
  displayName?: string | null;
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;
  cultureName?: string | null;
  uiCultureName?: string | null;
  displayName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
  isDefaultLanguage?: boolean;
  concurrencyStamp?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageResourceDto {
  name?: string | null;
}

export interface VoloAbpLanguageManagementDtoLanguageTextDto {
  resourceName?: string | null;
  cultureName?: string | null;
  baseCultureName?: string | null;
  baseValue?: string | null;
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpLanguageManagementDtoUpdateLanguageDto {
  extraProperties?: Record<string, any>;
  displayName?: string | null;
  flagIcon?: string | null;
  isEnabled?: boolean;
  concurrencyStamp?: string | null;
}

/**
 * @format int32
 */
export type VoloAbpLeptonThemeManagementLeptonStyle = 0 | 1 | 2 | 3 | 4 | 5;

export interface VoloAbpLeptonThemeManagementLeptonThemeSettingsDto {
  boxedLayout?: boolean;
  menuPlacement?: VoloAbpLeptonThemeManagementMenuPlacement;
  menuStatus?: VoloAbpLeptonThemeManagementMenuStatus;
  style?: VoloAbpLeptonThemeManagementLeptonStyle;
  publicLayoutStyle?: VoloAbpLeptonThemeManagementLeptonStyle;
}

/**
 * @format int32
 */
export type VoloAbpLeptonThemeManagementMenuPlacement = 0 | 1;

/**
 * @format int32
 */
export type VoloAbpLeptonThemeManagementMenuStatus = 0 | 1;

export interface VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto {
  boxedLayout?: boolean;
  menuPlacement?: VoloAbpLeptonThemeManagementMenuPlacement;
  menuStatus?: VoloAbpLeptonThemeManagementMenuStatus;
  style?: VoloAbpLeptonThemeManagementLeptonStyle;
  publicLayoutStyle?: VoloAbpLeptonThemeManagementLeptonStyle;
}

export interface VoloAbpLocalizationLanguageInfo {
  cultureName?: string | null;
  uiCultureName?: string | null;
  displayName?: string | null;
  flagIcon?: string | null;
}

export interface VoloAbpNameValue {
  name?: string | null;
  value?: string | null;
}

export interface VoloAbpPermissionManagementGetPermissionListResultDto {
  entityDisplayName?: string | null;
  groups?: VoloAbpPermissionManagementPermissionGroupDto[] | null;
}

export interface VoloAbpPermissionManagementPermissionGrantInfoDto {
  name?: string | null;
  displayName?: string | null;
  parentName?: string | null;
  isGranted?: boolean;
  allowedProviders?: string[] | null;
  grantedProviders?: VoloAbpPermissionManagementProviderInfoDto[] | null;
}

export interface VoloAbpPermissionManagementPermissionGroupDto {
  name?: string | null;
  displayName?: string | null;
  permissions?: VoloAbpPermissionManagementPermissionGrantInfoDto[] | null;
}

export interface VoloAbpPermissionManagementProviderInfoDto {
  providerName?: string | null;
  providerKey?: string | null;
}

export interface VoloAbpPermissionManagementUpdatePermissionDto {
  name?: string | null;
  isGranted?: boolean;
}

export interface VoloAbpPermissionManagementUpdatePermissionsDto {
  permissions?: VoloAbpPermissionManagementUpdatePermissionDto[] | null;
}

export interface VoloAbpSettingManagementEmailSettingsDto {
  smtpHost?: string | null;

  /** @format int32 */
  smtpPort?: number;
  smtpUserName?: string | null;
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  defaultFromAddress?: string | null;
  defaultFromDisplayName?: string | null;
}

export interface VoloAbpSettingManagementUpdateEmailSettingsDto {
  smtpHost?: string | null;

  /**
   * @format int32
   * @min 1
   * @max 65535
   */
  smtpPort?: number;
  smtpUserName?: string | null;

  /** @format password */
  smtpPassword?: string | null;
  smtpDomain?: string | null;
  smtpEnableSsl?: boolean;
  smtpUseDefaultCredentials?: boolean;
  defaultFromAddress: string;
  defaultFromDisplayName: string;
}

export interface VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput {
  templateName: string;
  cultureName?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto {
  name?: string | null;
  displayName?: string | null;
  isLayout?: boolean;
  layout?: string | null;
  isInlineLocalized?: boolean;
  defaultCultureName?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto {
  name?: string | null;
  cultureName?: string | null;
  content?: string | null;
}

export interface VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput {
  templateName: string;
  cultureName?: string | null;
  content?: string | null;
}

export interface VoloAbpUsersUserData {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  tenantId?: string | null;
  userName?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  emailConfirmed?: boolean;
  phoneNumber?: string | null;
  phoneNumberConfirmed?: boolean;
}

export interface VoloAbpValidationStringValuesIStringValueType {
  name?: string | null;
  properties?: Record<string, any>;
  validator?: VoloAbpValidationStringValuesIValueValidator;
}

export interface VoloAbpValidationStringValuesIValueValidator {
  name?: string | null;
  properties?: Record<string, any>;
}

export interface VoloFileManagementDirectoriesCreateDirectoryInput {
  /** @format uuid */
  parentId?: string | null;
  name: string;
}

export interface VoloFileManagementDirectoriesDirectoryContentDto {
  name?: string | null;
  isDirectory?: boolean;

  /** @format uuid */
  id?: string;

  /** @format int32 */
  size?: number;
  iconInfo?: VoloFileManagementFilesFileIconInfo;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementDirectoriesDirectoryDescriptorDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;
  name?: string | null;

  /** @format uuid */
  parentId?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementDirectoriesDirectoryDescriptorInfoDto {
  /** @format uuid */
  id?: string;
  name?: string | null;

  /** @format uuid */
  parentId?: string | null;
  hasChildren?: boolean;
}

export interface VoloFileManagementDirectoriesMoveDirectoryInput {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  newParentId?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementDirectoriesRenameDirectoryInput {
  name: string;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementFilesDownloadTokenResultDto {
  token?: string | null;
}

export interface VoloFileManagementFilesFileDescriptorDto {
  /** @format uuid */
  id?: string;

  /** @format date-time */
  creationTime?: string;

  /** @format uuid */
  creatorId?: string | null;

  /** @format date-time */
  lastModificationTime?: string | null;

  /** @format uuid */
  lastModifierId?: string | null;

  /** @format uuid */
  directoryId?: string | null;
  name?: string | null;
  mimeType?: string | null;

  /** @format int32 */
  size?: number;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementFilesFileIconInfo {
  icon?: string | null;
  type?: VoloFileManagementFilesFileIconType;
}

/**
 * @format int32
 */
export type VoloFileManagementFilesFileIconType = 0 | 1;

export interface VoloFileManagementFilesFileUploadPreInfoDto {
  fileName?: string | null;
  doesExist?: boolean;
  hasValidName?: boolean;
}

export interface VoloFileManagementFilesFileUploadPreInfoRequest {
  /** @format uuid */
  directoryId?: string | null;
  fileName?: string | null;

  /** @format int64 */
  size?: number;
}

export interface VoloFileManagementFilesMoveFileInput {
  /** @format uuid */
  id?: string;

  /** @format uuid */
  newDirectoryId?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloFileManagementFilesRenameFileInput {
  name: string;
  concurrencyStamp?: string | null;
}

export interface VoloPaymentGatewaysGatewayDto {
  name?: string | null;
  displayName?: string | null;
}

export interface VoloPaymentPlansGatewayPlanDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  planId?: string;
  gateway?: string | null;
  externalId?: string | null;
}

export interface VoloPaymentPlansPlanDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosEditionCreateDto {
  extraProperties?: Record<string, any>;
  displayName: string;

  /** @format uuid */
  planId?: string | null;
}

export interface VoloSaasHostDtosEditionDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  displayName?: string | null;

  /** @format uuid */
  planId?: string | null;
  planName?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosEditionLookupDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  displayName?: string | null;
}

export interface VoloSaasHostDtosEditionUpdateDto {
  extraProperties?: Record<string, any>;
  displayName: string;

  /** @format uuid */
  planId?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosSaasTenantConnectionStringsDto {
  extraProperties?: Record<string, any>;
  default?: string | null;
  databases?: VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto[] | null;
}

export interface VoloSaasHostDtosSaasTenantCreateDto {
  extraProperties?: Record<string, any>;
  name: string;

  /** @format uuid */
  editionId?: string | null;
  activationState?: VoloSaasTenantActivationState;

  /** @format date-time */
  activationEndDate?: string | null;

  /** @format date-time */
  editionEndDateUtc?: string | null;

  /** @format email */
  adminEmailAddress: string;
  adminPassword: string;
  connectionStrings?: VoloSaasHostDtosSaasTenantConnectionStringsDto;
}

export interface VoloSaasHostDtosSaasTenantDatabaseConnectionStringsDto {
  extraProperties?: Record<string, any>;
  databaseName?: string | null;
  connectionString?: string | null;
}

export interface VoloSaasHostDtosSaasTenantDatabasesDto {
  extraProperties?: Record<string, any>;
  databases?: string[] | null;
}

export interface VoloSaasHostDtosSaasTenantDto {
  extraProperties?: Record<string, any>;

  /** @format uuid */
  id?: string;
  name?: string | null;

  /** @format uuid */
  editionId?: string | null;

  /** @format date-time */
  editionEndDateUtc?: string | null;
  editionName?: string | null;
  hasDefaultConnectionString?: boolean;
  activationState?: VoloSaasTenantActivationState;

  /** @format date-time */
  activationEndDate?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostDtosSaasTenantUpdateDto {
  extraProperties?: Record<string, any>;
  name: string;

  /** @format uuid */
  editionId?: string | null;
  activationState?: VoloSaasTenantActivationState;

  /** @format date-time */
  activationEndDate?: string | null;

  /** @format date-time */
  editionEndDateUtc?: string | null;
  concurrencyStamp?: string | null;
}

export interface VoloSaasHostGetEditionUsageStatisticsResultDto {
  data?: Record<string, number>;
}

/**
 * @format int32
 */
export type VoloSaasTenantActivationState = 0 | 1 | 2;

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "/Resume";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Resume API
 * @version v1
 * @baseUrl /Resume
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags AbpApiDefinition
     * @name AbpApiDefinitionList
     * @request GET:/api/abp/api-definition
     * @secure
     */
    abpApiDefinitionList: (query?: { IncludeTypes?: boolean }, params: RequestParams = {}) =>
      this.request<VoloAbpHttpModelingApplicationApiDescriptionModel, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/abp/api-definition`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbpApplicationConfiguration
     * @name AbpApplicationConfigurationList
     * @request GET:/api/abp/application-configuration
     * @secure
     */
    abpApplicationConfigurationList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpAspNetCoreMvcApplicationConfigurationsApplicationConfigurationDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/abp/application-configuration`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbpTenant
     * @name AbpMultiTenancyTenantsByNameDetail
     * @request GET:/api/abp/multi-tenancy/tenants/by-name/{name}
     * @secure
     */
    abpMultiTenancyTenantsByNameDetail: (name: string, params: RequestParams = {}) =>
      this.request<VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/abp/multi-tenancy/tenants/by-name/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AbpTenant
     * @name AbpMultiTenancyTenantsByIdDetail
     * @request GET:/api/abp/multi-tenancy/tenants/by-id/{id}
     * @secure
     */
    abpMultiTenancyTenantsByIdDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpAspNetCoreMvcMultiTenancyFindTenantResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/abp/multi-tenancy/tenants/by-id/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountRegisterCreate
     * @request POST:/api/account/register
     * @secure
     */
    accountRegisterCreate: (data: VoloAbpAccountRegisterDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSendPasswordResetCodeCreate
     * @request POST:/api/account/send-password-reset-code
     * @secure
     */
    accountSendPasswordResetCodeCreate: (data: VoloAbpAccountSendPasswordResetCodeDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/send-password-reset-code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountResetPasswordCreate
     * @request POST:/api/account/reset-password
     * @secure
     */
    accountResetPasswordCreate: (data: VoloAbpAccountResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountConfirmationStateList
     * @request GET:/api/account/confirmation-state
     * @secure
     */
    accountConfirmationStateList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<VoloAbpAccountIdentityUserConfirmationStateDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/confirmation-state`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSendPhoneNumberConfirmationTokenCreate
     * @request POST:/api/account/send-phone-number-confirmation-token
     * @secure
     */
    accountSendPhoneNumberConfirmationTokenCreate: (
      data: VoloAbpAccountSendPhoneNumberConfirmationTokenDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/send-phone-number-confirmation-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSendEmailConfirmationTokenCreate
     * @request POST:/api/account/send-email-confirmation-token
     * @secure
     */
    accountSendEmailConfirmationTokenCreate: (
      data: VoloAbpAccountSendEmailConfirmationTokenDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/send-email-confirmation-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountConfirmPhoneNumberCreate
     * @request POST:/api/account/confirm-phone-number
     * @secure
     */
    accountConfirmPhoneNumberCreate: (data: VoloAbpAccountConfirmPhoneNumberInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/confirm-phone-number`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountConfirmEmailCreate
     * @request POST:/api/account/confirm-email
     * @secure
     */
    accountConfirmEmailCreate: (data: VoloAbpAccountConfirmEmailInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/confirm-email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountProfilePictureCreate
     * @request POST:/api/account/profile-picture
     * @secure
     */
    accountProfilePictureCreate: (
      data: { ImageContent?: File },
      query?: { Type?: VoloAbpAccountProfilePictureType },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/profile-picture`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountProfilePictureDetail
     * @request GET:/api/account/profile-picture/{id}
     * @secure
     */
    accountProfilePictureDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpAccountProfilePictureSourceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/profile-picture/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountTwoFactorProvidersList
     * @request GET:/api/account/two-factor-providers
     * @secure
     */
    accountTwoFactorProvidersList: (query: { UserId: string; Token: string }, params: RequestParams = {}) =>
      this.request<string[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/two-factor-providers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSendTwoFactorCodeCreate
     * @request POST:/api/account/send-two-factor-code
     * @secure
     */
    accountSendTwoFactorCodeCreate: (data: VoloAbpAccountSendTwoFactorCodeInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/send-two-factor-code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountSecurityLogsList
     * @request GET:/api/account/security-logs
     * @secure
     */
    accountSecurityLogsList: (
      query?: {
        StartTime?: string;
        EndTime?: string;
        ApplicationName?: string;
        Identity?: string;
        Action?: string;
        UserName?: string;
        ClientId?: string;
        CorrelationId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/security-logs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountProfilePictureFileDetail
     * @request GET:/api/account/profile-picture-file/{id}
     * @secure
     */
    accountProfilePictureFileDetail: (id: string, params: RequestParams = {}) =>
      this.request<File, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/profile-picture-file/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountRecaptchaValidateList
     * @request GET:/api/account/recaptcha-validate
     * @secure
     */
    accountRecaptchaValidateList: (query?: { captchaResponse?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/recaptcha-validate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountExternalProvider
     * @name AccountExternalProviderList
     * @request GET:/api/account/external-provider
     * @secure
     */
    accountExternalProviderList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountExternalProvidersExternalProviderDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/external-provider`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountExternalProvider
     * @name AccountExternalProviderByNameList
     * @request GET:/api/account/external-provider/by-name
     * @secure
     */
    accountExternalProviderByNameList: (query?: { TenantId?: string; Name?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpAccountExternalProvidersExternalProviderItemWithSecretDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/external-provider/by-name`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsList
     * @request GET:/api/account-admin/settings
     * @secure
     */
    accountAdminSettingsList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountAccountSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsUpdate
     * @request PUT:/api/account-admin/settings
     * @secure
     */
    accountAdminSettingsUpdate: (data: VoloAbpAccountAccountSettingsDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsLdapList
     * @request GET:/api/account-admin/settings/ldap
     * @secure
     */
    accountAdminSettingsLdapList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountAccountLdapSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/ldap`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsLdapUpdate
     * @request PUT:/api/account-admin/settings/ldap
     * @secure
     */
    accountAdminSettingsLdapUpdate: (data: VoloAbpAccountAccountLdapSettingsDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/ldap`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsTwoFactorList
     * @request GET:/api/account-admin/settings/two-factor
     * @secure
     */
    accountAdminSettingsTwoFactorList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountAccountTwoFactorSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/two-factor`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsTwoFactorUpdate
     * @request PUT:/api/account-admin/settings/two-factor
     * @secure
     */
    accountAdminSettingsTwoFactorUpdate: (
      data: VoloAbpAccountAccountTwoFactorSettingsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/two-factor`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsRecaptchaList
     * @request GET:/api/account-admin/settings/recaptcha
     * @secure
     */
    accountAdminSettingsRecaptchaList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountAccountRecaptchaSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/recaptcha`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsRecaptchaUpdate
     * @request PUT:/api/account-admin/settings/recaptcha
     * @secure
     */
    accountAdminSettingsRecaptchaUpdate: (
      data: VoloAbpAccountAccountRecaptchaSettingsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/recaptcha`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsExternalProviderList
     * @request GET:/api/account-admin/settings/external-provider
     * @secure
     */
    accountAdminSettingsExternalProviderList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountAccountExternalProviderSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/external-provider`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AccountSettings
     * @name AccountAdminSettingsExternalProviderUpdate
     * @request PUT:/api/account-admin/settings/external-provider
     * @secure
     */
    accountAdminSettingsExternalProviderUpdate: (
      data: VoloAbpAccountUpdateExternalProviderDto[],
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account-admin/settings/external-provider`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesList
     * @request GET:/api/identity-server/api-resources
     * @secure
     */
    identityServerApiResourcesList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/api-resources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesCreate
     * @request POST:/api/identity-server/api-resources
     * @secure
     */
    identityServerApiResourcesCreate: (
      data: VoloAbpIdentityServerApiResourceDtosCreateApiResourceDto,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/api-resources`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesDelete
     * @request DELETE:/api/identity-server/api-resources
     * @secure
     */
    identityServerApiResourcesDelete: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/api-resources`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesAllList
     * @request GET:/api/identity-server/api-resources/all
     * @secure
     */
    identityServerApiResourcesAllList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto[],
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/api-resources/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesDetail
     * @request GET:/api/identity-server/api-resources/{id}
     * @secure
     */
    identityServerApiResourcesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/api-resources/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiResources
     * @name IdentityServerApiResourcesUpdate
     * @request PUT:/api/identity-server/api-resources/{id}
     * @secure
     */
    identityServerApiResourcesUpdate: (
      id: string,
      data: VoloAbpIdentityServerApiResourceDtosUpdateApiResourceDto,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpIdentityServerApiResourceDtosApiResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/api-resources/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesList
     * @request GET:/api/identity-server/apiScopes
     * @secure
     */
    identityServerApiScopesList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/apiScopes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesCreate
     * @request POST:/api/identity-server/apiScopes
     * @secure
     */
    identityServerApiScopesCreate: (
      data: VoloAbpIdentityServerApiScopeDtosCreateApiScopeDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/apiScopes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesDelete
     * @request DELETE:/api/identity-server/apiScopes
     * @secure
     */
    identityServerApiScopesDelete: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/apiScopes`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesAllList
     * @request GET:/api/identity-server/apiScopes/all
     * @secure
     */
    identityServerApiScopesAllList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/apiScopes/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesDetail
     * @request GET:/api/identity-server/apiScopes/{id}
     * @secure
     */
    identityServerApiScopesDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/apiScopes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ApiScopes
     * @name IdentityServerApiScopesUpdate
     * @request PUT:/api/identity-server/apiScopes/{id}
     * @secure
     */
    identityServerApiScopesUpdate: (
      id: string,
      data: VoloAbpIdentityServerApiScopeDtosUpdateApiScopeDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpIdentityServerApiScopeDtosApiScopeWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/apiScopes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesList
     * @request GET:/api/app/appendices
     * @secure
     */
    appAppendicesList: (
      query?: {
        FilterText?: string;
        ResumeCode?: string;
        AppendixName?: string;
        AppendixType?: string;
        AppendixContent?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeAppendicesAppendixDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/appendices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesCreate
     * @request POST:/api/app/appendices
     * @secure
     */
    appAppendicesCreate: (
      query: { Name: string },
      data: ResumeAppendicesAppendixCreateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeAppendicesAppendixDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/appendices`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesDetail
     * @request GET:/api/app/appendices/{id}
     * @secure
     */
    appAppendicesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeAppendicesAppendixDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/appendices/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesUpdate
     * @request PUT:/api/app/appendices/{id}
     * @secure
     */
    appAppendicesUpdate: (id: string, data: ResumeAppendicesAppendixUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeAppendicesAppendixDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/appendices/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesDelete
     * @request DELETE:/api/app/appendices/{id}
     * @secure
     */
    appAppendicesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/appendices/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesGetListByResumeCodeList
     * @request GET:/api/app/appendices/GetListByResumeCode
     * @secure
     */
    appAppendicesGetListByResumeCodeList: (query?: { ResumeCode?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1ResumeAppendicesAppendixDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/appendices/GetListByResumeCode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Appendix
     * @name AppAppendicesCreateList
     * @request GET:/api/app/appendices/Create
     * @secure
     */
    appAppendicesCreateList: (query: { Name: string }, data: { File?: File }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/appendices/Create`,
        method: "GET",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsList
     * @request GET:/api/audit-logging/audit-logs
     * @secure
     */
    auditLoggingAuditLogsList: (
      query?: {
        StartTime?: string;
        EndTime?: string;
        Url?: string;
        UserName?: string;
        ApplicationName?: string;
        ClientIpAddress?: string;
        CorrelationId?: string;
        HttpMethod?: string;
        HttpStatusCode?: SystemNetHttpStatusCode;
        MaxExecutionDuration?: number;
        MinExecutionDuration?: number;
        HasException?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingAuditLogDtoVoloAbpAuditLoggingApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/audit-logging/audit-logs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsDetail
     * @request GET:/api/audit-logging/audit-logs/{id}
     * @secure
     */
    auditLoggingAuditLogsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpAuditLoggingAuditLogDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsStatisticsErrorRateList
     * @request GET:/api/audit-logging/audit-logs/statistics/error-rate
     * @secure
     */
    auditLoggingAuditLogsStatisticsErrorRateList: (
      query?: { StartDate?: string; EndDate?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpAuditLoggingGetErrorRateOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/statistics/error-rate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayList
     * @request GET:/api/audit-logging/audit-logs/statistics/average-execution-duration-per-day
     * @secure
     */
    auditLoggingAuditLogsStatisticsAverageExecutionDurationPerDayList: (
      query?: { StartDate?: string; EndDate?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpAuditLoggingGetAverageExecutionDurationPerDayOutput, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/statistics/average-execution-duration-per-day`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsEntityChangesList
     * @request GET:/api/audit-logging/audit-logs/entity-changes
     * @secure
     */
    auditLoggingAuditLogsEntityChangesList: (
      query?: {
        AuditLogId?: string;
        EntityChangeType?: VoloAbpAuditingEntityChangeType;
        EntityId?: string;
        EntityTypeFullName?: string;
        StartDate?: string;
        EndDate?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpAuditLoggingEntityChangeDtoVoloAbpAuditLoggingApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/audit-logging/audit-logs/entity-changes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsEntityChangesWithUsernameList
     * @request GET:/api/audit-logging/audit-logs/entity-changes-with-username
     * @secure
     */
    auditLoggingAuditLogsEntityChangesWithUsernameList: (
      query?: { EntityId?: string; EntityTypeFullName?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpAuditLoggingEntityChangeWithUsernameDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/entity-changes-with-username`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsEntityChangeWithUsernameDetail
     * @request GET:/api/audit-logging/audit-logs/entity-change-with-username/{entityChangeId}
     * @secure
     */
    auditLoggingAuditLogsEntityChangeWithUsernameDetail: (entityChangeId: string, params: RequestParams = {}) =>
      this.request<VoloAbpAuditLoggingEntityChangeWithUsernameDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/entity-change-with-username/${entityChangeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuditLogs
     * @name AuditLoggingAuditLogsEntityChangesDetail
     * @request GET:/api/audit-logging/audit-logs/entity-changes/{entityChangeId}
     * @secure
     */
    auditLoggingAuditLogsEntityChangesDetail: (entityChangeId: string, params: RequestParams = {}) =>
      this.request<VoloAbpAuditLoggingEntityChangeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/audit-logging/audit-logs/entity-changes/${entityChangeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesList
     * @request GET:/api/app/autobiographies
     * @secure
     */
    appAutobiographiesList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        LanguageCode?: string;
        Content?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeAutobiographiesAutobiographyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/autobiographies`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesCreate
     * @request POST:/api/app/autobiographies
     * @secure
     */
    appAutobiographiesCreate: (data: ResumeAutobiographiesAutobiographyCreateDto, params: RequestParams = {}) =>
      this.request<ResumeAutobiographiesAutobiographyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/autobiographies`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesDetail
     * @request GET:/api/app/autobiographies/{id}
     * @secure
     */
    appAutobiographiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeAutobiographiesAutobiographyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/autobiographies/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesUpdate
     * @request PUT:/api/app/autobiographies/{id}
     * @secure
     */
    appAutobiographiesUpdate: (
      id: string,
      data: ResumeAutobiographiesAutobiographyUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeAutobiographiesAutobiographyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/autobiographies/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesDelete
     * @request DELETE:/api/app/autobiographies/{id}
     * @secure
     */
    appAutobiographiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/autobiographies/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autobiography
     * @name AppAutobiographiesGetListByResumeCodeList
     * @request GET:/api/app/autobiographies/GetListByResumeCode
     * @secure
     */
    appAutobiographiesGetListByResumeCodeList: (query?: { ResumeCode?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1ResumeAutobiographiesAutobiographyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/autobiographies/GetListByResumeCode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsList
     * @request GET:/api/app/base-basics
     * @secure
     */
    appBaseBasicsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        NameC?: string;
        NameE?: string;
        AdmitChannelCode?: string;
        IdNo?: string;
        BirthDateMin?: string;
        BirthDateMax?: string;
        SexCode?: string;
        Blood?: string;
        MirrageCode?: string;
        Introducer?: string;
        BirthPlaceCode?: string;
        ArmyCode?: string;
        PassportName?: string;
        PassportNo?: string;
        DisabledType?: string;
        CellPhone?: string;
        Email?: string;
        Account_AD?: string;
        Photo?: string;
        Hobby?: string;
        CurrentTel?: string;
        CurrentAdd?: string;
        PermanentTel?: string;
        PermanentAdd?: string;
        ValidCode?: string;
        Country?: string;
        SpecialStatus?: string;
        DrivingLicence?: string;
        Transportation?: string;
        ResidenceNo?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeBaseBasicsBaseBasicDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/base-basics`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsCreate
     * @request POST:/api/app/base-basics
     * @secure
     */
    appBaseBasicsCreate: (data: ResumeBaseBasicsBaseBasicCreateDto, params: RequestParams = {}) =>
      this.request<ResumeBaseBasicsBaseBasicDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/base-basics`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsDetail
     * @request GET:/api/app/base-basics/{id}
     * @secure
     */
    appBaseBasicsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeBaseBasicsBaseBasicDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/base-basics/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsUpdate
     * @request PUT:/api/app/base-basics/{id}
     * @secure
     */
    appBaseBasicsUpdate: (id: string, data: ResumeBaseBasicsBaseBasicUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeBaseBasicsBaseBasicDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/base-basics/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsDelete
     * @request DELETE:/api/app/base-basics/{id}
     * @secure
     */
    appBaseBasicsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/base-basics/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BaseBasic
     * @name AppBaseBasicsGetListByResumeCodeList
     * @request GET:/api/app/base-basics/GetListByResumeCode
     * @secure
     */
    appBaseBasicsGetListByResumeCodeList: (query?: { ResumeCode?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1ResumeBaseBasicsBaseBasicDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/base-basics/GetListByResumeCode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cellphone
     * @name AppCellphonesList
     * @request GET:/api/app/cellphones
     * @secure
     */
    appCellphonesList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Number?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeCellphonesCellphoneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/cellphones`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cellphone
     * @name AppCellphonesCreate
     * @request POST:/api/app/cellphones
     * @secure
     */
    appCellphonesCreate: (data: ResumeCellphonesCellphoneCreateDto, params: RequestParams = {}) =>
      this.request<ResumeCellphonesCellphoneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cellphones`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cellphone
     * @name AppCellphonesDetail
     * @request GET:/api/app/cellphones/{id}
     * @secure
     */
    appCellphonesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeCellphonesCellphoneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cellphones/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cellphone
     * @name AppCellphonesUpdate
     * @request PUT:/api/app/cellphones/{id}
     * @secure
     */
    appCellphonesUpdate: (id: string, data: ResumeCellphonesCellphoneUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeCellphonesCellphoneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cellphones/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Cellphone
     * @name AppCellphonesDelete
     * @request DELETE:/api/app/cellphones/{id}
     * @secure
     */
    appCellphonesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/cellphones/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimType
     * @name IdentityClaimTypesList
     * @request GET:/api/identity/claim-types
     * @secure
     */
    identityClaimTypesList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityClaimTypeDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/claim-types`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimType
     * @name IdentityClaimTypesCreate
     * @request POST:/api/identity/claim-types
     * @secure
     */
    identityClaimTypesCreate: (data: VoloAbpIdentityCreateClaimTypeDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/claim-types`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimType
     * @name IdentityClaimTypesDetail
     * @request GET:/api/identity/claim-types/{id}
     * @secure
     */
    identityClaimTypesDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/claim-types/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimType
     * @name IdentityClaimTypesUpdate
     * @request PUT:/api/identity/claim-types/{id}
     * @secure
     */
    identityClaimTypesUpdate: (id: string, data: VoloAbpIdentityUpdateClaimTypeDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/claim-types/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimType
     * @name IdentityClaimTypesDelete
     * @request DELETE:/api/identity/claim-types/{id}
     * @secure
     */
    identityClaimTypesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/claim-types/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ClaimTypes
     * @name IdentityServerClaimTypesList
     * @request GET:/api/identity-server/claim-types
     * @secure
     */
    identityServerClaimTypesList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityServerClaimTypeDtosIdentityClaimTypeDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/claim-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name IdentityServerClientsList
     * @request GET:/api/identity-server/clients
     * @secure
     */
    identityServerClientsList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerClientDtosClientWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/clients`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name IdentityServerClientsCreate
     * @request POST:/api/identity-server/clients
     * @secure
     */
    identityServerClientsCreate: (data: VoloAbpIdentityServerClientDtosCreateClientDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityServerClientDtosClientWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/clients`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name IdentityServerClientsDelete
     * @request DELETE:/api/identity-server/clients
     * @secure
     */
    identityServerClientsDelete: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/clients`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name IdentityServerClientsDetail
     * @request GET:/api/identity-server/clients/{id}
     * @secure
     */
    identityServerClientsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityServerClientDtosClientWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/clients/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Clients
     * @name IdentityServerClientsUpdate
     * @request PUT:/api/identity-server/clients/{id}
     * @secure
     */
    identityServerClientsUpdate: (
      id: string,
      data: VoloAbpIdentityServerClientDtosUpdateClientDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpIdentityServerClientDtosClientWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/clients/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Communication
     * @name AppCommunicationsList
     * @request GET:/api/app/communications
     * @secure
     */
    appCommunicationsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        CurrentTel?: string;
        CurrentAdd?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeCommunicationsCommunicationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/communications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Communication
     * @name AppCommunicationsCreate
     * @request POST:/api/app/communications
     * @secure
     */
    appCommunicationsCreate: (data: ResumeCommunicationsCommunicationCreateDto, params: RequestParams = {}) =>
      this.request<ResumeCommunicationsCommunicationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/communications`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Communication
     * @name AppCommunicationsDetail
     * @request GET:/api/app/communications/{id}
     * @secure
     */
    appCommunicationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeCommunicationsCommunicationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/communications/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Communication
     * @name AppCommunicationsUpdate
     * @request PUT:/api/app/communications/{id}
     * @secure
     */
    appCommunicationsUpdate: (
      id: string,
      data: ResumeCommunicationsCommunicationUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeCommunicationsCommunicationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/communications/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Communication
     * @name AppCommunicationsDelete
     * @request DELETE:/api/app/communications/{id}
     * @secure
     */
    appCommunicationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/communications/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsList
     * @request GET:/api/app/company-jobs
     * @secure
     */
    appCompanyJobsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        CompanyId?: string;
        JobName?: string;
        JobType?: string;
        JobOpening?: boolean;
        MailTplCode?: string;
        SMSTplCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeCompanyJobsCompanyJobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/company-jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsCreate
     * @request POST:/api/app/company-jobs
     * @secure
     */
    appCompanyJobsCreate: (data: ResumeCompanyJobsCompanyJobCreateDto, params: RequestParams = {}) =>
      this.request<ResumeCompanyJobsCompanyJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/company-jobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsDetail
     * @request GET:/api/app/company-jobs/{id}
     * @secure
     */
    appCompanyJobsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeCompanyJobsCompanyJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/company-jobs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsUpdate
     * @request PUT:/api/app/company-jobs/{id}
     * @secure
     */
    appCompanyJobsUpdate: (id: string, data: ResumeCompanyJobsCompanyJobUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeCompanyJobsCompanyJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/company-jobs/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsDelete
     * @request DELETE:/api/app/company-jobs/{id}
     * @secure
     */
    appCompanyJobsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/company-jobs/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CompanyJob
     * @name AppCompanyJobsGetListByCompanyIdList
     * @request GET:/api/app/company-jobs/GetListByCompanyId
     * @secure
     */
    appCompanyJobsGetListByCompanyIdList: (params: RequestParams = {}) =>
      this.request<ResumeCompanyJobsCompanyJobDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/company-jobs/GetListByCompanyId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserFindResultByPhoneCreate
     * @request POST:/api/app/custom-identity-user/find-result-by-phone
     * @secure
     */
    appCustomIdentityUserFindResultByPhoneCreate: (query?: { Phone?: string }, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUser, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/find-result-by-phone`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserDetail
     * @request GET:/api/app/custom-identity-user/{id}
     * @secure
     */
    appCustomIdentityUserDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserUpdate
     * @request PUT:/api/app/custom-identity-user/{id}
     * @secure
     */
    appCustomIdentityUserUpdate: (id: string, data: VoloAbpIdentityIdentityUserUpdateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserDelete
     * @request DELETE:/api/app/custom-identity-user/{id}
     * @secure
     */
    appCustomIdentityUserDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserList
     * @request GET:/api/app/custom-identity-user
     * @secure
     */
    appCustomIdentityUserList: (
      query?: {
        Filter?: string;
        RoleId?: string;
        OrganizationUnitId?: string;
        UserName?: string;
        PhoneNumber?: string;
        EmailAddress?: string;
        IsLockedOut?: boolean;
        NotActive?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-identity-user`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserCreate
     * @request POST:/api/app/custom-identity-user
     * @secure
     */
    appCustomIdentityUserCreate: (data: VoloAbpIdentityIdentityUserCreateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserRolesDetail
     * @request GET:/api/app/custom-identity-user/{id}/roles
     * @secure
     */
    appCustomIdentityUserRolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-identity-user/${id}/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserRolesUpdate
     * @request PUT:/api/app/custom-identity-user/{id}/roles
     * @secure
     */
    appCustomIdentityUserRolesUpdate: (
      id: string,
      data: VoloAbpIdentityIdentityUserUpdateRolesDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/roles`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserAssignableRolesList
     * @request GET:/api/app/custom-identity-user/assignable-roles
     * @secure
     */
    appCustomIdentityUserAssignableRolesList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-identity-user/assignable-roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserAvailableOrganizationUnitsList
     * @request GET:/api/app/custom-identity-user/available-organization-units
     * @secure
     */
    appCustomIdentityUserAvailableOrganizationUnitsList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-identity-user/available-organization-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserClaimTypesList
     * @request GET:/api/app/custom-identity-user/claim-types
     * @secure
     */
    appCustomIdentityUserClaimTypesList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/claim-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserClaimsDetail
     * @request GET:/api/app/custom-identity-user/{id}/claims
     * @secure
     */
    appCustomIdentityUserClaimsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserClaimDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/claims`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserClaimsUpdate
     * @request PUT:/api/app/custom-identity-user/{id}/claims
     * @secure
     */
    appCustomIdentityUserClaimsUpdate: (
      id: string,
      data: VoloAbpIdentityIdentityUserClaimDto[],
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/claims`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserOrganizationUnitsDetail
     * @request GET:/api/app/custom-identity-user/{id}/organization-units
     * @secure
     */
    appCustomIdentityUserOrganizationUnitsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/organization-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserLockCreate
     * @request POST:/api/app/custom-identity-user/{id}/lock
     * @secure
     */
    appCustomIdentityUserLockCreate: (id: string, query?: { lockoutEnd?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/lock`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserUnlockCreate
     * @request POST:/api/app/custom-identity-user/{id}/unlock
     * @secure
     */
    appCustomIdentityUserUnlockCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/unlock`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserPasswordUpdate
     * @request PUT:/api/app/custom-identity-user/{id}/password
     * @secure
     */
    appCustomIdentityUserPasswordUpdate: (
      id: string,
      data: VoloAbpIdentityIdentityUserUpdatePasswordInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/password`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserFindByUsernameCreate
     * @request POST:/api/app/custom-identity-user/find-by-username
     * @secure
     */
    appCustomIdentityUserFindByUsernameCreate: (query?: { username?: string }, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/find-by-username`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserFindByEmailCreate
     * @request POST:/api/app/custom-identity-user/find-by-email
     * @secure
     */
    appCustomIdentityUserFindByEmailCreate: (query?: { email?: string }, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/find-by-email`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserTwoFactorEnabledDetail
     * @request GET:/api/app/custom-identity-user/{id}/two-factor-enabled
     * @secure
     */
    appCustomIdentityUserTwoFactorEnabledDetail: (id: string, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/two-factor-enabled`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserSetTwoFactorEnabledCreate
     * @request POST:/api/app/custom-identity-user/{id}/set-two-factor-enabled
     * @secure
     */
    appCustomIdentityUserSetTwoFactorEnabledCreate: (
      id: string,
      query?: { enabled?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/${id}/set-two-factor-enabled`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserRoleLookupList
     * @request GET:/api/app/custom-identity-user/role-lookup
     * @secure
     */
    appCustomIdentityUserRoleLookupList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleLookupDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/role-lookup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomIdentityUser
     * @name AppCustomIdentityUserOrganizationUnitLookupList
     * @request GET:/api/app/custom-identity-user/organization-unit-lookup
     * @secure
     */
    appCustomIdentityUserOrganizationUnitLookupList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitLookupDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-identity-user/organization-unit-lookup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSetting
     * @name AppCustomSettingsList
     * @request GET:/api/app/custom-settings
     * @secure
     */
    appCustomSettingsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        CustomSettingName?: string;
        Rule?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeCustomSettingsCustomSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/custom-settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSetting
     * @name AppCustomSettingsCreate
     * @request POST:/api/app/custom-settings
     * @secure
     */
    appCustomSettingsCreate: (data: ResumeCustomSettingsCustomSettingCreateDto, params: RequestParams = {}) =>
      this.request<ResumeCustomSettingsCustomSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-settings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSetting
     * @name AppCustomSettingsDetail
     * @request GET:/api/app/custom-settings/{id}
     * @secure
     */
    appCustomSettingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeCustomSettingsCustomSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-settings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSetting
     * @name AppCustomSettingsUpdate
     * @request PUT:/api/app/custom-settings/{id}
     * @secure
     */
    appCustomSettingsUpdate: (
      id: string,
      data: ResumeCustomSettingsCustomSettingUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeCustomSettingsCustomSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-settings/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags CustomSetting
     * @name AppCustomSettingsDelete
     * @request DELETE:/api/app/custom-settings/{id}
     * @secure
     */
    appCustomSettingsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/custom-settings/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dependents
     * @name AppDependentssList
     * @request GET:/api/app/dependentss
     * @secure
     */
    appDependentssList: (
      query?: {
        FilterText?: string;
        ResumeCode?: string;
        DependentsNo?: string;
        DependentsType?: string;
        DependentsBirthday?: string;
        DependentsAdd?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeDependentssDependentsDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/dependentss`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dependents
     * @name AppDependentssCreate
     * @request POST:/api/app/dependentss
     * @secure
     */
    appDependentssCreate: (data: ResumeDependentssDependentsCreateDto, params: RequestParams = {}) =>
      this.request<ResumeDependentssDependentsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/dependentss`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dependents
     * @name AppDependentssDetail
     * @request GET:/api/app/dependentss/{id}
     * @secure
     */
    appDependentssDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeDependentssDependentsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/dependentss/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dependents
     * @name AppDependentssUpdate
     * @request PUT:/api/app/dependentss/{id}
     * @secure
     */
    appDependentssUpdate: (id: string, data: ResumeDependentssDependentsUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeDependentssDependentsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/dependentss/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dependents
     * @name AppDependentssDelete
     * @request DELETE:/api/app/dependentss/{id}
     * @secure
     */
    appDependentssDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/dependentss/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorDetail
     * @request GET:/api/file-management/directory-descriptor/{id}
     * @secure
     */
    fileManagementDirectoryDescriptorDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloFileManagementDirectoriesDirectoryDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/directory-descriptor/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorCreate
     * @request POST:/api/file-management/directory-descriptor/{id}
     * @secure
     */
    fileManagementDirectoryDescriptorCreate: (
      id: string,
      data: VoloFileManagementDirectoriesRenameDirectoryInput,
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementDirectoriesDirectoryDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/directory-descriptor/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorDelete
     * @request DELETE:/api/file-management/directory-descriptor/{id}
     * @secure
     */
    fileManagementDirectoryDescriptorDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/directory-descriptor/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorSubDirectoriesList
     * @request GET:/api/file-management/directory-descriptor/sub-directories
     * @secure
     */
    fileManagementDirectoryDescriptorSubDirectoriesList: (query?: { parentId?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloFileManagementDirectoriesDirectoryDescriptorInfoDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/file-management/directory-descriptor/sub-directories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorCreate2
     * @request POST:/api/file-management/directory-descriptor
     * @originalName fileManagementDirectoryDescriptorCreate
     * @duplicate
     * @secure
     */
    fileManagementDirectoryDescriptorCreate2: (
      data: VoloFileManagementDirectoriesCreateDirectoryInput,
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementDirectoriesDirectoryDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/directory-descriptor`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorList
     * @request GET:/api/file-management/directory-descriptor
     * @secure
     */
    fileManagementDirectoryDescriptorList: (
      query?: { Filter?: string; Id?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloFileManagementDirectoriesDirectoryContentDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/file-management/directory-descriptor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags DirectoryDescriptors
     * @name FileManagementDirectoryDescriptorMoveCreate
     * @request POST:/api/file-management/directory-descriptor/move
     * @secure
     */
    fileManagementDirectoryDescriptorMoveCreate: (
      data: VoloFileManagementDirectoriesMoveDirectoryInput,
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementDirectoriesDirectoryDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/directory-descriptor/move`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsDetail
     * @request GET:/api/saas/editions/{id}
     * @secure
     */
    saasEditionsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosEditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsUpdate
     * @request PUT:/api/saas/editions/{id}
     * @secure
     */
    saasEditionsUpdate: (id: string, data: VoloSaasHostDtosEditionUpdateDto, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosEditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsDelete
     * @request DELETE:/api/saas/editions/{id}
     * @secure
     */
    saasEditionsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsList
     * @request GET:/api/saas/editions
     * @secure
     */
    saasEditionsList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosEditionDtoVoloSaasHostApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/saas/editions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsCreate
     * @request POST:/api/saas/editions
     * @secure
     */
    saasEditionsCreate: (data: VoloSaasHostDtosEditionCreateDto, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosEditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsStatisticsUsageStatisticList
     * @request GET:/api/saas/editions/statistics/usage-statistic
     * @secure
     */
    saasEditionsStatisticsUsageStatisticList: (params: RequestParams = {}) =>
      this.request<VoloSaasHostGetEditionUsageStatisticsResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions/statistics/usage-statistic`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Edition
     * @name SaasEditionsPlanLookupList
     * @request GET:/api/saas/editions/plan-lookup
     * @secure
     */
    saasEditionsPlanLookupList: (params: RequestParams = {}) =>
      this.request<VoloPaymentPlansPlanDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/editions/plan-lookup`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name AppEducationsList
     * @request GET:/api/app/educations
     * @secure
     */
    appEducationsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        EducationCode?: string;
        School?: string;
        Major?: string;
        MajorDetail?: string;
        DateAMin?: string;
        DateAMax?: string;
        DateDMin?: string;
        DateDMax?: string;
        DaySchoolCode?: string;
        GraduationCode?: string;
        Note?: string;
        SchoolLocation?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeEducationsEducationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/educations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name AppEducationsCreate
     * @request POST:/api/app/educations
     * @secure
     */
    appEducationsCreate: (data: ResumeEducationsEducationCreateDto, params: RequestParams = {}) =>
      this.request<ResumeEducationsEducationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/educations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name AppEducationsDetail
     * @request GET:/api/app/educations/{id}
     * @secure
     */
    appEducationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeEducationsEducationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/educations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name AppEducationsUpdate
     * @request PUT:/api/app/educations/{id}
     * @secure
     */
    appEducationsUpdate: (id: string, data: ResumeEducationsEducationUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeEducationsEducationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/educations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Education
     * @name AppEducationsDelete
     * @request DELETE:/api/app/educations/{id}
     * @secure
     */
    appEducationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/educations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name AppEmailsList
     * @request GET:/api/app/emails
     * @secure
     */
    appEmailsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        EmailAccount?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeEmailsEmailDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/emails`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name AppEmailsCreate
     * @request POST:/api/app/emails
     * @secure
     */
    appEmailsCreate: (data: ResumeEmailsEmailCreateDto, params: RequestParams = {}) =>
      this.request<ResumeEmailsEmailDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/emails`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name AppEmailsDetail
     * @request GET:/api/app/emails/{id}
     * @secure
     */
    appEmailsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeEmailsEmailDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/emails/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name AppEmailsUpdate
     * @request PUT:/api/app/emails/{id}
     * @secure
     */
    appEmailsUpdate: (id: string, data: ResumeEmailsEmailUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeEmailsEmailDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/emails/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name AppEmailsDelete
     * @request DELETE:/api/app/emails/{id}
     * @secure
     */
    appEmailsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/emails/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailSettings
     * @name SettingManagementEmailingList
     * @request GET:/api/setting-management/emailing
     * @secure
     */
    settingManagementEmailingList: (params: RequestParams = {}) =>
      this.request<VoloAbpSettingManagementEmailSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/setting-management/emailing`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags EmailSettings
     * @name SettingManagementEmailingCreate
     * @request POST:/api/setting-management/emailing
     * @secure
     */
    settingManagementEmailingCreate: (
      data: VoloAbpSettingManagementUpdateEmailSettingsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/setting-management/emailing`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesList
     * @request GET:/api/app/experiences
     * @secure
     */
    appExperiencesList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        Name?: string;
        JobTitle?: string;
        DateAMin?: string;
        DateAMax?: string;
        DateDMin?: string;
        DateDMax?: string;
        JobDescription?: string;
        Note?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        TotalSeniority?: string;
        Seniority?: string;
        JobCategory?: string;
        StillEmployed?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeExperiencesExperienceDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/experiences`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesCreate
     * @request POST:/api/app/experiences
     * @secure
     */
    appExperiencesCreate: (data: ResumeExperiencesExperienceCreateDto, params: RequestParams = {}) =>
      this.request<ResumeExperiencesExperienceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/experiences`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesDetail
     * @request GET:/api/app/experiences/{id}
     * @secure
     */
    appExperiencesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeExperiencesExperienceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/experiences/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesUpdate
     * @request PUT:/api/app/experiences/{id}
     * @secure
     */
    appExperiencesUpdate: (id: string, data: ResumeExperiencesExperienceUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeExperiencesExperienceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/experiences/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesDelete
     * @request DELETE:/api/app/experiences/{id}
     * @secure
     */
    appExperiencesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/experiences/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Experience
     * @name AppExperiencesGetListByResumeCodeList
     * @request GET:/api/app/experiences/GetListByResumeCode
     * @secure
     */
    appExperiencesGetListByResumeCodeList: (query?: { ResumeCode?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1ResumeExperiencesExperienceDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/experiences/GetListByResumeCode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expertise
     * @name AppExpertisesList
     * @request GET:/api/app/expertises
     * @secure
     */
    appExpertisesList: (
      query?: {
        FilterText?: string;
        ResumeCode?: string;
        ExpertiseName?: string;
        ExpertiseDetail?: string;
        ExpertiseFeature?: string;
        WorkSpell?: string;
        AnotherTool?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeExpertisesExpertiseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/expertises`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expertise
     * @name AppExpertisesCreate
     * @request POST:/api/app/expertises
     * @secure
     */
    appExpertisesCreate: (data: ResumeExpertisesExpertiseCreateDto, params: RequestParams = {}) =>
      this.request<ResumeExpertisesExpertiseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/expertises`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expertise
     * @name AppExpertisesDetail
     * @request GET:/api/app/expertises/{id}
     * @secure
     */
    appExpertisesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeExpertisesExpertiseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/expertises/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expertise
     * @name AppExpertisesUpdate
     * @request PUT:/api/app/expertises/{id}
     * @secure
     */
    appExpertisesUpdate: (id: string, data: ResumeExpertisesExpertiseUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeExpertisesExpertiseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/expertises/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Expertise
     * @name AppExpertisesDelete
     * @request DELETE:/api/app/expertises/{id}
     * @secure
     */
    appExpertisesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/expertises/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Features
     * @name FeatureManagementFeaturesList
     * @request GET:/api/feature-management/features
     * @secure
     */
    featureManagementFeaturesList: (
      query?: { providerName?: string; providerKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpFeatureManagementGetFeatureListResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/feature-management/features`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Features
     * @name FeatureManagementFeaturesUpdate
     * @request PUT:/api/feature-management/features
     * @secure
     */
    featureManagementFeaturesUpdate: (
      data: VoloAbpFeatureManagementUpdateFeaturesDto,
      query?: { providerName?: string; providerKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/feature-management/features`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name AppFileSaveBlobCreate
     * @request POST:/api/app/file/save-blob
     * @secure
     */
    appFileSaveBlobCreate: (data: ResumeFileSaveBlobInputDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/file/save-blob`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags File
     * @name AppFileBlobList
     * @request GET:/api/app/file/blob
     * @secure
     */
    appFileBlobList: (query: { Name: string }, params: RequestParams = {}) =>
      this.request<ResumeFileBlobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/file/blob`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorDetail
     * @request GET:/api/file-management/file-descriptor/{id}
     * @secure
     */
    fileManagementFileDescriptorDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloFileManagementFilesFileDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorCreate
     * @request POST:/api/file-management/file-descriptor/{id}
     * @secure
     */
    fileManagementFileDescriptorCreate: (
      id: string,
      data: VoloFileManagementFilesRenameFileInput,
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementFilesFileDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorDelete
     * @request DELETE:/api/file-management/file-descriptor/{id}
     * @secure
     */
    fileManagementFileDescriptorDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorList
     * @request GET:/api/file-management/file-descriptor
     * @secure
     */
    fileManagementFileDescriptorList: (query?: { directoryId?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloFileManagementFilesFileDescriptorDtoVoloFileManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/file-management/file-descriptor`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorUploadCreate
     * @request POST:/api/file-management/file-descriptor/upload
     * @secure
     */
    fileManagementFileDescriptorUploadCreate: (
      query: { directoryId?: string; Name: string },
      data: { File?: File },
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementFilesFileDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/upload`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorMoveCreate
     * @request POST:/api/file-management/file-descriptor/move
     * @secure
     */
    fileManagementFileDescriptorMoveCreate: (data: VoloFileManagementFilesMoveFileInput, params: RequestParams = {}) =>
      this.request<VoloFileManagementFilesFileDescriptorDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/move`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorPreUploadInfoCreate
     * @request POST:/api/file-management/file-descriptor/pre-upload-info
     * @secure
     */
    fileManagementFileDescriptorPreUploadInfoCreate: (
      data: VoloFileManagementFilesFileUploadPreInfoRequest[],
      params: RequestParams = {},
    ) =>
      this.request<VoloFileManagementFilesFileUploadPreInfoDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/pre-upload-info`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorContentList
     * @request GET:/api/file-management/file-descriptor/content
     * @secure
     */
    fileManagementFileDescriptorContentList: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<string, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/content`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorDownloadTokenDetail
     * @request GET:/api/file-management/file-descriptor/download/{id}/token
     * @secure
     */
    fileManagementFileDescriptorDownloadTokenDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloFileManagementFilesDownloadTokenResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/download/${id}/token`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags FileDescriptors
     * @name FileManagementFileDescriptorDownloadDetail
     * @request GET:/api/file-management/file-descriptor/download/{id}
     * @secure
     */
    fileManagementFileDescriptorDownloadDetail: (id: string, query?: { token?: string }, params: RequestParams = {}) =>
      this.request<File, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/file-management/file-descriptor/download/${id}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Gateway
     * @name PaymentGatewaysList
     * @request GET:/api/payment/gateways
     * @secure
     */
    paymentGatewaysList: (params: RequestParams = {}) =>
      this.request<VoloPaymentGatewaysGatewayDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/payment/gateways`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Gateway
     * @name PaymentGatewaysSubscriptionSupportedList
     * @request GET:/api/payment/gateways/subscription-supported
     * @secure
     */
    paymentGatewaysSubscriptionSupportedList: (params: RequestParams = {}) =>
      this.request<VoloPaymentGatewaysGatewayDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/payment/gateways/subscription-supported`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GroupSetting
     * @name AppGroupSettingsList
     * @request GET:/api/app/group-settings
     * @secure
     */
    appGroupSettingsList: (
      query?: {
        FilterText?: string;
        AccountId?: string;
        GroupName?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeGroupSettingsGroupSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/group-settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GroupSetting
     * @name AppGroupSettingsCreate
     * @request POST:/api/app/group-settings
     * @secure
     */
    appGroupSettingsCreate: (data: ResumeGroupSettingsGroupSettingCreateDto, params: RequestParams = {}) =>
      this.request<ResumeGroupSettingsGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/group-settings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GroupSetting
     * @name AppGroupSettingsDetail
     * @request GET:/api/app/group-settings/{id}
     * @secure
     */
    appGroupSettingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeGroupSettingsGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/group-settings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GroupSetting
     * @name AppGroupSettingsUpdate
     * @request PUT:/api/app/group-settings/{id}
     * @secure
     */
    appGroupSettingsUpdate: (id: string, data: ResumeGroupSettingsGroupSettingUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeGroupSettingsGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/group-settings/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GroupSetting
     * @name AppGroupSettingsDelete
     * @request DELETE:/api/app/group-settings/{id}
     * @secure
     */
    appGroupSettingsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/group-settings/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesList
     * @request GET:/api/identity-server/identity-resources
     * @secure
     */
    identityServerIdentityResourcesList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDtoVoloAbpIdentityServerApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/identity-resources`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesCreate
     * @request POST:/api/identity-server/identity-resources
     * @secure
     */
    identityServerIdentityResourcesCreate: (
      data: VoloAbpIdentityServerIdentityResourceDtosCreateIdentityResourceDto,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/identity-resources`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesDelete
     * @request DELETE:/api/identity-server/identity-resources
     * @secure
     */
    identityServerIdentityResourcesDelete: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/identity-resources`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesAllList
     * @request GET:/api/identity-server/identity-resources/all
     * @secure
     */
    identityServerIdentityResourcesAllList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto[],
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/identity-resources/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesDetail
     * @request GET:/api/identity-server/identity-resources/{id}
     * @secure
     */
    identityServerIdentityResourcesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/identity-resources/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesUpdate
     * @request PUT:/api/identity-server/identity-resources/{id}
     * @secure
     */
    identityServerIdentityResourcesUpdate: (
      id: string,
      data: VoloAbpIdentityServerIdentityResourceDtosUpdateIdentityResourceDto,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpIdentityServerIdentityResourceDtosIdentityResourceWithDetailsDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity-server/identity-resources/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags IdentityResources
     * @name IdentityServerIdentityResourcesCreateStandardResourcesCreate
     * @request POST:/api/identity-server/identity-resources/create-standard-resources
     * @secure
     */
    identityServerIdentityResourcesCreateStandardResourcesCreate: (params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity-server/identity-resources/create-standard-resources`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name AppJobsList
     * @request GET:/api/app/jobs
     * @secure
     */
    appJobsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        AccountCode?: string;
        CompanyJobsCode?: string;
        ReplyType?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeJobsJobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/jobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name AppJobsCreate
     * @request POST:/api/app/jobs
     * @secure
     */
    appJobsCreate: (data: ResumeJobsJobCreateDto, params: RequestParams = {}) =>
      this.request<ResumeJobsJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/jobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name AppJobsDetail
     * @request GET:/api/app/jobs/{id}
     * @secure
     */
    appJobsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeJobsJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/jobs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name AppJobsUpdate
     * @request PUT:/api/app/jobs/{id}
     * @secure
     */
    appJobsUpdate: (id: string, data: ResumeJobsJobUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeJobsJobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/jobs/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Job
     * @name AppJobsDelete
     * @request DELETE:/api/app/jobs/{id}
     * @secure
     */
    appJobsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/jobs/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsList
     * @request GET:/api/app/job-conditions
     * @secure
     */
    appJobConditionsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        WorkingTimeType?: string;
        WorkingTime?: string;
        OtherWorkingTime?: string;
        Shift?: string;
        EnabledWorkTime?: string;
        Treatment?: string;
        WorkingPlace?: string;
        RemoteWork?: boolean;
        JobTitle?: string;
        JobType?: string;
        Duty?: string;
        Job?: string;
        HolidaySystem?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeJobConditionsJobConditionDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/job-conditions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsCreate
     * @request POST:/api/app/job-conditions
     * @secure
     */
    appJobConditionsCreate: (data: ResumeJobConditionsJobConditionCreateDto, params: RequestParams = {}) =>
      this.request<ResumeJobConditionsJobConditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-conditions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsDetail
     * @request GET:/api/app/job-conditions/{id}
     * @secure
     */
    appJobConditionsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeJobConditionsJobConditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-conditions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsUpdate
     * @request PUT:/api/app/job-conditions/{id}
     * @secure
     */
    appJobConditionsUpdate: (id: string, data: ResumeJobConditionsJobConditionUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeJobConditionsJobConditionDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-conditions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsDelete
     * @request DELETE:/api/app/job-conditions/{id}
     * @secure
     */
    appJobConditionsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-conditions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobCondition
     * @name AppJobConditionsDeleteListDelete
     * @request DELETE:/api/app/job-conditions/DeleteList
     * @secure
     */
    appJobConditionsDeleteListDelete: (query?: { id?: string[] }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-conditions/DeleteList`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobGroupSetting
     * @name AppJobGroupSettingsList
     * @request GET:/api/app/job-group-settings
     * @secure
     */
    appJobGroupSettingsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        GroupName?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeJobGroupSettingsJobGroupSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/job-group-settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobGroupSetting
     * @name AppJobGroupSettingsCreate
     * @request POST:/api/app/job-group-settings
     * @secure
     */
    appJobGroupSettingsCreate: (data: ResumeJobGroupSettingsJobGroupSettingCreateDto, params: RequestParams = {}) =>
      this.request<ResumeJobGroupSettingsJobGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-group-settings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobGroupSetting
     * @name AppJobGroupSettingsDetail
     * @request GET:/api/app/job-group-settings/{id}
     * @secure
     */
    appJobGroupSettingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeJobGroupSettingsJobGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-group-settings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobGroupSetting
     * @name AppJobGroupSettingsUpdate
     * @request PUT:/api/app/job-group-settings/{id}
     * @secure
     */
    appJobGroupSettingsUpdate: (
      id: string,
      data: ResumeJobGroupSettingsJobGroupSettingUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeJobGroupSettingsJobGroupSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-group-settings/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags JobGroupSetting
     * @name AppJobGroupSettingsDelete
     * @request DELETE:/api/app/job-group-settings/{id}
     * @secure
     */
    appJobGroupSettingsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/job-group-settings/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageAbility
     * @name AppLanguageAbilitiesList
     * @request GET:/api/app/language-abilities
     * @secure
     */
    appLanguageAbilitiesList: (
      query?: {
        FilterText?: string;
        ResumeCode?: string;
        Language?: string;
        Listen?: string;
        Speak?: string;
        Read?: string;
        Write?: string;
        Dialect?: string;
        DialectLevel?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeLanguageAbilitiesLanguageAbilityDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/language-abilities`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageAbility
     * @name AppLanguageAbilitiesCreate
     * @request POST:/api/app/language-abilities
     * @secure
     */
    appLanguageAbilitiesCreate: (data: ResumeLanguageAbilitiesLanguageAbilityCreateDto, params: RequestParams = {}) =>
      this.request<ResumeLanguageAbilitiesLanguageAbilityDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/language-abilities`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageAbility
     * @name AppLanguageAbilitiesDetail
     * @request GET:/api/app/language-abilities/{id}
     * @secure
     */
    appLanguageAbilitiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeLanguageAbilitiesLanguageAbilityDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/language-abilities/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageAbility
     * @name AppLanguageAbilitiesUpdate
     * @request PUT:/api/app/language-abilities/{id}
     * @secure
     */
    appLanguageAbilitiesUpdate: (
      id: string,
      data: ResumeLanguageAbilitiesLanguageAbilityUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeLanguageAbilitiesLanguageAbilityDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/language-abilities/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageAbility
     * @name AppLanguageAbilitiesDelete
     * @request DELETE:/api/app/language-abilities/{id}
     * @secure
     */
    appLanguageAbilitiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/language-abilities/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesAllList
     * @request GET:/api/language-management/languages/all
     * @secure
     */
    languageManagementLanguagesAllList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/language-management/languages/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesList
     * @request GET:/api/language-management/languages
     * @secure
     */
    languageManagementLanguagesList: (
      query?: {
        Filter?: string;
        ResourceName?: string;
        BaseCultureName?: string;
        TargetCultureName?: string;
        GetOnlyEmptyValues?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/language-management/languages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesCreate
     * @request POST:/api/language-management/languages
     * @secure
     */
    languageManagementLanguagesCreate: (
      data: VoloAbpLanguageManagementDtoCreateLanguageDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpLanguageManagementDtoLanguageDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesDetail
     * @request GET:/api/language-management/languages/{id}
     * @secure
     */
    languageManagementLanguagesDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpLanguageManagementDtoLanguageDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesUpdate
     * @request PUT:/api/language-management/languages/{id}
     * @secure
     */
    languageManagementLanguagesUpdate: (
      id: string,
      data: VoloAbpLanguageManagementDtoUpdateLanguageDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpLanguageManagementDtoLanguageDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesDelete
     * @request DELETE:/api/language-management/languages/{id}
     * @secure
     */
    languageManagementLanguagesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesSetAsDefaultUpdate
     * @request PUT:/api/language-management/languages/{id}/set-as-default
     * @secure
     */
    languageManagementLanguagesSetAsDefaultUpdate: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/${id}/set-as-default`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesResourcesList
     * @request GET:/api/language-management/languages/resources
     * @secure
     */
    languageManagementLanguagesResourcesList: (params: RequestParams = {}) =>
      this.request<VoloAbpLanguageManagementDtoLanguageResourceDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/resources`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesCultureListList
     * @request GET:/api/language-management/languages/culture-list
     * @secure
     */
    languageManagementLanguagesCultureListList: (params: RequestParams = {}) =>
      this.request<VoloAbpLanguageManagementDtoCultureInfoDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/culture-list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Languages
     * @name LanguageManagementLanguagesFlagListList
     * @request GET:/api/language-management/languages/flag-list
     * @secure
     */
    languageManagementLanguagesFlagListList: (params: RequestParams = {}) =>
      this.request<string[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/languages/flag-list`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageTexts
     * @name LanguageManagementLanguageTextsList
     * @request GET:/api/language-management/language-texts
     * @secure
     */
    languageManagementLanguageTextsList: (
      query?: {
        Filter?: string;
        ResourceName?: string;
        BaseCultureName?: string;
        TargetCultureName?: string;
        GetOnlyEmptyValues?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpLanguageManagementDtoLanguageTextDtoVoloAbpLanguageManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/language-management/language-texts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageTexts
     * @name LanguageManagementLanguageTextsDetail
     * @request GET:/api/language-management/language-texts/{resourceName}/{cultureName}/{name}
     * @secure
     */
    languageManagementLanguageTextsDetail: (
      resourceName: string,
      cultureName: string,
      name: string,
      query?: { baseCultureName?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpLanguageManagementDtoLanguageTextDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageTexts
     * @name LanguageManagementLanguageTextsUpdate
     * @request PUT:/api/language-management/language-texts/{resourceName}/{cultureName}/{name}
     * @secure
     */
    languageManagementLanguageTextsUpdate: (
      resourceName: string,
      cultureName: string,
      name: string,
      query?: { value?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}`,
        method: "PUT",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LanguageTexts
     * @name LanguageManagementLanguageTextsRestoreUpdate
     * @request PUT:/api/language-management/language-texts/{resourceName}/{cultureName}/{name}/restore
     * @secure
     */
    languageManagementLanguageTextsRestoreUpdate: (
      resourceName: string,
      cultureName: string,
      name: string,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/language-management/language-texts/${resourceName}/${cultureName}/${name}/restore`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags LeptonThemeSettings
     * @name LeptonThemeManagementSettingsList
     * @request GET:/api/lepton-theme-management/settings
     * @secure
     */
    leptonThemeManagementSettingsList: (params: RequestParams = {}) =>
      this.request<VoloAbpLeptonThemeManagementLeptonThemeSettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/lepton-theme-management/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LeptonThemeSettings
     * @name LeptonThemeManagementSettingsUpdate
     * @request PUT:/api/lepton-theme-management/settings
     * @secure
     */
    leptonThemeManagementSettingsUpdate: (
      data: VoloAbpLeptonThemeManagementUpdateLeptonThemeSettingsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/lepton-theme-management/settings`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesList
     * @request GET:/api/app/licenses
     * @secure
     */
    appLicensesList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        ReleaseAgent?: string;
        Name?: string;
        DateAMin?: string;
        DateAMax?: string;
        DateDMin?: string;
        DateDMax?: string;
        NationalExam?: boolean;
        LicenseNo?: string;
        Note?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeLicensesLicenseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/licenses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesCreate
     * @request POST:/api/app/licenses
     * @secure
     */
    appLicensesCreate: (data: ResumeLicensesLicenseCreateDto, params: RequestParams = {}) =>
      this.request<ResumeLicensesLicenseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/licenses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesDetail
     * @request GET:/api/app/licenses/{id}
     * @secure
     */
    appLicensesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeLicensesLicenseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/licenses/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesUpdate
     * @request PUT:/api/app/licenses/{id}
     * @secure
     */
    appLicensesUpdate: (id: string, data: ResumeLicensesLicenseUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeLicensesLicenseDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/licenses/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesDelete
     * @request DELETE:/api/app/licenses/{id}
     * @secure
     */
    appLicensesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/licenses/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags License
     * @name AppLicensesGetListByResumeCodeList
     * @request GET:/api/app/licenses/GetListByResumeCode
     * @secure
     */
    appLicensesGetListByResumeCodeList: (query?: { ResumeCode?: string }, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1ResumeLicensesLicenseDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/licenses/GetListByResumeCode`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name AccountLoginCreate
     * @request POST:/api/account/login
     * @secure
     */
    accountLoginCreate: (
      data: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name AccountLinkLoginCreate
     * @request POST:/api/account/linkLogin
     * @secure
     */
    accountLinkLoginCreate: (
      data: VoloAbpAccountPublicWebAreasAccountControllersModelsLinkUserLoginInfo,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/linkLogin`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name AccountLogoutList
     * @request GET:/api/account/logout
     * @secure
     */
    accountLogoutList: (params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/logout`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Login
     * @name AccountCheckPasswordCreate
     * @request POST:/api/account/checkPassword
     * @secure
     */
    accountCheckPasswordCreate: (
      data: VoloAbpAccountPublicWebAreasAccountControllersModelsUserLoginInfo,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpAccountPublicWebAreasAccountControllersModelsAbpLoginResult,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/checkPassword`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesList
     * @request GET:/api/app/mail-quenes
     * @secure
     */
    appMailQuenesList: (
      query?: {
        FilterText?: string;
        SystemCode?: string;
        Code?: string;
        From_Addr?: string;
        From_Name?: string;
        To_Addr?: string;
        To_Name?: string;
        Subject?: string;
        Body?: string;
        Success?: boolean;
        Send_DateMin?: string;
        Send_DateMax?: string;
        IsOpened?: boolean;
        CompanyId?: string;
        ResumeCode?: string;
        Stage?: string;
        JobName?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeMailQuenesMailQueneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mail-quenes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesCreate
     * @request POST:/api/app/mail-quenes
     * @secure
     */
    appMailQuenesCreate: (data: ResumeMailQuenesMailQueneCreateDto, params: RequestParams = {}) =>
      this.request<ResumeMailQuenesMailQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesDetail
     * @request GET:/api/app/mail-quenes/{id}
     * @secure
     */
    appMailQuenesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeMailQuenesMailQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesUpdate
     * @request PUT:/api/app/mail-quenes/{id}
     * @secure
     */
    appMailQuenesUpdate: (id: string, data: ResumeMailQuenesMailQueneUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeMailQuenesMailQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesDelete
     * @request DELETE:/api/app/mail-quenes/{id}
     * @secure
     */
    appMailQuenesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesReSendCreate
     * @request POST:/api/app/mail-quenes/ReSend
     * @secure
     */
    appMailQuenesReSendCreate: (data: string[], params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/ReSend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesGetListByCompanyIdList
     * @request GET:/api/app/mail-quenes/GetListByCompanyId
     * @secure
     */
    appMailQuenesGetListByCompanyIdList: (params: RequestParams = {}) =>
      this.request<ResumeMailQuenesMailQueneDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/GetListByCompanyId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailQuene
     * @name AppMailQuenesUpdateOpenedStatusUpdate
     * @request PUT:/api/app/mail-quenes/UpdateOpenedStatus
     * @secure
     */
    appMailQuenesUpdateOpenedStatusUpdate: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<ResumeMailQuenesMailQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-quenes/UpdateOpenedStatus`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailTpl
     * @name AppMailTplsList
     * @request GET:/api/app/mail-tpls
     * @secure
     */
    appMailTplsList: (
      query?: {
        FilterText?: string;
        SystemCode?: string;
        Key1?: string;
        Key2?: string;
        Key3?: string;
        Code?: string;
        Name?: string;
        Statement?: string;
        Subject?: string;
        Body?: string;
        Note?: string;
        SortMin?: number;
        SortMax?: number;
        Status?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeMailTplsMailTplDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/mail-tpls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailTpl
     * @name AppMailTplsCreate
     * @request POST:/api/app/mail-tpls
     * @secure
     */
    appMailTplsCreate: (data: ResumeMailTplsMailTplCreateDto, params: RequestParams = {}) =>
      this.request<ResumeMailTplsMailTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-tpls`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailTpl
     * @name AppMailTplsDetail
     * @request GET:/api/app/mail-tpls/{id}
     * @secure
     */
    appMailTplsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeMailTplsMailTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-tpls/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailTpl
     * @name AppMailTplsUpdate
     * @request PUT:/api/app/mail-tpls/{id}
     * @secure
     */
    appMailTplsUpdate: (id: string, data: ResumeMailTplsMailTplUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeMailTplsMailTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-tpls/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags MailTpl
     * @name AppMailTplsDelete
     * @request DELETE:/api/app/mail-tpls/{id}
     * @secure
     */
    appMailTplsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/mail-tpls/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Memo
     * @name AppMemosList
     * @request GET:/api/app/memos
     * @secure
     */
    appMemosList: (
      query?: {
        FilterText?: string;
        Code?: string;
        MemoContent?: string;
        MemoDateMin?: string;
        MemoDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeMemosMemoDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/memos`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Memo
     * @name AppMemosCreate
     * @request POST:/api/app/memos
     * @secure
     */
    appMemosCreate: (data: ResumeMemosMemoCreateDto, params: RequestParams = {}) =>
      this.request<ResumeMemosMemoDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/memos`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Memo
     * @name AppMemosDetail
     * @request GET:/api/app/memos/{id}
     * @secure
     */
    appMemosDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeMemosMemoDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/memos/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Memo
     * @name AppMemosUpdate
     * @request PUT:/api/app/memos/{id}
     * @secure
     */
    appMemosUpdate: (id: string, data: ResumeMemosMemoUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeMemosMemoDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/memos/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Memo
     * @name AppMemosDelete
     * @request DELETE:/api/app/memos/{id}
     * @secure
     */
    appMemosDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/memos/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsRolesUpdate
     * @request PUT:/api/identity/organization-units/{id}/roles
     * @secure
     */
    identityOrganizationUnitsRolesUpdate: (
      id: string,
      data: VoloAbpIdentityOrganizationUnitRoleInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}/roles`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsRolesDetail
     * @request GET:/api/identity/organization-units/{id}/roles
     * @secure
     */
    identityOrganizationUnitsRolesDetail: (
      id: string,
      query?: { SkipCount?: number; MaxResultCount?: number; Sorting?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units/${id}/roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsMembersUpdate
     * @request PUT:/api/identity/organization-units/{id}/members
     * @secure
     */
    identityOrganizationUnitsMembersUpdate: (
      id: string,
      data: VoloAbpIdentityOrganizationUnitUserInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}/members`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsMembersDetail
     * @request GET:/api/identity/organization-units/{id}/members
     * @secure
     */
    identityOrganizationUnitsMembersDetail: (
      id: string,
      query?: {
        Filter?: string;
        RoleId?: string;
        OrganizationUnitId?: string;
        UserName?: string;
        PhoneNumber?: string;
        EmailAddress?: string;
        IsLockedOut?: boolean;
        NotActive?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units/${id}/members`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsCreate
     * @request POST:/api/identity/organization-units
     * @secure
     */
    identityOrganizationUnitsCreate: (data: VoloAbpIdentityOrganizationUnitCreateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsDelete
     * @request DELETE:/api/identity/organization-units
     * @secure
     */
    identityOrganizationUnitsDelete: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsList
     * @request GET:/api/identity/organization-units
     * @secure
     */
    identityOrganizationUnitsList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsDetail
     * @request GET:/api/identity/organization-units/{id}
     * @secure
     */
    identityOrganizationUnitsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsUpdate
     * @request PUT:/api/identity/organization-units/{id}
     * @secure
     */
    identityOrganizationUnitsUpdate: (
      id: string,
      data: VoloAbpIdentityOrganizationUnitUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpIdentityOrganizationUnitWithDetailsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsAllList
     * @request GET:/api/identity/organization-units/all
     * @secure
     */
    identityOrganizationUnitsAllList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsMoveUpdate
     * @request PUT:/api/identity/organization-units/{id}/move
     * @secure
     */
    identityOrganizationUnitsMoveUpdate: (
      id: string,
      data: VoloAbpIdentityOrganizationUnitMoveInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}/move`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsAvailableUsersList
     * @request GET:/api/identity/organization-units/available-users
     * @secure
     */
    identityOrganizationUnitsAvailableUsersList: (
      query?: { Filter?: string; Id?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units/available-users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsAvailableRolesList
     * @request GET:/api/identity/organization-units/available-roles
     * @secure
     */
    identityOrganizationUnitsAvailableRolesList: (
      query?: { Filter?: string; Id?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/organization-units/available-roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsMembersDelete
     * @request DELETE:/api/identity/organization-units/{id}/members/{memberId}
     * @secure
     */
    identityOrganizationUnitsMembersDelete: (id: string, memberId: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}/members/${memberId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OrganizationUnit
     * @name IdentityOrganizationUnitsRolesDelete
     * @request DELETE:/api/identity/organization-units/{id}/roles/{roleId}
     * @secure
     */
    identityOrganizationUnitsRolesDelete: (id: string, roleId: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/organization-units/${id}/roles/${roleId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permissions
     * @name PermissionManagementPermissionsList
     * @request GET:/api/permission-management/permissions
     * @secure
     */
    permissionManagementPermissionsList: (
      query?: { providerName?: string; providerKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<VoloAbpPermissionManagementGetPermissionListResultDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/permission-management/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permissions
     * @name PermissionManagementPermissionsUpdate
     * @request PUT:/api/permission-management/permissions
     * @secure
     */
    permissionManagementPermissionsUpdate: (
      data: VoloAbpPermissionManagementUpdatePermissionsDto,
      query?: { providerName?: string; providerKey?: string },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/permission-management/permissions`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name PaymentPlansDetail
     * @request GET:/api/payment/plans/{planId}/{gateway}
     * @secure
     */
    paymentPlansDetail: (planId: string, gateway: string, params: RequestParams = {}) =>
      this.request<VoloPaymentPlansGatewayPlanDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/payment/plans/${planId}/${gateway}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Plan
     * @name PaymentPlansList
     * @request GET:/api/payment/plans
     * @secure
     */
    paymentPlansList: (params: RequestParams = {}) =>
      this.request<VoloPaymentPlansPlanDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/payment/plans`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name AccountMyProfileList
     * @request GET:/api/account/my-profile
     * @secure
     */
    accountMyProfileList: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountProfileDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/my-profile`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name AccountMyProfileUpdate
     * @request PUT:/api/account/my-profile
     * @secure
     */
    accountMyProfileUpdate: (data: VoloAbpAccountUpdateProfileDto, params: RequestParams = {}) =>
      this.request<VoloAbpAccountProfileDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/my-profile`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name AccountMyProfileChangePasswordCreate
     * @request POST:/api/account/my-profile/change-password
     * @secure
     */
    accountMyProfileChangePasswordCreate: (data: VoloAbpAccountChangePasswordInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/my-profile/change-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name AccountMyProfileTwoFactorEnabledList
     * @request GET:/api/account/my-profile/two-factor-enabled
     * @secure
     */
    accountMyProfileTwoFactorEnabledList: (params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/my-profile/two-factor-enabled`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Profile
     * @name AccountMyProfileSetTwoFactorEnabledCreate
     * @request POST:/api/account/my-profile/set-two-factor-enabled
     * @secure
     */
    accountMyProfileSetTwoFactorEnabledCreate: (query?: { enabled?: boolean }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/my-profile/set-two-factor-enabled`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterResumeRegisterCreate
     * @request POST:/api/app/register/resume-register
     * @secure
     */
    appRegisterResumeRegisterCreate: (data: ResumeRegisterRegisterInputDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/resume-register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterResumeSendVerifyCodeCreate
     * @request POST:/api/app/register/resume-send-verify-code
     * @secure
     */
    appRegisterResumeSendVerifyCodeCreate: (query?: { Phone?: string }, params: RequestParams = {}) =>
      this.request<ResumeVerifyCodesVerifyCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/resume-send-verify-code`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterResumeMailVerifyCodeCreate
     * @request POST:/api/app/register/resume-mail-verify-code
     * @secure
     */
    appRegisterResumeMailVerifyCodeCreate: (query?: { Email?: string }, params: RequestParams = {}) =>
      this.request<ResumeVerifyCodesVerifyCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/resume-mail-verify-code`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterConfirmVerifyCodeCreate
     * @request POST:/api/app/register/confirm-verify-code
     * @secure
     */
    appRegisterConfirmVerifyCodeCreate: (query?: { Phone?: string; Code?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/confirm-verify-code`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterResumeResetPasswordCreate
     * @request POST:/api/app/register/resume-reset-password
     * @secure
     */
    appRegisterResumeResetPasswordCreate: (
      query?: { PhoneOrEmail?: string; newPassword?: string },
      params: RequestParams = {},
    ) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/resume-reset-password`,
        method: "POST",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterProfilePictureCreate
     * @request POST:/api/app/register/profile-picture
     * @secure
     */
    appRegisterProfilePictureCreate: (params: RequestParams = {}) =>
      this.request<VoloAbpAccountProfilePictureSourceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/profile-picture`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterRegisterCreate
     * @request POST:/api/app/register/register
     * @secure
     */
    appRegisterRegisterCreate: (data: VoloAbpAccountRegisterDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/register`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSendPasswordResetCodeCreate
     * @request POST:/api/app/register/send-password-reset-code
     * @secure
     */
    appRegisterSendPasswordResetCodeCreate: (
      data: VoloAbpAccountSendPasswordResetCodeDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/send-password-reset-code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterResetPasswordCreate
     * @request POST:/api/app/register/reset-password
     * @secure
     */
    appRegisterResetPasswordCreate: (data: VoloAbpAccountResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/reset-password`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterConfirmationStateDetail
     * @request GET:/api/app/register/{id}/confirmation-state
     * @secure
     */
    appRegisterConfirmationStateDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpAccountIdentityUserConfirmationStateDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/${id}/confirmation-state`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSendPhoneNumberConfirmationTokenCreate
     * @request POST:/api/app/register/send-phone-number-confirmation-token
     * @secure
     */
    appRegisterSendPhoneNumberConfirmationTokenCreate: (
      data: VoloAbpAccountSendPhoneNumberConfirmationTokenDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/send-phone-number-confirmation-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSendEmailConfirmationTokenCreate
     * @request POST:/api/app/register/send-email-confirmation-token
     * @secure
     */
    appRegisterSendEmailConfirmationTokenCreate: (
      data: VoloAbpAccountSendEmailConfirmationTokenDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/send-email-confirmation-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterConfirmPhoneNumberCreate
     * @request POST:/api/app/register/confirm-phone-number
     * @secure
     */
    appRegisterConfirmPhoneNumberCreate: (data: VoloAbpAccountConfirmPhoneNumberInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/confirm-phone-number`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterConfirmEmailCreate
     * @request POST:/api/app/register/confirm-email
     * @secure
     */
    appRegisterConfirmEmailCreate: (data: VoloAbpAccountConfirmEmailInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/confirm-email`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSetProfilePictureCreate
     * @request POST:/api/app/register/set-profile-picture
     * @secure
     */
    appRegisterSetProfilePictureCreate: (
      data: { ImageContent?: File },
      query?: { Type?: VoloAbpAccountProfilePictureType },
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/set-profile-picture`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterProfilePictureDetail
     * @request GET:/api/app/register/{id}/profile-picture
     * @secure
     */
    appRegisterProfilePictureDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpAccountProfilePictureSourceDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/${id}/profile-picture`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterProfilePictureFileDetail
     * @request GET:/api/app/register/{id}/profile-picture-file
     * @secure
     */
    appRegisterProfilePictureFileDetail: (id: string, params: RequestParams = {}) =>
      this.request<File, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/${id}/profile-picture-file`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterTwoFactorProvidersList
     * @request GET:/api/app/register/two-factor-providers
     * @secure
     */
    appRegisterTwoFactorProvidersList: (query: { UserId: string; Token: string }, params: RequestParams = {}) =>
      this.request<string[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/two-factor-providers`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSendTwoFactorCodeCreate
     * @request POST:/api/app/register/send-two-factor-code
     * @secure
     */
    appRegisterSendTwoFactorCodeCreate: (data: VoloAbpAccountSendTwoFactorCodeInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/register/send-two-factor-code`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Register
     * @name AppRegisterSecurityLogListList
     * @request GET:/api/app/register/security-log-list
     * @secure
     */
    appRegisterSecurityLogListList: (
      query?: {
        StartTime?: string;
        EndTime?: string;
        ApplicationName?: string;
        Identity?: string;
        Action?: string;
        UserName?: string;
        ClientId?: string;
        CorrelationId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/register/security-log-list`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsList
     * @request GET:/api/app/resume-invitations
     * @secure
     */
    appResumeInvitationsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        CompanyName?: string;
        JobName?: string;
        SendType?: string;
        SendStatus?: string;
        IsOpening?: boolean;
        DateAMin?: string;
        DateAMax?: string;
        DateDMin?: string;
        DateDMax?: string;
        ValidCode?: string;
        AccountCode?: string;
        Stage?: string;
        ResumeCode?: string;
        Phone?: string;
        Email?: string;
        CompanyId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeResumeInvitationsResumeInvitationDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/resume-invitations`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsCreate
     * @request POST:/api/app/resume-invitations
     * @secure
     */
    appResumeInvitationsCreate: (data: ResumeResumeInvitationsResumeInvitationCreateDto, params: RequestParams = {}) =>
      this.request<ResumeResumeInvitationsResumeInvitationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsDetail
     * @request GET:/api/app/resume-invitations/{id}
     * @secure
     */
    appResumeInvitationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeResumeInvitationsResumeInvitationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsUpdate
     * @request PUT:/api/app/resume-invitations/{id}
     * @secure
     */
    appResumeInvitationsUpdate: (
      id: string,
      data: ResumeResumeInvitationsResumeInvitationUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeResumeInvitationsResumeInvitationDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsDelete
     * @request DELETE:/api/app/resume-invitations/{id}
     * @secure
     */
    appResumeInvitationsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsGetListByCompanyIdList
     * @request GET:/api/app/resume-invitations/GetListByCompanyId
     * @secure
     */
    appResumeInvitationsGetListByCompanyIdList: (params: RequestParams = {}) =>
      this.request<ResumeResumeInvitationsResumeInvitationDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations/GetListByCompanyId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeInvitation
     * @name AppResumeInvitationsDeleteListDelete
     * @request DELETE:/api/app/resume-invitations/DeleteList
     * @secure
     */
    appResumeInvitationsDeleteListDelete: (query?: { id?: string[] }, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-invitations/DeleteList`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsList
     * @request GET:/api/app/resume-mains
     * @secure
     */
    appResumeMainsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        AccountCode?: string;
        Name?: string;
        DateAMin?: string;
        DateAMax?: string;
        DateDMin?: string;
        DateDMax?: string;
        Status?: string;
        ValidCode?: string;
        CompanyCode?: string;
        Json?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeResumeMainsResumeMainDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/resume-mains`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsCreate
     * @request POST:/api/app/resume-mains
     * @secure
     */
    appResumeMainsCreate: (data: ResumeResumeMainsResumeMainCreateDto, params: RequestParams = {}) =>
      this.request<ResumeResumeMainsResumeMainDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-mains`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsDetail
     * @request GET:/api/app/resume-mains/{id}
     * @secure
     */
    appResumeMainsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeResumeMainsResumeMainDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-mains/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsUpdate
     * @request PUT:/api/app/resume-mains/{id}
     * @secure
     */
    appResumeMainsUpdate: (id: string, data: ResumeResumeMainsResumeMainUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeResumeMainsResumeMainDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-mains/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsDelete
     * @request DELETE:/api/app/resume-mains/{id}
     * @secure
     */
    appResumeMainsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-mains/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeMain
     * @name AppResumeMainsGetListByAccountIdList
     * @request GET:/api/app/resume-mains/GetListByAccountId
     * @secure
     */
    appResumeMainsGetListByAccountIdList: (params: RequestParams = {}) =>
      this.request<ResumeResumeMainsResumeMainDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-mains/GetListByAccountId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeSetting
     * @name AppResumeSettingsList
     * @request GET:/api/app/resume-settings
     * @secure
     */
    appResumeSettingsList: (
      query?: {
        FilterText?: string;
        Code?: string;
        ResumeCode?: string;
        CustomSetting?: string;
        InsertMan?: string;
        InsertDateMin?: string;
        InsertDateMax?: string;
        UpdateMan?: string;
        UpdateDateMin?: string;
        UpdateDateMax?: string;
        ValidCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeResumeSettingsResumeSettingDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/resume-settings`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeSetting
     * @name AppResumeSettingsCreate
     * @request POST:/api/app/resume-settings
     * @secure
     */
    appResumeSettingsCreate: (data: ResumeResumeSettingsResumeSettingCreateDto, params: RequestParams = {}) =>
      this.request<ResumeResumeSettingsResumeSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-settings`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeSetting
     * @name AppResumeSettingsDetail
     * @request GET:/api/app/resume-settings/{id}
     * @secure
     */
    appResumeSettingsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeResumeSettingsResumeSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-settings/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeSetting
     * @name AppResumeSettingsUpdate
     * @request PUT:/api/app/resume-settings/{id}
     * @secure
     */
    appResumeSettingsUpdate: (
      id: string,
      data: ResumeResumeSettingsResumeSettingUpdateDto,
      params: RequestParams = {},
    ) =>
      this.request<ResumeResumeSettingsResumeSettingDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-settings/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ResumeSetting
     * @name AppResumeSettingsDelete
     * @request DELETE:/api/app/resume-settings/{id}
     * @secure
     */
    appResumeSettingsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/resume-settings/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesDetail
     * @request GET:/api/identity/roles/{id}
     * @secure
     */
    identityRolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesUpdate
     * @request PUT:/api/identity/roles/{id}
     * @secure
     */
    identityRolesUpdate: (id: string, data: VoloAbpIdentityIdentityRoleUpdateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesDelete
     * @request DELETE:/api/identity/roles/{id}
     * @secure
     */
    identityRolesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesCreate
     * @request POST:/api/identity/roles
     * @secure
     */
    identityRolesCreate: (data: VoloAbpIdentityIdentityRoleCreateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesList
     * @request GET:/api/identity/roles
     * @secure
     */
    identityRolesList: (
      query?: { Filter?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/roles`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesAllList
     * @request GET:/api/identity/roles/all
     * @secure
     */
    identityRolesAllList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/roles/all`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesClaimsUpdate
     * @request PUT:/api/identity/roles/{id}/claims
     * @secure
     */
    identityRolesClaimsUpdate: (id: string, data: VoloAbpIdentityIdentityRoleClaimDto[], params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/${id}/claims`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesClaimsDetail
     * @request GET:/api/identity/roles/{id}/claims
     * @secure
     */
    identityRolesClaimsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleClaimDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/${id}/claims`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name IdentityRolesAllClaimTypesList
     * @request GET:/api/identity/roles/all-claim-types
     * @secure
     */
    identityRolesAllClaimTypesList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/roles/all-claim-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SecurityLog
     * @name IdentitySecurityLogsList
     * @request GET:/api/identity/security-logs
     * @secure
     */
    identitySecurityLogsList: (
      query?: {
        StartTime?: string;
        EndTime?: string;
        ApplicationName?: string;
        Identity?: string;
        Action?: string;
        UserName?: string;
        ClientId?: string;
        CorrelationId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/security-logs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SecurityLog
     * @name IdentitySecurityLogsDetail
     * @request GET:/api/identity/security-logs/{id}
     * @secure
     */
    identitySecurityLogsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentitySecurityLogDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/security-logs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SecurityLog
     * @name IdentitySecurityLogsMyList
     * @request GET:/api/identity/security-logs/my
     * @secure
     */
    identitySecurityLogsMyList: (
      query?: {
        StartTime?: string;
        EndTime?: string;
        ApplicationName?: string;
        Identity?: string;
        Action?: string;
        UserName?: string;
        ClientId?: string;
        CorrelationId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentitySecurityLogDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/security-logs/my`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SecurityLog
     * @name IdentitySecurityLogsMyDetail
     * @request GET:/api/identity/security-logs/my/{id}
     * @secure
     */
    identitySecurityLogsMyDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentitySecurityLogDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/security-logs/my/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name IdentitySettingsList
     * @request GET:/api/identity/settings
     * @secure
     */
    identitySettingsList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentitySettingsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Settings
     * @name IdentitySettingsUpdate
     * @request PUT:/api/identity/settings
     * @secure
     */
    identitySettingsUpdate: (data: VoloAbpIdentityIdentitySettingsDto, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/settings`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesList
     * @request GET:/api/app/share-codes
     * @secure
     */
    appShareCodesList: (
      query?: {
        FilterText?: string;
        Category?: string;
        Code?: string;
        Name?: string;
        Sort?: string;
        Display?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeShareCodesShareCodeDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/share-codes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesCreate
     * @request POST:/api/app/share-codes
     * @secure
     */
    appShareCodesCreate: (data: ResumeShareCodesShareCodeCreateDto, params: RequestParams = {}) =>
      this.request<ResumeShareCodesShareCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/share-codes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesDetail
     * @request GET:/api/app/share-codes/{id}
     * @secure
     */
    appShareCodesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeShareCodesShareCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/share-codes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesUpdate
     * @request PUT:/api/app/share-codes/{id}
     * @secure
     */
    appShareCodesUpdate: (id: string, data: ResumeShareCodesShareCodeUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeShareCodesShareCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/share-codes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesDelete
     * @request DELETE:/api/app/share-codes/{id}
     * @secure
     */
    appShareCodesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/share-codes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ShareCode
     * @name AppShareCodesGetStageListList
     * @request GET:/api/app/share-codes/GetStageList
     * @secure
     */
    appShareCodesGetStageListList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeShareCodesShareCodeDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/share-codes/GetStageList`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesList
     * @request GET:/api/app/s-mSQuenes
     * @secure
     */
    appSMSQuenesList: (
      query?: {
        FilterText?: string;
        SystemCode?: string;
        Code?: string;
        From_Phone?: string;
        From_Name?: string;
        To_Phone?: string;
        To_Name?: string;
        Subject?: string;
        Body?: string;
        Success?: boolean;
        Send_DateMin?: string;
        Send_DateMax?: string;
        IsOpened?: boolean;
        CompanyId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeSMSQuenesSMSQueneDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/s-mSQuenes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesCreate
     * @request POST:/api/app/s-mSQuenes
     * @secure
     */
    appSMSQuenesCreate: (data: ResumeSMSQuenesSMSQueneCreateDto, params: RequestParams = {}) =>
      this.request<ResumeSMSQuenesSMSQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesDetail
     * @request GET:/api/app/s-mSQuenes/{id}
     * @secure
     */
    appSMSQuenesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeSMSQuenesSMSQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesUpdate
     * @request PUT:/api/app/s-mSQuenes/{id}
     * @secure
     */
    appSMSQuenesUpdate: (id: string, data: ResumeSMSQuenesSMSQueneUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeSMSQuenesSMSQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesDelete
     * @request DELETE:/api/app/s-mSQuenes/{id}
     * @secure
     */
    appSMSQuenesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesGetListByCompanyIdList
     * @request GET:/api/app/s-mSQuenes/GetListByCompanyId
     * @secure
     */
    appSMSQuenesGetListByCompanyIdList: (params: RequestParams = {}) =>
      this.request<ResumeSMSQuenesSMSQueneDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/GetListByCompanyId`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesReSendCreate
     * @request POST:/api/app/s-mSQuenes/ReSend
     * @secure
     */
    appSMSQuenesReSendCreate: (data: string[], params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/ReSend`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSQuene
     * @name AppSmsQuenesUpdateOpenedStatusUpdate
     * @request PUT:/api/app/s-mSQuenes/UpdateOpenedStatus
     * @secure
     */
    appSMSQuenesUpdateOpenedStatusUpdate: (query?: { id?: string }, params: RequestParams = {}) =>
      this.request<ResumeSMSQuenesSMSQueneDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSQuenes/UpdateOpenedStatus`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSTpl
     * @name AppSmsTplsList
     * @request GET:/api/app/s-mSTpls
     * @secure
     */
    appSMSTplsList: (
      query?: {
        FilterText?: string;
        SystemCode?: string;
        Key1?: string;
        Key2?: string;
        Key3?: string;
        Code?: string;
        Name?: string;
        Statement?: string;
        Subject?: string;
        Body?: string;
        Note?: string;
        Sort?: string;
        Status?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeSMSTplsSMSTplDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/s-mSTpls`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSTpl
     * @name AppSmsTplsCreate
     * @request POST:/api/app/s-mSTpls
     * @secure
     */
    appSMSTplsCreate: (data: ResumeSMSTplsSMSTplCreateDto, params: RequestParams = {}) =>
      this.request<ResumeSMSTplsSMSTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSTpls`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSTpl
     * @name AppSmsTplsDetail
     * @request GET:/api/app/s-mSTpls/{id}
     * @secure
     */
    appSMSTplsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeSMSTplsSMSTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSTpls/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSTpl
     * @name AppSmsTplsUpdate
     * @request PUT:/api/app/s-mSTpls/{id}
     * @secure
     */
    appSMSTplsUpdate: (id: string, data: ResumeSMSTplsSMSTplUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeSMSTplsSMSTplDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSTpls/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SMSTpl
     * @name AppSmsTplsDelete
     * @request DELETE:/api/app/s-mSTpls/{id}
     * @secure
     */
    appSMSTplsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/s-mSTpls/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsDetail
     * @request GET:/api/saas/tenants/{id}
     * @secure
     */
    saasTenantsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosSaasTenantDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsUpdate
     * @request PUT:/api/saas/tenants/{id}
     * @secure
     */
    saasTenantsUpdate: (id: string, data: VoloSaasHostDtosSaasTenantUpdateDto, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosSaasTenantDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsDelete
     * @request DELETE:/api/saas/tenants/{id}
     * @secure
     */
    saasTenantsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsList
     * @request GET:/api/saas/tenants
     * @secure
     */
    saasTenantsList: (
      query?: {
        Filter?: string;
        GetEditionNames?: boolean;
        EditionId?: string;
        ExpirationDateMin?: string;
        ExpirationDateMax?: string;
        ActivationState?: VoloSaasTenantActivationState;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloSaasHostDtosSaasTenantDtoVoloSaasHostApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/saas/tenants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsCreate
     * @request POST:/api/saas/tenants
     * @secure
     */
    saasTenantsCreate: (data: VoloSaasHostDtosSaasTenantCreateDto, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosSaasTenantDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsDatabasesList
     * @request GET:/api/saas/tenants/databases
     * @secure
     */
    saasTenantsDatabasesList: (params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosSaasTenantDatabasesDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/databases`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsConnectionStringsDetail
     * @request GET:/api/saas/tenants/{id}/connection-strings
     * @secure
     */
    saasTenantsConnectionStringsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosSaasTenantConnectionStringsDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}/connection-strings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsConnectionStringsUpdate
     * @request PUT:/api/saas/tenants/{id}/connection-strings
     * @secure
     */
    saasTenantsConnectionStringsUpdate: (
      id: string,
      data: VoloSaasHostDtosSaasTenantConnectionStringsDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}/connection-strings`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsApplyDatabaseMigrationsCreate
     * @request POST:/api/saas/tenants/{id}/apply-database-migrations
     * @secure
     */
    saasTenantsApplyDatabaseMigrationsCreate: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/${id}/apply-database-migrations`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name SaasTenantsLookupEditionsList
     * @request GET:/api/saas/tenants/lookup/editions
     * @secure
     */
    saasTenantsLookupEditionsList: (params: RequestParams = {}) =>
      this.request<VoloSaasHostDtosEditionLookupDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/saas/tenants/lookup/editions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestBob
     * @name AppTestBobsList
     * @request GET:/api/app/test-bobs
     * @secure
     */
    appTestBobsList: (
      query?: { FilterText?: string; test?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeTestBobsTestBobDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/test-bobs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestBob
     * @name AppTestBobsCreate
     * @request POST:/api/app/test-bobs
     * @secure
     */
    appTestBobsCreate: (data: ResumeTestBobsTestBobCreateDto, params: RequestParams = {}) =>
      this.request<ResumeTestBobsTestBobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-bobs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestBob
     * @name AppTestBobsDetail
     * @request GET:/api/app/test-bobs/{id}
     * @secure
     */
    appTestBobsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeTestBobsTestBobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-bobs/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestBob
     * @name AppTestBobsUpdate
     * @request PUT:/api/app/test-bobs/{id}
     * @secure
     */
    appTestBobsUpdate: (id: string, data: ResumeTestBobsTestBobUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeTestBobsTestBobDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-bobs/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestBob
     * @name AppTestBobsDelete
     * @request DELETE:/api/app/test-bobs/{id}
     * @secure
     */
    appTestBobsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-bobs/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestCard
     * @name AppTestCardsList
     * @request GET:/api/app/test-cards
     * @secure
     */
    appTestCardsList: (
      query?: {
        FilterText?: string;
        NameCard?: string;
        CardId?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeTestCardsTestCardDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/test-cards`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestCard
     * @name AppTestCardsCreate
     * @request POST:/api/app/test-cards
     * @secure
     */
    appTestCardsCreate: (data: ResumeTestCardsTestCardCreateDto, params: RequestParams = {}) =>
      this.request<ResumeTestCardsTestCardDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-cards`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestCard
     * @name AppTestCardsDetail
     * @request GET:/api/app/test-cards/{id}
     * @secure
     */
    appTestCardsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeTestCardsTestCardDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-cards/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestCard
     * @name AppTestCardsUpdate
     * @request PUT:/api/app/test-cards/{id}
     * @secure
     */
    appTestCardsUpdate: (id: string, data: ResumeTestCardsTestCardUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeTestCardsTestCardDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-cards/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TestCard
     * @name AppTestCardsDelete
     * @request DELETE:/api/app/test-cards/{id}
     * @secure
     */
    appTestCardsDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/test-cards/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TextTemplateContents
     * @name TextTemplateManagementTemplateContentsList
     * @request GET:/api/text-template-management/template-contents
     * @secure
     */
    textTemplateManagementTemplateContentsList: (
      query: { TemplateName: string; CultureName?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/text-template-management/template-contents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TextTemplateContents
     * @name TextTemplateManagementTemplateContentsUpdate
     * @request PUT:/api/text-template-management/template-contents
     * @secure
     */
    textTemplateManagementTemplateContentsUpdate: (
      data: VoloAbpTextTemplateManagementTextTemplatesUpdateTemplateContentInput,
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpTextTemplateManagementTextTemplatesTextTemplateContentDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/text-template-management/template-contents`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TextTemplateContents
     * @name TextTemplateManagementTemplateContentsRestoreToDefaultUpdate
     * @request PUT:/api/text-template-management/template-contents/restore-to-default
     * @secure
     */
    textTemplateManagementTemplateContentsRestoreToDefaultUpdate: (
      data: VoloAbpTextTemplateManagementTextTemplatesRestoreTemplateContentInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/text-template-management/template-contents/restore-to-default`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags TextTemplateDefinitions
     * @name TextTemplateManagementTemplateDefinitionsList
     * @request GET:/api/text-template-management/template-definitions
     * @secure
     */
    textTemplateManagementTemplateDefinitionsList: (
      query?: { FilterText?: string; Sorting?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDtoVoloAbpTextTemplateManagementApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/text-template-management/template-definitions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags TextTemplateDefinitions
     * @name TextTemplateManagementTemplateDefinitionsDetail
     * @request GET:/api/text-template-management/template-definitions/{name}
     * @secure
     */
    textTemplateManagementTemplateDefinitionsDetail: (name: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpTextTemplateManagementTextTemplatesTemplateDefinitionDto,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/text-template-management/template-definitions/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesList
     * @request GET:/api/app/third-parties
     * @secure
     */
    appThirdPartiesList: (
      query?: {
        FilterText?: string;
        UserCode?: string;
        ThirdPartyAccountCode?: string;
        ThirdPartyTypeCode?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeThirdPartiesThirdPartyDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/third-parties`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesCreate
     * @request POST:/api/app/third-parties
     * @secure
     */
    appThirdPartiesCreate: (data: ResumeThirdPartiesThirdPartyCreateDto, params: RequestParams = {}) =>
      this.request<ResumeThirdPartiesThirdPartyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesDetail
     * @request GET:/api/app/third-parties/{id}
     * @secure
     */
    appThirdPartiesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeThirdPartiesThirdPartyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesUpdate
     * @request PUT:/api/app/third-parties/{id}
     * @secure
     */
    appThirdPartiesUpdate: (id: string, data: ResumeThirdPartiesThirdPartyUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeThirdPartiesThirdPartyDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesDelete
     * @request DELETE:/api/app/third-parties/{id}
     * @secure
     */
    appThirdPartiesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesLoginCreate
     * @request POST:/api/app/third-parties/Login
     * @secure
     */
    appThirdPartiesLoginCreate: (data: ResumeThirdPartiesThirdPartyCreateDto, params: RequestParams = {}) =>
      this.request<string, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/Login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesAuthList
     * @request GET:/api/app/third-parties/Auth
     * @secure
     */
    appThirdPartiesAuthList: (
      query: { UserCode?: string; ThirdPartyAccountCode: string; ThirdPartyTypeCode: string },
      params: RequestParams = {},
    ) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/Auth`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ThirdParty
     * @name AppThirdPartiesUnAuthList
     * @request GET:/api/app/third-parties/UnAuth
     * @secure
     */
    appThirdPartiesUnAuthList: (
      query: { UserCode?: string; ThirdPartyAccountCode: string; ThirdPartyTypeCode: string },
      params: RequestParams = {},
    ) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/third-parties/UnAuth`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserLinkCreate
     * @request POST:/api/account/link-user/link
     * @secure
     */
    accountLinkUserLinkCreate: (data: VoloAbpAccountLinkUserInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/link`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserUnlinkCreate
     * @request POST:/api/account/link-user/unlink
     * @secure
     */
    accountLinkUserUnlinkCreate: (data: VoloAbpAccountUnLinkUserInput, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/unlink`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserIsLinkedCreate
     * @request POST:/api/account/link-user/is-linked
     * @secure
     */
    accountLinkUserIsLinkedCreate: (data: VoloAbpAccountIsLinkedInput, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/is-linked`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserGenerateLinkTokenCreate
     * @request POST:/api/account/link-user/generate-link-token
     * @secure
     */
    accountLinkUserGenerateLinkTokenCreate: (params: RequestParams = {}) =>
      this.request<string, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/generate-link-token`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserVerifyLinkTokenCreate
     * @request POST:/api/account/link-user/verify-link-token
     * @secure
     */
    accountLinkUserVerifyLinkTokenCreate: (data: VoloAbpAccountVerifyLinkTokenInput, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/verify-link-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserGenerateLinkLoginTokenCreate
     * @request POST:/api/account/link-user/generate-link-login-token
     * @secure
     */
    accountLinkUserGenerateLinkLoginTokenCreate: (params: RequestParams = {}) =>
      this.request<string, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/generate-link-login-token`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserVerifyLinkLoginTokenCreate
     * @request POST:/api/account/link-user/verify-link-login-token
     * @secure
     */
    accountLinkUserVerifyLinkLoginTokenCreate: (
      data: VoloAbpAccountVerifyLinkLoginTokenInput,
      params: RequestParams = {},
    ) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/account/link-user/verify-link-login-token`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name AccountLinkUserList
     * @request GET:/api/account/link-user
     * @secure
     */
    accountLinkUserList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpAccountLinkUserDtoVoloAbpAccountProPublicApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/account/link-user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersDetail
     * @request GET:/api/identity/users/{id}
     * @secure
     */
    identityUsersDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersUpdate
     * @request PUT:/api/identity/users/{id}
     * @secure
     */
    identityUsersUpdate: (id: string, data: VoloAbpIdentityIdentityUserUpdateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersDelete
     * @request DELETE:/api/identity/users/{id}
     * @secure
     */
    identityUsersDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersList
     * @request GET:/api/identity/users
     * @secure
     */
    identityUsersList: (
      query?: {
        Filter?: string;
        RoleId?: string;
        OrganizationUnitId?: string;
        UserName?: string;
        PhoneNumber?: string;
        EmailAddress?: string;
        IsLockedOut?: boolean;
        NotActive?: boolean;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/users`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersCreate
     * @request POST:/api/identity/users
     * @secure
     */
    identityUsersCreate: (data: VoloAbpIdentityIdentityUserCreateDto, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersRolesDetail
     * @request GET:/api/identity/users/{id}/roles
     * @secure
     */
    identityUsersRolesDetail: (id: string, params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/users/${id}/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersRolesUpdate
     * @request PUT:/api/identity/users/{id}/roles
     * @secure
     */
    identityUsersRolesUpdate: (
      id: string,
      data: VoloAbpIdentityIdentityUserUpdateRolesDto,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/roles`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersAssignableRolesList
     * @request GET:/api/identity/users/assignable-roles
     * @secure
     */
    identityUsersAssignableRolesList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/users/assignable-roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersAvailableOrganizationUnitsList
     * @request GET:/api/identity/users/available-organization-units
     * @secure
     */
    identityUsersAvailableOrganizationUnitsList: (params: RequestParams = {}) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpIdentityOrganizationUnitWithDetailsDtoVoloAbpIdentityProApplicationContractsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/users/available-organization-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersAllClaimTypesList
     * @request GET:/api/identity/users/all-claim-types
     * @secure
     */
    identityUsersAllClaimTypesList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityClaimTypeDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/all-claim-types`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersClaimsDetail
     * @request GET:/api/identity/users/{id}/claims
     * @secure
     */
    identityUsersClaimsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserClaimDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/claims`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersClaimsUpdate
     * @request PUT:/api/identity/users/{id}/claims
     * @secure
     */
    identityUsersClaimsUpdate: (id: string, data: VoloAbpIdentityIdentityUserClaimDto[], params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/claims`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersOrganizationUnitsDetail
     * @request GET:/api/identity/users/{id}/organization-units
     * @secure
     */
    identityUsersOrganizationUnitsDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/organization-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersLockUpdate
     * @request PUT:/api/identity/users/{id}/lock/{lockoutEnd}
     * @secure
     */
    identityUsersLockUpdate: (id: string, lockoutEnd: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/lock/${lockoutEnd}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersUnlockUpdate
     * @request PUT:/api/identity/users/{id}/unlock
     * @secure
     */
    identityUsersUnlockUpdate: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/unlock`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersByUsernameDetail
     * @request GET:/api/identity/users/by-username/{username}
     * @secure
     */
    identityUsersByUsernameDetail: (username: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/by-username/${username}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersByEmailDetail
     * @request GET:/api/identity/users/by-email/{email}
     * @secure
     */
    identityUsersByEmailDetail: (email: string, params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityUserDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/by-email/${email}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersTwoFactorEnabledDetail
     * @request GET:/api/identity/users/{id}/two-factor-enabled
     * @secure
     */
    identityUsersTwoFactorEnabledDetail: (id: string, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/two-factor-enabled`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersTwoFactorUpdate
     * @request PUT:/api/identity/users/{id}/two-factor/{enabled}
     * @secure
     */
    identityUsersTwoFactorUpdate: (id: string, enabled: boolean, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/two-factor/${enabled}`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersChangePasswordUpdate
     * @request PUT:/api/identity/users/{id}/change-password
     * @secure
     */
    identityUsersChangePasswordUpdate: (
      id: string,
      data: VoloAbpIdentityIdentityUserUpdatePasswordInput,
      params: RequestParams = {},
    ) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/${id}/change-password`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersLookupRolesList
     * @request GET:/api/identity/users/lookup/roles
     * @secure
     */
    identityUsersLookupRolesList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityIdentityRoleLookupDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/lookup/roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name IdentityUsersLookupOrganizationUnitsList
     * @request GET:/api/identity/users/lookup/organization-units
     * @secure
     */
    identityUsersLookupOrganizationUnitsList: (params: RequestParams = {}) =>
      this.request<VoloAbpIdentityOrganizationUnitLookupDto[], VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/lookup/organization-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasList
     * @request GET:/api/app/user-datas
     * @secure
     */
    appUserDatasList: (
      query?: {
        FilterText?: string;
        AccountId?: string;
        BirthDayMin?: string;
        BirthDayMax?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeUserDatasUserDataDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/user-datas`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasCreate
     * @request POST:/api/app/user-datas
     * @secure
     */
    appUserDatasCreate: (data: ResumeUserDatasUserDataCreateDto, params: RequestParams = {}) =>
      this.request<ResumeUserDatasUserDataDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasDetail
     * @request GET:/api/app/user-datas/{id}
     * @secure
     */
    appUserDatasDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeUserDatasUserDataDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasUpdate
     * @request PUT:/api/app/user-datas/{id}
     * @secure
     */
    appUserDatasUpdate: (id: string, data: ResumeUserDatasUserDataUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeUserDatasUserDataDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasDelete
     * @request DELETE:/api/app/user-datas/{id}
     * @secure
     */
    appUserDatasDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasUpdateNameUpdate
     * @request PUT:/api/app/user-datas/UpdateName
     * @secure
     */
    appUserDatasUpdateNameUpdate: (query?: { Name?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/UpdateName`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasUpdateEmailUpdate
     * @request PUT:/api/app/user-datas/UpdateEmail
     * @secure
     */
    appUserDatasUpdateEmailUpdate: (query?: { Email?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/UpdateEmail`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasUpdatePhoneUpdate
     * @request PUT:/api/app/user-datas/UpdatePhone
     * @secure
     */
    appUserDatasUpdatePhoneUpdate: (query?: { Phone?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/UpdatePhone`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserData
     * @name AppUserDatasUpdateBirthdayUpdate
     * @request PUT:/api/app/user-datas/UpdateBirthday
     * @secure
     */
    appUserDatasUpdateBirthdayUpdate: (query?: { Birthday?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/user-datas/UpdateBirthday`,
        method: "PUT",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserLookup
     * @name IdentityUsersLookupDetail
     * @request GET:/api/identity/users/lookup/{id}
     * @secure
     */
    identityUsersLookupDetail: (id: string, params: RequestParams = {}) =>
      this.request<VoloAbpUsersUserData, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/lookup/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserLookup
     * @name IdentityUsersLookupByUsernameDetail
     * @request GET:/api/identity/users/lookup/by-username/{userName}
     * @secure
     */
    identityUsersLookupByUsernameDetail: (userName: string, params: RequestParams = {}) =>
      this.request<VoloAbpUsersUserData, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/lookup/by-username/${userName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserLookup
     * @name IdentityUsersLookupSearchList
     * @request GET:/api/identity/users/lookup/search
     * @secure
     */
    identityUsersLookupSearchList: (
      query?: { Sorting?: string; Filter?: string; SkipCount?: number; MaxResultCount?: number },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion5200CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/identity/users/lookup/search`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserLookup
     * @name IdentityUsersLookupCountList
     * @request GET:/api/identity/users/lookup/count
     * @secure
     */
    identityUsersLookupCountList: (query?: { Filter?: string }, params: RequestParams = {}) =>
      this.request<number, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/identity/users/lookup/count`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesList
     * @request GET:/api/app/verify-codes
     * @secure
     */
    appVerifyCodesList: (
      query?: {
        FilterText?: string;
        Code?: string;
        VerifyPhone?: string;
        BeginTimeMin?: string;
        BeginTimeMax?: string;
        EndTimeMin?: string;
        EndTimeMax?: string;
        Sorting?: string;
        SkipCount?: number;
        MaxResultCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        VoloAbpApplicationDtosPagedResultDto1ResumeVerifyCodesVerifyCodeDtoResumeApplicationContractsVersion1000CultureNeutralPublicKeyTokenNull,
        VoloAbpHttpRemoteServiceErrorResponse
      >({
        path: `/api/app/verify-codes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesCreate
     * @request POST:/api/app/verify-codes
     * @secure
     */
    appVerifyCodesCreate: (data: ResumeVerifyCodesVerifyCodeCreateDto, params: RequestParams = {}) =>
      this.request<ResumeVerifyCodesVerifyCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/verify-codes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesDetail
     * @request GET:/api/app/verify-codes/{id}
     * @secure
     */
    appVerifyCodesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ResumeVerifyCodesVerifyCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/verify-codes/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesUpdate
     * @request PUT:/api/app/verify-codes/{id}
     * @secure
     */
    appVerifyCodesUpdate: (id: string, data: ResumeVerifyCodesVerifyCodeUpdateDto, params: RequestParams = {}) =>
      this.request<ResumeVerifyCodesVerifyCodeDto, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/verify-codes/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesDelete
     * @request DELETE:/api/app/verify-codes/{id}
     * @secure
     */
    appVerifyCodesDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/verify-codes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags VerifyCode
     * @name AppVerifyCodesConfirmList
     * @request GET:/api/app/verify-codes/Confirm
     * @secure
     */
    appVerifyCodesConfirmList: (query?: { PhoneNumber?: string; VerifyCode?: string }, params: RequestParams = {}) =>
      this.request<boolean, VoloAbpHttpRemoteServiceErrorResponse>({
        path: `/api/app/verify-codes/Confirm`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  download = {
    /**
     * No description
     *
     * @tags File
     * @name DownloadDetail
     * @request GET:/download/{fileName}
     * @secure
     */
    downloadDetail: (fileName: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/download/${fileName}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
