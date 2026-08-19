import { TeamMemberSlug } from "@/lib/translations";

export type TeamMember = {
  slug: TeamMemberSlug;
  name: string;
  title: string;
  photo: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "jesus-contreras-licea",
    name: "Jesús Contreras Licea",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/jesus-main.jpeg",
  },
  {
    slug: "angel-robles-santisteban",
    name: "Ángel Robles Santisteban",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/angel-main.jpeg",
  },
];
