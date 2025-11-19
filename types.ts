import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagram: string;
  linkedin: string;
  github: string;
}