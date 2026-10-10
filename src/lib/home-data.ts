/* Home page content, ported 1:1 from the original index.html.
   Copy, links, numbers and card sets are frozen: parity-checked against source. */

export const HERO = {
  eyebrow: "IT services, hiring and training, India and USA",
  headline: {
    before: "Build software, hire engineers and train teams with ",
    em: "one partner",
    after: ".",
  },
  lede: "We build production software and AI systems, place screened engineers in 5 to 7 business days, and run hands-on training with about 70% lab time. Delivery from India, client hours covered from the USA.",
  ctaPrimary: { label: "Book a free consultation", href: "contact.html" },
  ctaSecondary: { label: "Explore services", href: "#services" },
  meta: [
    "NDA on day one",
    "Weekly progress reports",
    "IST and US time-zone overlap",
  ],
};

export const CONSOLE_ROWS = [
  {
    title: "IT Services",
    sub: "17 services · two-week sprints with a working demo each sprint",
    tag: "Build",
    href: "it-services.html",
  },
  {
    title: "Hiring Consultation",
    sub: "Engineer-screened shortlist in 5 to 7 business days",
    tag: "Hire",
    href: "hiring-consultation.html",
  },
];

export const CONSOLE_TRAINING = {
  title: "Training",
  sub: "Corporate tracks and institute programmes, one delivery standard",
  tag: "Upskill",
  href: "corporate-training.html",
  subs: [
    { title: "For IT Corporates", small: "18 tracks · around 70% hands-on", href: "training-for-it-corporates.html" },
    { title: "For Institutes", small: "10 programmes · FDP, bootcamps, placement", href: "training-for-institutes.html" },
  ],
};

export const MARQUEE = [
  "Agentic AI", "Model Context Protocol", "Google ADK", "LangGraph", "CrewAI",
  "OpenAI", "Anthropic Claude", "Google Gemini", "RAG", "pgvector",
  "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "Argo CD",
  "Backstage", "GitHub Actions", "Databricks", "Snowflake", "Microsoft Fabric", "dbt",
  "Kafka", "Power BI", "React 19", "Next.js", "Flutter", "Node.js", ".NET 9",
  "Spring Boot", "FastAPI", "Playwright", "Selenium", "Appium", "k6", "promptfoo",
  "Salesforce Agentforce", "Dynamics 365", "SAP S/4HANA", "Power Platform",
];

export const STATS = [
  { value: 2019, suffix: "", label: "Operating since, delivery from Greater Noida and Louisville" },
  { value: 50, suffix: "+", label: "Client engagements across India and the USA" },
  { value: 200, suffix: "+", label: "Engineers placed after technical screening" },
  { value: 500, suffix: "+", label: "Professionals trained in live, lab-based batches" },
];

export const SERVICES_HEAD = {
  title: "Three practices. One team that works as yours.",
  lede: "Start with one service and add others as you grow. Each service page lists scope, process, tools and direct answers.",
};

export const DIVISIONS = [
  {
    title: "IT Services",
    href: "it-services.html",
    num: "17 services",
    body: "Product engineering, applied GenAI and agentic AI, data platforms, cloud migration, DevOps, QA automation, security reviews and enterprise apps.",
    subs: [
      { label: "Custom Software Development", href: "custom-software-development.html" },
      { label: "Web Application Development", href: "web-application-development.html" },
      { label: "Mobile App Development", href: "mobile-app-development.html" },
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "Agentic AI & Intelligent Automation", href: "agentic-ai-automation.html" },
      { label: "Data Engineering, Analytics & BI", href: "data-engineering-analytics.html" },
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      { label: "QA & Test Automation (incl. AI/LLM testing)", href: "qa-test-automation.html" },
    ],
    more: { label: "Explore all IT services", href: "it-services.html" },
  },
  {
    title: "Hiring Consultation",
    href: "hiring-consultation.html",
    num: "10 services",
    body: "Permanent and contract hiring, staff augmentation, RPO, executive search, campus hiring and GCC setup, screened by practising engineers.",
    subs: [
      { label: "All hiring services", href: "hiring-services.html" },
      { label: "Permanent IT Recruitment", href: "permanent-it-recruitment.html" },
      { label: "Contract Staffing & Contract-to-Hire", href: "contract-staffing.html" },
      { label: "IT Staff Augmentation & Dedicated Teams", href: "staff-augmentation.html" },
      { label: "GCC & India Team Setup Hiring", href: "gcc-hiring.html" },
      { label: "Executive & Leadership Search", href: "executive-search.html" },
      { label: "Recruitment Process Outsourcing (RPO)", href: "rpo.html" },
      { label: "Roles we recruit", href: "technologies-roles-we-recruit.html" },
    ],
    more: { label: "Explore hiring services", href: "hiring-consultation.html" },
  },
];

export const TRAINING_DIVISION = {
  title: "Training",
  href: "corporate-training.html",
  num: "18 tracks · 10 programmes",
  body: "Live, lab-based programmes: role-based upskilling for company teams, and faculty development plus student readiness for colleges.",
  groups: [
    {
      head: "For IT corporates",
      href: "training-for-it-corporates.html",
      links: [
        { label: "Generative AI & Agentic AI", href: "generative-ai-training.html" },
        { label: "AI Productivity & AI Literacy for All Employees", href: "ai-literacy-training.html" },
        { label: "AI/ML & MLOps", href: "machine-learning-mlops-training.html" },
        { label: "Data Engineering & Lakehouse", href: "data-engineering-training.html" },
        { label: "Data Analytics & BI (Power BI, Tableau)", href: "data-analytics-training.html" },
        { label: "Cloud: AWS, Azure & Google Cloud", href: "cloud-training.html" },
      ],
    },
    {
      head: "For institutes",
      href: "training-for-institutes.html",
      links: [
        { label: "Faculty Development Programmes (FDP) in AI, Cloud, Data & more", href: "faculty-development-programs.html" },
        { label: "Industry-Readiness Bootcamp for Students", href: "industry-readiness-bootcamp.html" },
        { label: "Placement Readiness Programme (aptitude, coding, interviews)", href: "placement-training.html" },
        { label: "NEP-aligned Credit & Add-on Courses / Industry Minors", href: "nep-credit-courses.html" },
        { label: "AI, GenAI & Data Science Certification Programme", href: "ai-data-certification-program.html" },
        { label: "Cloud & DevOps Certification Programme", href: "cloud-devops-certification-program.html" },
      ],
    },
  ],
  more: { label: "Explore training", href: "corporate-training.html" },
};

export const TECH_HEAD = {
  title: "Current technology, applied where it pays off",
  lede: "We track what companies actually adopt, and we say plainly when a simpler stack costs less and ships faster.",
};

export const TECH_CARDS = [
  { title: "Agentic AI & MCP", href: "agentic-ai-automation.html", body: "Agents that act across CRM, ERP and ticketing through Model Context Protocol, with human approval on every consequential step." },
  { title: "Testing AI systems", href: "qa-test-automation.html", body: "Eval suites, red-teaming and regression sets for LLM apps, run by a team that started in QA automation." },
  { title: "The AI-ready lakehouse", href: "data-engineering-analytics.html", body: "Databricks, Snowflake and Microsoft Fabric builds that feed dashboards and retrieval pipelines from one governed store." },
  { title: "Platform engineering", href: "devops-devsecops.html", body: "Internal developer platforms, GitOps and golden paths so teams ship safely every day." },
  { title: "GCC & India team setup", href: "gcc-hiring.html", body: "Site leader first, then a foundation team, then scale: a phased hiring plan for a new India centre." },
  { title: "AI skills for every team", href: "generative-ai-training.html", body: "AI literacy for all staff and GenAI engineering depth for developers, taught on your approved tools." },
];

export const SYNERGY_HEAD = {
  title: "Why one partner for all three works better",
  lede: "The engineers who build your systems screen your candidates and teach your teams, so quality stays consistent end to end.",
};

export const SYNERGY = [
  { title: "Build", body: "Our engineers design, build, test and run your software, AI and cloud systems." },
  { title: "Hire", body: "Our recruiters add the people you need, screened by the same engineers." },
  { title: "Train", body: "Our trainers upskill your teams and prepare new joiners on your stack." },
  { title: "Hire-Train-Deploy", body: "Freshers selected, trained for 8-12 weeks and deployed to your projects." },
];

export const ROLES_HEAD = {
  title: "Software talent across 16 technology groups",
  lede: "From React and Java to GenAI, SAP and GCC leadership, screened by practising engineers.",
};

export const ROLES = [
  { title: "Java & JVM", small: "Java Developer, Senior Java Engineer, Spring Boot Microservices Developer", href: "technologies-roles-we-recruit.html#java-jvm" },
  { title: ".NET & Microsoft", small: ".NET Developer, Senior C# Engineer, .NET Full-stack Developer (Angular/React)", href: "technologies-roles-we-recruit.html#dotnet-microsoft" },
  { title: "Python, Go & Backend", small: "Python Developer, Django/FastAPI Engineer, Go (Golang) Developer", href: "technologies-roles-we-recruit.html#python-go-backend" },
  { title: "JavaScript & Frontend", small: "Frontend Developer, React Developer, Angular Developer", href: "technologies-roles-we-recruit.html#javascript-frontend" },
  { title: "Mobile", small: "iOS Developer, Android Developer, Flutter Developer", href: "technologies-roles-we-recruit.html#mobile" },
  { title: "Cloud & Infrastructure", small: "Cloud Engineer, AWS Solutions Architect, Azure Cloud Engineer", href: "technologies-roles-we-recruit.html#cloud-infrastructure" },
  { title: "DevOps, SRE & Platform", small: "DevOps Engineer, Site Reliability Engineer (SRE), Platform Engineer", href: "technologies-roles-we-recruit.html#devops-sre-platform" },
  { title: "Data Engineering & Analytics", small: "Data Engineer, Big Data Engineer, Databricks Engineer", href: "technologies-roles-we-recruit.html#data-engineering-analytics" },
];

export const WHY_HEAD = { title: "What working with us is like" };

export const WHY_CARDS = [
  { title: "India and USA presence", body: "Delivery from Greater Noida West and client support from Louisville, Kentucky, with working hours that overlap yours." },
  { title: "Confidential by default", body: "NDA before detailed discussions, work in systems you own, role-based access with MFA, and access removed at exit." },
  { title: "Senior people on your work", body: "Experienced engineers, recruiters and trainers lead every engagement, not just the sales call." },
  { title: "Transparent reporting", body: "Sprint demos, weekly hiring pipelines and pre/post training scores, so progress stays visible." },
  { title: "Clear, fair pricing", body: "A written proposal before any commitment, with fixed, monthly or per-hire pricing and no hidden charges." },
  { title: "One accountable partner", body: "Build, hire and train under one roof, with one relationship manager who knows your business." },
];

export const STEPS = [
  { n: "01", title: "Free consultation", body: "A 30-minute call with a specialist to understand your goal, constraints and timeline." },
  { n: "02", title: "Written proposal", body: "Scope, team, timeline and price in writing, usually within 48 hours." },
  { n: "03", title: "Pilot or first sprint", body: "Start small: a first sprint, a shortlist, or a pilot training batch." },
  { n: "04", title: "Scale with confidence", body: "Expand once you have seen the quality, with the same team and reporting." },
];

export const CASES_HEAD = {
  title: "Representative engagements",
  lede: "Client names are withheld. These stories show the kind of problems we solve across our three practices.",
};

export const CASES = [
  {
    href: "genai-document-assistant-insurance.html",
    pill: "IT Services",
    sector: "Insurance",
    title: "GenAI Document Assistant for an Insurance Agency Network",
    body: "A network of independent insurance agencies was spending hours re-keying data from applications, loss runs and declarations pages. We built a GenAI assistant that extracts, validates and routes document data, with every field reviewed by staff before it reaches the agency management system.",
    stats: [
      { v: "70%", l: "less manual data entry per document" },
      { v: "6 weeks", l: "to first production release" },
      { v: "95%+", l: "field accuracy after human review" },
    ],
  },
  {
    href: "india-engineering-team-setup.html",
    pill: "Hiring",
    sector: "Software products",
    title: "First 40 Hires for a US Product Company's India Engineering Team",
    body: "A US product company decided to build its first engineering centre in India and needed leaders and engineers who matched its product culture. We ran a phased hiring programme that delivered 40 joiners in eight months, starting with a site leader and engineering managers.",
    stats: [
      { v: "40", l: "joiners in eight months" },
      { v: "6 days", l: "average time to first shortlist" },
      { v: "88%", l: "offer-to-join ratio" },
    ],
  },
  {
    href: "genai-cloud-upskilling-program.html",
    pill: "Training",
    sector: "IT services and consulting",
    title: "GenAI and Cloud Upskilling for 120 Engineers",
    body: "A mid-size IT company wanted its engineers to deliver GenAI and cloud projects for clients, but skills were uneven across teams. We ran a 12-week, role-based programme for 120 engineers, combining live labs, applied projects and pre and post assessments.",
    stats: [
      { v: "120", l: "engineers trained across three roles" },
      { v: "38%", l: "average improvement in assessment scores" },
      { v: "8", l: "applied projects demonstrated to leadership" },
    ],
  },
];

export const INDUSTRIES = [
  { title: "BFSI & fintech", body: "Digital onboarding, KYC and document AI, lending workflows, payment and UPI integration." },
  { title: "Insurance", body: "Policy and claims automation, agent portals, underwriting assistants and document extraction." },
  { title: "Healthcare", body: "Appointment, lab and practice systems, telehealth and HIPAA-aware data handling." },
  { title: "Education & EdTech", body: "LMS, live classes, assessment platforms, student ERPs and AI tutors." },
  { title: "Retail & e-commerce", body: "Storefronts, headless commerce, inventory, POS integration and recommendations." },
  { title: "Manufacturing", body: "MES and ERP integration, industrial IoT, quality vision and predictive maintenance." },
  { title: "Energy & solar", body: "Remote plant monitoring, generation analytics and field-service apps." },
  { title: "Logistics", body: "Fleet tracking, route planning, warehouse systems and shipment visibility." },
  { title: "Real estate", body: "CRM, property portals, lead management and site progress apps." },
  { title: "Startups & SaaS", body: "MVPs, multi-tenant SaaS, scaling, DevOps and product analytics." },
];

export const POSTS_HEAD = { title: "Latest from the blog" };

export const POSTS = [
  { href: "nep-industry-courses-colleges.html", pill: "Training", meta: "29 Sep 2026 · 7 min read", title: "How Colleges Can Run Industry-Aligned Credit Courses Under NEP 2020", body: "NEP 2020 gives colleges room to offer skill-based and industry-aligned credit courses. Doing it well needs careful course design, outcome mapping, faculty involvement and honest expectations. This guide explains a practical approach for engineering and management institutions." },
  { href: "corporate-ai-upskilling-plan.html", pill: "Training", meta: "8 Sep 2026 · 7 min read", title: "A 90-Day AI Upskilling Plan for IT Teams", body: "Most IT teams now use AI tools, but few have been trained to use them well. This 90-day plan sets out role-based tracks, hands-on practice, governance basics and measurement so that upskilling turns into better delivery, not just certificates." },
  { href: "hire-train-deploy-model.html", pill: "Hiring", meta: "18 Aug 2026 · 7 min read", title: "Hire-Train-Deploy: Building Job-Ready Fresher Teams in 12 Weeks", body: "Campus hires bring energy and long-term value, but many need months of training before they contribute. A Hire-Train-Deploy model shortens that gap with structured selection, a role-specific curriculum and project-based assessment before deployment." },
];

export const FAQS = [
  {
    q: "Where is Laprrk based, and which regions do you serve?",
    a: "Laprrk Technology Solutions LLP has offices in Greater Noida West, India and Louisville, Kentucky, USA. We work with clients across India and the United States, and the two locations give us overlapping working hours so that US clients can meet our team during their business day while delivery continues in India.",
  },
  {
    q: "Do you sign an NDA before we share project details?",
    a: "Yes. We are happy to sign a mutual non-disclosure agreement from the first conversation, before you share requirements, documents, candidate briefs or training needs. Our team members are also bound by confidentiality obligations, and access to client systems and data is limited to the people who need it for the engagement.",
  },
  {
    q: "How do we start an engagement with you?",
    a: "Most engagements begin with a short discovery call to understand your goals, timelines and constraints. We then share a written proposal covering scope, approach, team, timeline and commercials. Once you approve it, we sign the agreement and NDA, agree a kickoff date and name a single point of contact who stays with you throughout.",
  },
  {
    q: "Which of your three divisions should I contact?",
    a: "Contact IT Services for software, AI, cloud, data, QA or security work, Hiring Consultation for recruitment, staffing or team setup, and Corporate Training for upskilling employees or programmes for institutes. If your need spans more than one area, such as hiring and training a fresher batch, one coordinator will bring the right teams together.",
  },
  {
    q: "In which currencies can we pay, and what invoices do you issue?",
    a: "We invoice Indian clients in INR and international clients in USD, with GST-compliant invoices carrying our GSTIN for Indian billing. Payment terms are agreed in the proposal and typically follow milestones for projects, monthly cycles for ongoing services and success fees for permanent hiring.",
  },
  {
    q: "Can you work with small companies and startups?",
    a: "Yes. Our clients range from early-stage startups to established enterprises and educational institutions. We scale the team and engagement model to your needs, whether that is a single contract engineer, a small development team, one key hire or a training batch of ten people.",
  },
];

export const CTA = {
  title: "Tell us what you need. We reply within one business day.",
  lede: "Share your requirement and we set up a free 30-minute call with the right specialist, then send a written proposal within 48 hours.",
  primary: { label: "Book a free consultation", href: "contact.html" },
  wa: "Hi Laprrk, I would like a free consultation.",
  contacts: [
    { small: "India · IST", label: "+91 88606 64929", href: "tel:+918860664929" },
    { small: "USA · ET", label: "+1 (502) 309-5749", href: "tel:+15023095749" },
    { small: "Email", label: "info@laprrk.com", href: "mailto:info@laprrk.com" },
  ],
};
