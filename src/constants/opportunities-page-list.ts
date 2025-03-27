interface OpportunitiesPageList {
  id: number;
  title: string;
  description: string;
  type: string;
  route: string;
  postedDate: string;
  totalListings: string;
}
export const opportunitiesPageList: OpportunitiesPageList[] = [
  {
    id: 1,
    title: "Software Engineering Internships",
    description:
      "Find internship opportunities at top tech companies. Updated regularly with new positions from our curated list of companies actively hiring interns.",
    type: "Internships",
    route: "/opportunities/internships",
    postedDate: "Updated Daily",
    totalListings: "500+ Listings",
  },
  {
    id: 2,
    title: "New Graduate Positions",
    description:
      "Discover entry-level software engineering roles perfect for recent and upcoming graduates. Full-time positions at companies looking for fresh talent.",
    type: "New Grad",
    route: "/opportunities/new-grad",
    postedDate: "Updated Daily",
    totalListings: "300+ Listings",
  },
  {
    id: 3,
    title: "Underclassmen Programs",
    description:
      "Early career development opportunities including freshman/sophomore internships, mentorship programs, and research positions.",
    type: "Underclassmen",
    route: "/opportunities/underclassmen",
    postedDate: "Last Updated March 2024",
    totalListings: "20+ Programs",
  },
];
