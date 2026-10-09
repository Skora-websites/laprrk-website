/* Scaffolds one .html entry + one src/pages/<slug>/main.tsx per page.
   Run: node scripts/scaffold-pages.mjs (writes only missing files). */
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const PAGES = [
  // IT Services
  ["it-services", "IT Services | Custom Software, AI, Cloud, Data & QA", "17 IT services across software, AI, data, cloud, DevOps, QA, security and enterprise apps."],
  ["custom-software-development", "Custom Software Development | Laprrk", "Bespoke software built around your workflows, from discovery to release and support."],
  ["web-application-development", "Web Application Development | Laprrk", "Fast, accessible web apps with React, Next.js, Node.js and .NET."],
  ["mobile-app-development", "Mobile App Development | Laprrk", "Native and cross-platform mobile apps with Flutter, iOS and Android."],
  ["ui-ux-design", "UI/UX & Product Design | Laprrk", "Research, UX flows, UI systems and prototypes that developers can build."],
  ["ecommerce-cms-development", "E-commerce & CMS Development | Laprrk", "Storefronts, headless commerce and CMS builds that are easy to run."],
  ["ai-machine-learning", "AI & Machine Learning | Laprrk", "ML models and MLOps for prediction, vision, language and personalisation."],
  ["generative-ai", "Generative AI & LLM Apps | Laprrk", "RAG assistants, copilots and content automation on your approved models."],
  ["agentic-ai-automation", "Agentic AI & Intelligent Automation | Laprrk", "Agents that act across CRM, ERP and ticketing through MCP, with human approval."],
  ["data-engineering-analytics", "Data Engineering, Analytics & BI | Laprrk", "Lakehouse platforms, pipelines and dashboards on Databricks, Snowflake and Fabric."],
  ["cloud-services", "Cloud Services & Migration | Laprrk", "AWS, Azure and Google Cloud migration, landing zones and cost control."],
  ["devops-devsecops", "DevOps, DevSecOps & Platform Engineering | Laprrk", "Golden paths, GitOps and internal developer platforms so teams ship daily."],
  ["api-integration-modernisation", "APIs, Microservices & Legacy Modernisation | Laprrk", "Integration, decomposition and strangler-pattern modernisation without big-bang rewrites."],
  ["qa-test-automation", "QA & Test Automation incl. AI/LLM Testing | Laprrk", "Playwright, Selenium and Appium automation plus evaluation suites for LLM apps."],
  ["cybersecurity", "Cybersecurity & Compliance | Laprrk", "Assessments, hardening, secure SDLC and compliance support."],
  ["salesforce-erp-crm", "ERP, CRM & Low-Code | Laprrk", "Salesforce, Dynamics 365, SAP and Power Platform delivery and integration."],
  ["emerging-tech-iot", "IoT, Edge, Blockchain & AR/VR | Laprrk", "Connected devices, edge pipelines and applied emerging tech pilots."],
  ["managed-it-support", "Managed IT, Support & AMC | Laprrk", "SLA-backed support, monitoring and annual maintenance contracts."],
  // Hiring
  ["hiring-consultation", "Hiring Consultation | IT Recruitment & GCC Setup", "Permanent and contract IT hiring, RPO, executive search and GCC team setup."],
  ["hiring-services", "All Hiring Services | Laprrk", "Every hiring service in one place, from single hires to full RPO."],
  ["permanent-it-recruitment", "Permanent IT Recruitment | Laprrk", "Technically screened permanent hires with joining follow-through."],
  ["contract-staffing", "Contract Staffing & Contract-to-Hire | Laprrk", "Contract engineers in weeks, with contract-to-hire conversion paths."],
  ["staff-augmentation", "IT Staff Augmentation & Dedicated Teams | Laprrk", "Senior engineers embedded in your rituals, managed or self-directed."],
  ["gcc-hiring", "GCC & India Team Setup Hiring | Laprrk", "Leadership first, then a foundation team, then scale: phased GCC hiring."],
  ["executive-search", "Executive & Leadership Search | Laprrk", "CTOs, VPs, architects and GCC site leaders through mapped search."],
  ["rpo", "Recruitment Process Outsourcing (RPO) | Laprrk", "An embedded talent function with pipeline reporting and SLAs."],
  ["campus-hiring", "Campus Hiring & Hire-Train-Deploy | Laprrk", "Fresher selection, 8-12 week training and deployment to your projects."],
  ["us-it-staffing", "US IT Staffing (W2, C2C & Contract-to-Hire) | Laprrk", "US-based staffing on W2, C2C and contract-to-hire models."],
  ["technical-assessment", "Technical Assessment & Interview-as-a-Service | Laprrk", "Practising engineers run structured interviews and scorecards for you."],
  ["diversity-hiring", "Diversity & Women-in-Tech Hiring | Laprrk", "Diverse pipelines, unbiased screening and returnship programmes."],
  ["technologies-roles-we-recruit", "Technologies & Roles We Recruit | Laprrk", "Software talent across 16 technology groups, screened by engineers."],
  // Training
  ["corporate-training", "Corporate Training | IT & Institute Programmes", "Live, hands-on training for IT companies and institutes, around 70% labs."],
  ["training-for-it-corporates", "Training for IT Corporates | Laprrk", "18 role-based tracks to upskill delivery teams on AI, cloud, data and more."],
  ["training-for-institutes", "Training for Institutes | Laprrk", "FDPs, bootcamps, placement and NEP-aligned programmes for colleges."],
  ["generative-ai-training", "Generative AI & Agentic AI Training | Laprrk", "GenAI engineering with a working RAG app and agent as capstone."],
  ["ai-literacy-training", "AI Productivity & AI Literacy Training | Laprrk", "AI fluency for every employee on your approved tools."],
  ["machine-learning-mlops-training", "AI/ML & MLOps Training | Laprrk", "Model building, evaluation and production MLOps pipelines."],
  ["data-engineering-training", "Data Engineering & Lakehouse Training | Laprrk", "Hands-on lakehouse engineering on Databricks, Snowflake and Fabric."],
  ["data-analytics-training", "Data Analytics & BI Training (Power BI, Tableau) | Laprrk", "Analyst tracks in SQL, Power BI and Tableau with real datasets."],
  ["cloud-training", "Cloud Training: AWS, Azure & Google Cloud | Laprrk", "Role-based cloud tracks with labs and certification readiness."],
  ["devops-kubernetes-training", "DevOps, Kubernetes & DevSecOps Training | Laprrk", "Pipelines, Kubernetes and security gates taught on live clusters."],
  ["platform-engineering-sre-training", "Platform Engineering & SRE Training | Laprrk", "IDPs, SLOs and reliability practices for platform teams."],
  ["cybersecurity-training", "Cybersecurity & Secure Coding Training | Laprrk", "Threat basics, secure coding and SOC analyst foundations."],
  ["software-testing-training", "Software Testing & Test Automation Training | Laprrk", "Manual foundations plus Playwright and API automation."],
  ["faculty-development-programs", "Faculty Development Programmes (FDP) | Laprrk", "AI, cloud and data FDPs with outcomes mapped to teaching."],
  ["industry-readiness-bootcamp", "Industry-Readiness Bootcamp for Students | Laprrk", "Project-based bootcamps that end with a demo day and portfolio."],
  ["placement-training", "Placement Readiness Programme | Laprrk", "Aptitude, coding, interviews and communication for placements."],
  ["nep-credit-courses", "NEP-Aligned Credit & Add-on Courses | Laprrk", "Industry minors and skill courses designed for NEP 2020 credit structures."],
  ["ai-data-certification-program", "AI, GenAI & Data Science Certification | Laprrk", "A rigorous certification path from Python to GenAI systems."],
  ["cloud-devops-certification-program", "Cloud & DevOps Certification Programme | Laprrk", "Cloud and DevOps certification tracks with lab-heavy prep."],
  ["cybersecurity-certification-program", "Cybersecurity Certification Programme | Laprrk", "Security+ and analyst-track preparation with hands-on labs."],
  ["software-testing-career-program", "Software Testing & QA Career Programme | Laprrk", "A complete path from manual testing to automation engineer."],
  ["hackathons-internships", "Hackathons, Live Projects & Internships | Laprrk", "Events and internships that surface real talent for hiring."],
  ["centre-of-excellence", "Centre of Excellence & Lab Setup | Laprrk", "CoE design, lab setup and mentor networks for institutes."],
  // Company & resources
  ["about", "About Laprrk Technology Solutions | Laprrk", "IT services, hiring and training from India and the USA since 2019."],
  ["contact", "Contact Laprrk | Offices in India & USA", "Tell us what you need. We reply within one business day."],
  ["resources", "Resources: Guides, Cases & Answers | Laprrk", "Practical guides, representative engagements and answers from our teams."],
  ["blog", "Blog & Insights | Laprrk", "Practical guides on AI, QA, hiring and upskilling."],
  ["case-studies", "Case Studies | Laprrk", "Representative engagements across IT, hiring and training."],
  ["faq", "FAQs | Laprrk", "Answers on pricing, process, IP, hiring terms and training."],
  ["privacy-policy", "Privacy Policy | Laprrk", "How Laprrk collects, uses and protects your information."],
  ["terms", "Terms of Service | Laprrk", "The terms governing use of this site and our services."],
  // Case studies
  ["genai-document-assistant-insurance", "GenAI Document Assistant Case Study | Laprrk", "70% less manual data entry for an insurance agency network."],
  ["india-engineering-team-setup", "India Engineering Team Setup Case Study | Laprrk", "First 40 hires for a US product company's India centre in eight months."],
  ["genai-cloud-upskilling-program", "GenAI & Cloud Upskilling Case Study | Laprrk", "120 engineers trained across three roles in 12 weeks."],
  // Blog articles
  ["nep-industry-courses-colleges", "Industry-Aligned Credit Courses Under NEP 2020 | Laprrk", "A practical approach for engineering and management institutions."],
  ["corporate-ai-upskilling-plan", "A 90-Day AI Upskilling Plan for IT Teams | Laprrk", "Role-based tracks, hands-on practice and measurement."],
  ["hire-train-deploy-model", "Hire-Train-Deploy: Job-Ready Fresher Teams | Laprrk", "Structured selection, training and deployment in 12 weeks."],
];

function htmlShell(slug, title, desc) {
  return `<!doctype html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="https://laprrk.com/${slug}.html" />
    <meta name="theme-color" content="#f4f3fa" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Laprrk Technology Solutions" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Instrument+Sans:ital,wght@0,400..700;1,400..600&family=JetBrains+Mono:wght@400..700&display=swap" />
    <script>
      (function(){try{var t=localStorage.getItem("laprrk-theme");if(!t){t="light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})();
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <div id="root"></div>
    <script type="module" src="/src/pages/${slug}/main.tsx"></script>
  </body>
</html>
`;
}

function mainTsx(slug) {
  return `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../../styles/global.css";
import { MotionProvider } from "../../lib/motion";
import { Page } from "../Page";
import { PAGES } from "../data";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MotionProvider>
      <Page data={PAGES["${slug}"]} />
    </MotionProvider>
  </StrictMode>,
);
`;
}

let created = 0;
for (const [slug, title, desc] of PAGES) {
  const htmlPath = join(root, `${slug}.html`);
  const dir = join(root, "src", "pages", slug);
  const tsxPath = join(dir, "main.tsx");
  if (!existsSync(htmlPath)) {
    writeFileSync(htmlPath, htmlShell(slug, title, desc));
    created++;
  }
  if (!existsSync(tsxPath)) {
    mkdirSync(dir, { recursive: true });
    writeFileSync(tsxPath, mainTsx(slug));
    created++;
  }
}
console.log(`scaffold done: ${PAGES.length} pages, ${created} files created`);
