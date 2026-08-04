export type TeamMember = {
  name: string;
  title: string;
  photo: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jesús Contreras Licea",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/jesus-main.jpeg",
    bio: "Partner at Robles & Co and BaRoCo Law in Los Cabos, Jesús has closed over 1,000 real estate transactions and brings 15+ years of experience in financial law, including senior roles at HSBC Mexico and top-tier firms. He also teaches Corporate Law, Crypto & Fintech at Universidad Anáhuac. From Cancún to Mexico City, he handles matters across Mexico's full jurisdiction.",
  },
  {
    name: "Ángel Robles Santisteban",
    title: "Partner, Real Estate & Financial Law",
    photo: "/team/angel-main.jpeg",
    bio: "Partner at Robles & Co and BaRoCo Law in Los Cabos, Ángel brings 18+ years of experience in real estate law, with deep expertise in civil, tax, and property registry matters. He has guided individuals, families, and construction companies through every stage of acquiring and regularizing property. From Mexico City to Cancún, he handles matters nationwide.",
  },
];
