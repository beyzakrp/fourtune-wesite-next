import type { Dictionary } from "./en";

const de: Dictionary = {
  meta: {
    tagline: "Branding-Agentur",
    title: "Fourtune — Den Ton der Marke finden",
    description:
      "Fourtune ist eine unabhängige Branding-Agentur: Strategie, Identität, Produkt und die Bewegung, die alles zusammenhält.",
    ogAlt: "Fourtune — 4tune",
  },

  nav: {
    home: "Start",
    work: "Arbeiten",
    services: "Leistungen",
    studio: "Studio",
    contact: "Kontakt",
    menu: "Menü",
    close: "Schließen",
    startProject: "Projekt starten",
    skipToContent: "Zum Inhalt springen",
    theme: "Darstellung",
    themeLight: "Hell",
    themeDark: "Dunkel",
    language: "Sprache",
  },

  hero: {
    eyebrow: "Unabhängig seit 2014",
    titleLead: "Wo Marken ihre",
    titleAccent: "Frequenz",
    titleTrail: "finden und halten.",
    lead: "Fourtune ist eine unabhängige Branding-Agentur. Wir stimmen Positionierung, Identität und Produkt so lange ab, bis ein Unternehmen überall dasselbe sagt.",
    primary: "Arbeiten ansehen",
    secondary: "Projekt starten",
    scroll: "Scrollen",
  },

  showreel: {
    label: "Showreel",
  },

  ghost: {
    label: "Haltungen",
    sets: [
      ["Marke", "Produkt", "Motion", "System"],
      ["Schärfer", "Klarer", "Mutiger", "Arbeit"],
      ["Erst", "Den", "Ton", "Finden"],
    ],
  },

  marquee: {
    label: "Vertrauen uns",
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
    eyebrow: "Das Studio",
    title: "Kleines Team. Lange Aufmerksamkeitsspanne.",
    body: "Wir nehmen wenige Projekte pro Jahr an — damit die Menschen, die das Projekt vorstellen, auch die sind, die es umsetzen. Keine Übergaben, keine Account-Ebene: nur das Team, das Problem und die Zeit, es richtig zu machen.",
    stats: [
      { value: "12", label: "Jahre unabhängig" },
      { value: "140", label: "Umgesetzte Projekte" },
      { value: "28", label: "Ausgezeichnete Arbeiten" },
      { value: "9", label: "Menschen insgesamt" },
    ],
  },

  services: {
    eyebrow: "Was wir tun",
    title: "Sechs Disziplinen, ein Team.",
    lead: "Die meisten Studios reichen Sie zwischen Abteilungen weiter. Wir halten Strategie, Design und Entwicklung im selben Raum — deshalb ist das, was wir zeigen, auch das, was Sie bekommen.",
    deliverablesLabel: "Enthält",
    items: [
      {
        id: "strategy",
        title: "Markenstrategie",
        summary:
          "Positionierung, Naming und Narrativ. Wir finden das eine Wahre an einem Unternehmen und richten alles andere danach aus.",
        deliverables: [
          "Markt- und Zielgruppenforschung",
          "Positionierung und Messaging",
          "Naming und verbale Identität",
          "Markenarchitektur",
        ],
      },
      {
        id: "identity",
        title: "Identitätsdesign",
        summary:
          "Zeichen, Schriftsysteme und die Regeln, die sie zusammenhalten — gebaut, um den Kontakt mit der Realität zu überstehen.",
        deliverables: [
          "Logo- und Zeichensysteme",
          "Typografie und Farbe",
          "Art Direction",
          "Richtlinien und Toolkits",
        ],
      },
      {
        id: "product",
        title: "Digitales Produkt",
        summary:
          "Oberflächen, nach denen man greift, ohne nachzudenken. Research, Flows, Designsysteme und Prototypen, die man wirklich benutzen kann.",
        deliverables: [
          "Produkt- und UX-Strategie",
          "Interface-Design",
          "Designsysteme",
          "Interaktive Prototypen",
        ],
      },
      {
        id: "motion",
        title: "Motion und Film",
        summary:
          "Animation als Verhalten, nicht als Dekoration. Jeder Übergang erklärt, woher etwas kam und wohin es ging.",
        deliverables: [
          "Motion-Systeme für Interfaces",
          "Markenanimation",
          "Regie und Produktion",
          "3D und Compositing",
        ],
      },
      {
        id: "engineering",
        title: "Web-Entwicklung",
        summary:
          "Wir bauen, was wir entwerfen. Schnelle, barrierefreie Frontends und das Content-Werkzeug, in dem Ihr Team jahrelang arbeiten wird.",
        deliverables: [
          "Next.js- und React-Entwicklung",
          "Headless-CMS-Anbindung",
          "Performance und Barrierefreiheit",
          "Übergabe und Schulung",
        ],
      },
      {
        id: "campaign",
        title: "Content und Kampagne",
        summary:
          "Launch-Arbeit, die die Marke intakt lässt. Eine Idee, ehrlich übersetzt in jeden Kanal, in dem sie leben muss.",
        deliverables: [
          "Kampagnenkonzepte",
          "Art Direction und Shootings",
          "Social- und Redaktionssysteme",
          "Launch-Playbooks",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Ausgewählte Arbeiten",
    title: "Was wir gemacht haben — und warum.",
    lead: "Eine kurze Auswahl. Jede enthält den Teil, den die meisten Case Studies weglassen: was schiefging, bevor es richtig wurde.",
    viewAll: "Alle Arbeiten",
    viewCase: "Case lesen",
    allProjects: "Alle Projekte",
    nextProject: "Nächstes Projekt",
    backToWork: "Zurück zu den Arbeiten",
    labels: {
      client: "Kunde",
      year: "Jahr",
      disciplines: "Disziplinen",
      duration: "Dauer",
    },
    sections: {
      challenge: "Die Aufgabe",
      approach: "Was wir getan haben",
      outcome: "Das Ergebnis",
      results: "Zahlen",
    },
  },

  process: {
    eyebrow: "Wie es abläuft",
    title: "Vier Phasen. Keine Überraschungen.",
    lead: "Jedes Projekt hat dieselbe Form, ob sechs Wochen oder sechs Monate. Sie wissen jederzeit, in welcher Phase Sie sind und was am Ende steht.",
    steps: [
      {
        n: "01",
        title: "Discovery",
        body: "Zwei Wochen Interviews, Audits und ehrliche Fragen. Wir kommen mit einer schriftlichen Haltung zurück — auch mit den Teilen, die Sie vielleicht nicht hören wollen.",
      },
      {
        n: "02",
        title: "Richtung",
        body: "Zwei oder drei Routen, weit genug ausgearbeitet, um sie beurteilen zu können. Sie wählen eine; wir zeigen nichts, das wir nicht gern bauen würden.",
      },
      {
        n: "03",
        title: "Handwerk",
        body: "Die lange Mitte. Wöchentliche Arbeitssessions, echte Komponenten, echte Inhalte — keine polierten Mockups, die ein ungelöstes Problem verstecken.",
      },
      {
        n: "04",
        title: "Launch",
        body: "Wir bringen es live, dokumentieren es und schulen Ihr Team. Danach bleiben wir das erste Quartal erreichbar, denn ein Launch ist nie das Ende.",
      },
    ],
  },

  testimonials: {
    eyebrow: "In ihren Worten",
    title: "Wie es ist, mit uns zu arbeiten.",
    items: [
      {
        quote:
          "Sie haben unser Briefing in der ersten Woche infrage gestellt — zu Recht. Der Rebrand war deshalb ein Quartal früher fertig.",
        name: "Selin Arda",
        role: "CMO, Lumen Bank",
      },
      {
        quote:
          "Der Prototyp war dem finalen Build so nah, dass unsere Entwickler ihn als Spezifikation genutzt haben. Das habe ich noch nie erlebt.",
        name: "Jonas Weiss",
        role: "Head of Product, Atlas Mobility",
      },
      {
        quote:
          "Neun Leute haben geschafft, wofür unsere vorherige Agentur vierzig brauchte — und sind jedes Mal ans Telefon gegangen.",
        name: "Marie Lambert",
        role: "Gründerin, Field Notes",
      },
    ],
  },

  studio: {
    eyebrow: "Das Studio",
    title: "Neun Menschen, die lieber machen als verwalten.",
    lead: "Fourtune begann 2014 in einem Einzimmerbüro in Bomonti. Wir sind langsam und mit Absicht gewachsen — groß genug für ernsthafte Arbeit, klein genug, dass jede und jeder weiß, woran die anderen arbeiten.",
    body: [
      "Wir sind Strateginnen, Designer und Entwickler, die der Übergabe müde waren. Wer das Problem formuliert hat, ist im Raum, wenn gebaut wird — das entfernt eine ganze Kategorie von Übersetzungsverlust.",
      "Wir nehmen vier bis sechs Projekte pro Jahr an. Diese Zahl ist eine gewählte Einschränkung, keine Grenze, gegen die wir gelaufen sind — sie erlaubt uns, jedem Projekt die nötige Aufmerksamkeit zu geben und trotzdem zum Abendessen zu Hause zu sein.",
      "Das Studio ist unabhängig und will es bleiben. Keine Holding, keine Wachstumsziele von jemandem, der unsere Kundinnen und Kunden nie getroffen hat.",
    ],
    valuesTitle: "Wie wir arbeiten",
    values: [
      {
        title: "Prototyp vor Versprechen",
        body: "Eine interaktive Demo ist tausend statische Frames wert. Wenn es sich im Prototyp nicht richtig anfühlt, kommt es nicht in die Präsentation.",
      },
      {
        title: "Das Weglassen ist das Design",
        body: "Jedes Element verdient seinen Platz. Zurückhaltung ist kein Selbstzweck — sie macht das Wichtige offensichtlich.",
      },
      {
        title: "Jeden Wert verteidigen",
        body: "Nichts ist zufällig. Fragen Sie uns, warum ein Abstand, ein Timing oder eine Ausrichtung so ist — es gibt eine Antwort.",
      },
      {
        title: "Launchen, dann bleiben",
        body: "Der Launch ist die Mitte der Geschichte. Wir bleiben das erste Quartal nah dran, denn dann kommt das echte Feedback.",
      },
    ],
    teamTitle: "Das Team",
    team: [
      { name: "Deniz Yalçın", role: "Gründer, Strategie" },
      { name: "Ayla Kurt", role: "Design Director" },
      { name: "Tom Rehn", role: "Principal Engineer" },
      { name: "Nora Fischer", role: "Motion Director" },
      { name: "Emre Solak", role: "Produktdesign" },
      { name: "Julia Brandt", role: "Markendesign" },
      { name: "Kaan Öz", role: "Frontend-Entwicklung" },
      { name: "Léa Moreau", role: "Content und Redaktion" },
      { name: "Sara Kaya", role: "Studio-Operations" },
    ],
    officeTitle: "Wo wir sind",
  },

  contact: {
    eyebrow: "Sagen Sie Hallo",
    title: "Erzählen Sie uns, was Sie bauen.",
    lead: "Wir lesen jede Nachricht selbst und antworten innerhalb von zwei Werktagen. Wenn wir nicht das richtige Studio sind, sagen wir es und verweisen Sie weiter.",
    formTitle: "Projektanfrage",
    form: {
      name: "Ihr Name",
      namePlaceholder: "Anna Berger",
      email: "E-Mail",
      emailPlaceholder: "anna@firma.de",
      company: "Unternehmen",
      companyPlaceholder: "Firmenname",
      budget: "Budgetrahmen",
      budgetPlaceholder: "Rahmen wählen",
      message: "Woran arbeiten Sie?",
      messagePlaceholder:
        "Ein Absatz reicht völlig. Was ist das Problem und bis wann muss es gelöst sein?",
      submit: "Anfrage senden",
      sending: "Wird gesendet…",
      optional: "optional",
      successTitle: "Nachricht gesendet",
      successBody: "Danke — ist angekommen. Antwort innerhalb von zwei Werktagen.",
      errorTitle: "Das ging nicht raus",
      errorBody:
        "Auf unserer Seite lief etwas schief. Schreiben Sie uns direkt, wir greifen es auf.",
      sendAnother: "Weitere Nachricht senden",
    },
    budgets: [
      "Unter 25.000 €",
      "25.000 € – 60.000 €",
      "60.000 € – 150.000 €",
      "Über 150.000 €",
      "Noch offen",
    ],
    validation: {
      nameRequired: "Bitte nennen Sie uns Ihren Namen.",
      emailRequired: "Wir brauchen eine E-Mail für die Antwort.",
      emailInvalid: "Das sieht nicht nach einer E-Mail-Adresse aus.",
      messageRequired: "Ein, zwei Sätze reichen für den Anfang.",
      messageShort: "Etwas mehr Detail würde helfen.",
    },
    directTitle: "Oder direkt erreichen",
    officeTitle: "Studio",
    hoursTitle: "Zeiten",
    hours: "Montag bis Freitag, 09:00 – 18:00 Uhr (GMT+3)",
    responseNote: "Durchschnittliche Antwortzeit: 1,4 Werktage",
  },

  cta: {
    eyebrow: "Nächster Schritt",
    title: "Gibt es etwas, das gemacht werden sollte?",
    body: "Erzählen Sie davon. Schlimmstenfalls bekommen Sie eine ehrliche zweite Meinung von Leuten, die das schon gebaut haben.",
    action: "Projekt starten",
    secondary: "E-Mail schreiben",
  },

  footer: {
    tagline: "Ein unabhängiges Studio für Design und Technologie in Istanbul.",
    navTitle: "Seite",
    socialTitle: "Anderswo",
    contactTitle: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    colophon: "Im Haus gebaut. Schrift: SF Pro und Inter.",
    backToTop: "Nach oben",
    localeTitle: "Sprache",
  },

  projects: {
    aurora: {
      title: "Eine Bank, die sich nicht mehr erklären muss",
      client: "Lumen Bank",
      category: "Digitales Produkt",
      duration: "9 Monate",
      summary:
        "Eine Banking-App, neu gebaut um eine Frage: Was muss die Kundin genau jetzt wissen?",
      challenge:
        "Lumens App war auf 84 Screens voller Funktionen gewachsen, die niemand verlangt hatte. Die Support-Anrufe stiegen, während der Funktionsumfang wuchs — und die häufigste Beschwerde war keine fehlende Funktion, sondern dass niemand die vorhandenen fand.",
      approach:
        "Wir haben die Informationsarchitektur auf vier Flächen reduziert und das Interaktionsmodell auf direkte Manipulation umgestellt: Salden, die auf Berührung reagieren, Transaktionen, die man auseinanderziehen kann, und Übergänge, die immer dorthin zurückkehren, wo sie herkamen. Das Designsystem wurde mit dem Build ausgeliefert, nicht danach.",
      outcome:
        "Die App ging in einem Quartal in elf Märkten live. Das Support-Volumen sank erstmals seit drei Jahren, und das Designsystem trägt inzwischen auch die Web-Plattform.",
      results: [
        { value: "−38 %", label: "Support-Kontakte" },
        { value: "4,8", label: "App-Store-Wertung" },
        { value: "2,1 s", label: "Zeit bis zur ersten Aktion" },
      ],
    },
    atlas: {
      title: "Mobilität mit Gesicht",
      client: "Atlas Mobility",
      category: "Markenidentität",
      duration: "6 Monate",
      summary:
        "Ein Flottenbetreiber mit exzellenter Logistik und null Persönlichkeit. Wir haben ihm eine gegeben.",
      challenge:
        "Atlas bewegte zwei Millionen Menschen im Monat und blieb dabei unsichtbar. Von der Fahrzeuglackierung bis zum Ticketbeleg sah alles nach drei verschiedenen Unternehmen aus — weil es das war.",
      approach:
        "Ein Zeichen, ein Schriftsystem, eine Motion-Signatur, vom App-Start bis zur Busflanke. Wir haben zuerst das Leitsystem entworfen — die härteste Randbedingung — und alles andere davon abgeleitet.",
      outcome:
        "Die Identität wurde in vierzehn Monaten auf 1.400 Fahrzeuge und 90 Stationen ausgerollt. Die ungestützte Markenerinnerung im Kernmarkt verdoppelte sich nahezu.",
      results: [
        { value: "×2,1", label: "Markenerinnerung" },
        { value: "1.400", label: "Fahrzeuge umgestellt" },
        { value: "14 Mon.", label: "Kompletter Rollout" },
      ],
    },
    vela: {
      title: "Commerce, der schneller lädt als ein Wimpernschlag",
      client: "Veridian",
      category: "Produkt und Entwicklung",
      duration: "7 Monate",
      summary:
        "Ein Storefront, vom Netzwerk aufwärts neu gebaut — denn das schnellste Interface ist das, das schon da ist.",
      challenge:
        "Veridians Katalog war schön und außerhalb des Büro-WLANs unbrauchbar. Die mobile Conversion lag bei einem Drittel der Desktop-Rate, und der Abstand bestand fast vollständig aus Ladezeit.",
      approach:
        "Neuaufbau mit Next.js und einem am Edge gerenderten Katalog, das Designsystem in eine Token-Ebene überführt, die beide Teams besitzen können, und jeder blockierende Spinner ersetzt durch einen Zustand, der bereits etwas Nützliches zeigt.",
      outcome:
        "Die mediane mobile Ladezeit fiel unter eine Sekunde. Die mobile Conversion schloss den Großteil des Abstands innerhalb von zwei Monaten nach Launch.",
      results: [
        { value: "0,9 s", label: "Mediane Ladezeit mobil" },
        { value: "+31 %", label: "Mobile Conversion" },
        { value: "100", label: "Lighthouse-Barrierefreiheit" },
      ],
    },
    tessera: {
      title: "Ein Museum, das man von gegenüber lesen kann",
      client: "Tessera",
      category: "Identität und Kampagne",
      duration: "5 Monate",
      summary:
        "Eine Identität aus einem einzigen modularen Raster — flexibel genug für elf Abteilungen, streng genug, um erkennbar zu bleiben.",
      challenge:
        "Elf kuratorische Abteilungen hatten sich über zwei Jahrzehnte je ein eigenes Erscheinungsbild beauftragt. Besucher erlebten nicht ein Museum, sondern elf unter einem Dach.",
      approach:
        "Ein Kachelraster erzeugt jedes Layout, vom Banner über das Wandschild bis zum Telefondisplay. Abteilungen wählen Farbe und Dichte innerhalb des Systems — Identität ohne Fragmentierung.",
      outcome:
        "Angewendet auf Beschilderung, Print, Kampagne und Ticketing. Die Abteilungen haben es freiwillig übernommen — die einzige Adoptionskennzahl, die zählt.",
      results: [
        { value: "11", label: "Abteilungen vereint" },
        { value: "+24 %", label: "Ticket-Conversion" },
        { value: "1", label: "Raster, überall" },
      ],
    },
    halo: {
      title: "Klang, den man sehen kann",
      client: "Halo Audio",
      category: "Produkt und Motion",
      duration: "4 Monate",
      summary:
        "Eine Companion-App für High-End-Kopfhörer, deren Interface sich verhält, wie die Hardware sich anfühlt.",
      challenge:
        "Halo baute außergewöhnliche Hardware und lieferte sie mit einem Einstellungsmenü aus. Käuferinnen eines 600-Euro-Produkts begegneten der Marke als Liste von Schaltern.",
      approach:
        "Wir haben das gesamte Interface auf Federn gebaut: räumliches Audio, das man per Drag positioniert, EQ-Kurven, die den Schwung des Fingers mitnehmen, und eine Wiedergabeansicht, die sich exakt aus der angetippten Karte öffnet.",
      outcome:
        "Die App wurde zum Kaufgrund statt zur Beigabe. Tests führten mit ihr an.",
      results: [
        { value: "4,9", label: "App-Store-Wertung" },
        { value: "+46 %", label: "Feature-Nutzung" },
        { value: "120 fps", label: "Dauerhaft auf dem Gerät" },
      ],
    },
    fieldnotes: {
      title: "Eine Papiermarke, die ihr Regal verdient",
      client: "Field Notes Co.",
      category: "Identität und Kampagne",
      duration: "4 Monate",
      summary:
        "Retail-first-Identität für ein Papierunternehmen im Wettbewerb mit Produkten, die man anfassen kann.",
      challenge:
        "Field Notes machte bessere Notizbücher als alle im Regal daneben und verkaufte ein Drittel so viele. Das Produkt leistete die ganze Arbeit, die Verpackung keine.",
      approach:
        "Wir haben die Verpackung als Hauptmedium entworfen — Identität ist das, was man im Laden auf Armlänge sieht — und sie danach rückwärts in Shop und Kampagne übersetzt.",
      outcome:
        "Relaunch bei 300 Händlern in zwei Ländern. Die Abverkaufsrate stieg genug, um zwei neue Produktlinien zu finanzieren.",
      results: [
        { value: "+58 %", label: "Abverkaufsrate" },
        { value: "300", label: "Händler" },
        { value: "2", label: "Neue Linien finanziert" },
      ],
    },
  },

  a11y: {
    scrollProgress: "Lesefortschritt",
    openMenu: "Navigationsmenü öffnen",
    closeMenu: "Navigationsmenü schließen",
    toggleTheme: "Zwischen heller und dunkler Darstellung wechseln",
    previous: "Zurück",
    next: "Weiter",
    pauseMarquee: "Laufende Liste anhalten",
    playMarquee: "Laufende Liste fortsetzen",
    pauseVideo: "Film pausieren",
    playVideo: "Film abspielen",
    muteVideo: "Ton ausschalten",
    unmuteVideo: "Ton einschalten",
  },

  notFound: {
    title: "Diese Seite ist weitergezogen.",
    body: "Der Link ist tot, die Arbeit nicht. Sehen Sie sich stattdessen die ausgewählten Projekte an.",
    action: "Zurück zur Startseite",
  },
};

export default de;
