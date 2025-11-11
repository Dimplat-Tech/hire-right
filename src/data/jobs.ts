export type Job = {
  id: string;
  company: string;
  role: string;
  about: string;
  location: string;
  mode: "On-site" | "Hybrid" | "Remote";
  type: "Full time" | "Part time" | "Contract";
  salary: string;
  link: string;
  duties: string[];
  requirements: string[];
  posted: string;        // e.g. "27/07/2025"
  logo: string;
  locate:string
  calendar:string
  locatebar:string
  image: string; // <-- New field for job image (e.g., /img/jobs/job1.jpeg)
};


export const jobs: Job[] = [
  {
    id: "j-1",
  company: "Hire Right",
    role: "Social media manager",
    requirements: [
    "Experience managing social media in crypto/fintech/tech",
    "Strong knowledge of blockchain, Web3, NFTs & DeFi",
    "Skilled in copywriting, storytelling & content creation",
    "Proficient with Hootsuite, Buffer, Notion, Canva & analytics tools",
    "Familiar with crypto community tone & culture (memes, alpha, FUD)",
    "Thrives in fast-paced, remote-first environments"
  ],
    about:
      "Building brands and engaging communities through digital storytelling.",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#400,000-#500,000",
    duties: ["Content creation", "Community engagement", "Analytics tracking", "Campaign management", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job1.jpeg", // <-- Updated image path
  },
  {
    id: "j-2",
  company: "Hire Right",
    role: "Hr Manager",
    requirements: [
      "Bachelor's in HR, Business Admin or related field (HR certification a plus)",
      "4-6yrs HR  experience; 2+yrs in supervisory/managerial role",
    "Strong knowledge of Nigerian labor laws,Hr practices & compliance ",
      "Experience setting up HR systems during organizational restructuring",
      "Excellent leadership communications & conflict resolution skills",

    ],
    about:
      "Driving people strategy and fostering a thriving workplace culture.",
    location: " Ajao Estate, Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#3,000,000-#3,600,000",
    duties:["Recruitment & onboarding", "Employee relations", "Performance management", "Policy development", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job2.jpeg", // <-- Updated image path
  },
  {
    id: "j-3",
  company: "Hire Right",
    role: "Restaurant Manager",
    requirements: [
   "HND/BSc in Hospitality ,Business Admin , or related field ",
  "3-5 yrs in restaurant/hospitality management",
  "Strong leadership ,team management & interpersonal skills",
  "Excellent customer service & problem -solving abilities",
  "Knowledge of POS & restaurant software",
  "Strong organizational & multiasking skills ",
  "Flexible to work evenings , weekends & holidays "
    ],
    about:
      "Delivering seamless dining experiences with operational excellence.",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Daily operations supervision", "Customer service", "Staff scheduling", "Inventory management", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/location.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job3.jpeg", // <-- Updated image path
  },
   {
    id: "j-4",
  company: "Hire Right",
    role: "Sales Representative-Fashion",
    requirements: [
      "HND/BSc in any field (fashion retail experience a plus )",
      "1-2yrs in retail sales, preferably fashion",
      "Knowledge of fashion trends, fabrics & garment care"

    ],
    about:
      "Connecting style with customers through tailored sales solutions..",
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Client engagement", "Sales conversion", "Fashion advisory", "Relationship building", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job4.jpeg", // <-- Updated image path
  },
   {
    id: "j-5",
  company: "Hire Right",
    role: "Head, CASA Business Segment",
    about:
      "Leading growth in current and savings account portfolios.",
      requirements: [
        "bachelor's in Banking, Finance, Business",
        "Admin or related field (MBA/ICAN/ACCA a plus)",
        "8-10yrs in retail banking/deposit mobilization ;5+ yrs in leadership ",
        "Expertise in digital banking , customer lifecycle & retail strategy execution ",
        "Strong analytical strategic  planning & cross-functional collaboration skills ",
        "Excellent communication , leadership & results-driven mindset"

      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Account acquisition", "Product strategy", "Customer retention", "Campaign execution", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job5.jpeg", // <-- Updated image path
  },
    {
    id: "j-6",
  company: "Hire Right",
    role: "Head, Salary Business Segment",
    about:
      "Driving salary-based banking products and client satisfaction.",
      requirements: [
        "Bachelor's in Banking ,Finance, or related field (Master's preferred )",
        "10+yrs in retail banking /salary processing /product mgmt; 5+ yrs in leadership",
        "Strong knowledge of payroll, corporate banking & lending solutions ",
        "Proven ability in customer acquisition & deposit mobilization",
        "Excellent relationship management, negotiation & leadership skills",
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Salary account management", "Corporate partnerships", "Client retention", "Business growth", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job6.jpeg", // <-- Updated image path
  },
      {
    id: "j-7",
  company: "Hire Right",
    role: "Business/Operations Admin",
    about:
      "Supporting efficient workflows and daily business operations.",
      requirements: [
       "Bachelor's in Business Admin Management, Finance, or related field",
       " Proficient in MS Office & Google  workspace ",
       "Strong organizational & multitasking skills Excellent written & verbal communication ",
       "Independent, able to manage priorities in fast-paced settings ",
       "Experience in tech/fintech an advantage Discreet with confidential information"
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Clerical support", "Record management", "Meeting coordination", "Process support", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job7.jpeg", // <-- Updated image path
  },
      {
    id: "j-8",
  company: "Hire Right",
    role: "Junior Architect",
    about:
      "Transforming creative ideas into functional architectural designs.",
      requirements: [
            "Bachelor's in Architecture or related field 1-3yrs in design or construction (intern/-full-time)",
    " Proficient in AutoCAD, SketchUp, Revit & Adobe Creative Suite",
"3D modeling experience a plus",
"Detail-oriented with strong time management",
"Excellent communication & teamwork skills",
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#2,400,000 Anually",
    duties: ["Design assistance", "Drawing preparation", "Project modeling", "Senior support", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job8.jpeg", // <-- Updated image path
  },
      {
    id: "j-9",
  company: "Hire Right",
    role: "Head, Corporate Business Segment ",
    about:
      "Spearheading corporate partnerships and business development.",
      requirements: [
       "Bachelor's in Finance, Banking ,Business",
" Admin or related field (MBA/ICAN/ACCA a plus)",
"8-10yrs in corporate banking/business development;5+ yrs in leadership",
"Strong knowledge of corporate financial services ,credit analysis & risk",
"Excellent relationship management ,Business development & negotiation skills"
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Design assistance", "Drawing preparation", "Project modeling", "Senior support", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job9.jpeg", // <-- Updated image path
  },
      {
    id: "j-10",
  company: "Hire Right",
    role: "Assistant Engineer",
    about:
      "Designing and implementing innovative technical solutions.",
      requirements: [
       "Bachelor's in Computer Science, Engineering, or related field",
"1-3yrs in software development or similar role ",
"Basic knowledge of frontend &backend technologies ",
"Familiar with databases, APIs &cloud applications ",
"Strong problem-solving & analytical skills "
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#2,400,000 - #3,000,000 Anually",
    duties: ["System design", "Implementation", "Testing & validation", "Project collaboration", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job10.jpeg", // <-- Updated image path
  },
      {
        id: "j-11",
        company: "Hire Right",
  role: "Quality Control Officer",
    about:
      "Ensuring product excellence and compliance with standards.",
      requirements: [
      "OND in a relevant field ",
      "1-2yrs in laundry services or quality control (preferred)",
      "Knowledge of garment care, treatments & laundry chemicals on advantage ",
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties:["Product inspection", "Standards compliance", "Issue reporting", "Process improvement", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job11.jpeg", // <-- Updated image path
  },
      {
        id: "j-12",
        company: "Hire Right",
    role: "Full Stack Engineer (Fintech",
    about:
      "Building secure, scalable fintech solutions from front to back end.",
      requirements: [
      "3+yrs in backend/software engineering ",
      "2+yrs in technical leadership/management",
      "Strong in React Native,Python/Django, Css, GCP, API development &mobile integration ",
      "Proven record delivering scalable ,secure fintech/proptech/SoaS apps ",
      "Experience Collaborating with cross-functional teams (product,marketting, finance,operations) ",
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Frontend development", "Backend Integration", "API implementation", "Process support", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job12.jpeg", // <-- Updated image path
  },
      {
        id: "j-13",
        company: "Hire Right",
    role: "Engineering Lead",
    about:
      "Guiding teams to deliver impactful engineering solutions.",
      requirements: [
       "Bachelor's in Computer Science, Engineering, (Masters a  plus)",
"7+yrs in software development; 3+yrs in leadership",
"Skilled in backend  & frontend  (java, NET, Python, Js frameworks)",
"Expertise in architecture, APIs microservices & cloud(AWS/Azure/GCP)",
"Knowledge of financial systems, security & compliance"
      ],
    location: " Maryland Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#4,000,000 - #4,800,000 Anually",
    duties:["Team leadership", "Project supervision", "Mentorship", "Innovation delivery", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job13.jpeg", // <-- Updated image path
  },
      {
        id: "j-14",
        company: "Hire Right",
    role: "Areas Sales Manager",
    about:
      "Driving regional sales performance and market growth.",
      requirements: [
       "Bachelor's in Business, Marketing or related field ",
       "4-6yrs in sales /BD (FMCG,retail or related preferred)",
       "Strong presentation , negotiation & public speaking skills",
       "Proven track record of exceeding sales targets and driving revenue growth",
       "Strong leadership, Communication & interpersonal skills"
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#4,800,000 - #7,200,000 Anually",
    duties:["Regional sales growth", "Team training", "Target achievement", "Market analysis", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job14.jpeg", // <-- Updated image path
  },
      {
        id: "j-15",
        company: "Hire Right",
    role: "Business/Operations Admin",
    about:
      "Supporting efficient workflows and daily business operations.",
      requirements: [
       "Bachelor's in Business Admin Management, Finance, or related field",
       " Proficient in MS Office & Google  workspace ",
       "Strong organizational & multitasking skills Excellent written & verbal communication ",
       "Independent, able to manage priorities in fast-paced settings ",
       "Experience in tech/fintech an advantage Discreet with confidential information"
      ],
    location: "Lagos, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$500 - $800",
    duties: ["Clerical support", "Record management", "Meeting coordination", "Process support", "& more"],
    posted: "27/07/2025",
  logo: "/img/landing/Logo.svg",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job15.jpeg", // <-- Updated image path
  },
  // --- ADDED DUMMY JOBS TO REACH 21 ENTRIES ---
  {
    id: "j-16",
    company: "Tech Solutions Inc.",
    role: "Frontend Developer",
    requirements: [
        "2+ years experience with React/Vue/Angular",
        "Proficiency in HTML5, CSS3, and JavaScript (ES6+)",
        "Experience with responsive design principles",
        "Familiarity with state management libraries (e.g., Redux)",
        "Strong problem-solving skills and attention to detail",
    ],
    about:
      "Crafting beautiful and responsive user interfaces for web applications.",
    location: "Remote",
    mode: "Remote",
    type: "Full time",
    salary: "$60,000 - $80,000",
    duties: ["Develop new user-facing features", "Optimize application for maximum speed", "Collaborate with backend developers"],
    posted: "28/07/2025",
    logo: "/jobopening/tech_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job16.jpeg", // <-- Added image path
  },
  {
    id: "j-17",
    company: "Marketing Geniuses",
    role: "Digital Marketing Specialist",
    requirements: [
        "3+ years experience in digital marketing or advertising",
        "Expertise in SEO, SEM, and social media platforms",
        "Proven track record of successful campaign management",
        "Strong analytical skills with proficiency in Google Analytics",
        "Excellent communication and presentation skills",
    ],
    about:
      "Driving online visibility and lead generation through multi-channel strategies.",
    location: "Lagos, Nigeria",
    mode: "Hybrid",
    type: "Full time",
    salary: "#1,800,000 - #2,400,000",
    duties: ["Execute SEO/SEM strategies", "Manage paid social campaigns", "Analyze campaign performance"],
    posted: "28/07/2025",
    logo: "/jobopening/marketing_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job17.jpeg", // <-- Added image path
  },
  {
    id: "j-18",
    company: "Innovate Finance",
    role: "Financial Analyst",
    requirements: [
        "Bachelor's degree in Finance, Accounting, or Economics",
        "1-3 years of relevant experience in financial planning and analysis (FP&A)",
        "Advanced proficiency in Microsoft Excel and financial modeling",
        "Knowledge of financial databases and ERP systems",
        "CFA candidate a plus",
    ],
    about:
      "Providing critical financial insights to support strategic business decisions.",
    location: "Abuja, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "$1,500 - $2,000",
    duties: ["Prepare weekly/monthly financial reports", "Develop budget and forecast models", "Analyze variance between actual and planned results"],
    posted: "29/07/2025",
    logo: "/jobopening/finance_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job18.jpeg", // <-- Added image path
  },
  {
    id: "j-19",
    company: "Global Logistics Co.",
    role: "Operations Coordinator",
    requirements: [
        "OND/HND in Business, Logistics, or Supply Chain Management",
        "2+ years experience in a logistics or supply chain role",
        "Excellent organizational and time management skills",
        "Proficiency in inventory management software",
        "Ability to handle high-pressure situations",
    ],
    about:
      "Ensuring the smooth and timely flow of goods and services.",
    location: "Port Harcourt, Nigeria",
    mode: "On-site",
    type: "Full time",
    salary: "#900,000 - #1,200,000",
    duties: ["Coordinate daily shipping and receiving activities", "Monitor inventory levels and manage stock control", "Liaise with vendors and carriers"],
    posted: "29/07/2025",
    logo: "/jobopening/logistics_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job19.jpeg", // <-- Added image path
  },
  {
    id: "j-20",
    company: "Healthcare Tech",
    role: "Data Analyst",
    requirements: [
        "Bachelor's degree in a quantitative field (Statistics, Math, CS)",
        "3+ years experience manipulating and analyzing complex data sets",
        "Expertise in SQL and Python/R for data analysis",
        "Experience with data visualization tools (e.g., Tableau, Power BI)",
        "Background in healthcare or biotech a major plus",
    ],
    about:
      "Translating complex data into actionable insights for product and business teams.",
    location: "Remote",
    mode: "Remote",
    type: "Contract",
    salary: "$40 - $55 / hour",
    duties: ["Develop and maintain data pipelines", "Create reports and dashboards to track KPIs", "Perform ad-hoc analysis to support business initiatives"],
    posted: "30/07/2025",
    logo: "/jobopening/health_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job20.jpeg", // <-- Added image path
  },
  {
    id: "j-21",
    company: "Creative Agency",
    role: "Graphic Designer",
    requirements: [
        "Portfolio demonstrating strong visual design skills",
        "Expert proficiency in Adobe Creative Suite (Illustrator, Photoshop, InDesign)",
        "Experience designing for both digital and print media",
        "Understanding of branding, typography, and color theory",
        "Ability to take and implement constructive feedback",
    ],
    about:
      "Creating visually compelling assets that communicate brand stories effectively.",
    location: "Lagos, Nigeria",
    mode: "Hybrid",
    type: "Part time",
    salary: "$500 - $700",
    duties: ["Design marketing materials and digital ads", "Develop brand guidelines and visual identities", "Collaborate with marketing and content teams"],
    posted: "30/07/2025",
    logo: "/jobopening/creative_logo.png",
    locate:"/jobopening/locate.png",
    calendar:"/jobopening/calendar.png",
    locatebar:"/jobopening/locationr.png",
    link:"https://bit/hirerightrecruitment",
    image: "/img/jobs/job21.jpeg",
  },
];