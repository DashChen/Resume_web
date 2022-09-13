export interface ResumeData {
    id: string;
    name: string;
    identityId: string;
    mobile: string;
    email: string;
    job: string;
    level: string;
    status?: string;
}

export interface ResumeInvitationData {
    id: string;
    creationTime: string;
    creatorId: string;
    lastModificationTime: string;
    lastModifierId: string;
    isDeleted: boolean;
    deleterId: string;
    deletionTime: string;
    code: string;
    companyName: string;
    jobName: string;
    sendType: string;
    sendStatus: string;
    isOpening: boolean;
    dateA: string;
    dateD: string;
    validCode: string;
    accountCode: string;
    stage: string;
    resumeCode: string;
    phone: string;
    email: string;
    companyId: string;
    url: string;
}
