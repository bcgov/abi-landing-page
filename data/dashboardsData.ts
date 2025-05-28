interface Dashboard {
  id: number;
  portfolio: string;
  description: string;
  shortDescription: string;
  slug: string;
  urls: { title: string; url: string }[];
  branch: string;
}

export const dashboards: Dashboard[] = [
  {
    id: 1,
    portfolio: "Intake & EP",
    description:
      "The Intake Team is responsible for processing and establishing eligibility for income assistance and disability assistance applications. Specialized Intake Team processes applications for youth, correctional facilites inmates, hospitalized clients,  registered and licensed home residents . Employment Planning Team supports the client to obtain sustainable employment by EAW referral to Work BC, ISETS (Indigenous Skills and Employment Training), and other service providers in the community.Access the analytic dashboards for Intake and Employment Planning, developed by Analytics and Business Intelligence Team.",
    shortDescription: "Short Description",
    slug: "intake-ep",
    urls: [
      {
        title: "Intake Dashboard",
        url: "https://app.powerbi.com/intake-dashboard",
      },
    ],
    branch: "Virtual Services",
  },
  {
    id: 2,
    portfolio: "HASS + Bus Pass",
    description:
      "The Health and Specialized Services(HASS) Teams provide health services including processing  Disability applications, provisioning Medical equipment and devices,Medical supplies and nutrition , Medical transportation,Orthoses and bracing and CPAP devices.  The resource team within HASS provides Pacific Blue Cross support,Diet renewals and natal supplements and  assists withHealthy Kids program. The Specialized Services include Case reviews and trusts,OAS and GISSeniors supplement ,Special care facilities and Funeral assistance. HASS also encompasses Bus Pass Program providing subsidized bus passes, bus pass sticker renewal and PWD transportation supplement to eligible clients. Access the analytic dashboards for Health and Specialized Services, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "hass-bus-pass",
    urls: [
      {
        title: "SDD Virtual Services",
        url: "https://app.powerbi.com/sdd-virtual-services",
      },
      {
        title: "SDD Bus Pass",
        url: "https://app.powerbi.com/sdd-bus-pass",
      },
    ],
    branch: "Virtual Services",
  },
  {
    id: 3,
    portfolio: "Contact Centre",
    description:
      "The Contact Centre Teams handle Inbound/outbound calls with clients, citizens, advocates, and ministry partners,  responds to after hours critical and emergency issues, warrant checks , creates  Provincial queue and process service requests.Access the analytic dashboards for Contact Centre, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "contact-centre",
    urls: [
      {
        title: "SDD Virtual Services",
        url: "https://app.powerbi.com/sdd-virtual-services",
      },
    ],
    branch: "Virtual Services",
  },
  {
    id: 4,
    portfolio: "Community Services",
    description:
      "The Community Services(CS) Branch delivers in-person programs and services in offices and communities throughout B.C. It encompasses community offices including Ministry offices and Service BC locations across BC and Community Services Focus Teams (CSFT) which are dedicated virtual teams within Community Services that complete more complex or specialized work. CSFT include Service BC Support, Self Employment Program (SEP),Change in circumstance (CIC),File review and Administrative Error Underpayments (AEU) , Urgent Crisis Long, ID and Reports teams. Access the analytic dashboards for CS  branch, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "community-services",
    urls: [
      {
        title: "SDD Community Services",
        url: "https://app.powerbi.com/sdd-community-services",
      },
      {
        title: "Service BC",
        url: "https://app.powerbi.com/service-bc",
      },
      {
        title: "SDD Work Coordination",
        url: "https://app.powerbi.com/sdd-work-coordination",
      },
      {
        title: "SDD Annual Earnings",
        url: "https://app.powerbi.com/sdd-annual-earnings",
      },
    ],
    branch: "Community Services",
  },
  {
    id: 5,
    portfolio: "Prevention and Loss Management Services",
    description:
      "The Prevention and Loss Management Services (PLMS) Branch delivers services that support the division and ministry objectives by providing a suite of relevant service quality and program integrity services. This includes client service, front-line support, service quality initiatives, and compliance and enforcement activities. Access the analytic dashboards for PLMS branch, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "plms-dashboard",
    urls: [
      {
        title: "PLMS Dashboard",
        url: "https://app.powerbi.com/plms-dashboard",
      },
    ],
    branch: "PLMS",
  },
  {
    id: 6,
    portfolio: "Executive Reporting (SSB)",
    description:
      "The Strategic Services (SS) Branch supports service delivery through planning, technology/systems, training, program communication, and policy and procedure interpretation and implementation.Access the analytic dashboards for SS branch, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "executive-reporting",
    urls: [
      {
        title: "Strategic Services Branch",
        url: "https://app.powerbi.com/ssb",
      },
      {
        title: "SDD Divisional Reporting",
        url: "https://app.powerbi.com/sdd-divisional-reporting",
      },
      {
        title: "Leadership Reporting App",
        url: "https://app.powerbi.com/leadership-reporting",
      },
      {
        title: "SDD Executive Reporting",
        url: "https://app.powerbi.com/sdd-executive-reporting",
      },
    ],
    branch: "Executive",
  },
  {
    id: 7,
    portfolio: "Community Integration Services Branch",
    description:
      "The Community Integration Services(CISB) Branch connects with B.C.s most underserved people and supports them with both financial assistance and in navigating the complex social network for services. Community Integration Specialists work collaboratively with community partners and agencies. Access the analytic dashboards for CISB branch, developed by Analytics and Business Intelligence Team.",
    shortDescription: "test",
    slug: "cisb",
    urls: [
      {
        title: "CISB Dashboard",
        url: "https://app.powerbi.com/cisb-dashboard",
      },
    ],
    branch: "Community Integration Services Branch",
  },
  {
    id: 8,
    portfolio: "Workforce Optimization",
    description: "Description of Workforce Optimization",
    shortDescription: "test",
    slug: "workforce-optimization",
    urls: [
      {
        title: "Workforce Optimization",
        url: "https://app.powerbi.com/workforce-optimization",
      },
    ],
    branch: "Workforce Optimization",
  },
  {
    id: 9,
    portfolio: "Provincial Queue",
    description: "Description of Provincial Queue",
    shortDescription: "test",
    slug: "provincial-queue",
    urls: [
      {
        title: "Provincial Queue",
        url: "https://app.powerbi.com/provincial-queue",
      },
    ],
    branch: "Executive",
  },
  {
    id: 10,
    portfolio: "No Portfolio",
    description: "Description of No Portfolio",
    shortDescription: "test",
    slug: "no-portfolio",
    urls: [
      {
        title: "General Dashboard",
        url: "https://app.powerbi.com/general-dashboard",
      },
    ],
    branch: "None",
  },
];

// Extract unique branches for filtering
export const categories = [
  ...new Set(dashboards.map((dashboard) => dashboard.branch)),
].sort();
