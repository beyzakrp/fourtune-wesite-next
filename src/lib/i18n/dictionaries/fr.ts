import type { Dictionary } from "./en";

const fr: Dictionary = {
  meta: {
    tagline: "Agence de branding",
    title: "Fourtune — Trouver la note de la marque",
    description:
      "Fourtune est une agence de branding indépendante : stratégie, identité, produit et le mouvement qui relie le tout.",
    ogAlt: "Fourtune — 4tune",
  },

  nav: {
    home: "Accueil",
    work: "Projets",
    services: "Services",
    studio: "Studio",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    startProject: "Démarrer un projet",
    skipToContent: "Aller au contenu",
    theme: "Apparence",
    themeLight: "Clair",
    themeDark: "Sombre",
    language: "Langue",
  },

  hero: {
    eyebrow: "Indépendants depuis 2014",
    titleLead: "Les marques trouvent leur",
    titleAccent: "fréquence",
    titleTrail: "et la gardent.",
    lead: "Fourtune est une agence de branding indépendante. Nous accordons positionnement, identité et produit jusqu'à ce qu'une entreprise dise la même chose partout.",
    primary: "Voir les projets",
    secondary: "Démarrer un projet",
    scroll: "Défiler",
  },

  showreel: {
    label: "Film de présentation",
  },

  ghost: {
    label: "Positions",
    sets: [
      ["Marque", "Produit", "Motion", "Système"],
      ["Plus", "Net", "Plus", "Juste"],
      ["Trouver", "La", "Note", "Avant"],
    ],
  },

  marquee: {
    label: "Ils nous font confiance",
    items: [
      "Northwind",
      "Lumen Bank",
      "Kestrel",
      "Atlas Mobility",
      "Orbit Health",
      "Veridian",
      "Halo Audio",
      "Field Notes",
    ],
  },

  intro: {
    eyebrow: "Le studio",
    title: "Petite équipe. Longue attention.",
    body: "Nous prenons peu de missions par an, pour que les personnes qui présentent le projet soient celles qui le font. Pas de passation, pas de couche commerciale : l'équipe, le problème et le temps de bien faire.",
    stats: [
      { value: "12", label: "Ans d'indépendance" },
      { value: "140", label: "Projets livrés" },
      { value: "28", label: "Prix remportés" },
      { value: "9", label: "Personnes en tout" },
    ],
  },

  services: {
    eyebrow: "Ce que nous faisons",
    title: "Six disciplines, une équipe.",
    lead: "La plupart des studios vous font passer d'un service à l'autre. Nous gardons stratégie, design et développement dans la même pièce — c'est pourquoi ce que nous montrons est ce que vous recevez.",
    deliverablesLabel: "Comprend",
    items: [
      {
        id: "strategy",
        title: "Stratégie de marque",
        summary:
          "Positionnement, naming et récit. Nous cherchons la seule chose vraie d'une entreprise et faisons répondre tout le reste.",
        deliverables: [
          "Étude de marché et d'audience",
          "Positionnement et messages",
          "Naming et identité verbale",
          "Architecture de marque",
        ],
      },
      {
        id: "identity",
        title: "Design d'identité",
        summary:
          "Signes, systèmes typographiques et les règles qui les tiennent — conçus pour résister au contact du réel.",
        deliverables: [
          "Systèmes de logo et de signes",
          "Typographie et couleur",
          "Direction artistique",
          "Chartes et kits d'application",
        ],
      },
      {
        id: "product",
        title: "Produit numérique",
        summary:
          "Des interfaces qu'on saisit sans y penser. Recherche, parcours, design systems et prototypes réellement utilisables.",
        deliverables: [
          "Stratégie produit et UX",
          "Design d'interface",
          "Design systems",
          "Prototypes interactifs",
        ],
      },
      {
        id: "motion",
        title: "Motion et film",
        summary:
          "L'animation comme comportement, pas comme décor. Chaque transition dit d'où vient une chose et où elle va.",
        deliverables: [
          "Systèmes de motion d'interface",
          "Animation de marque",
          "Réalisation et production",
          "3D et compositing",
        ],
      },
      {
        id: "engineering",
        title: "Ingénierie web",
        summary:
          "Nous construisons ce que nous dessinons. Des front-ends rapides et accessibles, et l'outillage de contenu où votre équipe vivra des années.",
        deliverables: [
          "Développement Next.js et React",
          "Intégration CMS headless",
          "Performance et accessibilité",
          "Passation et formation",
        ],
      },
      {
        id: "campaign",
        title: "Contenu et campagne",
        summary:
          "Un lancement qui laisse la marque intacte. Une idée, adaptée honnêtement à chaque endroit où elle doit vivre.",
        deliverables: [
          "Concepts de campagne",
          "Direction artistique et prises de vue",
          "Systèmes social et éditorial",
          "Guides de lancement",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Projets choisis",
    title: "Ce que nous avons fait, et pourquoi.",
    lead: "Une courte sélection. Chacune contient la partie que la plupart des études de cas omettent : ce que nous avons raté avant de trouver.",
    viewAll: "Tous les projets",
    viewCase: "Lire le cas",
    allProjects: "Tous les projets",
    nextProject: "Projet suivant",
    backToWork: "Retour aux projets",
    labels: {
      client: "Client",
      year: "Année",
      disciplines: "Disciplines",
      duration: "Durée",
    },
    sections: {
      challenge: "Le problème",
      approach: "Ce que nous avons fait",
      outcome: "Le résultat",
      results: "Chiffres",
    },
  },

  process: {
    eyebrow: "Comment ça se passe",
    title: "Quatre phases. Aucune surprise.",
    lead: "Chaque mission suit la même forme, qu'elle dure six semaines ou six mois. Vous savez toujours où vous en êtes et ce qui arrive à la fin.",
    steps: [
      {
        n: "01",
        title: "Découverte",
        body: "Deux semaines d'entretiens, d'audits et de questions franches. Nous revenons avec un point de vue écrit — y compris les parties qui dérangent.",
      },
      {
        n: "02",
        title: "Direction",
        body: "Deux ou trois pistes, poussées assez loin pour être jugées. Vous en choisissez une ; nous ne présentons rien que nous ne serions pas heureux de construire.",
      },
      {
        n: "03",
        title: "Fabrication",
        body: "Le long milieu. Sessions de travail hebdomadaires, vrais composants, vrai contenu — pas de maquettes léchées qui cachent un problème non résolu.",
      },
      {
        n: "04",
        title: "Lancement",
        body: "Nous mettons en ligne, documentons et formons votre équipe. Puis nous restons joignables le premier trimestre, car un lancement n'est jamais la fin.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Dans leurs mots",
    title: "Travailler avec nous, concrètement.",
    items: [
      {
        quote:
          "Ils ont contesté notre brief dès la première semaine, et ils avaient raison. Le rebranding est sorti un trimestre plus tôt.",
        name: "Selin Arda",
        role: "Directrice marketing, Lumen Bank",
      },
      {
        quote:
          "Le prototype était si proche du build final que nos développeurs s'en sont servis comme spécification. Je n'avais jamais vu ça.",
        name: "Jonas Weiss",
        role: "Directeur produit, Atlas Mobility",
      },
      {
        quote:
          "Neuf personnes ont fait ce qu'il fallait quarante à notre agence précédente, et elles décrochaient à chaque appel.",
        name: "Marie Lambert",
        role: "Fondatrice, Field Notes",
      },
    ],
  },

  studio: {
    eyebrow: "Le studio",
    title: "Neuf personnes qui préfèrent faire que gérer.",
    lead: "Fourtune a commencé en 2014 dans un bureau d'une pièce à Bomonti. Nous avons grandi lentement et volontairement — assez nombreux pour du travail sérieux, assez peu pour que chacun sache ce que font les autres.",
    body: [
      "Nous sommes stratèges, designers et développeurs, lassés de la passation. La personne qui a posé le problème est dans la pièce quand on le construit, ce qui supprime toute une catégorie de perte en traduction.",
      "Nous prenons quatre à six missions par an. Ce chiffre est une contrainte choisie, pas une limite subie — c'est ce qui nous permet de donner à chaque projet l'attention qu'il mérite et de rentrer dîner.",
      "Le studio est indépendant et compte le rester. Pas de holding, pas d'objectifs de croissance fixés par quelqu'un qui n'a jamais rencontré nos clients.",
    ],
    valuesTitle: "Notre façon de travailler",
    values: [
      {
        title: "Prototyper avant de promettre",
        body: "Une démo interactive vaut mille images fixes. Si ça ne se sent pas juste en prototype, ça ne va pas dans la présentation.",
      },
      {
        title: "L'absence fait le design",
        body: "Chaque élément mérite sa place. La retenue n'est pas du minimalisme pour lui-même — c'est ce qui rend l'essentiel évident.",
      },
      {
        title: "Défendre chaque valeur",
        body: "Rien n'est aléatoire. Demandez-nous pourquoi un espacement, un timing ou un alignement est ainsi : il y a une réponse.",
      },
      {
        title: "Livrer, puis rester",
        body: "Le lancement est le milieu de l'histoire. Nous restons proches le premier trimestre, car c'est là qu'arrive le vrai retour.",
      },
    ],
    teamTitle: "L'équipe",
    team: [
      { name: "Deniz Yalçın", role: "Fondateur, stratégie" },
      { name: "Ayla Kurt", role: "Directrice de design" },
      { name: "Tom Rehn", role: "Ingénieur principal" },
      { name: "Nora Fischer", role: "Directrice motion" },
      { name: "Emre Solak", role: "Design produit" },
      { name: "Julia Brandt", role: "Design de marque" },
      { name: "Kaan Öz", role: "Développement front-end" },
      { name: "Léa Moreau", role: "Contenu et éditorial" },
      { name: "Sara Kaya", role: "Opérations du studio" },
    ],
    officeTitle: "Où nous sommes",
  },

  contact: {
    eyebrow: "Dites bonjour",
    title: "Dites-nous ce que vous construisez.",
    lead: "Nous lisons chaque message nous-mêmes et répondons sous deux jours ouvrés. Si nous ne sommes pas le bon studio, nous le dirons et vous orienterons ailleurs.",
    formTitle: "Demande de projet",
    form: {
      name: "Votre nom",
      namePlaceholder: "Camille Durand",
      email: "E-mail",
      emailPlaceholder: "camille@entreprise.fr",
      company: "Entreprise",
      companyPlaceholder: "Nom de l'entreprise",
      budget: "Fourchette de budget",
      budgetPlaceholder: "Choisir une fourchette",
      message: "Sur quoi travaillez-vous ?",
      messagePlaceholder:
        "Un paragraphe suffit. Quel est le problème, et pour quand faut-il le résoudre ?",
      submit: "Envoyer la demande",
      sending: "Envoi…",
      optional: "facultatif",
      successTitle: "Message envoyé",
      successBody: "Merci — bien reçu. Réponse sous deux jours ouvrés.",
      errorTitle: "L'envoi a échoué",
      errorBody:
        "Quelque chose a cassé de notre côté. Écrivez-nous directement, nous prenons le relais.",
      sendAnother: "Envoyer un autre message",
    },
    budgets: [
      "Moins de 25 000 €",
      "25 000 € – 60 000 €",
      "60 000 € – 150 000 €",
      "Plus de 150 000 €",
      "Pas encore défini",
    ],
    validation: {
      nameRequired: "Merci d'indiquer votre nom.",
      emailRequired: "Il nous faut un e-mail pour répondre.",
      emailInvalid: "Cela ne ressemble pas à une adresse e-mail.",
      messageRequired: "Une ou deux phrases suffisent pour commencer.",
      messageShort: "Un peu plus de détail nous aiderait.",
    },
    directTitle: "Ou joignez-nous directement",
    officeTitle: "Studio",
    hoursTitle: "Horaires",
    hours: "Du lundi au vendredi, 09h00 – 18h00 (GMT+3)",
    responseNote: "Délai de réponse moyen : 1,4 jour ouvré",
  },

  cta: {
    eyebrow: "Prochaine étape",
    title: "Vous avez quelque chose qui mérite d'exister ?",
    body: "Parlez-nous-en. Au pire, vous obtenez un second avis honnête de gens qui l'ont déjà fait.",
    action: "Démarrer un projet",
    secondary: "Nous écrire",
  },

  footer: {
    tagline: "Studio indépendant de design et de technologie à Istanbul.",
    navTitle: "Site",
    socialTitle: "Ailleurs",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    colophon: "Conçu et développé en interne. Typographie : SF Pro et Inter.",
    backToTop: "Haut de page",
    localeTitle: "Langue",
  },

  projects: {
    aurora: {
      title: "Une banque qui cesse de s'expliquer",
      client: "Lumen Bank",
      category: "Produit numérique",
      duration: "9 mois",
      summary:
        "Une application bancaire reconstruite autour d'une seule question : que doit savoir le client maintenant ?",
      challenge:
        "L'application de Lumen avait atteint 84 écrans de fonctionnalités que personne n'avait demandées. Les appels au support augmentaient à mesure que les fonctions s'ajoutaient, et la plainte la plus fréquente n'était pas une fonction manquante — les gens ne trouvaient pas celles qui existaient déjà.",
      approach:
        "Nous avons ramené l'architecture de l'information à quatre surfaces et reconstruit le modèle d'interaction sur la manipulation directe : des soldes qui répondent au toucher, des transactions qu'on peut déplier et des transitions qui reviennent toujours d'où elles viennent. Le design system a été livré avec le build, pas après.",
      outcome:
        "L'application est sortie dans onze marchés en un trimestre. Le volume de support a baissé pour la première fois en trois ans, et le design system porte désormais aussi la plateforme web.",
      results: [
        { value: "−38 %", label: "Contacts support" },
        { value: "4,8", label: "Note App Store" },
        { value: "2,1 s", label: "Temps jusqu'à la première action" },
      ],
    },
    atlas: {
      title: "La mobilité, avec un visage",
      client: "Atlas Mobility",
      category: "Identité de marque",
      duration: "6 mois",
      summary:
        "Un opérateur de flotte à la logistique excellente et sans aucune personnalité. Nous lui en avons donné une.",
      challenge:
        "Atlas déplaçait deux millions de personnes par mois en restant invisible. De la livrée des véhicules au ticket de caisse, tout semblait venir de trois entreprises différentes — parce que c'était le cas.",
      approach:
        "Un signe, un système typographique, une signature de motion, du splash de l'application au flanc d'un bus. Nous avons dessiné la signalétique en premier — la contrainte la plus dure — et laissé le reste en hériter.",
      outcome:
        "L'identité a été déployée sur 1 400 véhicules et 90 stations en quatorze mois. La mémorisation spontanée a quasiment doublé sur le marché principal.",
      results: [
        { value: "×2,1", label: "Mémorisation de marque" },
        { value: "1 400", label: "Véhicules repensés" },
        { value: "14 mois", label: "Déploiement complet" },
      ],
    },
    vela: {
      title: "Un commerce qui charge avant le clignement d'œil",
      client: "Veridian",
      category: "Produit et ingénierie",
      duration: "7 mois",
      summary:
        "Une boutique reconstruite depuis le réseau, parce que l'interface la plus rapide est celle qui est déjà là.",
      challenge:
        "Le catalogue de Veridian était magnifique et inutilisable ailleurs que sur le wifi du bureau. La conversion mobile valait un tiers du desktop, et l'écart tenait presque entièrement au temps de chargement.",
      approach:
        "Reconstruction sur Next.js avec un catalogue rendu en edge, design system déplacé vers une couche de tokens que les deux équipes peuvent posséder, et chaque spinner bloquant remplacé par un état qui montre déjà quelque chose d'utile.",
      outcome:
        "Le chargement mobile médian est passé sous la seconde. La conversion mobile a comblé l'essentiel de l'écart en deux mois.",
      results: [
        { value: "0,9 s", label: "Chargement mobile médian" },
        { value: "+31 %", label: "Conversion mobile" },
        { value: "100", label: "Accessibilité Lighthouse" },
      ],
    },
    tessera: {
      title: "Un musée lisible depuis le trottoir d'en face",
      client: "Tessera",
      category: "Identité et campagne",
      duration: "5 mois",
      summary:
        "Une identité née d'une seule grille modulaire — assez souple pour onze départements, assez stricte pour rester reconnaissable.",
      challenge:
        "Onze départements de conservation avaient chacun commandé leur propre look en vingt ans. Les visiteurs ne vivaient pas un musée, mais onze sous un même toit.",
      approach:
        "Une grille de tuiles génère chaque mise en page, de la bannière au cartel mural jusqu'à l'écran de téléphone. Les départements choisissent couleur et densité dans le système : identité sans fragmentation.",
      outcome:
        "Appliquée à la signalétique, à l'imprimé, à la campagne et à la billetterie. Les départements l'ont adoptée volontairement — la seule mesure d'adoption qui compte.",
      results: [
        { value: "11", label: "Départements unifiés" },
        { value: "+24 %", label: "Conversion billetterie" },
        { value: "1", label: "Grille, partout" },
      ],
    },
    halo: {
      title: "Un son que l'on voit",
      client: "Halo Audio",
      category: "Produit et motion",
      duration: "4 mois",
      summary:
        "Une application compagnon pour un casque haut de gamme, où l'interface se comporte comme le matériel se ressent.",
      challenge:
        "Halo fabriquait un matériel exceptionnel et le livrait avec un menu de réglages. Les acheteurs d'un produit à 600 € rencontraient la marque sous forme de liste d'interrupteurs.",
      approach:
        "Nous avons bâti toute l'interface sur des ressorts : un audio spatial que l'on positionne au doigt, des courbes d'égalisation qui portent l'élan du geste et une vue de lecture qui s'ouvre depuis la carte exacte que l'on a touchée.",
      outcome:
        "L'application est devenue une raison d'acheter le matériel plutôt qu'un accessoire. Les tests commençaient par elle.",
      results: [
        { value: "4,9", label: "Note App Store" },
        { value: "+46 %", label: "Adoption des fonctions" },
        { value: "120 fps", label: "Tenu sur l'appareil" },
      ],
    },
    fieldnotes: {
      title: "Une papeterie qui mérite son rayon",
      client: "Field Notes Co.",
      category: "Identité et campagne",
      duration: "4 mois",
      summary:
        "Une identité pensée d'abord pour le rayon, face à des produits que l'on peut toucher.",
      challenge:
        "Field Notes faisait de meilleurs carnets que tous ses voisins de rayon et en vendait trois fois moins. Le produit faisait tout le travail, l'emballage aucun.",
      approach:
        "Nous avons conçu l'emballage comme média principal — l'identité, c'est ce qu'on voit à bout de bras en magasin — puis nous l'avons ramené vers la boutique en ligne et la campagne.",
      outcome:
        "Relancé chez 300 revendeurs dans deux pays. La rotation en rayon a assez progressé pour financer deux nouvelles gammes.",
      results: [
        { value: "+58 %", label: "Rotation en rayon" },
        { value: "300", label: "Revendeurs" },
        { value: "2", label: "Gammes financées" },
      ],
    },
  },

  a11y: {
    scrollProgress: "Progression de lecture",
    openMenu: "Ouvrir le menu de navigation",
    closeMenu: "Fermer le menu de navigation",
    toggleTheme: "Basculer entre l'apparence claire et sombre",
    previous: "Précédent",
    next: "Suivant",
    pauseMarquee: "Mettre en pause la liste défilante",
    playMarquee: "Reprendre la liste défilante",
    pauseVideo: "Mettre le film en pause",
    playVideo: "Lire le film",
    muteVideo: "Couper le son",
    unmuteVideo: "Activer le son",
  },

  notFound: {
    title: "Cette page a filé.",
    body: "Le lien est mort, pas le travail. Jetez plutôt un œil aux projets choisis du studio.",
    action: "Retour à l'accueil",
  },
};

export default fr;
