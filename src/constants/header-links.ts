interface NavItem {
  id: string;
  label: string;
  href: string;
  section: string;
}

interface NavItemBlogPost {
  title: string;
  href: string;
  description: string;
}

interface OpportunityNavigationItem {
  title: string;
  href: string;
  description: string;
}

export const mainNavItems: NavItem[] = [
  { id: "about", label: "ABOUT", href: "/#about", section: "intro" },
  { id: "mission", label: "MISSION", href: "/#features", section: "features" },
  { id: "contact", label: "CONTACT", href: "/#projects", section: "projects" },
  { id: "team", label: "TEAM", href: "/#team", section: "team" },
];

export const blogPosts: NavItemBlogPost[] = [
  {
    title: "CS Underclassmen Guide",
    href: "/blog/underclassmen-guide",
    description: "Navigate the Northwestern CS major and course selection.",
  },
  {
    title: "Technical Interview Guide",
    href: "/blog/technical-interviews",
    description:
      "Comprehensive guide to acing software engineering interviews.",
  },
];

export const opportunityItems: OpportunityNavigationItem[] = [
  {
    title: "Internships",
    href: "/opportunities/internships",
    description: "Tech internship opportunities for college students.",
  },
  {
    title: "New Grad",
    href: "/opportunities/new-grad",
    description: "Entry-level positions for recent and upcoming graduates.",
  },
  {
    title: "Underclassmen",
    href: "/opportunities/underclassmen",
    description: "Early career development programs and opportunities.",
  },
];
