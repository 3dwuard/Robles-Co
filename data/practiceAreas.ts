import { Blocks, Building2, Handshake, Landmark, LucideIcon, Scale, Users } from "lucide-react";

export type PracticeArea = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  whatWeHandle: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Building2,
    summary:
      "We guide buyers and sellers through every stage of a Mexican property transaction — from initial offer through closing, notarial coordination, and title review. Our particular strength is cross-border purchases: helping foreign buyers navigate fideicomiso structures, tax obligations, and regulatory requirements specific to non-Mexican nationals acquiring property in Mexico City and Cancún.",
    whatWeHandle: [
      "Purchase and sale agreements",
      "Title review and due diligence",
      "Closing coordination",
      "Fideicomiso structuring for foreign buyers",
      "Post-purchase tax compliance",
    ],
  },
  {
    slug: "corporate-ma",
    title: "Corporate, Mergers & Acquisitions",
    icon: Handshake,
    summary:
      "We advise companies through the full lifecycle of corporate transactions — from formation and governance to mergers, acquisitions, and capital raising. Our team structures deals for both domestic and foreign entities across civil, commercial, and financial sectors.",
    whatWeHandle: [
      "Company formation and corporate governance",
      "M&A structuring and due diligence",
      "Private equity and venture capital transactions",
      "Cross-border deal structuring",
    ],
  },
  {
    slug: "banking-finance",
    title: "Banking, Finance & Capital Markets",
    icon: Landmark,
    summary:
      "We help clients access capital and structure financial transactions, from traditional banking relationships to the formation of investment vehicles. Our experience spans institutional finance and the newer instruments reshaping how capital moves in Mexico.",
    whatWeHandle: [
      "Investment fund formation",
      "Capital markets transactions",
      "Financing agreements",
      "Regulatory compliance for financial entities",
    ],
  },
  {
    slug: "blockchain-fintech",
    title: "Blockchain, Digital Assets & Fintech",
    icon: Blocks,
    summary:
      "We're at the forefront of Mexico's evolving digital asset landscape — advising on tokenization projects, SOFIPO formation, and the regulatory frameworks governing crypto-assets and fintech operations. Few firms in Mexico combine real estate depth with this level of blockchain fluency.",
    whatWeHandle: [
      "Token issuance and structuring",
      "SOFIPO formation and licensing",
      "Smart contract and DAO advisory",
      "Crypto-asset regulatory compliance",
    ],
  },
  {
    slug: "tax-trusts",
    title: "Tax & Trusts",
    icon: Scale,
    summary:
      "We provide tax advisory across real estate and corporate transactions, and structure trusts (fideicomisos) for estate planning, asset protection, and investment purposes — an area that intersects closely with both our real estate and blockchain practices.",
    whatWeHandle: [
      "Transactional tax advisory",
      "Fideicomiso structuring",
      "Estate and succession planning",
      "Tax compliance for foreign asset holders",
    ],
  },
  {
    slug: "civil-family-disputes",
    title: "Civil, Family & Disputes",
    icon: Users,
    summary:
      "We handle a broad range of civil and family matters, from estate planning and inheritance to commercial contracts and dispute resolution — with an 89% success rate in litigated cases.",
    whatWeHandle: [
      "Family law and succession",
      "Civil and commercial contracts",
      "Litigation and arbitration",
      "Dispute resolution and negotiation",
    ],
  },
];
