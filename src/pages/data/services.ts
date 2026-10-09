import type { PageData } from "./types";

const BOOK = { label: "Book a free consultation", href: "contact.html" };

export const SERVICE_PAGES: Record<string, PageData> = {
  "it-services": {
    slug: "it-services",
    title: "IT services that ship every sprint",
    description: "17 IT services across software, AI, data, cloud, DevOps, QA, security and enterprise apps.",
    eyebrow: "IT Services overview",
    lede: "Product engineering, generative and agentic AI, data, cloud, DevOps, QA automation, security and enterprise applications. Two-week sprints with a demo every sprint.",
    secondaryLabel: "See hiring services",
    secondaryHref: "hiring-consultation.html",
    blocks: [
      {
        kind: "scope",
        title: "17 services, four groups",
        lede: "Start with one service and add others as you grow.",
        items: [
          { title: "Build", body: "Custom software, web and mobile apps, UI/UX, e-commerce and CMS development." },
          { title: "AI & Data", body: "Machine learning, generative AI, agentic automation, data engineering and BI." },
          { title: "Cloud & Platforms", body: "Migration, DevOps, platform engineering, APIs and legacy modernisation." },
          { title: "Quality, Security & Enterprise", body: "QA automation, cybersecurity, ERP/CRM and managed support." },
          { title: "Two-week sprints", body: "A working demo at the end of every sprint, with weekly progress reports." },
          { title: "Your systems, your IP", body: "Work happens in repositories and clouds you own. NDA before detailed talks." },
        ],
      },
      { kind: "steps", title: "How an engagement starts" },
      {
        kind: "faqs",
        items: [
          { q: "How fast can we start?", a: "Discovery call this week, written proposal within 48 hours, and a first sprint or pilot typically within two weeks of signing." },
          { q: "Who owns the code and IP?", a: "You do. Everything is built in your repositories and cloud accounts, with IP assignment in the agreement." },
          { q: "How do you price projects?", a: "Fixed scope, monthly team, or milestone billing. The proposal states scope, team, timeline and price in writing before any commitment." },
        ],
      },
    ],
    related: [
      { label: "Custom Software Development", href: "custom-software-development.html" },
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "Hiring Consultation", href: "hiring-consultation.html" },
      { label: "Case studies", href: "case-studies.html" },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom software development",
    description: "Bespoke software built around your workflows.",
    eyebrow: "Build",
    lede: "Bespoke systems designed around your workflows, not adapted from a template. Discovery, design, build, testing and release with senior engineers throughout.",
    blocks: [
      {
        kind: "scope",
        title: "What we build",
        items: [
          { title: "Discovery & scope", body: "Requirements, users, integrations and success metrics agreed before design." },
          { title: "UX & UI design", body: "Flows, wireframes and a component system your team can extend." },
          { title: "Backend engineering", body: "Node.js, .NET, Spring Boot or FastAPI services with clean APIs." },
          { title: "Frontend engineering", body: "React and Next.js apps that are fast, accessible and tested." },
          { title: "QA & release", body: "Automated regression, staging reviews and safe rollout plans." },
          { title: "Support & AMC", body: "SLA-backed maintenance after release, with monitoring included." },
        ],
      },
      {
        kind: "points",
        title: "Why teams choose us",
        items: [
          "Senior engineers lead every engagement, not just the sales call",
          "A demo at the end of every two-week sprint",
          "Code, docs and IP live in systems you own",
          "Accessibility and performance budgets from day one",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How long does a typical project take?", a: "MVPs usually ship in 8-12 weeks. Larger platforms run in phased releases so value arrives early." },
          { q: "Can you take over our existing codebase?", a: "Yes. We start with a code and architecture review, stabilise, then extend." },
          { q: "Do you sign an NDA?", a: "Yes, before detailed discussions, and our team works under confidentiality obligations." },
        ],
      },
    ],
    related: [
      { label: "Web Application Development", href: "web-application-development.html" },
      { label: "UI/UX & Product Design", href: "ui-ux-design.html" },
      { label: "QA & Test Automation", href: "qa-test-automation.html" },
      BOOK,
    ],
  },
  "web-application-development": {
    slug: "web-application-development",
    title: "Web application development",
    description: "Fast, accessible web apps with modern stacks.",
    eyebrow: "Build",
    lede: "Portals, dashboards, SaaS products and internal tools built with React, Next.js, Node.js and .NET. Fast, accessible and easy to operate.",
    blocks: [
      {
        kind: "scope",
        title: "What we deliver",
        items: [
          { title: "SaaS products", body: "Multi-tenant apps with auth, billing hooks and product analytics." },
          { title: "Dashboards & portals", body: "Customer, partner and admin portals with role-based access." },
          { title: "Internal tools", body: "Ops consoles and workflow apps that replace spreadsheets." },
          { title: "Performance budgets", body: "Core Web Vitals targets agreed upfront and measured each sprint." },
          { title: "Accessibility", body: "WCAG-aware markup, keyboard flows and focus management." },
          { title: "SEO foundations", body: "Semantic HTML, metadata and sitemaps for public pages." },
        ],
      },
      {
        kind: "points",
        title: "Engineering standards",
        tint: true,
        items: [
          "Type-safe codebases with automated tests on every pull request",
          "Preview deployments for every change before merge",
          "Observability with logs, metrics and error tracking",
          "Documentation your in-house team can take over",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "React or Next.js, which do you recommend?", a: "Next.js for public and SEO-sensitive apps, React SPAs for authenticated tools. We explain the trade-off for your case." },
          { q: "Can you modernise our old web app?", a: "Yes, with a strangler approach: new modules alongside the old app until it is fully replaced." },
        ],
      },
    ],
    related: [
      { label: "Custom Software Development", href: "custom-software-development.html" },
      { label: "UI/UX & Product Design", href: "ui-ux-design.html" },
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      BOOK,
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile app development",
    description: "Native and cross-platform mobile apps.",
    eyebrow: "Build",
    lede: "iOS, Android and Flutter apps from prototype to Play Store and App Store release, with analytics and crash reporting built in.",
    blocks: [
      {
        kind: "scope",
        title: "What we deliver",
        items: [
          { title: "Flutter cross-platform", body: "One codebase for iOS and Android when speed to market matters." },
          { title: "Native iOS & Android", body: "Swift and Kotlin for hardware-heavy or performance-critical apps." },
          { title: "App UX", body: "Mobile-first flows, offline states and empty states designed properly." },
          { title: "Backend & APIs", body: "Auth, sync, push and payments wired to your systems." },
          { title: "Store release", body: "Review guidelines, screenshots, staged rollouts and release notes." },
          { title: "Field-service apps", body: "Offline-first apps for sales, service and logistics teams." },
        ],
      },
      {
        kind: "points",
        title: "Release discipline",
        items: [
          "Beta tracks with crash-free session targets before public release",
          "Feature flags so releases are decoupled from deploys",
          "Analytics events defined with your product team",
          "Support and version maintenance after launch",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Flutter or native?", a: "Flutter for most business apps. Native when you need deep hardware access or platform-specific performance." },
          { q: "Do you handle App Store review?", a: "Yes, including guideline checks, metadata and appeal handling if a review stalls." },
        ],
      },
    ],
    related: [
      { label: "UI/UX & Product Design", href: "ui-ux-design.html" },
      { label: "APIs & Microservices", href: "api-integration-modernisation.html" },
      { label: "QA & Test Automation", href: "qa-test-automation.html" },
      BOOK,
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX & product design",
    description: "Research, UX flows and UI systems developers can build.",
    eyebrow: "Build",
    lede: "User research, UX flows, interface design and clickable prototypes. Every screen ships with specs a developer can build without guesswork.",
    blocks: [
      {
        kind: "scope",
        title: "Design services",
        items: [
          { title: "UX research", body: "Interviews, journey maps and usability tests with real users." },
          { title: "Flows & wireframes", body: "Happy paths, edge cases and empty states mapped before UI." },
          { title: "UI design", body: "High-fidelity screens in your brand language." },
          { title: "Design systems", body: "Tokens, components and documentation for consistent builds." },
          { title: "Prototypes", body: "Clickable prototypes for stakeholder and user validation." },
          { title: "Design QA", body: "Pixel and behaviour review of the built product before release." },
        ],
      },
      {
        kind: "points",
        title: "How we work with developers",
        items: [
          "Design tokens that map directly to code variables",
          "Components designed for responsive behaviour, not just desktop",
          "Accessibility annotations on every screen",
          "Handoff files with measurements, states and content rules",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Can you redesign our existing product?", a: "Yes. We audit the current UX, fix the highest-friction flows first, then systematise." },
          { q: "Do you do user testing?", a: "Yes, moderated and unmoderated tests with reports your team can act on." },
        ],
      },
    ],
    related: [
      { label: "Web Application Development", href: "web-application-development.html" },
      { label: "Mobile App Development", href: "mobile-app-development.html" },
      { label: "E-commerce & CMS", href: "ecommerce-cms-development.html" },
      BOOK,
    ],
  },
  "ecommerce-cms-development": {
    slug: "ecommerce-cms-development",
    title: "E-commerce & CMS development",
    description: "Storefronts and CMS builds that are easy to run.",
    eyebrow: "Build",
    lede: "Headless storefronts, payment and logistics integrations, and CMS sites your marketing team can edit without calling a developer.",
    blocks: [
      {
        kind: "scope",
        title: "What we deliver",
        items: [
          { title: "Headless storefronts", body: "Fast product, cart and checkout experiences on modern frontends." },
          { title: "Payments & UPI", body: "Razorpay, Stripe and UPI integrations with reconciliation reports." },
          { title: "Inventory & POS", body: "Stock, order and point-of-sale integrations for retail." },
          { title: "CMS builds", body: "WordPress, Strapi or Sanity setups with clean editing roles." },
          { title: "Catalogue tooling", body: "Bulk import, variants and media pipelines for large catalogues." },
          { title: "CRO basics", body: "Funnel measurement and checkout friction fixes." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Which platform should we use?", a: "It depends on catalogue size, team skills and fulfilment. We recommend after a short discovery, not before." },
          { q: "Can you migrate our existing store?", a: "Yes, with URL mapping, redirect plans and SEO continuity checks." },
        ],
      },
    ],
    related: [
      { label: "Web Application Development", href: "web-application-development.html" },
      { label: "UI/UX & Product Design", href: "ui-ux-design.html" },
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      BOOK,
    ],
  },
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    title: "AI & machine learning",
    description: "ML models and MLOps for real business problems.",
    eyebrow: "AI & Data",
    lede: "Prediction, classification, vision and language models taken from notebook to production, with monitoring and retraining pipelines.",
    blocks: [
      {
        kind: "scope",
        title: "ML services",
        items: [
          { title: "Use-case discovery", body: "Feasibility, data audit and ROI framing before any modelling." },
          { title: "Model development", body: "Tabular, vision and NLP models with honest baselines first." },
          { title: "MLOps pipelines", body: "Training, registry, deployment and monitoring automation." },
          { title: "Evaluation", body: "Offline metrics plus business-metric tracking in production." },
          { title: "Retraining loops", body: "Drift detection and scheduled retraining runbooks." },
          { title: "Team handover", body: "Docs and training so your team can operate the system." },
        ],
      },
      {
        kind: "points",
        title: "Our ML principles",
        tint: true,
        items: [
          "Simple baselines before complex models, always",
          "No black boxes without monitoring and rollback",
          "Data quality work budgeted upfront, not discovered later",
          "Success measured in business metrics, not leaderboard scores",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Our data is messy. Can you still help?", a: "Usually yes. The data audit in discovery tells us exactly what is usable and what needs fixing first." },
          { q: "Build custom or use APIs?", a: "APIs where they fit, custom where differentiation or cost demands it. We show the math." },
        ],
      },
    ],
    related: [
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "Data Engineering & BI", href: "data-engineering-analytics.html" },
      { label: "AI/ML & MLOps Training", href: "machine-learning-mlops-training.html" },
      BOOK,
    ],
  },
  "generative-ai": {
    slug: "generative-ai",
    title: "Generative AI & LLM applications",
    description: "RAG assistants and copilots on your approved models.",
    eyebrow: "AI & Data",
    lede: "Document assistants, support copilots and content automation built with retrieval-augmented generation, evaluation suites and human review where it matters.",
    blocks: [
      {
        kind: "scope",
        title: "GenAI services",
        items: [
          { title: "RAG applications", body: "Grounded answers over your documents with citations." },
          { title: "Support copilots", body: "Draft replies and summaries inside your helpdesk." },
          { title: "Document extraction", body: "Forms, invoices and declarations pages to structured data." },
          { title: "Evaluation suites", body: "Golden sets, regression tests and red-teaming for prompts." },
          { title: "Guardrails", body: "PII handling, topic limits and human-approval workflows." },
          { title: "Cost control", body: "Model routing, caching and usage dashboards." },
        ],
      },
      {
        kind: "stats",
        title: "Representative results",
        items: [
          { v: "70%", l: "less manual data entry per document" },
          { v: "6 weeks", l: "to first production release" },
          { v: "95%+", l: "field accuracy after human review" },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Which models do you use?", a: "Your approved models: OpenAI, Anthropic Claude, Google Gemini or open models on your cloud. We are model-agnostic." },
          { q: "How do you prevent hallucinations?", a: "Grounding with citations, confidence thresholds and human review for consequential outputs." },
          { q: "Is our data used for training?", a: "No. Enterprise tiers with zero-retention, or self-hosted models where required." },
        ],
      },
    ],
    related: [
      { label: "Agentic AI & Automation", href: "agentic-ai-automation.html" },
      { label: "Testing AI systems", href: "qa-test-automation.html" },
      { label: "GenAI case study", href: "genai-document-assistant-insurance.html" },
      BOOK,
    ],
  },
  "agentic-ai-automation": {
    slug: "agentic-ai-automation",
    title: "Agentic AI & intelligent automation",
    description: "Agents across CRM, ERP and ticketing with human approval.",
    eyebrow: "AI & Data",
    lede: "Agents that read, decide and act across your CRM, ERP and ticketing systems through Model Context Protocol, with approvals where money or customers are involved.",
    blocks: [
      {
        kind: "scope",
        title: "Automation services",
        items: [
          { title: "Agent design", body: "Tools, permissions and escalation paths mapped before building." },
          { title: "MCP servers", body: "Your systems exposed as governed tools agents can call." },
          { title: "Frameworks", body: "LangGraph, CrewAI and Google ADK, chosen per use case." },
          { title: "Human approval", body: "Checkpoints for refunds, sends and record changes." },
          { title: "Observability", body: "Traces, costs and success rates per agent run." },
          { title: "Salesforce Agentforce", body: "Agentforce setup and custom actions on your Salesforce org." },
        ],
      },
      {
        kind: "points",
        title: "Automation guardrails",
        items: [
          "Least-privilege tool access with full audit logs",
          "Dry-run mode before any agent writes to production",
          "Kill switches and spend caps on every deployment",
          "Success metrics agreed before build, reviewed after",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Where does agentic automation pay off first?", a: "High-volume, rule-heavy workflows: triage, data entry, follow-ups and reporting." },
          { q: "What about our existing RPA?", a: "Agents complement RPA: RPA for fixed screens, agents for judgement-heavy steps." },
        ],
      },
    ],
    related: [
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "APIs & Microservices", href: "api-integration-modernisation.html" },
      { label: "GenAI Training", href: "generative-ai-training.html" },
      BOOK,
    ],
  },
  "data-engineering-analytics": {
    slug: "data-engineering-analytics",
    title: "Data engineering, analytics & BI",
    description: "Lakehouses, pipelines and dashboards that feed AI too.",
    eyebrow: "AI & Data",
    lede: "Databricks, Snowflake and Microsoft Fabric platforms with dbt pipelines, governed metrics and Power BI dashboards. Built AI-ready from day one.",
    blocks: [
      {
        kind: "scope",
        title: "Data services",
        items: [
          { title: "Lakehouse platforms", body: "Databricks, Snowflake and Fabric architectures." },
          { title: "Pipelines", body: "Batch and streaming ingestion with dbt transformations." },
          { title: "Data quality", body: "Tests, contracts and freshness SLAs on every dataset." },
          { title: "Semantic metrics", body: "One definition of revenue, churn and active, everywhere." },
          { title: "BI & dashboards", body: "Power BI and Tableau apps stakeholders actually open." },
          { title: "AI-ready data", body: "Vector indexes and feature stores for RAG and ML." },
        ],
      },
      {
        kind: "points",
        title: "Delivery principles",
        tint: true,
        items: [
          "Business questions first, pipelines second",
          "Incremental models for fast, cheap refreshes",
          "Access controls and PII handling by design",
          "Docs and training so analysts self-serve",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Databricks, Snowflake or Fabric?", a: "Depends on your cloud, team and Microsoft footprint. We compare total cost honestly." },
          { q: "Can you fix our broken dashboards?", a: "Yes. We start with a metrics audit, rebuild the semantic layer, then the dashboards." },
        ],
      },
    ],
    related: [
      { label: "AI & Machine Learning", href: "ai-machine-learning.html" },
      { label: "Data Engineering Training", href: "data-engineering-training.html" },
      { label: "Power BI & Tableau Training", href: "data-analytics-training.html" },
      BOOK,
    ],
  },
  "cloud-services": {
    slug: "cloud-services",
    title: "Cloud services & migration",
    description: "AWS, Azure and Google Cloud done properly.",
    eyebrow: "Cloud & Platforms",
    lede: "Landing zones, workload migration and FinOps on AWS, Azure and Google Cloud. Secure by default, cost-visible from the first bill.",
    blocks: [
      {
        kind: "scope",
        title: "Cloud services",
        items: [
          { title: "Landing zones", body: "Accounts, networking, identity and guardrails done right." },
          { title: "Migration", body: "Rehost, replatform or refactor waves with rollback plans." },
          { title: "Kubernetes", body: "EKS, AKS and GKE clusters with GitOps delivery." },
          { title: "FinOps", body: "Tagging, budgets, rightsizing and waste teardown." },
          { title: "Backup & DR", body: "RPO/RTO targets with tested restore runbooks." },
          { title: "Cloud-native builds", body: "New systems designed serverless-first where it fits." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Single or multi-cloud?", a: "Single cloud done well beats multi-cloud done thinly, for most companies. We advise per workload." },
          { q: "How do you control costs?", a: "Budgets with alerts, monthly reviews and teardown of idle resources. Savings shared transparently." },
        ],
      },
    ],
    related: [
      { label: "DevOps & Platform Engineering", href: "devops-devsecops.html" },
      { label: "Cloud Training", href: "cloud-training.html" },
      { label: "Managed IT & Support", href: "managed-it-support.html" },
      BOOK,
    ],
  },
  "devops-devsecops": {
    slug: "devops-devsecops",
    title: "DevOps, DevSecOps & platform engineering",
    description: "Golden paths and GitOps so teams ship daily.",
    eyebrow: "Cloud & Platforms",
    lede: "Pipelines, GitOps, internal developer platforms and security gates. The goal is boring, daily, safe releases.",
    blocks: [
      {
        kind: "scope",
        title: "Platform services",
        items: [
          { title: "CI/CD pipelines", body: "GitHub Actions and Argo CD with quality gates." },
          { title: "Internal platforms", body: "Backstage portals, templates and golden paths." },
          { title: "GitOps", body: "Declarative environments with audited changes." },
          { title: "Secrets & policy", body: "Vaulting, image signing and policy-as-code." },
          { title: "SRE practices", body: "SLOs, error budgets and on-call runbooks." },
          { title: "DevSecOps gates", body: "SAST, SCA and container scans in the pipeline." },
        ],
      },
      {
        kind: "points",
        title: "What good looks like",
        items: [
          "Lead time from commit to production measured in minutes",
          "One-click rollback for every service",
          "Security findings fixed in pipeline, not in audits",
          "Developers self-serve environments without tickets",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Can you work with our existing Jenkins setup?", a: "Yes. We improve in place and migrate to modern tooling in phases." },
          { q: "What is platform engineering vs DevOps?", a: "DevOps is the practice; the platform is the product that makes it easy. We build both." },
        ],
      },
    ],
    related: [
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      { label: "DevOps & Kubernetes Training", href: "devops-kubernetes-training.html" },
      { label: "QA & Test Automation", href: "qa-test-automation.html" },
      BOOK,
    ],
  },
  "api-integration-modernisation": {
    slug: "api-integration-modernisation",
    title: "APIs, microservices & legacy modernisation",
    description: "Integration and strangler-pattern modernisation.",
    eyebrow: "Cloud & Platforms",
    lede: "API design, Kafka integrations and legacy modernisation without big-bang rewrites. New capability alongside the old system until it takes over.",
    blocks: [
      {
        kind: "scope",
        title: "Integration services",
        items: [
          { title: "API design", body: "Versioned, documented REST and event APIs." },
          { title: "Microservices", body: "Bounded contexts with independent deployability." },
          { title: "Event streaming", body: "Kafka topologies for decoupled systems." },
          { title: "Legacy assessment", body: "Risk, cost and strangler roadmap for old systems." },
          { title: "Data migration", body: "Reconciliation-checked moves with dual-run periods." },
          { title: "SAP & ERP links", body: "S/4HANA and legacy ERP integrations." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Rewrite or strangler?", a: "Strangler, almost always. Rewrites stall; incremental replacement ships value continuously." },
          { q: "How do you de-risk data migration?", a: "Dual-run with automated reconciliation before any cutover." },
        ],
      },
    ],
    related: [
      { label: "Custom Software Development", href: "custom-software-development.html" },
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      { label: "Managed IT & Support", href: "managed-it-support.html" },
      BOOK,
    ],
  },
  "qa-test-automation": {
    slug: "qa-test-automation",
    title: "QA & test automation",
    description: "Playwright/Selenium automation plus LLM app evaluation.",
    eyebrow: "Quality, Security & Enterprise",
    lede: "Manual QA, Playwright, Selenium and Appium automation, performance testing with k6, and evaluation suites for AI/LLM systems.",
    blocks: [
      {
        kind: "scope",
        title: "QA services",
        items: [
          { title: "Web automation", body: "Playwright and Selenium suites with CI integration." },
          { title: "Mobile automation", body: "Appium device-farm testing." },
          { title: "API testing", body: "Contract and integration test pyramids." },
          { title: "Performance", body: "k6 load, stress and soak testing with budgets." },
          { title: "AI/LLM evaluation", body: "Golden sets, promptfoo harnesses and red-teaming." },
          { title: "Manual & exploratory", body: "Structured exploratory testing for what automation misses." },
        ],
      },
      {
        kind: "points",
        title: "Quality principles",
        tint: true,
        items: [
          "Flaky tests fixed or deleted, never tolerated",
          "Test data and environments versioned like code",
          "AI features evaluated on every model or prompt change",
          "Release gates both teams agree on",
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How do you test AI features?", a: "Curated golden sets, LLM-as-judge with human spot checks, and regression runs on every change." },
          { q: "Can you embed testers in our team?", a: "Yes, embedded or as an independent QA function reporting quality status." },
        ],
      },
    ],
    related: [
      { label: "Software Testing Training", href: "software-testing-training.html" },
      { label: "DevOps & Platform Engineering", href: "devops-devsecops.html" },
      { label: "Generative AI Apps", href: "generative-ai.html" },
      BOOK,
    ],
  },
  cybersecurity: {
    slug: "cybersecurity",
    title: "Cybersecurity & compliance",
    description: "Assessments, hardening and secure SDLC.",
    eyebrow: "Quality, Security & Enterprise",
    lede: "Security assessments, hardening, secure development practices and compliance support for SOC 2, ISO 27001 and HIPAA-aware handling.",
    blocks: [
      {
        kind: "scope",
        title: "Security services",
        items: [
          { title: "Security assessment", body: "Risk-ranked findings with fix plans, not just reports." },
          { title: "VAPT", body: "Vulnerability assessment and penetration testing cycles." },
          { title: "Secure SDLC", body: "Threat modelling, code review gates and secrets hygiene." },
          { title: "Cloud hardening", body: "CIS-aligned baselines for AWS, Azure and GCP." },
          { title: "Compliance support", body: "Evidence collection for SOC 2, ISO 27001 and HIPAA." },
          { title: "Incident readiness", body: "Playbooks, logging baselines and response drills." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Do you replace our security team?", a: "No. We augment: assessments, tooling and practices your team operates." },
          { q: "Can you help with enterprise security questionnaires?", a: "Yes, we prepare evidence packs and answer technical reviews." },
        ],
      },
    ],
    related: [
      { label: "Cybersecurity Training", href: "cybersecurity-training.html" },
      { label: "DevOps & Platform Engineering", href: "devops-devsecops.html" },
      { label: "Managed IT & Support", href: "managed-it-support.html" },
      BOOK,
    ],
  },
  "salesforce-erp-crm": {
    slug: "salesforce-erp-crm",
    title: "ERP, CRM & low-code",
    description: "Salesforce, Dynamics, SAP and Power Platform delivery.",
    eyebrow: "Quality, Security & Enterprise",
    lede: "Salesforce Agentforce and customisation, Dynamics 365, SAP S/4HANA integration and Power Platform apps, wired into your data and identity.",
    blocks: [
      {
        kind: "scope",
        title: "Enterprise app services",
        items: [
          { title: "Salesforce", body: "Admin, development, Agentforce and integrations." },
          { title: "Dynamics 365", body: "CRM/CE configuration and custom development." },
          { title: "SAP integration", body: "S/4HANA connections, IDocs and event bridges." },
          { title: "Power Platform", body: "Power Apps, Automate flows and Dataverse models." },
          { title: "Data sync", body: "Bidirectional sync with warehouses and lakes." },
          { title: "Governance", body: "Environments, ALM and release discipline." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "Custom code or configuration first?", a: "Configuration first. Code only where the platform genuinely cannot do it." },
          { q: "Can you rescue a stalled implementation?", a: "Yes. We audit org health, clear tech debt, then deliver in sprints." },
        ],
      },
    ],
    related: [
      { label: "Agentic AI & Automation", href: "agentic-ai-automation.html" },
      { label: "APIs & Microservices", href: "api-integration-modernisation.html" },
      { label: "Data Engineering & BI", href: "data-engineering-analytics.html" },
      BOOK,
    ],
  },
  "emerging-tech-iot": {
    slug: "emerging-tech-iot",
    title: "IoT, edge, blockchain & AR/VR",
    description: "Applied emerging-tech pilots that earn their keep.",
    eyebrow: "Quality, Security & Enterprise",
    lede: "Industrial IoT, edge pipelines, predictive maintenance, vision quality checks and focused AR/VR or blockchain pilots with clear success metrics.",
    blocks: [
      {
        kind: "scope",
        title: "Emerging tech services",
        items: [
          { title: "Industrial IoT", body: "Sensor ingestion, edge gateways and plant dashboards." },
          { title: "Predictive maintenance", body: "Failure models on vibration, temperature and run hours." },
          { title: "Vision quality", body: "Camera-based defect detection on the line." },
          { title: "Energy & solar", body: "Generation monitoring and field-service apps." },
          { title: "AR/VR pilots", body: "Training and remote-assist use cases with measured outcomes." },
          { title: "Blockchain where apt", body: "Provenance and audit-trail pilots, honestly scoped." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "How do pilots avoid becoming shelfware?", a: "Fixed scope, production data from week one, and a go/no-go gate tied to metrics." },
        ],
      },
    ],
    related: [
      { label: "AI & Machine Learning", href: "ai-machine-learning.html" },
      { label: "Data Engineering & BI", href: "data-engineering-analytics.html" },
      { label: "Cloud Services", href: "cloud-services.html" },
      BOOK,
    ],
  },
  "managed-it-support": {
    slug: "managed-it-support",
    title: "Managed IT, support & AMC",
    description: "SLA-backed support and maintenance contracts.",
    eyebrow: "Quality, Security & Enterprise",
    lede: "Monitoring, SLAs, ticketed support and annual maintenance for your applications and infrastructure, with monthly health reports.",
    blocks: [
      {
        kind: "scope",
        title: "Support services",
        items: [
          { title: "Monitoring", body: "Uptime, errors and performance with alerting." },
          { title: "SLA support", body: "Response and resolution targets in writing." },
          { title: "Patching", body: "Scheduled OS, framework and dependency updates." },
          { title: "Backups", body: "Verified restores, not just backup jobs." },
          { title: "Small enhancements", body: "A monthly allowance for fixes and tweaks." },
          { title: "Health reports", body: "Incidents, capacity and recommendations, monthly." },
        ],
      },
      {
        kind: "faqs",
        items: [
          { q: "What are your support hours?", a: "Business-hours cover standard; 24x7 for critical systems on higher tiers, across IST and ET." },
          { q: "Can you support apps you did not build?", a: "Yes, after a takeover review and stabilisation sprint." },
        ],
      },
    ],
    related: [
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      { label: "DevOps & Platform Engineering", href: "devops-devsecops.html" },
      { label: "Cybersecurity & Compliance", href: "cybersecurity.html" },
      BOOK,
    ],
  },
};
