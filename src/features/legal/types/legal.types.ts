export type LegalDocumentKey = "privacyPolicy" | "termsOfService" | "cookiePolicy";

export interface LegalSectionContent {
    id: string;
    title: string;
    paragraphs: readonly string[];
    list?: readonly string[];
}

export interface LegalDocumentContent {
    title: string;
    description: string;
    lastUpdatedDate: string;
    sections: readonly LegalSectionContent[];
}

export interface LegalPlaceholders {
    appName: string;
    appUrl: string;
    contactEmail: string;
    contactPhone: string;
    companyName: string;
}
