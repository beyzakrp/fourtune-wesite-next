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
    title: "Fourtune Services",
    lead: "Strategy, content, performance, digital experiences and branded things people want to keep — all tuned by one team.",
    viewAll: "All our services",
    deliverablesLabel: "Includes",
    items: [
      {
        id: "digital-strategy",
        title: "Digital Strategy",
        summary:
          "Think big. Move smart. We turn insights, data and ideas into digital strategies that truly take you forward.",
        deliverables: [
          "Digital audits and opportunity mapping",
          "Audience, market and competitor research",
          "Customer journeys and channel strategy",
          "Measurement framework and action roadmap",
        ],
      },
      {
        id: "social-media",
        title: "Social Media",
        summary:
          "Make your brand impossible to scroll past. From content planning to community management, we keep your social media alive, relevant and unmistakably you. We are here for you!",
        deliverables: [
          "Social strategy and content calendars",
          "Platform-native creative and copywriting",
          "Community management and engagement",
          "Reporting, social listening and optimization",
        ],
      },
      {
        id: "creative-content",
        title: "Creative & Content",
        summary:
          "Ideas worth talking about. We build brand identities, create stories and manage production to turn your ideas into content people actually want to see.",
        deliverables: [
          "Creative concepts and storytelling",
          "Brand identity and art direction",
          "Photography, video and production management",
          "Editorial content systems and adaptations",
        ],
      },
      {
        id: "performance-marketing",
        title: "Performance Marketing",
        summary:
          "Less guessing. More growing. We create, test and optimize campaigns that turn clicks into customers and budgets into real results.",
        deliverables: [
          "Paid search and paid social campaigns",
          "Audience planning and retargeting",
          "Creative testing and conversion optimization",
          "Performance reporting and budget management",
        ],
      },
      {
        id: "web-digital-experience",
        title: "Web & Digital Experience",
        summary:
          "Your digital home. Make it iconic. We create websites and digital experiences that look good, feel smooth and make people want to stay. Just like our own website.",
        deliverables: [
          "UX research and information architecture",
          "UI design and scalable design systems",
          "Responsive website and product development",
          "Analytics, accessibility and conversion reviews",
        ],
      },
      {
        id: "branding-campaign",
        title: "Branding & Campaign",
        summary:
          "Give your brand a personality. From the big idea to the final campaign, we build brands that have a voice, a vibe and something to say.",
        deliverables: [
          "Brand strategy and positioning",
          "Visual and verbal identity systems",
          "Campaign concepts and key visuals",
          "Launch planning and channel adaptations",
        ],
      },
      {
        id: "branding-merchandise",
        title: "Branded Merchandise",
        summary:
          "Put your brand out there. Literally. From merchandise to personalized products, we turn your brand into things people actually want to keep, use and show off. Custom products help build a sense of belonging around your brand.",
        deliverables: [
          "Merchandise strategy and product selection",
          "Custom product and apparel design",
          "Packaging and unboxing experiences",
          "Supplier sourcing and production management",
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
    previewEyebrow: "TEAM",
    previewTitle: "Our Story",
    previewAction: "Let’s get to know each other",
    title: "4 minds. One focus: **you**.",
    lead: "Fourtune started with four people, a shared vision, and the belief that every brand has a **unique story** waiting to be heard.",
    body: [
      "Before becoming a team, as colleagues working side by side, we realized that the secret behind our success was not only our individual skills, but also the way we challenged each other to become better versions of ourselves and our ability to transform ideas into impactful solutions.",
      "This realization planted the seed of creating an agency of our own.",
      "The name 4tune represents who we are: four people who think alike, bring different strengths together, and believe that **passion** has no limits when it comes to the work we create. Inspired by the idea of finding the tune of branding, we help businesses discover their unique voice and build meaningful connections.",
      "At 4tune, we don’t believe in one-size-fits-all solutions. Our role is to work as an extension of your team, listen to your story, understand your goals, and communicate your brand with an authentic voice that reaches the right people and creates real results.",
      "By bringing together different areas of expertise, we combine strategic thinking, creativity, technology, and a deep understanding of people to help brands grow and stand out in an ever-changing digital world.",
      "For us, marketing is not just about being visible. It is about creating meaningful connections, building trust, and leaving a lasting impact. Whether you are building your identity, strengthening your presence, or looking for new ways to connect with your audience, we are here to help you find your brand’s true tune.",
      "**4tune. Find the tune of your branding.**",
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
    colophon: "",
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
    title: "Opsss....",
    body: "The link is dead, but the work is not. Try the agency's selected projects instead.",
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
