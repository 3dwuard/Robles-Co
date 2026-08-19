import { TeamMemberSlug } from "@/lib/translations";

export type TeamMember = {
  slug: TeamMemberSlug;
  name: string;
  title: string;
  photo: string;
  secondaryPhoto: string;
  casualPhoto: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "jesus-contreras-licea",
    name: "Jesús Contreras Licea",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/jesus-main.jpeg",
    secondaryPhoto: "/team/jesus-secondary.jpeg",
    casualPhoto: "/team/jesus-casual.jpeg",
  },
  {
    slug: "angel-robles-santisteban",
    name: "Ángel Robles Santisteban",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/angel-main.jpeg",
    secondaryPhoto: "/team/angel-secondary.jpg",
    casualPhoto: "/team/angel-casual.jpeg",
  },
];
