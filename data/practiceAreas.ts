import { Blocks, Building2, Handshake, Landmark, LucideIcon, Scale, Users } from "lucide-react";
import { PracticeAreaSlug } from "@/lib/translations";

export type PracticeArea = {
  slug: PracticeAreaSlug;
  icon: LucideIcon;
};

export const practiceAreas: PracticeArea[] = [
  { slug: "real-estate", icon: Building2 },
  { slug: "corporate-ma", icon: Handshake },
  { slug: "banking-finance", icon: Landmark },
  { slug: "blockchain-fintech", icon: Blocks },
  { slug: "tax-trusts", icon: Scale },
  { slug: "civil-family-disputes", icon: Users },
];
