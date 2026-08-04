export type Need =
  | "House"
  | "Land"
  | "Legal advice"
  | "M&A & Private Equity"
  | "Banking & Capital Markets"
  | "Digital Assets & Tokenization"
  | "Fintech / SOFIPO & Compliance"
  | "Tax Advisory"
  | "Trusts & Estates"
  | "Family Law"
  | "Civil & Contracts"
  | "Dispute Resolution & Arbitration"
  | "Other";

export type PracticeArea =
  | "Real Estate"
  | "Corporate & Financial"
  | "Blockchain & Fintech"
  | "Tax & Trusts"
  | "Civil, Family & Disputes"
  | "Other / Not listed";

export type ValueRangeId = "under-250k" | "250k-750k" | "750k-1.5m" | "1.5m-plus";

export type ContactMethod = "phone" | "email";

export type IntakeStage = "situation" | "describe" | "value" | "contact" | "done";

export type IntakeMessage = { id: number; sender: "bot" | "user"; text: string };

export type IntakeAnswers = {
  need?: Need;
  practiceArea?: PracticeArea;
  description?: string;
  attachment?: File | null;
  valueRange?: ValueRangeId;
  urgent?: boolean;
  name?: string;
  contactMethod?: ContactMethod;
  contactValue?: string;
};

export type AddMessage = (sender: "bot" | "user", text: string) => void;

export const NEED_OPTIONS: Need[] = ["House", "Land", "Legal advice", "Other"];

export const PRACTICE_AREA_OPTIONS: PracticeArea[] = [
  "Real Estate",
  "Corporate & Financial",
  "Blockchain & Fintech",
  "Tax & Trusts",
  "Civil, Family & Disputes",
  "Other / Not listed",
];

export const PRACTICE_AREA_SUB_OPTIONS: Record<PracticeArea, Need[] | null> = {
  "Real Estate": NEED_OPTIONS,
  "Corporate & Financial": ["M&A & Private Equity", "Banking & Capital Markets", "Other"],
  "Blockchain & Fintech": [
    "Digital Assets & Tokenization",
    "Fintech / SOFIPO & Compliance",
    "Other",
  ],
  "Tax & Trusts": ["Tax Advisory", "Trusts & Estates", "Other"],
  "Civil, Family & Disputes": [
    "Family Law",
    "Civil & Contracts",
    "Dispute Resolution & Arbitration",
    "Other",
  ],
  "Other / Not listed": null,
};

export const VALUE_OPTIONS: { id: ValueRangeId; usd: string; mxn: string }[] = [
  { id: "under-250k", usd: "Under $250k USD", mxn: "~under $4.5M MXN" },
  { id: "250k-750k", usd: "$250k–$750k USD", mxn: "~$4.5M–$13.5M MXN" },
  { id: "750k-1.5m", usd: "$750k–$1.5M USD", mxn: "~$13.5M–$27M MXN" },
  { id: "1.5m-plus", usd: "$1.5M+ USD", mxn: "~$27M+ MXN" },
];

export const TIMING_OPTIONS: { label: string; urgent: boolean }[] = [
  { label: "Right away", urgent: true },
  { label: "In the next few weeks", urgent: false },
  { label: "Just researching for now", urgent: false },
];

export const optionButtonClass =
  "rounded-lg border border-gray-200 px-3 py-2 text-left text-sm text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50 md:px-4 md:py-3 md:text-base";

export const MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;

export const FIRM_CONTACT = {
  phone: "+52 998 123 4567",
  phoneHref: "tel:+529981234567",
  whatsappHref: "https://wa.me/529981234567",
  email: "hello@roblesandco.mx",
  emailHref: "mailto:hello@roblesandco.mx",
};
