// src/data/services.ts
import {
  Briefcase,
  Users,
  Layers,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const recruitmentServices: ServiceItem[] = [
  {
    title: "One-off Recruitment",
    description:
      "Targeted hiring with structured screening and interviews. Long term commitment. idea for organizations looking to fill a specific role quickly and effectively.",
    href: "/services/lets-talk",
    Icon: Briefcase,
  },
  {
    title: "Workforce Expansion",
    description:
      "Workforce ExpansionScale confidently with structured, high-volume hiring.Whether you’re entering a new market, launching a product, or scaling rapidly, our Workforce Expansion solution is for you.",
    href: "/services/lets-talk",
    Icon: Users,
  },
  {
    title:'Recruitment on Retainership',
    description: "Your dedicated recruitment partner for ongoing talent needs. Designed for companies with continuous or evolving hiring requirements, our retainership model gives you the flexibility to scale your hiring efforts up or down as needed.",
    href: "/services/lets-talk",
    Icon: Layers,
  },
  {
    title: "Training & Capability Development",
    description:
      "Training & Capability Development At HireRight, training is not a checkbox,  it's a strategic tool for business growth. Every session we deliver is practical, interactive, and tailored to your team’s unique context and goals.",

    href: "/services/lets-talk",
    Icon: GraduationCap,
  },
];

// 👇 Cards for the second section
export const peopleManagement: ServiceItem[] = [
  {
    title: "Managed HR that grows with you",
    description:
      "HR Management that grows with you At HireRight, training is not a checkbox,  it's a strategic tool for business growth. Every session we deliver is practical, interactive, and tailored to your team’s unique context and goals.", 

    href: "/services/lets-talk",
    Icon: HeartHandshake,
  },
  // Removed "Why we stand out" entry as requested
];

