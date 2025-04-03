import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const footerSections = [
  {
    title: 'About',
    links: [
      {
        text: 'About Us',
        href: '/#about',
      },
      {
        text: 'Executive Board',
        href: '/#team',
      },
    ],
  },
  {
    title: 'Programs',
    links: [
      {
        text: 'Projects',
        href: '/#projects',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Get Involved',
        href: '/#about',
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: Instagram,
    link: 'https://www.instagram.com/nu.emergingcoders/',
    label: 'Instagram',
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/company/nuemerging-coders/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    link: 'mailto:nuemergingcoders@gmail.com',
    label: 'Email',
  },
  {
    icon: Github,
    link: 'https://github.com/Emerging-Coders-Repositories',
    label: 'Github',
  },
];
