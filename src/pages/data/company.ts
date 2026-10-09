import type { PageData } from "./types";
import { CASES, POSTS, FAQS } from "../../lib/home-data";

const BOOK = { label: "Book a free consultation", href: "contact.html" };

export const COMPANY_PAGES: Record<string, PageData> = {
  about: {
    slug: "about",
    title: "One partner across three practices",
    description: "IT services, hiring and training from India and the USA since 2019.",
    eyebrow: "About Laprrk",
    lede: "Laprrk Technology Solutions LLP has delivered software, placed engineers and trained teams since 2019, from Greater Noida West, India and Louisville, Kentucky, USA.",
    blocks: [
      {
        kind: "stats",
        title: "Laprrk in numbers",
        items: [
          { v: "2019", l: "founded, offices in India and the USA" },
          { v: "50+", l: "clients served" },
          { v: "200+", l: "IT professionals placed" },
          { v: "500+", l: "professionals trained" },
        ],
      },
      {
        kind: "points",
        title: "How we work",
        items: [
          "Confidential by default: NDA before detailed discussions",
          "Senior people lead every engagement",
          "Transparent reporting: demos, pipelines and impact reports",
          "Clear, fair pricing agreed in writing first",
          "One relationship manager across build, hire and train",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Where are you based?", a: "Greater Noida West, India and Louisville, Kentucky, USA, serving clients across India and the United States." },
          { q: "How do engagements start?", a: "A discovery call, a written proposal within 48 hours, then a pilot or first sprint." },
        ],
      },
    ],
    related: [
      { label: "IT Services", href: "it-services.html" },
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Corporate Training", href: "corporate-training.html" },
      { label: "Contact & offices", href: "contact.html" },
    ],
  },
  contact: {
    slug: "contact",
    title: "Tell us what you need",
    description: "Contact Laprrk in India and the USA.",
    eyebrow: "Contact & offices",
    lede: "Share your requirement and we will set up a free 30-minute consultation with the right specialist, followed by a written proposal within 48 hours.",
    secondaryLabel: "Chat on WhatsApp",
    secondaryHref: "https://wa.me/918860664929?text=Hi%20Laprrk%2C%20I%20would%20like%20a%20free%20consultation.",
    blocks: [
      {
        kind: "scope",
        title: "Reach us directly",
        items: [
          { title: "India office", body: "Office No. 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, UP 201318. +91 88606 64929." },
          { title: "USA office", body: "Louisville, Kentucky, United States. +1 (502) 309-5749." },
          { title: "Email", body: "info@laprrk.com. We reply within one business day." },
          { title: "Working hours", body: "Mon-Sat 10:00-19:00 IST. Mon-Fri 9:00-17:00 ET." },
          { title: "WhatsApp", body: "Fastest for first contact. Tap the green pill, any page." },
          { title: "NDA first", body: "Ask for a mutual NDA before sharing anything sensitive." },
        ],
      },
      {
        kind: "points",
        title: "What happens next",
        items: [
          "A 30-minute discovery call with a specialist",
          "A written proposal within 48 hours",
          "A pilot, first sprint, shortlist or pilot batch to start small",
        ],
      },
    ],
    related: [
      { label: "IT Services", href: "it-services.html" },
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Corporate Training", href: "corporate-training.html" },
      { label: "FAQs", href: "faq.html" },
    ],
  },
  resources: {
    slug: "resources",
    title: "Guides, cases and answers",
    description: "Practical guides, engagements and answers from our teams.",
    eyebrow: "Resources",
    lede: "Practical guides on AI, QA, hiring and upskilling, representative engagements, and answers on pricing, process and terms.",
    blocks: [
      {
        kind: "articles",
        title: "Start here",
        items: [
          { href: "blog.html", pill: "Blog", meta: "Guides & insights", title: "Blog & insights", body: "Practical guides on AI, QA, hiring and upskilling from our engineers, recruiters and trainers.", linkLabel: "Read the blog →" },
          { href: "case-studies.html", pill: "Proof", meta: "Engagements", title: "Case studies", body: "Representative engagements across IT, hiring and training. Names withheld, numbers real.", linkLabel: "See case studies →" },
          { href: "faq.html", pill: "Help", meta: "Answers", title: "FAQs", body: "Answers on pricing, process, IP, hiring terms and training logistics.", linkLabel: "Read FAQs →" },
        ],
      },
    ],
    related: [
      { label: "Blog", href: "blog.html" },
      { label: "Case studies", href: "case-studies.html" },
      { label: "About Laprrk", href: "about.html" },
      BOOK,
    ],
  },
  blog: {
    slug: "blog",
    title: "Latest from the blog",
    description: "Practical guides on AI, QA, hiring and upskilling.",
    eyebrow: "Blog & insights",
    lede: "Practical guides from our engineers, recruiters and trainers. No fluff, measured claims, code and process you can reuse.",
    blocks: [
      {
        kind: "articles",
        title: "All articles",
        items: POSTS.map((p) => ({ ...p, linkLabel: "Read article →" })),
      },
    ],
    related: [
      { label: "Case studies", href: "case-studies.html" },
      { label: "FAQs", href: "faq.html" },
      { label: "Resources", href: "resources.html" },
      BOOK,
    ],
  },
  "case-studies": {
    slug: "case-studies",
    title: "Representative engagements",
    description: "Engagements across IT, hiring and training.",
    eyebrow: "Case studies",
    lede: "Client names are withheld. These stories show the kind of problems we solve across our three practices.",
    blocks: [
      {
        kind: "articles",
        title: "All case studies",
        items: CASES.map((c) => ({
          href: c.href,
          pill: c.pill,
          meta: c.sector,
          title: c.title,
          body: c.body,
          linkLabel: "Read the case study →",
        })),
      },
    ],
    related: [
      { label: "IT Services", href: "it-services.html" },
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Corporate Training", href: "corporate-training.html" },
      BOOK,
    ],
  },
  faq: {
    slug: "faq",
    title: "Frequently asked questions",
    description: "Answers on pricing, process, IP, hiring and training.",
    eyebrow: "FAQs",
    lede: "Short answers to the questions every engagement starts with. Anything else, ask us directly.",
    blocks: [{ kind: "faqs", items: FAQS }],
    related: [
      { label: "Contact & offices", href: "contact.html" },
      { label: "About Laprrk", href: "about.html" },
      { label: "Resources", href: "resources.html" },
      BOOK,
    ],
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy policy",
    description: "How Laprrk collects, uses and protects information.",
    eyebrow: "Legal",
    lede: "How Laprrk Technology Solutions LLP collects, uses and protects your information on this site and in our services.",
    blocks: [
      {
        kind: "body",
        paragraphs: [
          "We collect only what we need: contact details you share, project information required for delivery, candidate data provided for hiring mandates, and basic analytics about site usage.",
          "Your information is used to respond to enquiries, deliver contracted services, process hiring mandates you authorise, and improve our site. We do not sell personal data.",
          "Access is role-based and limited to the people working on your engagement. Candidate and client data shared under NDA stays under NDA; systems access is removed at exit.",
          "We retain records as required for contracts, taxation (including GST-compliant invoicing) and legitimate business purposes, then delete or anonymise them.",
          "You may ask at info@laprrk.com for access, correction or deletion of your personal data, and we respond within applicable legal timelines.",
        ],
      },
    ],
    related: [
      { label: "Terms of Service", href: "terms.html" },
      { label: "Contact & offices", href: "contact.html" },
      { label: "About Laprrk", href: "about.html" },
      BOOK,
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of service",
    description: "Terms governing use of this site and services.",
    eyebrow: "Legal",
    lede: "The terms governing use of this website and the basis on which Laprrk provides its services.",
    blocks: [
      {
        kind: "body",
        paragraphs: [
          "Using this site means you accept these terms. Content here is for general information; proposals and agreements define the actual scope, timelines and commercials of any engagement.",
          "All site content belongs to Laprrk or its licensors. You may read and share links, but not reproduce substantial content without permission.",
          "Services are delivered under written proposals and agreements covering scope, team, timeline, price, IP assignment and confidentiality. Nothing on this site overrides a signed agreement.",
          "To the extent permitted by law, Laprrk is not liable for indirect losses from site use. Liability for services is as stated in the governing agreement.",
          "These terms are governed by the laws of India, with jurisdiction at Gautam Buddha Nagar, Uttar Pradesh, unless an agreement states otherwise.",
        ],
      },
    ],
    related: [
      { label: "Privacy Policy", href: "privacy-policy.html" },
      { label: "Contact & offices", href: "contact.html" },
      { label: "About Laprrk", href: "about.html" },
      BOOK,
    ],
  },
  "genai-document-assistant-insurance": {
    slug: "genai-document-assistant-insurance",
    title: "GenAI document assistant for an insurance agency network",
    description: "70% less manual data entry for insurance agencies.",
    eyebrow: "Case study · IT Services · Insurance",
    lede: "A network of independent insurance agencies was spending hours re-keying data from applications, loss runs and declarations pages. We built a GenAI assistant that extracts, validates and routes document data.",
    blocks: [
      {
        kind: "stats",
        items: [
          { v: "70%", l: "less manual data entry per document" },
          { v: "6 weeks", l: "to first production release" },
          { v: "95%+", l: "field accuracy after human review" },
        ],
      },
      {
        kind: "body",
        title: "How it worked",
        paragraphs: [
          "Every field the model extracts is reviewed by agency staff before it reaches the agency management system. Accuracy compounds: corrections feed the evaluation set, and the evaluation set gates every prompt change.",
          "The assistant runs on the client's approved models with zero-retention tiers, and documents never leave the client's cloud. Staff kept their jobs; they lost the re-keying.",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Could this work for our documents?", a: "If your documents are semi-structured and high-volume, very likely. A two-week pilot on your own files answers it definitively." },
        ],
      },
    ],
    related: [
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "All case studies", href: "case-studies.html" },
      { label: "QA & Test Automation", href: "qa-test-automation.html" },
      BOOK,
    ],
  },
  "india-engineering-team-setup": {
    slug: "india-engineering-team-setup",
    title: "First 40 hires for a US product company's India team",
    description: "40 joiners in eight months for a new India centre.",
    eyebrow: "Case study · Hiring · Software products",
    lede: "A US product company building its first engineering centre in India needed leaders and engineers who matched its product culture. We ran a phased programme that delivered 40 joiners in eight months.",
    blocks: [
      {
        kind: "stats",
        items: [
          { v: "40", l: "joiners in eight months" },
          { v: "6 days", l: "average time to first shortlist" },
          { v: "88%", l: "offer-to-join ratio" },
        ],
      },
      {
        kind: "body",
        title: "How it worked",
        paragraphs: [
          "We started with the site leader and two engineering managers, hired against a product-culture bar the founders helped define. Only then did foundation hiring begin across backend, frontend and QA.",
          "Notice-period engagement protected the offer-to-join ratio, and onboarding weeks were designed jointly so joiners shipped in their first sprint.",
        ],
      },
    ],
    related: [
      { label: "GCC & India Team Setup", href: "gcc-hiring.html" },
      { label: "All case studies", href: "case-studies.html" },
      { label: "Executive Search", href: "executive-search.html" },
      BOOK,
    ],
  },
  "genai-cloud-upskilling-program": {
    slug: "genai-cloud-upskilling-program",
    title: "GenAI and cloud upskilling for 120 engineers",
    description: "12-week role-based programme with measured gains.",
    eyebrow: "Case study · Training · IT services",
    lede: "A mid-size IT company wanted its engineers delivering GenAI and cloud projects, but skills were uneven. We ran a 12-week role-based programme for 120 engineers.",
    blocks: [
      {
        kind: "stats",
        items: [
          { v: "120", l: "engineers trained across three roles" },
          { v: "38%", l: "average improvement in assessment scores" },
          { v: "8", l: "applied projects demonstrated to leadership" },
        ],
      },
      {
        kind: "body",
        title: "How it worked",
        paragraphs: [
          "Engineers were grouped by role: application developers, data engineers and cloud engineers. Each track combined live labs with an applied project on the company's own stack.",
          "Pre and post assessments plus a leadership demo day made the improvement visible and funded the second cohort.",
        ],
      },
    ],
    related: [
      { label: "GenAI Training", href: "generative-ai-training.html" },
      { label: "All case studies", href: "case-studies.html" },
      { label: "Training for IT corporates", href: "training-for-it-corporates.html" },
      BOOK,
    ],
  },
  "nep-industry-courses-colleges": {
    slug: "nep-industry-courses-colleges",
    title: "How colleges can run industry-aligned credit courses under NEP 2020",
    description: "A practical approach for institutions.",
    eyebrow: "Blog · Training · 29 Sep 2026 · 7 min read",
    lede: "NEP 2020 gives colleges room to offer skill-based credit courses. Doing it well needs careful design, outcome mapping, faculty involvement and honest expectations.",
    blocks: [
      {
        kind: "body",
        paragraphs: [
          "Start from outcomes, not tools. Define what a student can demonstrate at the end: a deployed app, a governed dashboard, a tested suite. Then design backwards to weeks and assessments.",
          "Map every outcome to programme outcomes for your academic council. Outcome mapping is the document that turns an industry wish into an approved credit course.",
          "Involve faculty from week one. An FDP followed by co-delivery leaves the college able to run the course independently within two cycles.",
          "Keep cohorts lab-sized. Thirty students building real projects beats three hundred watching slides, for both learning and placement stories.",
        ],
      },
    ],
    related: [
      { label: "NEP Credit Courses", href: "nep-credit-courses.html" },
      { label: "Faculty Development", href: "faculty-development-programs.html" },
      { label: "All articles", href: "blog.html" },
      BOOK,
    ],
  },
  "corporate-ai-upskilling-plan": {
    slug: "corporate-ai-upskilling-plan",
    title: "A 90-day AI upskilling plan for IT teams",
    description: "Role-based tracks with measurement.",
    eyebrow: "Blog · Training · 8 Sep 2026 · 7 min read",
    lede: "Most IT teams use AI tools but few have been trained well. This 90-day plan sets out role-based tracks, practice, governance and measurement.",
    blocks: [
      {
        kind: "body",
        paragraphs: [
          "Days 1-30: fluency for everyone. Copilots, prompting, data hygiene and your AI policy, measured by a baseline assessment.",
          "Days 31-60: role tracks. Developers build RAG prototypes, analysts automate reporting, testers evaluate AI features. Everything hands-on.",
          "Days 61-90: applied projects with demos to leadership. Nothing counts until it ships internally and survives review.",
          "Governance runs throughout: approved tools, zero-retention tiers, and human review for consequential outputs.",
        ],
      },
    ],
    related: [
      { label: "GenAI Training", href: "generative-ai-training.html" },
      { label: "AI Literacy Training", href: "ai-literacy-training.html" },
      { label: "All articles", href: "blog.html" },
      BOOK,
    ],
  },
  "hire-train-deploy-model": {
    slug: "hire-train-deploy-model",
    title: "Hire-Train-Deploy: building job-ready fresher teams in 12 weeks",
    description: "Selection, training and deployment, structured.",
    eyebrow: "Blog · Hiring · 18 Aug 2026 · 7 min read",
    lede: "Campus hires bring energy but need months before contributing. Hire-Train-Deploy shortens that with selection, role curriculum and project assessment.",
    blocks: [
      {
        kind: "body",
        paragraphs: [
          "Select for attitude and aptitude, not just marks. Structured tests plus interviews predict trainability better than CGPA alone.",
          "Train on the actual stack for 8-12 weeks, around 70% hands-on. Generic training produces generic engineers.",
          "Assess on projects, not exams. Deployment happens only after candidates demonstrate working software to reviewers.",
          "Deploy with mentors. Supervised production work from week one, independence by the end of the quarter.",
        ],
      },
    ],
    related: [
      { label: "Campus Hiring", href: "campus-hiring.html" },
      { label: "Placement Training", href: "placement-training.html" },
      { label: "All articles", href: "blog.html" },
      BOOK,
    ],
  },
};
