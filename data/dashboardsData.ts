interface Dashboard {
  id: number;
  portfolio: string;
  description: string;
  slug: string;
  urls: { title: string; url: string }[];
  branch: string;
}

export const dashboards: Dashboard[] = [
  {
    id: 1,
    portfolio: "Intake & EP",
    description:
      "The Intake Team is responsible for processing and establishing eligibility for income assistance and disability assistance applications. Specialized Intake Team processes applications for youth, correctional facilites inmates, hospitalized clients,  registered and licensed home residents . Employment Planning Team supports the client to obtain sustainable employment by EAW referral to Work BC, ISETS (Indigenous Skills and Employment Training), and other service providers in the community.",
    slug: "intake-ep",
    urls: [
      {
        title: "SDD Virtual Services",
        url: "https://app.powerbi.com/groups/me/apps/8a18813f-b135-459f-9451-8e4aebc0b24a/reports/5bd75a07-80b9-42bb-9fec-627fa8547b1a/ReportSection97294ff91effc7bd38b9?experience=power-bi",
      },
    ],
    branch: "Virtual Services",
  },
  {
    id: 2,
    portfolio: "HASS & Bus Pass",
    description:
      "The Health and Specialized Services(HASS) Teams provide health services including processing  Disability applications, provisioning Medical equipment and devices,Medical supplies and nutrition , Medical transportation,Orthoses and bracing and CPAP devices.  The resource team within HASS provides Pacific Blue Cross support,Diet renewals and natal supplements and  assists withHealthy Kids program. The Specialized Services include Case reviews and trusts,OAS and GISSeniors supplement ,Special care facilities and Funeral assistance. HASS also encompasses Bus Pass Program providing subsidized bus passes, bus pass sticker renewal and PWD transportation supplement to eligible clients.",
    slug: "hass-bus-pass",
    urls: [
      {
        title: "SDD Virtual Services",
        url: "https://app.powerbi.com/groups/me/apps/8a18813f-b135-459f-9451-8e4aebc0b24a/reports/5bd75a07-80b9-42bb-9fec-627fa8547b1a/ReportSection97294ff91effc7bd38b9?experience=power-bi",
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
      "The Contact Centre Teams handle Inbound/outbound calls with clients, citizens, advocates, and ministry partners,  responds to after hours critical and emergency issues, warrant checks , creates  Provincial queue and process service requests.",
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
      "The Community Services(CS) Branch delivers in-person programs and services in offices and communities throughout B.C. It encompasses community offices including Ministry offices and Service BC locations across BC and Community Services Focus Teams (CSFT) which are dedicated virtual teams within Community Services that complete more complex or specialized work. CSFT include Service BC Support, Self Employment Program (SEP),Change in circumstance (CIC),File review and Administrative Error Underpayments (AEU) , Urgent Crisis Long, ID and Reports teams.",
    slug: "community-services",
    urls: [
      {
        title: "SDD Community Services",
        url: "https://app.powerbi.com/groups/me/apps/1a828297-001f-4b50-bee0-a3ebb3da7817/reports/ccbc68f3-61a7-4099-bd0e-d5787b16362b/54fda5140101be04911e?experience=power-bi",
      },
      {
        title: "Service BC",
        url: "https://app.powerbi.com/groups/me/apps/2a4dd233-cd54-498a-ae35-d2b047740fe5/reports/797b808e-96f8-4466-9fa4-e95398c9188a/ReportSection59e002a292a55e07d705?experience=power-bi",
      },
      {
        title: "SDD Work Coordination",
        url: "https://app.powerbi.com/groups/me/apps/08daa67e-e52d-461b-b90a-4ce5b12de96f/reports/b37e4632-e8e9-491a-8d48-f898d2388e3d/ReportSection5457459ff9c8a9a2f697?experience=power-bi",
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
      "The Prevention and Loss Management Services (PLMS) Branch delivers services that support the division and ministry objectives by providing a suite of relevant service quality and program integrity services. This includes client service, front-line support, service quality initiatives, and compliance and enforcement activities.",
    slug: "plms-dashboard",
    urls: [
      {
        title: "PLMS Dashboard",
        url: "https://app.powerbi.com/groups/me/apps/b3209eb6-c5eb-4c8e-b09f-871bc019098f/reports/ba014ff3-1269-492b-939c-8ec6e9344ef5/ReportSectionbbae3a58b782c85cc696?experience=power-bi",
      },
    ],
    branch: "PLMS",
  },
  {
    id: 6,
    portfolio: "Executive Reporting",
    description:
      "Executive Reporting portfolio encompasses Human Resources(HR), Strategic Services and Divisional reports.  The HR portion focusses on  sharing HR data related to staffing budgets, attrition, hires, transfers, exits and full time equivalent expenditures(FTE Burn)  to Leadership keeping employee's data secure and complying with HR  data standards.The Strategic Services portion  supports Strategic Services Branch  by providing ad hoc reporting on vast topics to support service delivery through planning, technology/systems, training, program communication, and policy and procedure interpretation, implementation and emergency management planning. The Divisional reporting portion provides high level statistics for all Service Delivery Division areas daily, weekly and monthly.",
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
        url: "https://app.powerbi.com/groups/me/apps/232969c6-ba8a-407b-bafd-79c6e7d0eb6a/reports/dcd0a0cb-ed95-4bdb-92ae-91f6f34d9ae9/ReportSection30b3b18af765e66f7a6e?experience=power-bi",
      },
    ],
    branch: "Executive",
  },
  {
    id: 7,
    portfolio: "Community Integration Services",
    description:
      "The Community Integration Services(CISB) Branch connects with B.C.s most underserved people and supports them with both financial assistance and in navigating the complex social network for services. Community Integration Specialists work collaboratively with community partners and agencies.",
    slug: "cisb",
    urls: [
      {
        title: "CISB Dashboard",
        url: "https://app.powerbi.com/cisb-dashboard",
      },
    ],
    branch: "Community Integration Services",
  },
  {
    id: 8,
    portfolio: "Workforce Optimization",
    description: "Description of Workforce Optimization",
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
    portfolio: "Miscellaneous",
    description: "Description of Miscellaneous",
    slug: "miscellaneous",
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
