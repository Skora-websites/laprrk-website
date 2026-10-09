import type { PageData } from "./types";

const BOOK = { label: "Book a free consultation", href: "contact.html" };

export const HIRING_PAGES: Record<string, PageData> = {
  "hiring-consultation": {
    slug: "hiring-consultation",
    title: "Hiring consultation for tech teams",
    description: "Permanent and contract IT hiring, RPO, executive search and GCC setup.",
    eyebrow: "Hiring overview",
    lede: "Permanent and contract hiring, staff augmentation, RPO, executive search, campus hiring and GCC team setup in India and the USA. Screened shortlists in 5-7 business days.",
    secondaryLabel: "See roles we recruit",
    secondaryHref: "technologies-roles-we-recruit.html",
    blocks: [
      {
        kind: "scope",
        title: "10 hiring services",
        lede: "One coordinator across services, screened by practising engineers.",
        items: [
          { title: "Permanent recruitment", body: "Technically screened hires with joining follow-through." },
          { title: "Contract staffing", body: "Engineers in weeks, with conversion paths." },
          { title: "Staff augmentation", body: "Embedded seniors and dedicated teams." },
          { title: "GCC & India setup", body: "Phased leadership-first hiring for new centres." },
          { title: "Executive search", body: "Mapped search for CTO, VP and architect roles." },
          { title: "RPO & campus", body: "Embedded recruiting and Hire-Train-Deploy fresher pipelines." },
        ],
      },
      {
        kind: "stats",
        title: "Hiring track record",
        items: [
          { v: "200+", l: "IT professionals placed" },
          { v: "6 days", l: "average time to first shortlist" },
          { v: "88%", l: "offer-to-join ratio" },
          { v: "40", l: "joiners in one GCC programme" },
        ],
      },
      { kind: "steps", title: "How a hiring engagement runs" },
      {
        kind: "faqs",
        items: [
          { q: "What are your commercial terms?", a: "Success fee after joining for permanent roles, monthly billing for contracts and RPO. Everything is agreed in writing before sourcing starts." },
          { q: "Do you offer replacement guarantees?", a: "Yes, a free replacement within the guarantee period if a placed candidate leaves." },
          { q: "How do you screen candidates?", a: "Recruiter screen, practising-engineer technical round, and client interviews with structured scorecards." },
        ],
      },
    ],
    related: [
      { label: "All hiring services", href: "hiring-services.html" },
      { label: "GCC & India Team Setup", href: "gcc-hiring.html" },
      { label: "Hire-Train-Deploy", href: "campus-hiring.html" },
      BOOK,
    ],
  },
  "hiring-services": {
    slug: "hiring-services",
    title: "All hiring services",
    description: "Every hiring service in one place.",
    eyebrow: "Hiring services",
    lede: "From a single key hire to a full RPO function or a new GCC centre. Pick one service or combine them under one coordinator.",
    blocks: [
      {
        kind: "scope",
        title: "Service catalogue",
        items: [
          { title: "Permanent IT Recruitment", body: "Screened permanent hires across 16 technology groups." },
          { title: "Contract Staffing", body: "W2, C2C and contract-to-hire, in India and the USA." },
          { title: "Staff Augmentation", body: "Embedded engineers and dedicated squads." },
          { title: "GCC Hiring", body: "Leadership-first phased hiring for new centres." },
          { title: "Executive Search", body: "CTO, VP Engineering, architects and site leaders." },
          { title: "RPO, Campus & More", body: "Embedded recruiting, campus pipelines, assessments and diversity hiring." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Can we combine services?", a: "Yes. A common pattern is RPO plus Hire-Train-Deploy for scale hiring." },
          { q: "Do you hire outside IT?", a: "Our focus is technology roles. Leadership search can extend to product and data leaders." },
        ],
      },
    ],
    related: [
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Permanent IT Recruitment", href: "permanent-it-recruitment.html" },
      { label: "RPO", href: "rpo.html" },
      BOOK,
    ],
  },
  "permanent-it-recruitment": {
    slug: "permanent-it-recruitment",
    title: "Permanent IT recruitment",
    description: "Technically screened permanent hires.",
    eyebrow: "Hiring services",
    lede: "Permanent engineers, screened by practising engineers, with structured interviews and joining follow-through until day one and beyond.",
    blocks: [
      {
        kind: "scope",
        title: "How we deliver",
        items: [
          { title: "Role calibration", body: "Must-haves, good-to-haves and compensation bands agreed upfront." },
          { title: "Sourcing", body: "Mapped talent pools, not just portal searches." },
          { title: "Technical screening", body: "Engineer-led evaluation with scorecards you can read." },
          { title: "Interview management", body: "Scheduling, feedback loops and offer strategy." },
          { title: "Joining follow-through", body: "Notice-period engagement to protect offer-to-join ratios." },
          { title: "Replacement cover", body: "Free replacement within the guarantee period." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "What fee do you charge?", a: "A success fee payable after joining, agreed in writing before sourcing." },
          { q: "Which roles do you cover?", a: "All 16 technology groups on our roles page, from Java to GenAI to SAP." },
        ],
      },
    ],
    related: [
      { label: "Roles we recruit", href: "technologies-roles-we-recruit.html" },
      { label: "Contract Staffing", href: "contract-staffing.html" },
      { label: "Executive Search", href: "executive-search.html" },
      BOOK,
    ],
  },
  "contract-staffing": {
    slug: "contract-staffing",
    title: "Contract staffing & contract-to-hire",
    description: "Contract engineers in weeks, with conversion paths.",
    eyebrow: "Hiring services",
    lede: "Contract engineers for spikes, backfills and new initiatives, with clean contract-to-hire conversion when the role proves permanent.",
    blocks: [
      {
        kind: "scope",
        title: "Staffing models",
        items: [
          { title: "Contract staffing", body: "Monthly-billed engineers, compliant payroll handled." },
          { title: "Contract-to-hire", body: "Try before you commit, with agreed conversion terms." },
          { title: "US staffing", body: "W2, C2C and contract-to-hire for US clients." },
          { title: "Rapid backfills", body: "Priority sourcing for critical gaps." },
          { title: "Payroll & compliance", body: "Contracts, verification and statutory handling." },
          { title: "Extensions & exits", body: "Managed renewals and clean knowledge transfer." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How fast can contractors start?", a: "Shortlists in days for common stacks; start dates depend on notice periods." },
          { q: "What are conversion charges?", a: "Agreed upfront in the contract. No surprises at conversion time." },
        ],
      },
    ],
    related: [
      { label: "Staff Augmentation", href: "staff-augmentation.html" },
      { label: "US IT Staffing", href: "us-it-staffing.html" },
      { label: "Permanent Recruitment", href: "permanent-it-recruitment.html" },
      BOOK,
    ],
  },
  "staff-augmentation": {
    slug: "staff-augmentation",
    title: "IT staff augmentation & dedicated teams",
    description: "Senior engineers embedded in your rituals.",
    eyebrow: "Hiring services",
    lede: "Individual seniors or full squads working in your rituals and tools. Managed by you, or by our delivery leads.",
    blocks: [
      {
        kind: "scope",
        title: "Engagement options",
        items: [
          { title: "Individual augmentation", body: "One or two seniors slotted into your team." },
          { title: "Dedicated squads", body: "A full pod: engineers, QA and a lead." },
          { title: "Managed delivery", body: "We own sprint outcomes, you own priorities." },
          { title: "Skill-gap fills", body: "GenAI, platform or data skills your team lacks today." },
          { title: "Scale up and down", body: "Monthly terms that flex with your roadmap." },
          { title: "Knowledge transfer", body: "Docs and pairing so capability stays with you." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Who manages augmented engineers?", a: "Your choice: your managers, or our delivery leads with weekly reporting." },
          { q: "How is this different from contracting?", a: "Augmentation is outcome-linked and team-embedded; contracting is capacity. We offer both." },
        ],
      },
    ],
    related: [
      { label: "Contract Staffing", href: "contract-staffing.html" },
      { label: "IT Services", href: "it-services.html" },
      { label: "RPO", href: "rpo.html" },
      BOOK,
    ],
  },
  "gcc-hiring": {
    slug: "gcc-hiring",
    title: "GCC & India team setup hiring",
    description: "Leadership-first phased hiring for new centres.",
    eyebrow: "Hiring services",
    lede: "Leadership first, then a foundation team of 20-50, then scale. A phase-by-phase hiring plan for US companies building their India engineering centre.",
    blocks: [
      {
        kind: "scope",
        title: "Phased roadmap",
        items: [
          { title: "Phase 1: Leadership", body: "Site leader and engineering managers who match your product culture." },
          { title: "Phase 2: Foundation", body: "20-50 engineers across your core stacks." },
          { title: "Phase 3: Scale", body: "Specialised roles, campus pipelines and employer branding." },
          { title: "Culture match", body: "Screening for product mindset, not just service background." },
          { title: "Compensation design", body: "Bands benchmarked to your talent bar and market." },
          { title: "Retention support", body: "Onboarding design and early-attrition watch." },
        ],
      },
      {
        kind: "stats",
        title: "A representative programme",
        items: [
          { v: "40", l: "joiners in eight months" },
          { v: "6 days", l: "average time to first shortlist" },
          { v: "88%", l: "offer-to-join ratio" },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Should we hire leaders or engineers first?", a: "Leaders. They set the bar and hire the foundation team with you." },
          { q: "How long to a 40-person centre?", a: "Our representative programme delivered 40 joiners in eight months." },
          { q: "Do you help beyond hiring?", a: "Yes: onboarding design, training via our corporate practice, and retention check-ins." },
        ],
      },
    ],
    related: [
      { label: "Full case study", href: "india-engineering-team-setup.html" },
      { label: "Executive Search", href: "executive-search.html" },
      { label: "Hire-Train-Deploy", href: "campus-hiring.html" },
      BOOK,
    ],
  },
  "executive-search": {
    slug: "executive-search",
    title: "Executive & leadership search",
    description: "Mapped search for technology leaders.",
    eyebrow: "Hiring services",
    lede: "CTOs, VPs of Engineering, architects, data leaders and GCC site leaders through confidential, mapped search.",
    blocks: [
      {
        kind: "scope",
        title: "Search process",
        items: [
          { title: "Role mapping", body: "Target companies and candidate universes mapped before outreach." },
          { title: "Confidential outreach", body: "Discreet approach protecting both sides." },
          { title: "Leadership assessment", body: "Track record, architecture judgement and team-building evidence." },
          { title: "Stakeholder rounds", body: "Structured panels with your founders or board." },
          { title: "Offer & close", body: "Compensation design and resignation-period management." },
          { title: "Onboarding support", body: "90-day success plan and check-ins." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How long does a search take?", a: "Typically 8-12 weeks from mapping to accepted offer." },
          { q: "Is the search exclusive?", a: "Yes, retained or engaged searches run exclusively for focus." },
        ],
      },
    ],
    related: [
      { label: "GCC Hiring", href: "gcc-hiring.html" },
      { label: "Permanent Recruitment", href: "permanent-it-recruitment.html" },
      { label: "RPO", href: "rpo.html" },
      BOOK,
    ],
  },
  rpo: {
    slug: "rpo",
    title: "Recruitment process outsourcing (RPO)",
    description: "An embedded talent function with SLAs.",
    eyebrow: "Hiring services",
    lede: "Recruiters embedded in your tools and rituals, with pipeline reporting, SLAs and employer-branding support. For sustained hiring volume.",
    blocks: [
      {
        kind: "scope",
        title: "RPO components",
        items: [
          { title: "Embedded recruiters", body: "On-site or remote, in your ATS and Slack." },
          { title: "Sourcing engine", body: "Pipelines built per role family, refreshed weekly." },
          { title: "Interview operations", body: "Scheduling, scorecards and debrief discipline." },
          { title: "Reporting", body: "Funnel metrics, time-to-fill and quality-of-hire." },
          { title: "Employer branding", body: "Job content, campus presence and review management." },
          { title: "Scale flexibility", body: "Team size flexes with your hiring plan." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "What hiring volume justifies RPO?", a: "Typically 15+ hires per quarter, or continuous specialised hiring." },
          { q: "How is RPO priced?", a: "Monthly management fee plus per-hire or per-sourcer terms, agreed upfront." },
        ],
      },
    ],
    related: [
      { label: "Staff Augmentation", href: "staff-augmentation.html" },
      { label: "Campus Hiring", href: "campus-hiring.html" },
      { label: "Technical Assessment", href: "technical-assessment.html" },
      BOOK,
    ],
  },
  "campus-hiring": {
    slug: "campus-hiring",
    title: "Campus hiring & Hire-Train-Deploy",
    description: "Fresher selection, training and deployment.",
    eyebrow: "Hiring services",
    lede: "Campus drives plus our Hire-Train-Deploy model: freshers selected, trained for 8-12 weeks on your stack, assessed on projects, then deployed.",
    blocks: [
      {
        kind: "scope",
        title: "Programme stages",
        items: [
          { title: "Campus drives", body: "Aptitude, coding and interview rounds run with your team." },
          { title: "Selection", body: "Structured scoring for attitude, aptitude and basics." },
          { title: "Role training", body: "8-12 weeks on your stack, around 70% hands-on." },
          { title: "Project assessment", body: "Deployment only after demonstrating working projects." },
          { title: "Deployment", body: "Billable from week one with mentor support." },
          { title: "Retention design", body: "Bonds, growth paths and engagement planned upfront." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How job-ready are deployed freshers?", a: "They ship supervised production work from week one; independence grows over the quarter." },
          { q: "What does it cost?", a: "Selection plus training fee per candidate, or monthly billing post-deployment." },
        ],
      },
    ],
    related: [
      { label: "Full model explained", href: "hire-train-deploy-model.html" },
      { label: "Placement Training", href: "placement-training.html" },
      { label: "Bootcamps", href: "industry-readiness-bootcamp.html" },
      BOOK,
    ],
  },
  "us-it-staffing": {
    slug: "us-it-staffing",
    title: "US IT staffing (W2, C2C & contract-to-hire)",
    description: "US-based staffing with ET overlap.",
    eyebrow: "Hiring services",
    lede: "US-based consultants on W2, C2C and contract-to-hire models, supported from our Louisville office in your time zone.",
    blocks: [
      {
        kind: "scope",
        title: "Staffing models",
        items: [
          { title: "W2 consultants", body: "Employed consultants with benefits handled." },
          { title: "C2C", body: "Corp-to-corp engagements with compliance checks." },
          { title: "Contract-to-hire", body: "Convert proven consultants to your payroll." },
          { title: "Direct placement", body: "Permanent US hires with guarantee periods." },
          { title: "Payroll services", body: "Employer-of-record style handling where needed." },
          { title: "ET overlap", body: "Daytime support from Louisville, delivery from India." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Do you handle work authorisation checks?", a: "Yes, verification is part of every US engagement." },
          { q: "Can US contractors work with India teams?", a: "Yes. Overlapping hours plus shared rituals make hybrid pods work." },
        ],
      },
    ],
    related: [
      { label: "Contract Staffing", href: "contract-staffing.html" },
      { label: "GCC Hiring", href: "gcc-hiring.html" },
      { label: "Contact & offices", href: "contact.html" },
      BOOK,
    ],
  },
  "technical-assessment": {
    slug: "technical-assessment",
    title: "Technical assessment & interview-as-a-service",
    description: "Practising engineers interview for you.",
    eyebrow: "Hiring services",
    lede: "Structured technical interviews run by practising engineers, with scorecards and recorded feedback your hiring managers can trust.",
    blocks: [
      {
        kind: "scope",
        title: "Assessment services",
        items: [
          { title: "Live interviews", body: "Coding, system design and debugging rounds." },
          { title: "Take-home reviews", body: "Blind-graded assignments with plagiarism checks." },
          { title: "Scorecards", body: "Calibrated rubrics across all 16 technology groups." },
          { title: "Panel support", body: "External experts on your interview panels." },
          { title: "Bar-raiser rounds", body: "Independent quality gates for key hires." },
          { title: "Process audit", body: "Funnel and question-bank review for your team." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Which stacks do you cover?", a: "All 16 groups on our roles page, from JVM to GenAI." },
          { q: "How fast is turnaround?", a: "Interviews within 48 hours of request, scorecards the same day." },
        ],
      },
    ],
    related: [
      { label: "Permanent Recruitment", href: "permanent-it-recruitment.html" },
      { label: "Roles we recruit", href: "technologies-roles-we-recruit.html" },
      { label: "RPO", href: "rpo.html" },
      BOOK,
    ],
  },
  "diversity-hiring": {
    slug: "diversity-hiring",
    title: "Diversity & women-in-tech hiring",
    description: "Diverse pipelines and unbiased screening.",
    eyebrow: "Hiring services",
    lede: "Diverse talent pipelines, structured unbiased screening, returnship programmes and hiring-manager training for inclusive teams.",
    blocks: [
      {
        kind: "scope",
        title: "Programme elements",
        items: [
          { title: "Diverse pipelines", body: "Sourcing from communities and networks beyond the usual." },
          { title: "Structured screening", body: "Same questions, same rubrics, for every candidate." },
          { title: "Returnships", body: "Return-to-work cohorts with mentoring and ramp plans." },
          { title: "Campus partnerships", body: "Women-in-tech chapters and scholarship pipelines." },
          { title: "Panel design", body: "Diverse panels and bias-interruption training." },
          { title: "Metrics", body: "Funnel diversity tracked and reported quarterly." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Do quotas compromise quality?", a: "No. The bar stays fixed; we widen the top of the funnel and de-bias evaluation." },
        ],
      },
    ],
    related: [
      { label: "Campus Hiring", href: "campus-hiring.html" },
      { label: "Permanent Recruitment", href: "permanent-it-recruitment.html" },
      { label: "RPO", href: "rpo.html" },
      BOOK,
    ],
  },
  "technologies-roles-we-recruit": {
    slug: "technologies-roles-we-recruit",
    title: "Software talent across 16 technology groups",
    description: "From React and Java to GenAI, SAP and GCC leadership.",
    eyebrow: "Hiring consultation",
    lede: "From React and Java to GenAI, SAP and GCC leadership, screened by practising engineers. Tell us the stack; we bring the shortlist.",
    secondaryLabel: "Send a role brief",
    blocks: [
      {
        kind: "roles",
        title: "Roles by technology group",
        lede: "Representative titles. If your role is not listed, ask us anyway.",
        groups: [
          { id: "java-jvm", title: "Java & JVM", roles: ["Java Developer", "Senior Java Engineer", "Spring Boot Microservices Developer", "Kotlin Developer"] },
          { id: "dotnet-microsoft", title: ".NET & Microsoft", roles: [".NET Developer", "Senior C# Engineer", ".NET Full-stack Developer", "Dynamics 365 Developer"] },
          { id: "python-go-backend", title: "Python, Go & Backend", roles: ["Python Developer", "Django / FastAPI Engineer", "Go Developer", "Node.js Developer"] },
          { id: "javascript-frontend", title: "JavaScript & Frontend", roles: ["Frontend Developer", "React Developer", "Angular Developer", "Next.js Developer"] },
          { id: "mobile", title: "Mobile", roles: ["iOS Developer", "Android Developer", "Flutter Developer", "React Native Developer"] },
          { id: "cloud-infrastructure", title: "Cloud & Infrastructure", roles: ["Cloud Engineer", "AWS Solutions Architect", "Azure Cloud Engineer", "GCP Engineer"] },
          { id: "devops-sre-platform", title: "DevOps, SRE & Platform", roles: ["DevOps Engineer", "Site Reliability Engineer", "Platform Engineer", "Kubernetes Specialist"] },
          { id: "data-engineering-analytics", title: "Data Engineering & Analytics", roles: ["Data Engineer", "Big Data Engineer", "Databricks Engineer", "BI Developer (Power BI)"] },
          { id: "data-science-ai-genai", title: "Data Science, AI/ML & GenAI", roles: ["Data Scientist", "ML Engineer", "GenAI Engineer", "MLOps Engineer"] },
          { id: "qa-automation", title: "QA & Test Automation", roles: ["QA Engineer", "Automation Engineer (Playwright)", "SDET", "Performance Test Engineer"] },
          { id: "security", title: "Security", roles: ["Security Engineer", "SOC Analyst", "AppSec Engineer", "Cloud Security Engineer"] },
          { id: "sap-erp", title: "SAP & ERP", roles: ["SAP ABAP Developer", "SAP Functional Consultant", "Salesforce Developer", "Power Platform Developer"] },
          { id: "ui-ux", title: "UI/UX & Product", roles: ["UI Designer", "UX Designer", "Product Designer", "Design System Specialist"] },
          { id: "project-leadership", title: "Delivery Leadership", roles: ["Engineering Manager", "Technical Architect", "Scrum Master", "Delivery Manager"] },
          { id: "gcc-leadership", title: "GCC Leadership", roles: ["GCC Site Leader", "Director of Engineering", "VP Engineering", "CTO"] },
          { id: "freshers", title: "Freshers & Interns", roles: ["Graduate Engineer Trainee", "QA Trainee", "Support Engineer", "Intern (6-month)"] },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How are candidates screened?", a: "Recruiter screen plus a practising-engineer technical round with scorecards, before your interviews." },
          { q: "What if our stack is niche?", a: "Mapped search plus adjacent-skill evaluation. We tell you honestly if a role will be hard to fill." },
        ],
      },
    ],
    related: [
      { label: "Permanent Recruitment", href: "permanent-it-recruitment.html" },
      { label: "Technical Assessment", href: "technical-assessment.html" },
      { label: "Hire-Train-Deploy", href: "campus-hiring.html" },
      BOOK,
    ],
  },
};
