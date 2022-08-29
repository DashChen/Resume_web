export interface CompanyJobData {
  id: string;
  creationTime: string | null;
  creatorId: string | null;
  lastModificationTime: string | null;
  lastModifierId: string | null;
  isDeleted: boolean;
  deleterId: string | null;
  deletionTime: string | null;
  code: string | null;
  companyId: string | null;
  jobName: string | null;
  jobType: string | null;
  jobOpening: boolean;
  mailTplCode: string | null;
  smsTplCode: string | null;
}