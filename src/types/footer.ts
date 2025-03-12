import { LucideIcon } from "lucide-react";

export interface FooterLink {
  text: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialMediaLink {
  icon: LucideIcon;
  link: string;
  label: string;
}
