interface Author {
  name: string;
  image: string;
  linkedIn: string;
}

interface BlogPostsPage {
  id: string;
  title: string;
  description: string;
  authors: Author[];
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPostsPage[] = [
  {
    id: "underclassmen-guide",
    title: "Northwestern University CS Underclassmen Guide",
    description:
      "A comprehensive guide for Northwestern University computer science underclassmen to navigate the computer science major, course selection, and career development",
    authors: [
      {
        name: "Ethan Pineda",
        image: "/blog/authors/ethan.jpeg",
        linkedIn: "https://www.linkedin.com/in/ethanpineda/",
      },
    ],
    readTime: "10 min read",
    tags: ["Guide", "Classes"],
  },
  {
    id: "technical-interviews",
    title: "Software Engineering Technical Interview Guide",
    description:
      "A comprehensive guide to preparing for and acing software engineering technical interviews",
    authors: [
      {
        name: "Ethan Pineda",
        image: "/blog/authors/ethan.jpeg",
        linkedIn: "https://www.linkedin.com/in/ethanpineda/",
      },
      {
        name: "Danny Pineda",
        image: "/blog/authors/danny.jpeg",
        linkedIn: "https://www.linkedin.com/in/dopineda/",
      },
    ],
    readTime: "15 min read",
    tags: ["Guide", "Interviews", "Career"],
  },
];
