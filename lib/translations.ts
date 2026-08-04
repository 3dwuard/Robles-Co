import { PracticeArea } from "@/components/intake/types";

export type Language = "EN" | "ES";

type PracticeAreaSlug =
  | "real-estate"
  | "corporate-ma"
  | "banking-finance"
  | "blockchain-fintech"
  | "tax-trusts"
  | "civil-family-disputes";

type Translation = {
  nav: { services: string; team: string; cases: string; careers: string };
  hero: { headline: string; subtext: string };
  badges: { licensed: string; locations: string };
  team: { heading: string };
  services: { heading: string; teasers: Record<PracticeAreaSlug, string> };
  cases: { heading: string };
  footer: { text: string };
  funnel: {
    whatCanWeHelp: string;
    tellUsSituation: string;
    whenMoveForward: string;
    leaveInfo: string;
    categories: Record<PracticeArea, string>;
  };
};

export const translations: Record<Language, Translation> = {
  EN: {
    nav: {
      services: "Services",
      team: "Team",
      cases: "Cases",
      careers: "Careers",
    },
    hero: {
      headline: "Buy property in Mexico with full legal backing",
      subtext:
        "From Mexico City to Cancún, we guide buyers through every legal step of a property purchase — clearly, and with a licensed attorney at every stage.",
    },
    badges: {
      licensed: "Licensed attorneys",
      locations: "CDMX & Cancún",
    },
    team: {
      heading: "Meet the team",
    },
    services: {
      heading: "Practice areas",
      teasers: {
        "real-estate":
          "We guide buyers and sellers through every stage of a Mexican property transaction — from initial offer through closing, notarial coordination, and title review.",
        "corporate-ma":
          "We advise companies through the full lifecycle of corporate transactions — from formation and governance to mergers, acquisitions, and capital raising.",
        "banking-finance":
          "We help clients access capital and structure financial transactions, from traditional banking relationships to the formation of investment vehicles.",
        "blockchain-fintech":
          "We're at the forefront of Mexico's evolving digital asset landscape — advising on tokenization projects, SOFIPO formation, and the regulatory frameworks governing crypto-assets and fintech operations.",
        "tax-trusts":
          "We provide tax advisory across real estate and corporate transactions, and structure trusts (fideicomisos) for estate planning, asset protection, and investment purposes — an area that intersects closely with both our real estate and blockchain practices.",
        "civil-family-disputes":
          "We handle a broad range of civil and family matters, from estate planning and inheritance to commercial contracts and dispute resolution — with an 89% success rate in litigated cases.",
      },
    },
    cases: {
      heading: "Cases we've handled",
    },
    footer: {
      text: "Created by JECL · Powered by AI · 2026",
    },
    funnel: {
      whatCanWeHelp: "What can we help you with?",
      tellUsSituation: "Tell me about your situation.",
      whenMoveForward: "When are you hoping to move forward?",
      leaveInfo: "Leave your info, we'll be in touch",
      categories: {
        "Real Estate": "Real Estate",
        "Corporate & Financial": "Corporate & Financial",
        "Blockchain & Fintech": "Blockchain & Fintech",
        "Tax & Trusts": "Tax & Trusts",
        "Civil, Family & Disputes": "Civil, Family & Disputes",
        "Other / Not listed": "Other / Not listed",
      },
    },
  },
  ES: {
    nav: {
      services: "Servicios",
      team: "Equipo",
      cases: "Casos",
      careers: "Carreras",
    },
    hero: {
      headline: "Compra propiedades en México con respaldo legal completo",
      subtext:
        "Desde la Ciudad de México hasta Cancún, guiamos a los compradores en cada paso legal de una compra de propiedad — con claridad, y con un abogado con cédula profesional en cada etapa.",
    },
    badges: {
      licensed: "Abogados certificados",
      locations: "CDMX y Cancún",
    },
    team: {
      heading: "Conoce al equipo",
    },
    services: {
      heading: "Áreas de práctica",
      teasers: {
        "real-estate":
          "Guiamos a compradores y vendedores en cada etapa de una transacción inmobiliaria en México — desde la oferta inicial hasta el cierre, la coordinación notarial y la revisión de título.",
        "corporate-ma":
          "Asesoramos a empresas durante todo el ciclo de vida de las transacciones corporativas — desde la constitución y gobierno corporativo hasta fusiones, adquisiciones y levantamiento de capital.",
        "banking-finance":
          "Ayudamos a nuestros clientes a acceder a capital y estructurar transacciones financieras, desde relaciones bancarias tradicionales hasta la formación de vehículos de inversión.",
        "blockchain-fintech":
          "Estamos a la vanguardia del panorama evolutivo de activos digitales en México — asesorando en proyectos de tokenización, formación de SOFIPOs y los marcos regulatorios que rigen los criptoactivos y las operaciones fintech.",
        "tax-trusts":
          "Brindamos asesoría fiscal en transacciones inmobiliarias y corporativas, y estructuramos fideicomisos para planificación patrimonial, protección de activos y fines de inversión — un área que se relaciona estrechamente con nuestras prácticas de bienes raíces y blockchain.",
        "civil-family-disputes":
          "Manejamos una amplia gama de asuntos civiles y familiares, desde planificación patrimonial y herencias hasta contratos comerciales y resolución de disputas — con una tasa de éxito del 89% en casos litigados.",
      },
    },
    cases: {
      heading: "Casos que hemos manejado",
    },
    footer: {
      text: "Creado por JECL · Impulsado por IA · 2026",
    },
    funnel: {
      whatCanWeHelp: "¿En qué podemos ayudarte?",
      tellUsSituation: "Cuéntame sobre tu situación.",
      whenMoveForward: "¿Cuándo esperas avanzar?",
      leaveInfo: "Déjanos tus datos, nos pondremos en contacto",
      categories: {
        "Real Estate": "Bienes Raíces",
        "Corporate & Financial": "Corporativo y Financiero",
        "Blockchain & Fintech": "Blockchain y Fintech",
        "Tax & Trusts": "Fiscal y Fideicomisos",
        "Civil, Family & Disputes": "Civil, Familiar y Litigios",
        "Other / Not listed": "Otro / No listado",
      },
    },
  },
};
