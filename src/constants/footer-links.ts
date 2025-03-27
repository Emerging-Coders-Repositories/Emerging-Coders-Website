import { Instagram, Linkedin, Mail, Github } from "lucide-react";

export const footerSections = [
  {
    title: "About",
    links: [
      {
        text: "About Us",
        href: "#about",
      },
      {
        text: "Executive Board",
        href: "#team",
      },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        text: "Projects",
        href: "/#projects",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        text: "Newsletter",
        href: "/newsletter",
      },
      {
        text: "Get Involved",
        href: "#about",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: Instagram,
    link: "https://www.instagram.com/disc_nu/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/northwestern-develop-innovation-for-social-change-disc/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    link: "mailto:disc@u.northwestern.edu",
    label: "Email",
  },
  {
    icon: Github,
    link: "https://github.com/DISC-NU",
    label: "Github",
  },
];
