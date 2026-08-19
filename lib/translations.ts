import { PracticeArea } from "@/components/intake/types";

export type Language = "EN" | "ES";

export type PracticeAreaSlug =
  | "real-estate"
  | "corporate-ma"
  | "banking-finance"
  | "blockchain-fintech"
  | "tax-trusts"
  | "civil-family-disputes";

export type TeamMemberSlug = "jesus-contreras-licea" | "angel-robles-santisteban";

type PracticeAreaContent = {
  title: string;
  teaser: string;
  summary: string;
  whatWeHandle: string[];
};

type CaseItem = { tag: string; description: string };

type Translation = {
  common: { backHome: string };
  nav: { services: string; team: string; cases: string; careers: string };
  hero: { headline: string; subtext: string };
  badges: { licensed: string; locations: string };
  stats: { value: string; caption: string }[];
  team: {
    heading: string;
    pageHeading: string;
    associatesNote: string;
    titles: Record<TeamMemberSlug, string>;
    bios: Record<TeamMemberSlug, string>;
  };
  services: {
    heading: string;
    whatWeHandleLabel: string;
    areas: Record<PracticeAreaSlug, PracticeAreaContent>;
  };
  cases: { heading: string; continueReading: string; items: CaseItem[] };
  careers: {
    heading: string;
    intro: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      areaOfInterest: string;
      areaOfInterestPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
    cvNote: string;
  };
  footer: { text: string; privacyLink: string; copyright: string };
  privacy: {
    heading: string;
    lastUpdated: string;
    intro: string;
    sections: {
      dataCollected: { heading: string; body: string };
      purposes: { heading: string; body: string };
      transfers: { heading: string; body: string };
      arcoRights: { heading: string; body: string };
      changes: { heading: string; body: string };
    };
  };
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
    common: {
      backHome: "← Back to home",
    },
    nav: {
      services: "Services",
      team: "Team",
      cases: "Cases",
      careers: "Careers",
    },
    hero: {
      headline: "Trusted legal counsel for Mexico's complex matters",
      subtext:
        "From real estate to corporate, tax, and emerging finance, we provide full-service legal representation across Mexico.",
    },
    badges: {
      licensed: "Licensed attorneys",
      locations: "CDMX & Cancún",
    },
    stats: [
      { value: "25+", caption: "Years Combined Experience" },
      { value: "1,000+", caption: "Transactions Closed" },
      { value: "6", caption: "Practice Areas" },
      { value: "Nationwide", caption: "Coverage" },
    ],
    team: {
      heading: "Meet the partners",
      pageHeading: "Our Partners",
      associatesNote:
        "Our partners are supported by a growing team of associates and legal staff across Mexico City, Cancún, and Los Cabos.",
      titles: {
        "jesus-contreras-licea": "Partner, Real Estate & Financial Law",
        "angel-robles-santisteban": "Partner, Real Estate & Tax Law",
      },
      bios: {
        "jesus-contreras-licea":
          "Partner at Robles & Co and BaRoCo Law in Los Cabos, Jesús has closed over 1,000 real estate transactions and brings 15+ years of experience in financial law, including senior roles at HSBC Mexico and top-tier firms. He also teaches Corporate Law, Crypto & Fintech at Universidad Anáhuac. From Cancún to Mexico City, he handles matters across Mexico's full jurisdiction.",
        "angel-robles-santisteban":
          "Partner at Robles & Co and BaRoCo Law in Los Cabos, Ángel brings 18+ years of experience in real estate law, with deep expertise in civil, tax, and property registry matters. He has guided individuals, families, and construction companies through every stage of acquiring and regularizing property. From Mexico City to Cancún, he handles matters nationwide.",
      },
    },
    services: {
      heading: "Practice areas",
      whatWeHandleLabel: "What we handle",
      areas: {
        "real-estate": {
          title: "Real Estate",
          teaser:
            "We guide buyers and sellers through every stage of a Mexican property transaction, from initial offer through closing, notarial coordination, and title review.",
          summary:
            "We guide buyers and sellers through every stage of a Mexican property transaction, from initial offer through closing, notarial coordination, and title review. Our particular strength is cross-border purchases: helping foreign buyers navigate fideicomiso structures, tax obligations, and regulatory requirements specific to non-Mexican nationals acquiring property in Mexico City and Cancún.",
          whatWeHandle: [
            "Purchase and sale agreements",
            "Title review and due diligence",
            "Closing coordination",
            "Fideicomiso structuring for foreign buyers",
            "Post-purchase tax compliance",
          ],
        },
        "corporate-ma": {
          title: "Corporate, Mergers & Acquisitions",
          teaser:
            "We advise companies through the full lifecycle of corporate transactions, from formation and governance to mergers, acquisitions, and capital raising.",
          summary:
            "We advise companies through the full lifecycle of corporate transactions, from formation and governance to mergers, acquisitions, and capital raising. Our team structures deals for both domestic and foreign entities across civil, commercial, and financial sectors.",
          whatWeHandle: [
            "Company formation and corporate governance",
            "M&A structuring and due diligence",
            "Private equity and venture capital transactions",
            "Cross-border deal structuring",
          ],
        },
        "banking-finance": {
          title: "Banking, Finance & Capital Markets",
          teaser:
            "We help clients access capital and structure financial transactions, from traditional banking relationships to the formation of investment vehicles.",
          summary:
            "We help clients access capital and structure financial transactions, from traditional banking relationships to the formation of investment vehicles. Our experience spans institutional finance and the newer instruments reshaping how capital moves in Mexico.",
          whatWeHandle: [
            "Investment fund formation",
            "Capital markets transactions",
            "Financing agreements",
            "Regulatory compliance for financial entities",
          ],
        },
        "blockchain-fintech": {
          title: "Blockchain, Digital Assets & Fintech",
          teaser:
            "We're at the forefront of Mexico's evolving digital asset landscape. We advise on tokenization projects, SOFIPO formation, and the regulatory frameworks governing crypto-assets and fintech operations.",
          summary:
            "We're at the forefront of Mexico's evolving digital asset landscape. We advise on tokenization projects, SOFIPO formation, and the regulatory frameworks governing crypto-assets and fintech operations. Few firms in Mexico combine real estate depth with this level of blockchain fluency.",
          whatWeHandle: [
            "Token issuance and structuring",
            "SOFIPO formation and licensing",
            "Smart contract and DAO advisory",
            "Crypto-asset regulatory compliance",
          ],
        },
        "tax-trusts": {
          title: "Tax & Trusts",
          teaser:
            "We provide tax advisory across real estate and corporate transactions, and structure trusts (fideicomisos) for estate planning, asset protection, and investment purposes. This is an area that intersects closely with both our real estate and blockchain practices.",
          summary:
            "We provide tax advisory across real estate and corporate transactions, and structure trusts (fideicomisos) for estate planning, asset protection, and investment purposes. This is an area that intersects closely with both our real estate and blockchain practices.",
          whatWeHandle: [
            "Transactional tax advisory",
            "Fideicomiso structuring",
            "Estate and succession planning",
            "Tax compliance for foreign asset holders",
          ],
        },
        "civil-family-disputes": {
          title: "Civil, Family & Disputes",
          teaser:
            "We handle a broad range of civil and family matters, from estate planning and inheritance to commercial contracts and dispute resolution, with an 89% success rate in litigated cases.",
          summary:
            "We handle a broad range of civil and family matters, from estate planning and inheritance to commercial contracts and dispute resolution, with an 89% success rate in litigated cases.",
          whatWeHandle: [
            "Family law and succession",
            "Civil and commercial contracts",
            "Litigation and arbitration",
            "Dispute resolution and negotiation",
          ],
        },
      },
    },
    cases: {
      heading: "Selected matters we've handled",
      continueReading: "Continue reading",
      items: [
        {
          tag: "Cancún–Tulum · large-scale land acquisition",
          description:
            "Advised on one of the largest land acquisitions ever assembled in the Cancún–Tulum corridor for a major regional development.",
        },
        {
          tag: "Cancún · brand relaunch & rights integration",
          description:
            "Structured the launch and integration of over 300 stakeholders holding different rights, from hotel to private club, relocating them into a new development to support one of the most emblematic brand relaunches in the region.",
        },
        {
          tag: "Mexico City · landmark redevelopment",
          description:
            "Secured government authorization to demolish an earthquake-damaged building in La Condesa following the 2017 earthquake, clearing the way for one of the area's most significant redevelopments.",
        },
        {
          tag: "Mexico City · high-net-worth real estate",
          description:
            "Guided high-net-worth and politically exposed clients through real estate transactions in some of Mexico City's most emblematic developments, protecting their wealth and optimizing returns.",
        },
        {
          tag: "Nationwide · developer marketing strategy",
          description:
            "Advised leading developers on innovative approaches to marketing residential projects, from lifestyle branding to blockchain-based sales structures.",
        },
        {
          tag: "Nationwide · foreign investment & restricted zones",
          description:
            "Advised hundreds of foreign clients on acquiring property and structuring investment in Cancún and other restricted zones across Mexico.",
        },
      ],
    },
    careers: {
      heading: "Join Robles & Co",
      intro:
        "We work with lawyers at every stage of their career, from those looking to take on independent consulting work (asesorías) alongside us, to experienced attorneys seeking a long-term position, to firms we occasionally partner with or bring in for specialized matters. If you're a lawyer looking to grow your practice, we'd like to hear from you.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        areaOfInterest: "Area of interest",
        areaOfInterestPlaceholder: "Select a practice area",
        message: "Message",
        messagePlaceholder: "Tell us about your background and what you're looking for.",
        submit: "Send",
      },
      cvNote: "Prefer to send your CV directly? Email us at",
    },
    footer: {
      text: "Powered by AI · Created by JECL",
      privacyLink: "Privacy Notice",
      copyright: "© 2026 Robles & Co",
    },
    privacy: {
      heading: "Privacy Notice",
      lastUpdated: "Last updated: August 2026",
      intro:
        "Robles & Co is responsible for the processing of your personal data in accordance with Mexico's Federal Law on the Protection of Personal Data Held by Private Parties (LFPDPPP).",
      sections: {
        dataCollected: {
          heading: "Data we collect",
          body: "Name, email address, phone number, and the description of your legal situation, including any documents you choose to share with us.",
        },
        purposes: {
          heading: "Purposes",
          body: "We use your data to respond to your inquiry, provide legal advice, and follow up on your case. If we contact you with information about our services, you may request at any time that we stop doing so.",
        },
        transfers: {
          heading: "Data transfers",
          body: "Your data may be shared with notaries, authorities, or third parties only when necessary to manage your legal matter, and always under strict confidentiality.",
        },
        arcoRights: {
          heading: "ARCO rights",
          body: "You have the right to access, rectify, cancel, or object to the use of your personal data. To exercise these rights, contact us at contacto@roblesandco.mx.",
        },
        changes: {
          heading: "Changes to this notice",
          body: "Any modification to this notice will be published on this same page.",
        },
      },
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
    common: {
      backHome: "← Volver al inicio",
    },
    nav: {
      services: "Servicios",
      team: "Equipo",
      cases: "Casos",
      careers: "Carreras",
    },
    hero: {
      headline: "Asesoría legal de confianza para los asuntos complejos de México",
      subtext:
        "De bienes raíces a derecho corporativo, fiscal y finanzas emergentes, ofrecemos representación legal integral en todo México.",
    },
    badges: {
      licensed: "Abogados certificados",
      locations: "CDMX y Cancún",
    },
    stats: [
      { value: "25+", caption: "Años de Experiencia Combinada" },
      { value: "1,000+", caption: "Transacciones Cerradas" },
      { value: "6", caption: "Áreas de Práctica" },
      { value: "Nacional", caption: "Cobertura" },
    ],
    team: {
      heading: "Conoce a los socios",
      pageHeading: "Nuestros Socios",
      associatesNote:
        "Nuestros socios cuentan con el respaldo de un equipo creciente de asociados y personal legal en la Ciudad de México, Cancún y Los Cabos.",
      titles: {
        "jesus-contreras-licea": "Socio, Derecho Inmobiliario y Financiero",
        "angel-robles-santisteban": "Socio, Derecho Inmobiliario y Fiscal",
      },
      bios: {
        "jesus-contreras-licea":
          "Socio en Robles & Co y BaRoCo Law en Los Cabos, Jesús ha cerrado más de 1,000 transacciones inmobiliarias y aporta más de 15 años de experiencia en derecho financiero, incluyendo puestos directivos en HSBC México y despachos de primer nivel. También imparte la cátedra de Derecho Corporativo, Cripto y Fintech en la Universidad Anáhuac. De Cancún a la Ciudad de México, atiende asuntos en toda la jurisdicción de México.",
        "angel-robles-santisteban":
          "Socio en Robles & Co y BaRoCo Law en Los Cabos, Ángel aporta más de 18 años de experiencia en derecho inmobiliario, con amplia experiencia en asuntos civiles, fiscales y del registro público de la propiedad. Ha guiado a individuos, familias y constructoras a través de cada etapa de la adquisición y regularización de propiedades. De la Ciudad de México a Cancún, atiende asuntos en todo el país.",
      },
    },
    services: {
      heading: "Áreas de práctica",
      whatWeHandleLabel: "Lo que manejamos",
      areas: {
        "real-estate": {
          title: "Bienes Raíces",
          teaser:
            "Guiamos a compradores y vendedores en cada etapa de una transacción inmobiliaria en México, desde la oferta inicial hasta el cierre, la coordinación notarial y la revisión de título.",
          summary:
            "Guiamos a compradores y vendedores en cada etapa de una transacción inmobiliaria en México, desde la oferta inicial hasta el cierre, la coordinación notarial y la revisión de título. Nuestra fortaleza particular son las compras transfronterizas: ayudamos a compradores extranjeros a navegar estructuras de fideicomiso, obligaciones fiscales y requisitos regulatorios específicos para extranjeros que adquieren propiedades en la Ciudad de México y Cancún.",
          whatWeHandle: [
            "Contratos de compraventa",
            "Revisión de título y debida diligencia",
            "Coordinación de cierre",
            "Estructuración de fideicomisos para compradores extranjeros",
            "Cumplimiento fiscal posterior a la compra",
          ],
        },
        "corporate-ma": {
          title: "Corporativo, Fusiones y Adquisiciones",
          teaser:
            "Asesoramos a empresas durante todo el ciclo de vida de las transacciones corporativas, desde la constitución y gobierno corporativo hasta fusiones, adquisiciones y levantamiento de capital.",
          summary:
            "Asesoramos a empresas durante todo el ciclo de vida de las transacciones corporativas, desde la constitución y el gobierno corporativo hasta fusiones, adquisiciones y levantamiento de capital. Nuestro equipo estructura operaciones tanto para entidades nacionales como extranjeras en los sectores civil, comercial y financiero.",
          whatWeHandle: [
            "Constitución de empresas y gobierno corporativo",
            "Estructuración de F&A y debida diligencia",
            "Transacciones de capital privado y capital de riesgo",
            "Estructuración de operaciones transfronterizas",
          ],
        },
        "banking-finance": {
          title: "Banca, Finanzas y Mercados de Capital",
          teaser:
            "Ayudamos a nuestros clientes a acceder a capital y estructurar transacciones financieras, desde relaciones bancarias tradicionales hasta la formación de vehículos de inversión.",
          summary:
            "Ayudamos a nuestros clientes a acceder a capital y estructurar transacciones financieras, desde relaciones bancarias tradicionales hasta la formación de vehículos de inversión. Nuestra experiencia abarca las finanzas institucionales y los instrumentos más nuevos que están transformando el movimiento de capital en México.",
          whatWeHandle: [
            "Formación de fondos de inversión",
            "Transacciones de mercados de capital",
            "Contratos de financiamiento",
            "Cumplimiento regulatorio para entidades financieras",
          ],
        },
        "blockchain-fintech": {
          title: "Blockchain, Activos Digitales y Fintech",
          teaser:
            "Estamos a la vanguardia del panorama evolutivo de activos digitales en México. Asesoramos en proyectos de tokenización, formación de SOFIPOs y los marcos regulatorios que rigen los criptoactivos y las operaciones fintech.",
          summary:
            "Estamos a la vanguardia del panorama evolutivo de activos digitales en México. Asesoramos en proyectos de tokenización, formación de SOFIPOs y los marcos regulatorios que rigen los criptoactivos y las operaciones fintech. Pocas firmas en México combinan experiencia en bienes raíces con este nivel de dominio en blockchain.",
          whatWeHandle: [
            "Emisión y estructuración de tokens",
            "Formación y licenciamiento de SOFIPOs",
            "Asesoría en contratos inteligentes y DAOs",
            "Cumplimiento regulatorio de criptoactivos",
          ],
        },
        "tax-trusts": {
          title: "Fiscal y Fideicomisos",
          teaser:
            "Brindamos asesoría fiscal en transacciones inmobiliarias y corporativas, y estructuramos fideicomisos para planificación patrimonial, protección de activos y fines de inversión. Esta es un área que se relaciona estrechamente con nuestras prácticas de bienes raíces y blockchain.",
          summary:
            "Brindamos asesoría fiscal en transacciones inmobiliarias y corporativas, y estructuramos fideicomisos para planificación patrimonial, protección de activos y fines de inversión. Esta es un área que se relaciona estrechamente con nuestras prácticas de bienes raíces y blockchain.",
          whatWeHandle: [
            "Asesoría fiscal transaccional",
            "Estructuración de fideicomisos",
            "Planificación patrimonial y sucesoria",
            "Cumplimiento fiscal para titulares de activos extranjeros",
          ],
        },
        "civil-family-disputes": {
          title: "Civil, Familiar y Litigios",
          teaser:
            "Manejamos una amplia gama de asuntos civiles y familiares, desde planificación patrimonial y herencias hasta contratos comerciales y resolución de disputas, con una tasa de éxito del 89% en casos litigados.",
          summary:
            "Manejamos una amplia gama de asuntos civiles y familiares, desde planificación patrimonial y herencias hasta contratos comerciales y resolución de disputas, con una tasa de éxito del 89% en casos litigados.",
          whatWeHandle: [
            "Derecho familiar y sucesiones",
            "Contratos civiles y comerciales",
            "Litigio y arbitraje",
            "Resolución de disputas y negociación",
          ],
        },
      },
    },
    cases: {
      heading: "Asuntos representativos que hemos manejado",
      continueReading: "Seguir leyendo",
      items: [
        {
          tag: "Cancún–Tulum · large-scale land acquisition",
          description:
            "Asesoramos una de las mayores adquisiciones de tierra realizadas en el corredor Cancún-Tulum para un desarrollo de gran relevancia regional.",
        },
        {
          tag: "Cancún · brand relaunch & rights integration",
          description:
            "Estructuramos el lanzamiento e integración de más de 300 titulares de derechos, desde hotel hasta club privado, reubicándolos en un nuevo desarrollo para respaldar uno de los relanzamientos de marca más emblemáticos de la región.",
        },
        {
          tag: "Mexico City · landmark redevelopment",
          description:
            "Obtuvimos la autorización gubernamental para demoler un edificio dañado por el sismo de 2017 en la Condesa, abriendo paso a uno de los redesarrollos más importantes de la zona.",
        },
        {
          tag: "Mexico City · high-net-worth real estate",
          description:
            "Acompañamos a clientes de alto patrimonio y políticamente expuestos en operaciones inmobiliarias dentro de algunos de los desarrollos más emblemáticos de la Ciudad de México, protegiendo su patrimonio y optimizando sus rendimientos.",
        },
        {
          tag: "Nationwide · developer marketing strategy",
          description:
            "Asesoramos a desarrolladores líderes en nuevas formas de comercializar sus proyectos residenciales, desde estrategias de marca hasta esquemas de venta con tecnología blockchain.",
        },
        {
          tag: "Nationwide · foreign investment & restricted zones",
          description:
            "Hemos asesorado a cientos de clientes extranjeros en la adquisición de propiedades e inversión en Cancún y otras zonas restringidas del país.",
        },
      ],
    },
    careers: {
      heading: "Únete a Robles & Co",
      intro:
        "Trabajamos con abogados en cada etapa de su carrera, desde quienes buscan realizar asesorías independientes junto con nosotros, hasta abogados con experiencia que buscan una posición a largo plazo, y despachos con los que ocasionalmente nos asociamos o incorporamos para asuntos especializados. Si eres abogado y buscas hacer crecer tu práctica, nos encantaría saber de ti.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        email: "Correo electrónico",
        emailPlaceholder: "tu@ejemplo.com",
        areaOfInterest: "Área de interés",
        areaOfInterestPlaceholder: "Selecciona un área de práctica",
        message: "Mensaje",
        messagePlaceholder: "Cuéntanos sobre tu experiencia y lo que buscas.",
        submit: "Enviar",
      },
      cvNote: "¿Prefieres enviar tu CV directamente? Escríbenos a",
    },
    footer: {
      text: "Impulsado por IA · Creado por JECL",
      privacyLink: "Aviso de Privacidad",
      copyright: "© 2026 Robles & Co",
    },
    privacy: {
      heading: "Aviso de Privacidad",
      lastUpdated: "Última actualización: agosto de 2026",
      intro:
        "Robles & Co es responsable del tratamiento de sus datos personales de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
      sections: {
        dataCollected: {
          heading: "Datos que recabamos",
          body: "Nombre, correo electrónico, número telefónico y la descripción de su situación legal, incluyendo cualquier documento que decida compartir con nosotros.",
        },
        purposes: {
          heading: "Finalidades",
          body: "Utilizamos sus datos para responder a su consulta, brindar asesoría legal y dar seguimiento a su caso. Si lo contactamos con información sobre nuestros servicios, usted podrá solicitar en cualquier momento que dejemos de hacerlo.",
        },
        transfers: {
          heading: "Transferencia de datos",
          body: "Sus datos podrán compartirse con notarios, autoridades o terceros únicamente cuando sea necesario para la gestión de su asunto legal, y siempre bajo estricta confidencialidad.",
        },
        arcoRights: {
          heading: "Derechos ARCO",
          body: "Usted tiene derecho a acceder, rectificar, cancelar u oponerse al uso de sus datos personales. Para ejercer estos derechos, contáctenos en contacto@roblesandco.mx.",
        },
        changes: {
          heading: "Modificaciones a este aviso",
          body: "Cualquier modificación a este aviso será publicada en esta misma página.",
        },
      },
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
