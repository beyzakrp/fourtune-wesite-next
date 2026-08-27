import type { ProjectId } from "@/lib/content/projects";

/**
 * English is the *type* source for every other dictionary — but it is not the
 * default locale. That is Turkish (`src/lib/i18n/config.ts`).
 *
 * All copy here is placeholder written to the right length and rhythm for the
 * layout; swap the words, keep the shapes.
 */
const en = {
  meta: {
    tagline: "Branding agency",
    title: "Fourtune — Find the tune of branding",
    description:
      "Fourtune is an independent branding agency: strategy, identity, product and the motion that ties them together.",
    ogAlt: "Fourtune — 4tune",
  },

  nav: {
    home: "Home",
    work: "Portfolio",
    services: "Services",
    studio: "Our Story",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    startProject: "Start a project",
    skipToContent: "Skip to content",
    theme: "Appearance",
    themeLight: "Light",
    themeDark: "Dark",
    language: "Language",
  },

  hero: {
    eyebrow: "Independent since 2014",
    titleLead: "Where brands find",
    titleAccent: "their frequency",
    titleTrail: "and hold it.",
    lead: "Fourtune is an independent branding agency. We tune positioning, identity and product until a company sounds like one thing everywhere it shows up.",
    primary: "See the work",
    secondary: "Start a project",
    scroll: "Scroll",
  },

  showreel: {
    label: "Showreel",
  },

  /** Four-word sets for the oversized ghost headline carousel. */
  ghost: {
    label: "Positions",
    sets: [
      ["Brand", "Product", "Motion", "System"],
      ["Sharper", "Clearer", "Braver", "Work"],
      ["Find", "The", "Tune", "First"],
    ],
  },

  marquee: {
    label: "Trusted by",
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
    eyebrow: "The studio",
    title: "Small team. Long attention span.",
    body: "We take on a handful of engagements a year so that the people who pitched the work are the people who make it. No hand-offs, no account layer — just the team, the problem, and the time to get it right.",
    stats: [
      { value: "12", label: "Years independent" },
      { value: "140", label: "Projects shipped" },
      { value: "28", label: "Awards won" },
      { value: "9", label: "People, total" },
    ],
  },

  services: {
    eyebrow: "What we do",
    title: "Six disciplines, one team.",
    lead: "Most studios hand you off between departments. We keep strategy, design and engineering in the same room — which is why the thing we show you is the thing you get.",
    deliverablesLabel: "Includes",
    items: [
      {
        id: "strategy",
        title: "Brand strategy",
        summary:
          "Positioning, naming and narrative. We find the one true thing about a company and make everything else answer to it.",
        deliverables: [
          "Market and audience research",
          "Positioning and messaging",
          "Naming and verbal identity",
          "Brand architecture",
        ],
      },
      {
        id: "identity",
        title: "Identity design",
        summary:
          "Marks, type systems and the rules that hold them together — designed to survive contact with the real world.",
        deliverables: [
          "Logo and mark systems",
          "Typography and colour",
          "Art direction",
          "Guidelines and toolkits",
        ],
      },
      {
        id: "product",
        title: "Digital product",
        summary:
          "Interfaces people reach for without thinking. Research, flows, design systems, and prototypes you can actually use.",
        deliverables: [
          "Product and UX strategy",
          "Interface design",
          "Design systems",
          "Interactive prototypes",
        ],
      },
      {
        id: "motion",
        title: "Motion & film",
        summary:
          "Animation as behaviour, not decoration. Every transition explains where something came from and where it went.",
        deliverables: [
          "Interface motion systems",
          "Brand animation",
          "Direction and production",
          "3D and compositing",
        ],
      },
      {
        id: "engineering",
        title: "Web engineering",
        summary:
          "We build what we design. Fast, accessible front-ends and the content tooling your team will live in for years.",
        deliverables: [
          "Next.js and React builds",
          "Headless CMS integration",
          "Performance and accessibility",
          "Handover and training",
        ],
      },
      {
        id: "campaign",
        title: "Content & campaign",
        summary:
          "Launch work that keeps the brand intact. One idea, adapted honestly to every place it has to live.",
        deliverables: [
          "Campaign concepts",
          "Art direction and shoots",
          "Social and editorial systems",
          "Launch playbooks",
        ],
      },
    ],
  },

  work: {
    eyebrow: "Selected work",
    title: "Things we made, and why.",
    lead: "A short selection. Each one includes the part most case studies leave out — what we got wrong before we got it right.",
    viewAll: "All work",
    viewCase: "Read the case",
    allProjects: "All projects",
    nextProject: "Next project",
    backToWork: "Back to work",
    labels: {
      client: "Client",
      year: "Year",
      disciplines: "Disciplines",
      duration: "Duration",
    },
    sections: {
      challenge: "The challenge",
      approach: "What we did",
      outcome: "The outcome",
      results: "Results",
    },
  },

  process: {
    eyebrow: "How it goes",
    title: "Four phases. No surprises.",
    lead: "Every engagement runs the same shape, whether it is six weeks or six months. You always know which phase you are in and what lands at the end of it.",
    steps: [
      {
        n: "01",
        title: "Discovery",
        body: "Two weeks of interviews, audits and honest questions. We come back with a written point of view — including the parts you may not want to hear.",
      },
      {
        n: "02",
        title: "Direction",
        body: "Two or three routes, each taken far enough to judge. You pick one; we do not present anything we would not be happy to build.",
      },
      {
        n: "03",
        title: "Craft",
        body: "The long middle. Weekly working sessions, real components, real content — no polished mock-ups hiding an unsolved problem.",
      },
      {
        n: "04",
        title: "Launch",
        body: "We ship it, document it, and teach your team to run it. Then we stay on call for the first quarter, because launches are never the end.",
      },
    ],
  },

  testimonials: {
    eyebrow: "In their words",
    title: "What it is like to work with us.",
    items: [
      {
        quote:
          "They pushed back on our brief in the first week, and they were right. The rebrand landed a quarter early because of it.",
        name: "Selin Arda",
        role: "CMO, Lumen Bank",
      },
      {
        quote:
          "The prototype was so close to the final build that our engineers used it as the spec. I have never seen that before.",
        name: "Jonas Weiss",
        role: "Head of Product, Atlas Mobility",
      },
      {
        quote:
          "Nine people did what our previous agency needed forty for, and answered the phone every time.",
        name: "Marie Lambert",
        role: "Founder, Field Notes",
      },
    ],
  },

  studio: {
    eyebrow: "The studio",
    title: "Nine people who would rather make than manage.",
    lead: "Fourtune started in 2014 in a one-room office in Bomonti. We have grown slowly and on purpose — enough people to do serious work, few enough that everyone knows what everyone else is doing.",
    body: [
      "We are strategists, designers and engineers who got tired of the hand-off. The person who framed the problem is in the room when it gets built, which removes an entire category of translation loss.",
      "We take four to six engagements a year. That number is a constraint we chose, not a limit we ran into — it is what lets us give each project the attention it needs and still be home for dinner.",
      "The studio is independent and intends to stay that way. No holding company, no growth targets set by someone who has never met our clients.",
    ],
    valuesTitle: "How we work",
    values: [
      {
        title: "Prototype before you promise",
        body: "An interactive demo is worth a thousand static frames. If we cannot make it feel right in a prototype, we do not put it in a deck.",
      },
      {
        title: "The absence is the design",
        body: "Every element earns its place. Restraint is not minimalism for its own sake — it is what makes the important thing obvious.",
      },
      {
        title: "Defend every value",
        body: "Nothing is random. Ask us why a spacing, a timing or an alignment is what it is, and there is an answer.",
      },
      {
        title: "Ship, then stay",
        body: "Launch is the middle of the story. We stay close through the first quarter, because that is when the real feedback shows up.",
      },
    ],
    teamTitle: "The team",
    team: [
      { name: "Deniz Yalçın", role: "Founder, strategy" },
      { name: "Ayla Kurt", role: "Design director" },
      { name: "Tom Rehn", role: "Principal engineer" },
      { name: "Nora Fischer", role: "Motion director" },
      { name: "Emre Solak", role: "Product design" },
      { name: "Julia Brandt", role: "Brand design" },
      { name: "Kaan Öz", role: "Front-end engineering" },
      { name: "Léa Moreau", role: "Content and editorial" },
      { name: "Sara Kaya", role: "Studio operations" },
    ],
    officeTitle: "Where we are",
  },

  contact: {
    eyebrow: "Say hello",
    title: "Tell us what you are building.",
    lead: "We read every message ourselves and reply within two working days. If we are not the right studio for it, we will say so and point you somewhere better.",
    formTitle: "Project enquiry",
    form: {
      name: "Your name",
      namePlaceholder: "Jane Doe",
      email: "Email",
      emailPlaceholder: "jane@company.com",
      company: "Company",
      companyPlaceholder: "Company name",
      budget: "Budget range",
      budgetPlaceholder: "Select a range",
      message: "What are you working on?",
      messagePlaceholder:
        "A paragraph is plenty. What is the problem, and when does it need to be solved?",
      submit: "Send enquiry",
      sending: "Sending…",
      optional: "optional",
      successTitle: "Message sent",
      successBody: "Thanks — we have it. Expect a reply within two working days.",
      errorTitle: "That did not send",
      errorBody: "Something went wrong on our end. Email us directly and we will pick it up.",
      sendAnother: "Send another",
    },
    budgets: ["Under €25k", "€25k – €60k", "€60k – €150k", "€150k+", "Not sure yet"],
    validation: {
      nameRequired: "Please tell us your name.",
      emailRequired: "We need an email to reply to.",
      emailInvalid: "That does not look like an email address.",
      messageRequired: "A sentence or two is enough to start.",
      messageShort: "A little more detail would help.",
    },
    directTitle: "Or reach us directly",
    officeTitle: "Studio",
    hoursTitle: "Hours",
    hours: "Monday to Friday, 09:00 – 18:00 (GMT+3)",
    responseNote: "Average reply time: 1.4 working days",
  },

  cta: {
    eyebrow: "Next step",
    title: "Got something worth making?",
    body: "Tell us about it. Worst case, you get an honest second opinion from people who have shipped this before.",
    action: "Start a project",
    secondary: "Email us",
  },

  footer: {
    tagline: "An independent design and technology studio in İstanbul.",
    navTitle: "Site",
    socialTitle: "Elsewhere",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    colophon: "Built in-house. Type set in SF Pro and Inter.",
    backToTop: "Back to top",
    localeTitle: "Language",
  },

  projects: {
    aurora: {
      title: "A bank that stops explaining itself",
      client: "Lumen Bank",
      category: "Digital product",
      duration: "9 months",
      summary:
        "Rebuilding a retail banking app around one question: what does the customer need to know right now?",
      challenge:
        "Lumen's app had grown into 84 screens of features nobody asked for. Support calls were rising even as functionality expanded, and the top complaint was not a missing feature — it was that people could not find the ones already there.",
      approach:
        "We cut the information architecture down to four surfaces and rebuilt the interaction model around direct manipulation: balances that respond to touch, transactions you can pull apart, and transitions that always return to where they came from. The design system shipped with the build, not after it.",
      outcome:
        "The new app launched in eleven markets over one quarter. Support volume fell for the first time in three years, and the design system now runs the web platform too.",
      results: [
        { value: "−38%", label: "Support contacts" },
        { value: "4.8", label: "App Store rating" },
        { value: "2.1s", label: "Time to first action" },
      ],
    },
    atlas: {
      title: "Mobility, with a face",
      client: "Atlas Mobility",
      category: "Brand identity",
      duration: "6 months",
      summary:
        "A fleet operator with excellent logistics and no personality at all. We gave it one.",
      challenge:
        "Atlas moved two million people a month and was invisible doing it. Everything from the vehicle livery to the ticket receipt looked like it came from three different companies, because it did.",
      approach:
        "One mark, one type system, one motion signature applied from the app splash to the side of a bus. We designed the wayfinding first — it is the hardest constraint — and let everything else inherit from it.",
      outcome:
        "The identity rolled out across 1,400 vehicles and 90 stations in fourteen months. Unprompted brand recall in their core market roughly doubled.",
      results: [
        { value: "×2.1", label: "Brand recall" },
        { value: "1,400", label: "Vehicles rebranded" },
        { value: "14mo", label: "Full rollout" },
      ],
    },
    vela: {
      title: "Commerce that loads before you blink",
      client: "Veridian",
      category: "Product & engineering",
      duration: "7 months",
      summary:
        "A storefront rebuilt from the network up, because the fastest interface is the one that is already there.",
      challenge:
        "Veridian's catalogue was beautiful and unusable on anything but office wi-fi. Mobile conversion was a third of desktop, and the gap was almost entirely load time.",
      approach:
        "We rebuilt on Next.js with an edge-rendered catalogue, moved the design system to a token layer both teams could own, and replaced every blocking spinner with a state that already shows something useful.",
      outcome:
        "Median mobile load dropped under a second. Conversion on mobile closed most of the gap to desktop within two months of launch.",
      results: [
        { value: "0.9s", label: "Median mobile load" },
        { value: "+31%", label: "Mobile conversion" },
        { value: "100", label: "Lighthouse a11y" },
      ],
    },
    tessera: {
      title: "A museum you can read from across the street",
      client: "Tessera",
      category: "Identity & campaign",
      duration: "5 months",
      summary:
        "An identity built from one modular grid — flexible enough for eleven departments, rigid enough to stay recognisable.",
      challenge:
        "Eleven curatorial departments had each commissioned their own look over two decades. Visitors did not experience one museum; they experienced eleven that happened to share a roof.",
      approach:
        "A single tile grid generates every layout, from a banner to a wall label to a phone screen. Departments choose colour and density within the system, so they get identity without fragmentation.",
      outcome:
        "Applied across signage, print, campaign and the ticketing platform. Departments adopted it voluntarily, which is the only adoption metric that matters.",
      results: [
        { value: "11", label: "Departments unified" },
        { value: "+24%", label: "Ticket conversion" },
        { value: "1", label: "Grid, everywhere" },
      ],
    },
    halo: {
      title: "Sound you can see",
      client: "Halo Audio",
      category: "Product & motion",
      duration: "4 months",
      summary:
        "A companion app for high-end headphones, where the interface behaves like the hardware feels.",
      challenge:
        "Halo built extraordinary hardware and shipped it with a settings menu. Owners of a €600 product were meeting the brand through a list of toggles.",
      approach:
        "We built the whole interface on springs: spatial audio you position by dragging, EQ curves that carry the momentum of your finger, and a now-playing view that expands from the exact card you tapped.",
      outcome:
        "The app became a reason to buy the hardware rather than an afterthought bundled with it. Reviewers led with it.",
      results: [
        { value: "4.9", label: "App Store rating" },
        { value: "+46%", label: "Feature adoption" },
        { value: "120fps", label: "Sustained on device" },
      ],
    },
    fieldnotes: {
      title: "A stationery brand that earns its shelf",
      client: "Field Notes Co.",
      category: "Identity & campaign",
      duration: "4 months",
      summary:
        "Retail-first identity for a paper company competing against products people can touch.",
      challenge:
        "Field Notes made better notebooks than anyone on the shelf next to them and sold a third as many. The product was doing all the work and the packaging none of it.",
      approach:
        "We designed the packaging as the primary medium — the identity is what you see at arm's length in a shop — then extended it backwards into the digital storefront and campaign.",
      outcome:
        "Relaunched across 300 stockists in two countries. Sell-through rate improved enough to fund two new product lines.",
      results: [
        { value: "+58%", label: "Sell-through" },
        { value: "300", label: "Stockists" },
        { value: "2", label: "New lines funded" },
      ],
    },
  } satisfies Record<ProjectId, ProjectCopy>,

  a11y: {
    scrollProgress: "Reading progress",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    toggleTheme: "Switch between light and dark appearance",
    previous: "Previous",
    next: "Next",
    pauseMarquee: "Pause the scrolling list",
    playMarquee: "Resume the scrolling list",
    pauseVideo: "Pause the film",
    playVideo: "Play the film",
    muteVideo: "Mute the film",
    unmuteVideo: "Turn the sound on",
  },

  notFound: {
    title: "This page moved on.",
    body: "The link is dead, but the work is not. Try the studio's selected projects instead.",
    action: "Back to home",
  },
};

type ProjectCopy = {
  title: string;
  client: string;
  category: string;
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  results: { value: string; label: string }[];
};

export type Dictionary = typeof en;

export default en;
