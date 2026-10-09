/* Site navigation data. 1:1 with the original site's header, drawer and footer.
   Slugs and labels are frozen: do not rename without a content-parity check. */

export const CONTACT = {
  email: "info@laprrk.com",
  phoneIn: "+91 88606 64929",
  phoneInHref: "tel:+918860664929",
  phoneUs: "+1 (502) 309-5749",
  phoneUsHref: "tel:+15023095749",
  waNumber: "918860664929",
};

export type NavCol = { title: string; href?: string; icon?: string; links: { label: string; href: string }[] };

export const MEGA: { id: string; label: string; cols: NavCol[]; foot: string; footHref: string; footLabel: string }[] = [
  {
    id: "mega-it",
    label: "IT Services",
    cols: [
      {
        title: "Build",
        links: [
          { label: "Custom Software Development", href: "custom-software-development.html" },
          { label: "Web Application Development", href: "web-application-development.html" },
          { label: "Mobile App Development", href: "mobile-app-development.html" },
          { label: "UI/UX & Product Design", href: "ui-ux-design.html" },
          { label: "E-commerce & CMS Development", href: "ecommerce-cms-development.html" },
        ],
      },
      {
        title: "AI & Data",
        links: [
          { label: "AI & Machine Learning", href: "ai-machine-learning.html" },
          { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
          { label: "Agentic AI & Intelligent Automation", href: "agentic-ai-automation.html" },
          { label: "Data Engineering, Analytics & BI", href: "data-engineering-analytics.html" },
        ],
      },
      {
        title: "Cloud & Platforms",
        links: [
          { label: "Cloud Services & Migration", href: "cloud-services.html" },
          { label: "DevOps, DevSecOps & Platform Engineering", href: "devops-devsecops.html" },
          { label: "APIs, Microservices & Legacy Modernisation", href: "api-integration-modernisation.html" },
        ],
      },
      {
        title: "Quality, Security & Enterprise",
        links: [
          { label: "QA & Test Automation (incl. AI/LLM testing)", href: "qa-test-automation.html" },
          { label: "Cybersecurity & Compliance", href: "cybersecurity.html" },
          { label: "ERP, CRM & Low-Code", href: "salesforce-erp-crm.html" },
          { label: "IoT, Edge, Blockchain & AR/VR", href: "emerging-tech-iot.html" },
          { label: "Managed IT, Support & AMC", href: "managed-it-support.html" },
        ],
      },
    ],
    foot: "From product engineering to agentic AI, cloud and QA, delivered in two-week sprints.",
    footHref: "it-services.html",
    footLabel: "All IT services",
  },
  {
    id: "mega-hiring",
    label: "Hiring",
    cols: [
      {
        title: "Hiring services",
        href: "hiring-services.html",
        links: [
          { label: "Permanent IT Recruitment", href: "permanent-it-recruitment.html" },
          { label: "Contract Staffing & Contract-to-Hire", href: "contract-staffing.html" },
          { label: "IT Staff Augmentation & Dedicated Teams", href: "staff-augmentation.html" },
          { label: "GCC & India Team Setup Hiring", href: "gcc-hiring.html" },
          { label: "Executive & Leadership Search", href: "executive-search.html" },
          { label: "Recruitment Process Outsourcing (RPO)", href: "rpo.html" },
          { label: "Campus Hiring & Hire-Train-Deploy", href: "campus-hiring.html" },
          { label: "US IT Staffing (W2, C2C & Contract-to-Hire)", href: "us-it-staffing.html" },
          { label: "Technical Assessment & Interview-as-a-Service", href: "technical-assessment.html" },
          { label: "Diversity & Women-in-Tech Hiring", href: "diversity-hiring.html" },
        ],
      },
      {
        title: "Roles we recruit",
        href: "technologies-roles-we-recruit.html",
        links: [
          { label: "Java & JVM", href: "technologies-roles-we-recruit.html#java-jvm" },
          { label: ".NET & Microsoft", href: "technologies-roles-we-recruit.html#dotnet-microsoft" },
          { label: "Python, Go & Backend", href: "technologies-roles-we-recruit.html#python-go-backend" },
          { label: "JavaScript & Frontend", href: "technologies-roles-we-recruit.html#javascript-frontend" },
          { label: "Mobile", href: "technologies-roles-we-recruit.html#mobile" },
          { label: "Cloud & Infrastructure", href: "technologies-roles-we-recruit.html#cloud-infrastructure" },
          { label: "DevOps, SRE & Platform", href: "technologies-roles-we-recruit.html#devops-sre-platform" },
          { label: "Data Engineering & Analytics", href: "technologies-roles-we-recruit.html#data-engineering-analytics" },
          { label: "Data Science, AI/ML & GenAI", href: "technologies-roles-we-recruit.html#data-science-ai-genai" },
        ],
      },
    ],
    foot: "Technically screened shortlists in 5-7 business days, success fee only after joining.",
    footHref: "hiring-consultation.html",
    footLabel: "All hiring services",
  },
  {
    id: "mega-training",
    label: "Training",
    cols: [
      {
        title: "For IT corporates",
        href: "training-for-it-corporates.html",
        links: [
          { label: "Generative AI & Agentic AI", href: "generative-ai-training.html" },
          { label: "AI Productivity & AI Literacy for All Employees", href: "ai-literacy-training.html" },
          { label: "AI/ML & MLOps", href: "machine-learning-mlops-training.html" },
          { label: "Data Engineering & Lakehouse", href: "data-engineering-training.html" },
          { label: "Data Analytics & BI (Power BI, Tableau)", href: "data-analytics-training.html" },
          { label: "Cloud: AWS, Azure & Google Cloud", href: "cloud-training.html" },
          { label: "DevOps, Kubernetes & DevSecOps", href: "devops-kubernetes-training.html" },
          { label: "Platform Engineering & SRE", href: "platform-engineering-sre-training.html" },
          { label: "Cybersecurity & Secure Coding", href: "cybersecurity-training.html" },
          { label: "Software Testing & Test Automation", href: "software-testing-training.html" },
        ],
      },
      {
        title: "For institutes",
        href: "training-for-institutes.html",
        links: [
          { label: "Faculty Development Programmes (FDP)", href: "faculty-development-programs.html" },
          { label: "Industry-Readiness Bootcamp for Students", href: "industry-readiness-bootcamp.html" },
          { label: "Placement Readiness Programme", href: "placement-training.html" },
          { label: "NEP-aligned Credit & Add-on Courses", href: "nep-credit-courses.html" },
          { label: "AI, GenAI & Data Science Certification", href: "ai-data-certification-program.html" },
          { label: "Cloud & DevOps Certification Programme", href: "cloud-devops-certification-program.html" },
          { label: "Cybersecurity Certification Programme", href: "cybersecurity-certification-program.html" },
          { label: "Software Testing & QA Career Programme", href: "software-testing-career-program.html" },
          { label: "Hackathons, Live Projects & Internships", href: "hackathons-internships.html" },
          { label: "Centre of Excellence & Lab Setup", href: "centre-of-excellence.html" },
        ],
      },
    ],
    foot: "Live, hands-on programmes, around 70% labs, with pre and post assessments.",
    footHref: "corporate-training.html",
    footLabel: "Training overview",
  },
];

export const RESOURCES_CARDS = [
  { label: "Blog & insights", href: "blog.html" },
  { label: "Case studies", href: "case-studies.html" },
  { label: "FAQs", href: "faq.html" },
];

export const DRAWER_GROUPS = [
  {
    label: "IT Services",
    links: [
      { label: "IT Services overview", href: "it-services.html" },
      ...MEGA[0].cols.flatMap((c) => c.links),
    ],
  },
  {
    label: "Hiring",
    links: [
      { label: "Hiring overview", href: "hiring-consultation.html" },
      { label: "All hiring services", href: "hiring-services.html" },
      ...MEGA[1].cols[0].links,
      { label: "Technologies & roles we recruit", href: "technologies-roles-we-recruit.html" },
    ],
  },
  {
    label: "Training",
    links: [
      { label: "Training overview", href: "corporate-training.html" },
      { label: "Trainings for IT corporates", href: "training-for-it-corporates.html" },
      { label: "Trainings for institutes", href: "training-for-institutes.html" },
      ...MEGA[2].cols[0].links.slice(0, 8),
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Resources overview", href: "resources.html" },
      ...RESOURCES_CARDS,
    ],
  },
];

export const FOOTER_COLS = [
  {
    title: "IT Services",
    href: "it-services.html",
    links: [
      { label: "Custom Software Development", href: "custom-software-development.html" },
      { label: "Web Application Development", href: "web-application-development.html" },
      { label: "Mobile App Development", href: "mobile-app-development.html" },
      { label: "Generative AI & LLM Apps", href: "generative-ai.html" },
      { label: "Agentic AI & Intelligent Automation", href: "agentic-ai-automation.html" },
      { label: "Data Engineering, Analytics & BI", href: "data-engineering-analytics.html" },
      { label: "Cloud Services & Migration", href: "cloud-services.html" },
      { label: "DevOps, DevSecOps & Platform Engineering", href: "devops-devsecops.html" },
      { label: "QA & Test Automation (incl. AI/LLM testing)", href: "qa-test-automation.html" },
      { label: "Cybersecurity & Compliance", href: "cybersecurity.html" },
      { label: "View all IT services", href: "it-services.html" },
    ],
  },
  {
    title: "Hiring Consultation",
    href: "hiring-consultation.html",
    links: [
      { label: "All hiring services", href: "hiring-services.html" },
      { label: "Permanent IT Recruitment", href: "permanent-it-recruitment.html" },
      { label: "Contract Staffing & Contract-to-Hire", href: "contract-staffing.html" },
      { label: "IT Staff Augmentation & Dedicated Teams", href: "staff-augmentation.html" },
      { label: "GCC & India Team Setup Hiring", href: "gcc-hiring.html" },
      { label: "Executive & Leadership Search", href: "executive-search.html" },
      { label: "Recruitment Process Outsourcing (RPO)", href: "rpo.html" },
      { label: "Campus Hiring & Hire-Train-Deploy", href: "campus-hiring.html" },
      { label: "Roles we recruit", href: "technologies-roles-we-recruit.html" },
    ],
  },
  {
    title: "Training",
    href: "corporate-training.html",
    links: [
      { label: "Trainings for IT corporates", href: "training-for-it-corporates.html" },
      { label: "Trainings for institutes", href: "training-for-institutes.html" },
      { label: "Generative AI & Agentic AI", href: "generative-ai-training.html" },
      { label: "Data Analytics & BI (Power BI, Tableau)", href: "data-analytics-training.html" },
      { label: "Cloud: AWS, Azure & Google Cloud", href: "cloud-training.html" },
      { label: "DevOps, Kubernetes & DevSecOps", href: "devops-kubernetes-training.html" },
      { label: "Software Testing & Test Automation", href: "software-testing-training.html" },
      { label: "Faculty Development Programmes (FDP)", href: "faculty-development-programs.html" },
      { label: "Industry-Readiness Bootcamp for Students", href: "industry-readiness-bootcamp.html" },
      { label: "Placement Readiness Programme", href: "placement-training.html" },
    ],
  },
  {
    title: "Resources & company",
    href: "resources.html",
    links: [
      { label: "Blog & insights", href: "blog.html" },
      { label: "Case studies", href: "case-studies.html" },
      { label: "FAQs", href: "faq.html" },
      { label: "About Laprrk", href: "about.html" },
      { label: "Contact & offices", href: "contact.html" },
    ],
  },
];
