// Contenu du site Nova Tech Trust.
// Tout le texte de la page vient d'ici : modifiez ce fichier, pas les composants.
// Ton (brand book) : vouvoiement, « nous », phrases courtes, pas de point
// d'exclamation, pas d'emoji, pas de superlatifs, titres en casse de phrase.

export const site = {
  name: "Nova Tech Trust",
  signature: "La technologie, en confiance.",
  // TODO : remplacez par votre lien de prise de rendez-vous (Calendly, etc.)
  bookingUrl: "#contact",
  email: "contact@novatechtrust.fr", // TODO : adresse à confirmer
  linkedin: "#", // TODO
};

export const nav = [
  { label: "Offre", href: "#offre" },
  { label: "Méthode", href: "#methode" },
  { label: "Indicateurs", href: "#indicateurs" },
  { label: "Expérience", href: "#experience" },
  { label: "Ressources", href: "#ressources" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  kicker: "Copilote IA pour PMO",
  title: "Vos chefs de projet pilotent. Le reporting se fait sans eux.",
  lead:
    "Nous déployons un copilote IA multi-agents qui produit et contrôle vos reportings projet. En 30 jours, votre PMO alimente un tableau de bord que votre direction lit chaque lundi.",
  primaryCta: "Prendre contact",
  secondaryCta: "Voir l'offre",
  proof: [
    { value: "18 ans", label: "de transformation digitale" },
    { value: "4 M€/an", label: "budget des plus grands programmes pilotés" },
    { value: "20 à 70", label: "personnes par équipe dirigée" },
  ],
  trustLabel: "Programmes pilotés pour",
  trust: ["Stellantis", "RATP", "Europcar", "Greffes des tribunaux de commerce"],
};

export const beforeAfter = {
  title: "Moins de reporting à la main. Plus de projets livrés à l'heure.",
  before: {
    label: "Avant",
    items: [
      "Tableaux de bord montés à la main chaque semaine",
      "Relances par e-mail pour obtenir les avancements",
      "Chiffres contestés en comité de pilotage",
      "Projets sans propriétaire, sans date ou sans budget",
    ],
  },
  after: {
    label: "Après",
    items: [
      "Reportings produits et contrôlés automatiquement",
      "Alertes ciblées sur les jalons à risque",
      "Un tableau de bord unique, lu chaque lundi",
      "Un score de fiabilité des données suivi dans le temps",
    ],
  },
};

export const offers = [
  {
    kicker: "Étape 1",
    title: "Diagnostic PMO",
    body:
      "Audit de votre reporting et de votre gouvernance, score de fiabilité des données sur les 5 indicateurs, feuille de route priorisée.",
    price: "5 000 à 6 000 € HT",
    cta: "Demander un diagnostic",
  },
  {
    kicker: "Étape 2",
    title: "Build du copilote IA",
    body:
      "Mise en place de 2 à 3 agents ciblés : alignement stratégique, capacité, reporting et visibilité. Connectés à vos outils existants.",
    price: "30 000 à 45 000 € HT",
    cta: "Voir la méthode",
  },
  {
    kicker: "Inclus",
    title: "Adoption et formation",
    body:
      "Vos équipes sont formées à travailler avec le copilote, et des référents internes en assurent la continuité après notre départ.",
    price: "Inclus dans le build",
    cta: "Poser une question",
  },
];

export const method = {
  kicker: "Méthode",
  title: "Votre copilote en 4 étapes",
  lead: "Une démarche courte et chiffrée, du diagnostic jusqu'à l'adoption par vos équipes.",
  steps: [
    {
      title: "Diagnostic",
      body:
        "Nous analysons vos reportings, vos rituels de gouvernance et la qualité de vos données projet.",
    },
    {
      title: "Feuille de route",
      body:
        "Nous priorisons les agents à déployer selon le temps gagné et le risque réduit. Le plan est chiffré.",
    },
    {
      title: "Build",
      body:
        "Nous construisons et connectons les agents à vos outils, dans le respect du RGPD et de vos règles de sécurité.",
    },
    {
      title: "Adoption",
      body:
        "Nous formons vos chefs de projet et désignons des référents internes. Les indicateurs sont suivis dans la durée.",
    },
  ],
};

export const indicators = {
  kicker: "Indicateurs",
  title: "Les 5 indicateurs que le copilote tient à jour",
  lead:
    "Inspirés des tableaux de bord d'exécution et de qualité des données des outils de gestion de portefeuille.",
  items: [
    { code: "IND-01", title: "Projets en retard", body: "Les projets dont la date de fin glisse, classés par impact." },
    { code: "IND-02", title: "Jalons manqués ou à risque", body: "Les échéances dépassées et celles qui le seront probablement." },
    { code: "IND-03", title: "Écart coût / budget", body: "La consommation réelle comparée au budget prévu, par projet." },
    { code: "IND-04", title: "Équipes non staffées", body: "Les affectations de ressources manquantes ou en attente." },
    {
      code: "IND-05",
      title: "Fiabilité des données",
      body: "Les éléments sans coût prévu, sans propriétaire, sans date ou sans objectif.",
      highlight: true,
    },
  ],
};

// Expérience de pilotage : remplace la section « projets » tant qu'aucune
// référence client n'existe sur l'offre copilote. Textes à valider.
export const experience = {
  kicker: "Expérience",
  title: "Des programmes de transformation pilotés de bout en bout",
  lead: "Une sélection de missions de direction de projet et de programme, classées par secteur.",
  filters: ["Tous", "Mobilité", "Transport", "Secteur public", "Énergie"],
  items: [
    {
      sector: "Mobilité",
      tags: "Direction de programme, ServiceNow",
      client: "Stellantis",
      body: "Pilotage de programmes de transformation digitale dans l'automobile, avec gouvernance et reporting de comité de pilotage.",
    },
    {
      sector: "Transport",
      tags: "CSM / FSM, conduite du changement",
      client: "RATP",
      body: "Direction de projet sur la relation client et le service terrain, de la conception au déploiement.",
    },
    {
      sector: "Mobilité",
      tags: "Direction de projet, PMO",
      client: "Europcar",
      body: "Pilotage de projet et structuration du PMO sur un programme de transformation.",
    },
    {
      sector: "Secteur public",
      tags: "Systèmes d'information judiciaires",
      client: "Greffes des tribunaux de commerce",
      body: "Direction de projet sur les systèmes d'information des greffes, depuis 2025.",
    },
    {
      sector: "Énergie",
      tags: "CRM, direction de projet",
      client: "Programme CRM énergie",
      body: "Pilotage d'un projet CRM dans le secteur de l'énergie.",
    },
  ],
  confidential: "D'autres missions sont confidentielles. Nous vous en parlons lors d'un premier échange.",
};

// Témoignages : laissez vide tant que vous n'avez pas d'avis client réel.
// La section s'affiche automatiquement dès qu'un élément est ajouté.
export const testimonials: { quote: string; author: string; role: string }[] = [];

export const commitments = {
  kicker: "Engagements",
  title: "Un cadre clair. Des engagements tenus.",
  lead: "Ce que vous obtenez, mesuré avant et après la mission.",
  stats: [
    { value: "30 jours", label: "pour un premier tableau de bord en production" },
    { value: "≈ 4 h", label: "gagnées par semaine et par poste PMO (ordre de grandeur)" },
    { value: "5", label: "indicateurs suivis automatiquement" },
    { value: "100 %", label: "des équipes formées, avec des référents internes" },
  ],
};

export const resources = {
  kicker: "Ressources",
  title: "Nos guides pour un PMO augmenté par l'IA",
  lead: "Méthodes, chiffres et retours de terrain, en accès libre.",
  items: [
    {
      title: "Playbook IA pour les équipes projet",
      body: "Comment une équipe de gestion de projet adopte l'IA, étape par étape.",
      href: "#",
    },
    {
      title: "Copilote IA PMO : cas d'usage et ROI",
      body: "Les cas d'usage d'un copilote agentique et la façon d'en mesurer le retour.",
      href: "#",
    },
    {
      title: "Simulateur de ROI",
      body: "Estimez le temps et le budget récupérés sur votre propre PMO.",
      href: "#",
    },
  ],
  cta: "Voir toutes les ressources",
};

export const faq = {
  title: "Questions fréquentes",
  lead: "Une question qui n'est pas ici ? Posez-la lors du premier échange.",
  items: [
    {
      q: "En quoi consiste le diagnostic PMO ?",
      a: "Nous analysons vos reportings, vos rituels de gouvernance et la qualité de vos données projet. Vous repartez avec un score de fiabilité des données et une feuille de route chiffrée, même si vous ne poursuivez pas avec nous.",
    },
    {
      q: "Combien de temps faut-il pour un premier résultat ?",
      a: "Un premier tableau de bord est en production en 30 jours environ après le lancement du build. Nous avançons par étapes pour que le gain soit visible dès les premières semaines.",
    },
    {
      q: "Qu'est-ce qu'un copilote IA multi-agents ?",
      a: "Plusieurs agents spécialisés travaillent ensemble : l'un collecte les avancements, un autre contrôle la cohérence des données, un autre prépare le reporting. Chaque agent a un rôle précis et vos équipes gardent la décision.",
    },
    {
      q: "Mes données sont-elles en sécurité ?",
      a: "Oui. Nous respectons le RGPD, appliquons vos règles d'accès et choisissons un hébergement adapté à votre niveau d'exigence. Les usages sont documentés au regard de l'AI Act.",
    },
    {
      q: "Avec quels outils travaillez-vous ?",
      a: "Nous nous connectons à vos outils existants : outils de gestion de portefeuille comme ServiceNow, outils de suivi de projet, tableurs et messageries. Le copilote s'adapte à votre environnement, pas l'inverse.",
    },
    {
      q: "La formation est-elle incluse ?",
      a: "Oui. La formation de vos équipes et la désignation de référents internes font partie de chaque build. C'est ce qui rend le résultat durable.",
    },
  ],
};

export const finalCta = {
  title: "Vos chiffres de comité sont-ils fiables ?",
  lead:
    "Un échange de 15 minutes, sans engagement, pour comprendre votre PMO et voir où le copilote vous ferait gagner le plus de temps.",
  cta: "Prendre contact",
};

export const footer = {
  about:
    "Cabinet boutique qui donne de l'élan aux équipes de management avec l'IA. Copilote IA agentique pour PMO, pour les PME et ETI.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "Offre", href: "#offre" },
        { label: "Méthode", href: "#methode" },
        { label: "Indicateurs", href: "#indicateurs" },
        { label: "Expérience", href: "#experience" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { label: "Playbook IA pour les équipes projet", href: "#" },
        { label: "Cas d'usage et ROI", href: "#" },
        { label: "Simulateur de ROI", href: "#" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "Mentions légales", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
        { label: "CGV", href: "#" },
      ],
    },
  ],
};
