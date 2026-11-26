// Bibliothèque de prompts Nova Tech Trust.
// Source : les 16 skills du plugin « management consulting »
// (github.com/alachgar/claude-management-consulting-plugin), adaptés en français
// pour les directions de projet, les PMO et les équipes de management.
//
// Chaque prompt est autonome : il fonctionne dans Claude, ChatGPT, Copilot ou Mistral.
// Les champs entre [CROCHETS] sont à remplacer avant envoi.
// Ton : vouvoiement, phrases courtes, pas de point d'exclamation, pas d'emoji.

export type PromptCategory =
  | "Cadrer"
  | "Chiffrer"
  | "Planifier"
  | "Piloter"
  | "Faire adopter"
  | "Livrer et clôturer";

export type PromptItem = {
  id: string;
  category: PromptCategory;
  title: string;
  /** Skill du plugin dont le prompt est tiré. */
  skill: string;
  /** Quand l'utiliser, en une phrase. */
  when: string;
  /** Ce que vous obtenez. */
  output: string;
  prompt: string;
};

export const promptLibrary = {
  kicker: "Ressources",
  title: "Bibliothèque de prompts pour le pilotage de projet",
  lead:
    "Des prompts prêts à l'emploi, tirés de méthodes de conseil éprouvées. Copiez, remplacez les champs entre crochets, envoyez à votre assistant IA.",
  howTo: [
    { title: "Choisissez", body: "Filtrez par étape de projet ou cherchez un mot-clé." },
    { title: "Complétez", body: "Remplacez chaque [CHAMP] par vos données réelles. Plus le contexte est précis, meilleur est le résultat." },
    { title: "Vérifiez", body: "Relisez chaque chiffre et chaque nom avant de diffuser. L'IA prépare, vous décidez." },
  ],
  filters: ["Tous", "Cadrer", "Chiffrer", "Planifier", "Piloter", "Faire adopter", "Livrer et clôturer"] as const,
  styleToggle: "Ajouter les règles de rédaction",
  styleHint:
    "Ajoute à la fin du prompt nos règles de rédaction : style direct, chiffres sourcés, aucune donnée inventée.",
  // Règles communes issues du skill writing-style, ajoutées en option à chaque prompt.
  styleRules: `Règles de rédaction :
- Écrivez comme un consultant senior : phrases courtes, avis tranchés, voix active.
- Chiffrez dès que possible. « Le budget dérive de 12 % » plutôt que « le budget connaît une dérive importante ».
- N'inventez aucun chiffre, aucun nom, aucune référence. S'il manque une donnée, demandez-la ou signalez-la comme hypothèse à valider.
- Présentez les benchmarks comme indicatifs, avec leur source et leur contexte.
- Signalez comme « estimation directionnelle » tout score, délai ou probabilité sans données sous-jacentes.
- Concentrez l'analyse sur les 2 ou 3 points où se trouve le vrai enjeu. Survolez le reste.
- Évitez les formules creuses : « il convient de noter », « dans un monde en constante évolution », « au final ».`,
  disclaimer:
    "Ces prompts produisent des premières versions. Toute sortie doit être relue par une personne qui connaît le contexte avant d'être partagée.",
  sourceLabel: "Méthodes adaptées du plugin open source Management Consulting (licence MIT).",
  sourceUrl: "https://github.com/alachgar/claude-management-consulting-plugin",
  cta: {
    title: "Vous voulez ces prompts branchés sur vos données projet ?",
    body: "C'est le rôle du copilote IA : les mêmes méthodes, appliquées chaque semaine à votre portefeuille, sans copier-coller.",
    label: "Prendre contact",
  },
};

export const prompts: PromptItem[] = [
  // ───────────── Cadrer ─────────────
  {
    id: "P-01",
    category: "Cadrer",
    title: "Formuler le vrai problème",
    skill: "strategic-analysis",
    when: "Au démarrage, quand la demande est floue ou que chacun la décrit différemment.",
    output: "Une question SMART, un périmètre, des critères de succès et les hypothèses à tester.",
    prompt: `Vous êtes un consultant senior en stratégie. Aidez-moi à transformer une demande floue en problème clairement formulé.

Contexte :
- Organisation : [SECTEUR, TAILLE, ACTIVITÉ]
- Demande telle qu'exprimée : [CITATION DU COMMANDITAIRE]
- Ce que nous savons déjà : [FAITS, CHIFFRES DISPONIBLES]
- Contraintes : [DÉLAI, BUDGET, SUJETS HORS PÉRIMÈTRE]

Produisez :
1. La question clé, formulée de façon spécifique, mesurable et datée.
2. Le périmètre : ce qui est inclus, ce qui est exclu, et pourquoi.
3. Les critères de succès : à quoi reconnaîtra-t-on, dans 3 mois, que le problème est résolu.
4. Les décideurs et les parties prenantes à impliquer.
5. Trois hypothèses de départ testables, chacune avec l'analyse qui la confirmerait ou l'infirmerait.

Avant de répondre, posez-moi au maximum 3 questions si une information indispensable manque.`,
  },
  {
    id: "P-02",
    category: "Cadrer",
    title: "Construire un arbre d'hypothèses MECE",
    skill: "strategic-analysis",
    when: "Quand il faut découper un problème complexe en analyses concrètes et réparties.",
    output: "Un arbre d'hypothèses sans recouvrement, priorisé, avec le plan d'analyse associé.",
    prompt: `Vous êtes un consultant senior. Décomposez le problème suivant en arbre d'hypothèses MECE (mutuellement exclusif, collectivement exhaustif).

Problème : [QUESTION CLÉ]
Contexte : [ORGANISATION, ENJEU, DONNÉES DISPONIBLES]

Consignes :
- Niveau 1 : 3 à 5 branches qui ne se recouvrent pas et couvrent tout le problème.
- Niveau 2 : pour chaque branche, des sous-hypothèses formulées comme des affirmations testables (« Le retard vient principalement de... »), pas comme des thèmes.
- Pour chaque sous-hypothèse : l'analyse à mener, la donnée nécessaire, la source probable.
- Priorisez les branches selon deux critères : impact sur la décision et facilité à prouver. Indiquez les 2 branches à traiter en premier.
- Vérifiez vous-même le caractère MECE et signalez tout recouvrement restant.

Présentez l'arbre sous forme de liste indentée, puis un tableau « hypothèse / analyse / donnée / priorité ».`,
  },
  {
    id: "P-03",
    category: "Cadrer",
    title: "Choisir et appliquer le bon cadre d'analyse",
    skill: "strategic-analysis",
    when: "Pour une décision de positionnement, de croissance ou de portefeuille.",
    output: "Le cadre le plus adapté, appliqué rigoureusement, avec les implications concrètes.",
    prompt: `Vous êtes un consultant senior en stratégie. J'ai besoin d'éclairer la décision suivante : [DÉCISION À PRENDRE].

Contexte : [MARCHÉ, CONCURRENTS, POSITION ACTUELLE, CHIFFRES CLÉS]

1. Recommandez le ou les cadres d'analyse les plus adaptés (Five Forces, PESTLE, SWOT, 7S, VRIO, Ansoff, matrice BCG, Three Horizons, chaîne de valeur, Business Model Canvas, Strategy Canvas). Justifiez en deux phrases. Pour une question étroite, un seul cadre bien appliqué vaut mieux que deux survolés.
2. Appliquez le cadre retenu à mes données. Ne remplissez pas les cases pour la forme : pour chaque élément, indiquez l'implication concrète (« donc nous devrions... »).
3. Si vous utilisez deux cadres, faites la synthèse : où convergent-ils, où se contredisent-ils, que faut-il en conclure.
4. Terminez par la recommandation en une phrase, puis les 3 données à collecter pour la fiabiliser.`,
  },
  {
    id: "P-04",
    category: "Cadrer",
    title: "Préparer l'atelier de lancement",
    skill: "engagement-setup",
    when: "Dans les jours qui précèdent le kick-off d'un projet ou d'une mission.",
    output: "Un agenda minuté, les décisions à obtenir et le projet de charte à valider en séance.",
    prompt: `Vous êtes un directeur de projet expérimenté. Préparez l'atelier de lancement du projet suivant.

Projet : [NOM, OBJECTIF, DURÉE, BUDGET]
Commanditaire : [NOM, FONCTION]
Participants prévus : [LISTE AVEC FONCTIONS]
Durée de l'atelier : [DURÉE]
Points de tension connus : [SUJETS SENSIBLES, DÉSACCORDS]

Produisez :
1. Les 3 décisions que l'atelier doit obtenir. Un lancement sans décision est une réunion d'information.
2. Un agenda minuté : ouverture par le commanditaire, objectifs et critères de succès, périmètre (inclus / exclu), gouvernance et rituels, risques, prochaines étapes.
3. Un projet de charte projet d'une page à faire valider en séance : objectif, périmètre, livrables, jalons, rôles, critères de succès.
4. Pour chaque point de tension : comment l'aborder en séance ou en amont, en entretien individuel.
5. La liste des documents à envoyer 48 heures avant.`,
  },
  {
    id: "P-05",
    category: "Cadrer",
    title: "Cartographier les parties prenantes",
    skill: "engagement-setup",
    when: "Avant de lancer un projet qui touche plusieurs directions.",
    output: "Une matrice influence / intérêt, le niveau de soutien de chacun et une stratégie par acteur.",
    prompt: `Vous êtes un directeur de projet expérimenté. Aidez-moi à cartographier les parties prenantes de ce projet.

Projet : [OBJECTIF, PÉRIMÈTRE]
Parties prenantes connues : [NOM OU FONCTION, CE QUE JE SAIS DE SA POSITION]

Pour chaque partie prenante :
1. Influence (forte / moyenne / faible) et intérêt pour le projet (fort / moyen / faible).
2. Position actuelle : soutien actif, soutien passif, neutre, réticent, opposé. Indiquez sur quoi repose votre lecture.
3. Ce qu'elle gagne et ce qu'elle perd avec le projet.
4. La position cible et l'action pour l'y amener, avec un porteur et une échéance.

Puis :
- Classez-les dans une matrice influence / intérêt (gérer de près, satisfaire, informer, surveiller).
- Identifiez les 3 acteurs dont le basculement change l'issue du projet.
- Signalez les parties prenantes probablement oubliées dans ma liste.`,
  },
  {
    id: "P-06",
    category: "Cadrer",
    title: "Rédiger un guide d'entretien de diagnostic",
    skill: "engagement-setup",
    when: "Pour une phase de diagnostic avec des entretiens métiers ou managers.",
    output: "Un guide de 45 minutes, structuré par hypothèse, avec relances et demande de données.",
    prompt: `Vous êtes un consultant senior. Rédigez un guide d'entretien de 45 minutes pour le diagnostic suivant.

Sujet du diagnostic : [EX. QUALITÉ DU REPORTING PROJET]
Profil de l'interlocuteur : [FONCTION, ANCIENNETÉ, LIEN AVEC LE SUJET]
Hypothèses à tester : [HYPOTHÈSE 1, 2, 3]

Structure attendue :
1. Introduction (3 min) : objectif, confidentialité, usage des réponses.
2. Contexte et rôle (5 min).
3. Un bloc par hypothèse (10 min chacun) : questions ouvertes, relances pour obtenir des exemples précis et des chiffres, signaux qui confirment ou infirment l'hypothèse.
4. Question ouverte de fin : « Si vous pouviez changer une seule chose... »
5. Données et documents à demander après l'entretien.

Évitez les questions fermées et les questions qui suggèrent la réponse. Ajoutez une grille de prise de notes d'une page.`,
  },
  {
    id: "P-07",
    category: "Cadrer",
    title: "Analyser un appel d'offres et décider d'y répondre",
    skill: "proposal-development",
    when: "À réception d'un cahier des charges ou d'un RFP.",
    output: "Une note go / no-go scorée, les critères d'évaluation décodés et les thèmes gagnants.",
    prompt: `Vous êtes directeur commercial d'un cabinet de conseil. Analysez l'appel d'offres ci-dessous et aidez-moi à décider si nous y répondons.

Appel d'offres : [COLLER LE TEXTE OU LE RÉSUMÉ]
Notre offre et nos références pertinentes : [DESCRIPTION]
Relation existante avec le client : [AUCUNE, CONTACTS, MISSIONS PASSÉES]
Concurrents probables : [NOMS SI CONNUS]

Produisez :
1. Le besoin réel derrière le besoin exprimé, en 3 phrases.
2. Les critères d'évaluation et leur poids, explicites ou implicites.
3. Un score go / no-go sur 5 critères notés de 1 à 5 : adéquation de l'offre, relation client, position concurrentielle, rentabilité, capacité à livrer. Recommandation finale et seuil retenu.
4. Les risques cachés : périmètre flou, délais irréalistes, critères taillés pour un concurrent.
5. Si go : 3 thèmes gagnants, chacun avec la preuve qui le rend crédible.
6. Les questions à poser à l'acheteur pendant la période de questions.`,
  },
  {
    id: "P-08",
    category: "Cadrer",
    title: "Rédiger la note de synthèse d'une proposition",
    skill: "proposal-development",
    when: "Pour la première page d'une proposition commerciale ou d'une note de cadrage.",
    output: "Une synthèse d'une page centrée sur le résultat client, pas sur le cabinet.",
    prompt: `Vous êtes un associé de cabinet de conseil. Rédigez la note de synthèse (une page maximum) de notre proposition.

Client et enjeu : [CLIENT, PROBLÈME, CONSÉQUENCE S'IL N'EST PAS RÉSOLU]
Notre approche : [ÉTAPES, DURÉE]
Résultats attendus : [GAINS CHIFFRÉS SI DISPONIBLES]
Différenciateurs : [CE QUE NOUS FAISONS QUE LES AUTRES NE FONT PAS, AVEC PREUVES]
Investissement : [MONTANT, MODALITÉS]

Structure :
1. Votre situation : l'enjeu du client, dans ses mots.
2. Ce que vous obtiendrez : les résultats, chiffrés quand c'est possible.
3. Comment nous y arriverons : l'approche en 3 ou 4 étapes.
4. Pourquoi nous : 2 ou 3 preuves concrètes, pas d'adjectifs.
5. Investissement et prochaine étape.

Le client doit apparaître plus souvent que le cabinet. Pas de superlatifs. Si un gain n'est pas chiffrable sur la base de mes données, ne l'inventez pas : signalez-le.`,
  },

  // ───────────── Chiffrer ─────────────
  {
    id: "P-09",
    category: "Chiffrer",
    title: "Construire un business case",
    skill: "financial-modeling",
    when: "Pour obtenir un arbitrage go / no-go sur un investissement ou un projet.",
    output: "ROI, VAN, TRI et délai de retour, avec hypothèses explicites et scénarios.",
    prompt: `Vous êtes un analyste financier senior. Construisez le business case de l'initiative suivante.

Initiative : [DESCRIPTION]
Décision attendue : [GO / NO-GO, CHOIX ENTRE OPTIONS]
Coûts connus : [INVESTISSEMENT INITIAL, COÛTS RÉCURRENTS, PAR ANNÉE]
Bénéfices attendus : [GAINS DE TEMPS, ÉCONOMIES, REVENUS, AVEC LEUR ORIGINE]
Horizon : [3 OU 5 ANS]
Taux d'actualisation : [TAUX OU « À PROPOSER »]

Produisez :
1. Le tableau des flux annuels (coûts, bénéfices, flux net, cumul).
2. ROI, VAN, TRI et délai de retour sur investissement, avec le détail du calcul.
3. La liste des hypothèses, chacune marquée « donnée client », « benchmark à sourcer » ou « hypothèse à valider ».
4. Trois scénarios (prudent, central, favorable) et ce qui les distingue.
5. Le coût de l'inaction : ce que coûte le statu quo sur la même période.
6. La recommandation en 3 phrases.

N'inventez aucun montant. S'il manque une donnée, proposez une méthode d'estimation et marquez le chiffre comme illustratif.`,
  },
  {
    id: "P-10",
    category: "Chiffrer",
    title: "Tester la sensibilité des hypothèses",
    skill: "financial-modeling",
    when: "Quand un business case existe et qu'il faut savoir sur quoi il repose vraiment.",
    output: "Le classement des hypothèses par impact, le point de bascule et les données à fiabiliser.",
    prompt: `Vous êtes un analyste financier senior. Voici un business case : [COLLER LES HYPOTHÈSES ET LES RÉSULTATS].

1. Identifiez les 5 hypothèses qui pèsent le plus sur la VAN ou le ROI.
2. Pour chacune, calculez l'effet d'une variation de plus ou moins 20 %. Présentez-le en tableau de type tornado, de l'hypothèse la plus sensible à la moins sensible.
3. Calculez le point de bascule : la valeur à partir de laquelle le projet n'est plus rentable, pour les 2 hypothèses les plus sensibles.
4. Pour chaque hypothèse critique, dites si elle est solide (mesurée), fragile (estimée) ou spéculative (supposée), et comment la fiabiliser rapidement.
5. Concluez : le projet reste-t-il défendable si l'hypothèse la plus fragile se révèle fausse ?

C'est ici que se joue la crédibilité du business case. Soyez exigeant.`,
  },
  {
    id: "P-11",
    category: "Chiffrer",
    title: "Chiffrer le ROI d'un projet IA",
    skill: "financial-modeling",
    when: "Avant d'investir dans un copilote, un agent ou un outil d'IA générative.",
    output: "Un modèle de coûts complet, des gains réalistes avec courbe d'adoption, et les pièges classiques.",
    prompt: `Vous êtes un analyste financier spécialisé dans les investissements technologiques. Chiffrez le retour sur investissement du projet IA suivant.

Projet : [EX. COPILOTE DE REPORTING POUR LE PMO]
Population concernée : [NOMBRE DE PERSONNES, FONCTIONS]
Temps actuellement consacré à la tâche : [HEURES PAR SEMAINE ET PAR PERSONNE]
Coût chargé moyen : [EUROS PAR HEURE OU PAR JOUR]
Coûts du projet : [BUILD, LICENCES, USAGE, MAINTENANCE]

Consignes :
1. Coûts : distinguez build, run (licences, consommation, hébergement), maintenance des prompts et des connecteurs, formation et conduite du changement. Les coûts de run et d'adoption sont souvent sous-estimés.
2. Gains : appliquez une courbe d'adoption progressive (pas 100 % dès le premier mois) et un taux de temps réellement réinvesti. Distinguez gains de productivité, gains de qualité (erreurs évitées) et gains de décision (alertes plus tôt).
3. Calculez le délai de retour et le ROI à 3 ans, en scénario prudent et central.
4. Listez les 3 pièges de modélisation propres aux projets IA dans ce cas précis.

Marquez chaque chiffre non fourni par moi comme hypothèse à valider.`,
  },
  {
    id: "P-12",
    category: "Chiffrer",
    title: "Structurer une offre tarifaire",
    skill: "engagement-pricing",
    when: "Pour fixer le prix d'une mission, d'un forfait ou d'un abonnement.",
    output: "Le modèle tarifaire adapté, la marge calculée et la stratégie de négociation.",
    prompt: `Vous êtes un expert en tarification des prestations de conseil. Aidez-moi à structurer le prix de la mission suivante.

Mission : [OBJECTIF, LIVRABLES, DURÉE]
Équipe prévue : [PROFILS, JOURS PAR PROFIL]
Coût interne par profil : [EUROS PAR JOUR]
Niveau de certitude sur le périmètre : [ÉLEVÉ / MOYEN / FAIBLE]
Valeur estimée pour le client : [GAINS ATTENDUS SI CONNUS]

1. Recommandez le modèle (forfait, régie, au résultat, abonnement, hybride) selon la certitude du périmètre et la mesurabilité de la valeur. Expliquez pourquoi les autres ne conviennent pas.
2. Calculez le prix plancher (coût complet), le prix cible et la marge associée.
3. Si la valeur client est connue, positionnez le prix par rapport à elle.
4. Proposez l'échéancier de paiement et les clauses qui protègent la marge : gestion des changements, plafond de responsabilité, hypothèses de prix.
5. Préparez la négociation : ce que nous pouvons concéder contre quoi (jamais de remise sans contrepartie), et le prix en dessous duquel nous refusons.`,
  },
  {
    id: "P-13",
    category: "Chiffrer",
    title: "Mener une due diligence fournisseur ou cible",
    skill: "due-diligence",
    when: "Avant de choisir un éditeur, un partenaire stratégique ou une cible d'acquisition.",
    output: "Un plan de diligence priorisé, les signaux d'alerte et une recommandation conditionnée.",
    prompt: `Vous êtes un consultant senior en due diligence. J'évalue [ENTREPRISE OU FOURNISSEUR] dans le cadre de [ACQUISITION / PARTENARIAT / CHOIX D'UN ÉDITEUR].

Ce que je sais : [ACTIVITÉ, CHIFFRES, CLIENTS, TECHNOLOGIE]
Ce qui motive l'opération : [THÈSE]
Délai pour décider : [DÉLAI]

1. Priorisez les axes de diligence (commercial, opérationnel, financier, technologique, juridique) selon la thèse et le délai. Allez en profondeur sur les 2 axes qui peuvent faire échouer l'opération.
2. Pour chaque axe prioritaire : les questions clés, les documents à demander, les analyses à mener.
3. Listez les signaux d'alerte à surveiller : concentration clients, qualité du revenu récurrent, dette technique, dépendance à des personnes clés.
4. Préparez la structure de la note de recommandation : thèse, forces, préoccupations, risques notés, conditions préalables, prochaines étapes.

Séparez clairement ce qui est vérifié de ce qui reste à vérifier.`,
  },

  // ───────────── Planifier ─────────────
  {
    id: "P-14",
    category: "Planifier",
    title: "Comparer des options stratégiques",
    skill: "implementation-planning",
    when: "Quand plusieurs scénarios sont sur la table et qu'il faut en recommander un.",
    output: "3 à 4 options réellement différentes, une grille de notation et une recommandation testée.",
    prompt: `Vous êtes un consultant senior en stratégie. Aidez-moi à construire et comparer les options pour la décision suivante : [DÉCISION].

Contexte : [SITUATION, CONTRAINTES, BUDGET, DÉLAI]
Options déjà envisagées : [LISTE, OU « AUCUNE »]

1. Proposez 3 ou 4 options structurellement différentes (pas trois variantes de la même idée). Incluez toujours l'option « ne rien changer » comme référence.
2. Définissez 4 à 6 critères d'évaluation pondérés (valeur, coût, risque, délai, faisabilité, alignement stratégique). Justifiez les poids.
3. Notez chaque option de 1 à 5 sur chaque critère, avec une phrase de justification par note.
4. Testez la recommandation : quelle option gagne si les poids changent ? Dans quel scénario externe l'option retenue devient-elle mauvaise ?
5. Rédigez la recommandation en 3 phrases, avec les conditions de succès.

Les notes sont des estimations directionnelles : indiquez lesquelles reposent sur des données et lesquelles sur du jugement.`,
  },
  {
    id: "P-15",
    category: "Planifier",
    title: "Construire une feuille de route par phases",
    skill: "implementation-planning",
    when: "Quand une recommandation est validée et qu'il faut la rendre exécutable.",
    output: "Une feuille de route en phases, avec dépendances, jalons, ressources et critères de passage.",
    prompt: `Vous êtes un directeur de programme. Transformez la recommandation suivante en feuille de route exécutable.

Recommandation validée : [DESCRIPTION]
Horizon : [6 / 12 / 18 MOIS]
Ressources disponibles : [ÉQUIPES, BUDGET]
Contraintes fixes : [DATES IMPOSÉES, GELS, DÉPENDANCES EXTERNES]

Produisez :
1. 3 ou 4 phases, chacune avec : nom, durée, objectif, initiatives clés, livrables, critères de succès pour passer à la phase suivante.
2. Des gains rapides visibles dans les 60 premiers jours.
3. La carte des dépendances entre initiatives, et le chemin critique.
4. Les jalons de décision pour le comité de pilotage.
5. Les besoins en ressources par phase, avec les pics de charge.
6. Les 5 risques principaux sur l'exécution et leur parade.

Présentez la feuille de route en tableau, puis un résumé d'une demi-page pour la direction.`,
  },
  {
    id: "P-16",
    category: "Planifier",
    title: "Remettre un programme en difficulté sur les rails",
    skill: "implementation-planning",
    when: "Quand un projet dérive en délai, en budget ou en confiance.",
    output: "Un diagnostic des causes, un plan de redressement à 30 jours et les arbitrages à demander.",
    prompt: `Vous êtes un directeur de programme spécialisé dans le redressement de projets. Voici la situation :

Projet : [OBJECTIF, BUDGET, DATE DE FIN PRÉVUE]
Constat : [RETARD, DÉPASSEMENT, PERTE DE CONFIANCE, AVEC CHIFFRES]
Historique : [CE QUI A ÉTÉ TENTÉ]
Parties prenantes clés : [COMMANDITAIRE, ÉQUIPES, FOURNISSEURS]

1. Diagnostiquez les causes racines, en distinguant symptômes et causes. Classez-les : cadrage, gouvernance, ressources, technique, fournisseur, adhésion.
2. Dites franchement si le projet est récupérable en l'état, récupérable avec un recadrage, ou à arrêter.
3. Proposez un plan de redressement à 30 jours : actions, porteurs, échéances.
4. Listez les arbitrages à demander au commanditaire (périmètre, délai, budget, ressources), avec l'impact de chaque option.
5. Rédigez le message au comité de pilotage en 5 phrases maximum.`,
  },
  {
    id: "P-17",
    category: "Planifier",
    title: "Diagnostiquer un processus avec le DMAIC",
    skill: "process-excellence",
    when: "Quand un processus est trop lent, trop coûteux ou génère trop d'erreurs.",
    output: "Une analyse Définir, Mesurer, Analyser, Améliorer, Contrôler, avec causes racines et gains chiffrés.",
    prompt: `Vous êtes un expert Lean Six Sigma. Appliquez la démarche DMAIC au processus suivant.

Processus : [EX. PRODUCTION DU REPORTING MENSUEL]
Problème constaté : [DÉLAI, ERREURS, COÛT, AVEC CHIFFRES]
Étapes actuelles : [DESCRIPTION OU LISTE]
Données disponibles : [TEMPS PAR ÉTAPE, VOLUMES, TAUX D'ERREUR]

1. Définir : énoncé du problème chiffré, objectif, périmètre via un SIPOC (fournisseurs, entrées, processus, sorties, clients).
2. Mesurer : les indicateurs à suivre (délai de traversée, temps de traitement, taux d'erreur), la situation de référence, les données manquantes.
3. Analyser : les gaspillages (attentes, ressaisies, corrections, validations inutiles), les causes racines par la méthode des 5 pourquoi, et les 20 % de causes qui expliquent 80 % du problème.
4. Améliorer : 3 à 5 solutions, avec gain estimé, effort et ordre de mise en œuvre.
5. Contrôler : les indicateurs de suivi, les seuils d'alerte, le propriétaire du processus.

Chiffrez l'impact financier des gains, en signalant les hypothèses.`,
  },
  {
    id: "P-18",
    category: "Planifier",
    title: "Concevoir l'organisation d'un PMO",
    skill: "org-design",
    when: "Pour créer, redimensionner ou réorganiser un PMO ou une fonction projet.",
    output: "Les options de structure, les rôles, les droits de décision et le plan de transition.",
    prompt: `Vous êtes un consultant senior en organisation. Aidez-moi à concevoir l'organisation de [PMO / FONCTION].

Stratégie et attentes de la direction : [CE QUE LA FONCTION DOIT PERMETTRE]
Situation actuelle : [EFFECTIFS, RATTACHEMENTS, IRRITANTS]
Portefeuille : [NOMBRE DE PROJETS, TAILLE, DIVERSITÉ]
Contraintes : [BUDGET, CULTURE, OUTILS]

1. Traduisez la stratégie en 4 ou 5 exigences de conception (ce que la structure doit rendre facile).
2. Comparez 3 modèles (PMO de support, de contrôle, de pilotage stratégique, ou hybride) au regard de ces exigences.
3. Pour le modèle recommandé : organigramme, rôles et responsabilités, nombre de personnes encadrées par manager, droits de décision (qui décide, qui est consulté).
4. Les interfaces avec les directions métiers, la DSI et la finance.
5. Le plan de transition en 3 étapes, avec les risques humains et la façon de les gérer.

La structure suit la stratégie : si l'une de mes exigences est contradictoire, dites-le.`,
  },

  // ───────────── Piloter ─────────────
  {
    id: "P-19",
    category: "Piloter",
    title: "Rédiger le rapport d'avancement hebdomadaire",
    skill: "project-governance",
    when: "Chaque semaine, avant diffusion au commanditaire ou au comité.",
    output: "Un rapport de deux pages, avec une synthèse de 3 phrases et une météo honnête.",
    prompt: `Vous êtes un directeur de projet expérimenté. Rédigez le rapport d'avancement à partir de mes notes brutes.

Notes de la période : [COLLER LES NOTES, COMPTES RENDUS, CHIFFRES]
Budget : [TOTAL, CONSOMMÉ À DATE, % D'AVANCEMENT RÉEL]
Jalons : [JALON, DATE CIBLE, DATE PRÉVISIONNELLE]

Structure, dans cet ordre :
1. Synthèse : 3 phrases maximum. Météo globale (vert, orange, rouge), la chose qui va bien, la chose pour laquelle j'ai besoin d'aide.
2. Tableau de bord : météo et tendance (en amélioration, stable, en dégradation) pour délai, budget, périmètre, qualité, ressources.
3. Avancement : livrables terminés, travaux en cours avec un pourcentage justifié.
4. Jalons : cible, prévision, écart.
5. Budget : % consommé comparé au % d'avancement, prévision à terminaison.
6. Risques et problèmes : probabilité, impact, parade, porteur, échéance.
7. Semaine prochaine : priorités, décisions attendues, dépendances.

Soyez honnête sur la météo. Un projet vert qui cache du rouge est le pire cas. Si mes notes justifient un orange, mettez orange et dites pourquoi.`,
  },
  {
    id: "P-20",
    category: "Piloter",
    title: "Construire le registre des risques",
    skill: "project-governance",
    when: "Au lancement, puis à chaque revue mensuelle des risques.",
    output: "Un registre noté, avec parades, porteurs et signaux d'alerte.",
    prompt: `Vous êtes un directeur de projet expérimenté. Construisez le registre des risques du projet suivant.

Projet : [OBJECTIF, PÉRIMÈTRE, DURÉE, BUDGET]
Contexte : [ÉQUIPES, FOURNISSEURS, TECHNOLOGIES, DÉPENDANCES]
Risques déjà identifiés : [LISTE OU « AUCUN »]

1. Identifiez 10 à 15 risques, répartis par catégorie : périmètre, planning, ressources, technique, fournisseurs, adhésion, réglementaire.
2. Formulez chaque risque en « cause, événement, conséquence ».
3. Notez probabilité et impact de 1 à 5. Ces notes sont des estimations directionnelles : indiquez-le.
4. Pour chaque risque : stratégie (éviter, réduire, transférer, accepter), action concrète, porteur, échéance.
5. Pour les 5 risques majeurs : le signal d'alerte précoce qui indique qu'il se matérialise.

Présentez le tout en tableau, trié par criticité. Distinguez les risques (à venir) des problèmes (déjà là).`,
  },
  {
    id: "P-21",
    category: "Piloter",
    title: "Définir la matrice RACI et les droits de décision",
    skill: "project-governance",
    when: "Quand personne ne sait qui décide, ou que tout remonte au même endroit.",
    output: "Une matrice RACI, une grille de délégation et le chemin d'escalade.",
    prompt: `Vous êtes un expert en gouvernance de projet. Définissez qui fait quoi et qui décide quoi.

Projet : [OBJECTIF]
Acteurs : [COMMANDITAIRE, COMITÉ, CHEF DE PROJET, MÉTIERS, DSI, FOURNISSEURS]
Activités et décisions clés : [LISTE, OU « À PROPOSER »]

1. Construisez la matrice RACI (Réalise, Approuve, Consulté, Informé) pour 12 à 15 activités et décisions. Un seul « Approuve » par ligne.
2. Définissez les seuils de délégation : ce que le chef de projet décide seul, ce qui remonte au commanditaire, ce qui va en comité (écart de délai, de budget, de périmètre, avec des seuils chiffrés).
3. Décrivez le chemin d'escalade et le délai de réponse attendu à chaque niveau.
4. Signalez les incohérences : lignes sans porteur, acteurs surchargés, décisions orphelines.`,
  },
  {
    id: "P-22",
    category: "Piloter",
    title: "Préparer un comité de pilotage",
    skill: "project-governance",
    when: "Une semaine avant chaque comité.",
    output: "Un ordre du jour orienté décision, une note préparatoire et les décisions formulées.",
    prompt: `Vous êtes un directeur de programme. Préparez le prochain comité de pilotage.

Projet et situation : [MÉTÉO, FAITS MARQUANTS, CHIFFRES]
Décisions à obtenir : [LISTE]
Participants : [NOMS, FONCTIONS, POSITIONS CONNUES]
Durée : [DURÉE]

1. Un ordre du jour où au moins la moitié du temps est consacrée aux décisions, pas au compte rendu.
2. Pour chaque décision : la question posée en une phrase, les options, notre recommandation, l'impact de chaque option, ce qui se passe si la décision est reportée.
3. Une note préparatoire d'une page à envoyer 48 heures avant.
4. Les objections probables de chaque participant et la réponse à préparer.
5. Le modèle de relevé de décisions à diffuser sous 24 heures.`,
  },
  {
    id: "P-23",
    category: "Piloter",
    title: "Concevoir un atelier de travail",
    skill: "workshop-facilitation",
    when: "Pour un séminaire de direction, un atelier de priorisation ou de conception.",
    output: "Des objectifs de sortie, un déroulé minuté, les techniques d'animation et le suivi.",
    prompt: `Vous êtes un facilitateur expérimenté. Concevez l'atelier suivant.

Objet : [EX. PRIORISER LE PORTEFEUILLE PROJETS 2027]
Participants : [NOMBRE, FONCTIONS, DYNAMIQUES CONNUES]
Durée et format : [DURÉE, PRÉSENTIEL / DISTANCIEL / HYBRIDE]
Résultat attendu : [DÉCISION, LISTE PRIORISÉE, PLAN D'ACTION]

1. Formulez 2 ou 3 objectifs de sortie vérifiables (« à la fin, nous aurons... »).
2. Proposez le travail préparatoire à envoyer aux participants.
3. Construisez le déroulé minuté : ouverture, divergence, convergence, décision, clôture. Pour chaque séquence : objectif, technique d'animation, matériel, durée.
4. Choisissez la méthode de décision (vote pondéré, consensus, décision du sponsor après consultation) et justifiez-la.
5. Anticipez les dynamiques : comment gérer le dirigeant le plus senior, les participants dominants et les silencieux.
6. Décrivez le suivi : synthèse le jour même, actions sous une semaine.

Prévoyez 15 % de marge dans le minutage.`,
  },
  {
    id: "P-24",
    category: "Piloter",
    title: "Synthétiser un atelier ou une réunion",
    skill: "workshop-facilitation",
    when: "Juste après un atelier, à partir des notes ou de la transcription.",
    output: "Un compte rendu orienté décisions et actions, diffusable le jour même.",
    prompt: `Vous êtes un consultant senior. Rédigez la synthèse de l'atelier à partir de ces notes : [COLLER LES NOTES OU LA TRANSCRIPTION].

Atelier : [NOM, DATE, OBJECTIFS INITIAUX]

Structure :
1. Objectifs : atteints, partiellement atteints ou non atteints, et pourquoi.
2. Décisions prises, formulées sans ambiguïté.
3. Productions clés de l'atelier.
4. Plan d'action : action, porteur, échéance. Pas d'action sans porteur nommé.
5. Sujets mis de côté, et quand ils seront traités.
6. Prochaines étapes.

Une page maximum. Ne reformulez pas en décision ce qui n'était qu'une discussion. En cas de doute, marquez le point « à confirmer ».`,
  },

  // ───────────── Faire adopter ─────────────
  {
    id: "P-25",
    category: "Faire adopter",
    title: "Évaluer l'impact d'un changement",
    skill: "change-management",
    when: "Avant de déployer un nouvel outil, un nouveau processus ou une nouvelle organisation.",
    output: "L'impact par population, le niveau d'effort de conduite du changement et les priorités.",
    prompt: `Vous êtes un expert en conduite du changement. Évaluez l'impact du changement suivant.

Changement : [EX. DÉPLOIEMENT D'UN COPILOTE IA DE REPORTING]
Populations concernées : [GROUPES, EFFECTIFS]
Calendrier : [DATES CLÉS]
Historique : [CHANGEMENTS RÉCENTS, NIVEAU DE LASSITUDE]

Pour chaque population :
1. Ce qui change concrètement : processus, outils, rôles, compétences, indicateurs, habitudes.
2. Le niveau d'impact (faible, moyen, fort) et ce qui le justifie.
3. Ce qu'elle gagne et ce qu'elle perd, de son point de vue.
4. Le risque de résistance et sa forme probable.

Puis : classez les populations par effort de conduite du changement requis, et proposez l'approche adaptée pour les 2 groupes les plus exposés.`,
  },
  {
    id: "P-26",
    category: "Faire adopter",
    title: "Traiter la résistance au changement",
    skill: "change-management",
    when: "Quand l'adoption stagne ou que des signaux de résistance apparaissent.",
    output: "Le diagnostic de la résistance, la réponse ciblée et le point d'escalade.",
    prompt: `Vous êtes un expert en conduite du changement. L'adoption de [OUTIL / PROCESSUS] stagne.

Signaux observés : [CITATIONS, COMPORTEMENTS, CHIFFRES D'USAGE]
Populations concernées : [GROUPES OU PERSONNES]
Ce qui a déjà été fait : [FORMATION, COMMUNICATION, ACCOMPAGNEMENT]

1. Qualifiez chaque signal : opposition déclarée, non-adoption silencieuse, maintien de l'ancien processus en parallèle, influenceur réticent.
2. Pour chacun, identifiez la cause racine probable : compréhension, motivation, compétence, outil inadapté, incitations contraires.
3. Proposez une réponse ciblée, avec porteur et échéance. Une non-adoption silencieuse dans une équipe de 40 personnes ne se traite pas comme un directeur influent qui se désengage.
4. Indiquez à quel moment escalader vers le commanditaire, et ce qu'il faut lui demander.
5. Si le problème vient du processus lui-même, dites-le : parfois la résistance signale un vrai défaut.`,
  },
  {
    id: "P-27",
    category: "Faire adopter",
    title: "Bâtir le plan de communication",
    skill: "change-management",
    when: "Pour accompagner un déploiement, de l'annonce jusqu'à l'ancrage.",
    output: "Les messages par public, le calendrier, les canaux et les porte-parole.",
    prompt: `Vous êtes un expert en communication du changement. Construisez le plan de communication pour [CHANGEMENT].

Publics : [GROUPES, EFFECTIFS]
Calendrier du projet : [ANNONCE, PILOTE, DÉPLOIEMENT, ANCRAGE]
Canaux disponibles : [RÉUNIONS, INTRANET, MESSAGERIE, MANAGERS]
Sujets sensibles : [EMPLOI, CHARGE DE TRAVAIL, CONTRÔLE]

1. Le message central en 2 phrases : pourquoi ce changement, pourquoi maintenant.
2. Pour chaque public : ce qu'il doit savoir, ressentir et faire, et la réponse à « qu'est-ce que ça change pour moi ».
3. Un calendrier par phase : message, canal, porte-parole, date. Les annonces importantes passent par le manager direct, pas par un e-mail général.
4. Si le changement implique de l'IA : comment répondre aux craintes sur l'emploi et le contrôle, sans promesse intenable.
5. Les boucles de retour : comment savoir si le message est compris.`,
  },
  {
    id: "P-28",
    category: "Faire adopter",
    title: "Mesurer l'adoption",
    skill: "change-management",
    when: "Pour piloter un déploiement au-delà de la date de mise en service.",
    output: "Des indicateurs avancés et retardés, un questionnaire court et les seuils d'action.",
    prompt: `Vous êtes un expert en conduite du changement. Construisez le tableau de bord d'adoption pour [OUTIL / PROCESSUS].

Population : [GROUPES, EFFECTIFS]
Objectif métier visé : [EX. RÉDUIRE DE 50 % LE TEMPS DE REPORTING]
Données disponibles : [LOGS D'USAGE, ENQUÊTES, INDICATEURS MÉTIER]

1. Indicateurs avancés (signal précoce) : participation aux formations, taux d'activation, fréquence d'usage, demandes au support.
2. Indicateurs retardés (résultat) : atteinte de l'objectif métier, qualité, abandon de l'ancien processus.
3. Pour chaque indicateur : définition, source, fréquence, cible, seuil qui déclenche une action.
4. Un questionnaire de 5 questions maximum, à envoyer à 30, 60 et 90 jours.
5. Les mécanismes de renforcement : reconnaissance, rituels, intégration dans les objectifs.

L'adoption se mesure à l'usage réel, pas au nombre de personnes formées.`,
  },

  // ───────────── Livrer et clôturer ─────────────
  {
    id: "P-29",
    category: "Livrer et clôturer",
    title: "Structurer une note ou un support de direction",
    skill: "client-deliverables",
    when: "Pour tout livrable qui doit faire prendre une décision à un dirigeant.",
    output: "Un fil narratif SCQA, des titres-messages et la structure pyramidale du document.",
    prompt: `Vous êtes un consultant senior. Construisez la trame du livrable suivant.

Destinataire : [FONCTION, CE QU'IL SAIT DÉJÀ, CE QUI LE PRÉOCCUPE]
Décision attendue : [DÉCISION]
Analyses et constats disponibles : [COLLER]
Format : [NOTE DE 2 PAGES / SUPPORT DE 10 DIAPOSITIVES]

1. Rédigez le fil narratif SCQA : Situation, Complication, Question, Réponse. La réponse est la recommandation.
2. Construisez la pyramide : la recommandation en tête, 3 arguments qui la soutiennent, les preuves sous chaque argument.
3. Proposez un titre-message pour chaque section ou diapositive : une phrase complète qui dit la conclusion (« Le reporting coûte 4 heures par semaine et par chef de projet »), pas un thème (« Analyse du reporting »).
4. Lisez uniquement les titres à la suite : ils doivent raconter toute l'histoire. Corrigez-les jusqu'à ce que ce soit le cas.
5. Pour chaque section, indiquez le graphique ou le tableau qui porterait le mieux la preuve.`,
  },
  {
    id: "P-30",
    category: "Livrer et clôturer",
    title: "Relire un livrable avant envoi",
    skill: "client-deliverables",
    when: "Avant d'envoyer un document à un client ou à la direction.",
    output: "Une liste de corrections classées par gravité, et une synthèse réécrite si nécessaire.",
    prompt: `Vous êtes un associé exigeant qui relit un livrable avant envoi. Voici le document : [COLLER LE TEXTE].

Destinataire : [FONCTION]
Objectif du document : [DÉCISION OU MESSAGE ATTENDU]

Vérifiez et signalez :
1. Le message principal est-il compréhensible en 30 secondes, à la lecture de la première page ?
2. Chaque titre dit-il une conclusion ?
3. Chaque affirmation est-elle étayée par une donnée, et chaque donnée a-t-elle une source ?
4. Les chiffres sont-ils cohérents entre eux (totaux, pourcentages, dates) ?
5. Le texte contient-il des formules creuses, des précautions inutiles, des répétitions ?
6. Le niveau de détail est-il adapté au destinataire ?

Classez vos remarques en « bloquant », « important », « mineur ». Puis proposez une réécriture de la synthèse.`,
  },
  {
    id: "P-31",
    category: "Livrer et clôturer",
    title: "Organiser la clôture et le transfert",
    skill: "project-closeout",
    when: "Dans les 4 à 6 semaines qui précèdent la fin d'un projet ou d'une mission.",
    output: "Une check-list de clôture, le plan de transfert de compétences et le suivi des bénéfices.",
    prompt: `Vous êtes un directeur de projet expérimenté. Préparez la clôture du projet suivant.

Projet : [OBJECTIF, DATE DE FIN, LIVRABLES]
Équipe qui reprend : [ÉQUIPE RUN, RÉFÉRENTS INTERNES]
Bénéfices attendus : [INDICATEURS, CIBLES, ÉCHÉANCES]

1. Évaluez la maturité pour la clôture : livrables acceptés, actions ouvertes, risques résiduels.
2. Construisez le plan de recette et de validation formelle des livrables.
3. Construisez le plan de transfert de compétences : quoi, à qui, sous quelle forme (documentation, binômage, sessions), comment vérifier que le transfert a réussi.
4. Organisez le suivi des bénéfices après le départ de l'équipe projet : indicateur, porteur, fréquence, première mesure.
5. Listez les tâches administratives : contrats, accès, archivage, bilan financier.

Le transfert de compétences commence plusieurs semaines avant la fin, pas la dernière semaine.`,
  },
  {
    id: "P-32",
    category: "Livrer et clôturer",
    title: "Conduire un retour d'expérience",
    skill: "project-closeout",
    when: "À la fin d'un projet, ou après un incident ou un jalon majeur.",
    output: "Un retour d'expérience sans recherche de coupable, avec des enseignements actionnables.",
    prompt: `Vous êtes un facilitateur de retours d'expérience. Aidez-moi à conduire celui du projet [NOM].

Faits marquants : [CE QUI A BIEN MARCHÉ, CE QUI A MAL MARCHÉ, AVEC CHIFFRES]
Participants prévus : [FONCTIONS]

1. Proposez le déroulé d'une séance de 90 minutes : rappel des faits, ce qui a fonctionné, ce qui n'a pas fonctionné, causes, enseignements.
2. Préparez les questions d'animation, formulées pour chercher les causes et non les coupables.
3. À partir des faits fournis, proposez une première analyse : 3 pratiques à conserver, 3 à changer, avec la cause de chacune.
4. Transformez chaque enseignement en action concrète, avec porteur et échéance, pour le prochain projet.

Un enseignement sans action associée n'est pas un enseignement. Écartez les constats génériques (« améliorer la communication »).`,
  },
  {
    id: "P-33",
    category: "Livrer et clôturer",
    title: "Rédiger un point de vue d'expert",
    skill: "thought-leadership",
    when: "Pour publier un article, une tribune ou un livre blanc sur votre expertise.",
    output: "Une thèse défendable, un plan argumenté et une première version de 800 à 1 500 mots.",
    prompt: `Vous êtes un consultant senior qui écrit pour des dirigeants. Rédigez un point de vue sur le sujet suivant : [SUJET].

Public visé : [EX. DIRECTEURS DE PMO D'ETI]
Ce que nous observons sur le terrain : [CONSTATS, ANONYMISÉS]
Données disponibles : [CHIFFRES, SOURCES]

1. Formulez une thèse défendable, sur laquelle un lecteur raisonnable pourrait ne pas être d'accord. « L'IA va transformer le PMO » n'est pas une thèse.
2. Construisez le plan : accroche, thèse, 3 arguments étayés, objection principale et réponse, implications pour le lecteur, ce qu'il peut faire lundi matin.
3. Rédigez une première version de 800 à 1 500 mots.
4. Appliquez le test « et alors ? » à chaque paragraphe : supprimez ceux qui n'apportent rien au lecteur.

N'inventez ni chiffre, ni étude, ni cas client. Si une donnée manque, laissez un repère [À SOURCER].`,
  },
];
