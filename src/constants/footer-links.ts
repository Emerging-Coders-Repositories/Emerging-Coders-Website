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
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdYuKsulHevdpf0iu-D0d5GauF0hTPjL2cS-Ts93C-luD-aZQ/viewform",
        target: "_blank",
        rel: "noopener noreferrer"
        
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
    link: "https://www.instagram.com/nu.emergingcoders/",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    link: "https://www.linkedin.com/company/nuemerging-coders/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    link: "mailto:nuemergingcoders@gmail.com",
    label: "Email",
  },
  {
    icon: Github,
    link: "https://github.com/Emerging-Coders-Repositories",
    label: "Github",
  },
];
