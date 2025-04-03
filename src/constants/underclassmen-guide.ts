import type { ClassSchedule } from '@/types/schedule';

export const firstYearSchedule: ClassSchedule[] = [
  {
    fall: 'COMP_SCI 111',
    winter: 'COMP_SCI 150',
    spring: 'COMP_SCI 214',
  },
  {
    fall: 'MATH 220-1',
    winter: 'MATH 220-2',
    spring: 'MATH 230-1',
  },
  {
    fall: 'SEMINAR/DISTRO',
    winter: 'SEMINAR/DISTRO',
    spring: 'SEMINAR/DISTRO',
  },
  {
    fall: 'Unrestricted',
    winter: 'Unrestricted',
    spring: 'Unrestricted',
  },
];

export const secondYearSchedule: ClassSchedule[] = [
  {
    fall: 'COMP_SCI 211',
    winter: 'COMP_SCI 213',
    spring: 'COMP_SCI 212',
  },
  {
    fall: 'MATH 230-2',
    winter: 'STAT 210',
    spring: 'Unrestricted',
  },
  {
    fall: 'Unrestricted',
    winter: 'Unrestricted',
    spring: 'Unrestricted',
  },
];

interface UnderclassmenAccordionItems {
  id: string;
  title: string;
  content: string;
}

export const underclassmenGuideAccordionItems: UnderclassmenAccordionItems[] = [
  {
    id: '1',
    title: 'Core Classes',
    content:
      "There are 6 total core classes for the CS major. You can think of these are being the foundational classes for the major. If you come into Northwestern CS with AP CS credit, then you can skip one of the core classes, COMP_SCI 150. But the rest of the core classes are required for the major. The core classes are as follows: COMP_SCI 111, COMP_SCI 150, COMP_SCI 211, COMP_SCI 212 COMP_SCI 213, COMP_SCI 214. NOTE: COMP_SCI 110, does not count for either the CS major or minor! It is a class that is meant to be an introduction to programming for non-CS majors. Though, you could still take the class if you're unsure about Computer Science",
  },
  {
    id: '2',
    title: 'Breadth Courses',
    content:
      'The Breadth Courses you can think of as being extensions of the core classes but with more flexibility in terms of the options that you have. There are 5 breadth areas: Theory, Systems, Artificial Intelligence, Interfaces, and Software Development and Programming Languages. You only have to take one class from each breadth area. (More on this later)',
  },
  {
    id: '3',
    title: 'Technical Electives',
    content:
      "Tech electives are classes you take that are at the 300 level or above. You have to take a total of 6 technical electives in total. So in short, once you finish your breadth or project classes, the additional classes that you take will count as electives. Keep in mind that it may be wise to save some tech electives slots open on your schedule since classes like COMP_SCI 396's (special topics in Computer Science) and COMP_SCI 399 (independent research) don't fullfil any of the breadth requirements and can only satisfy technical electives.",
  },
  {
    id: '4',
    title: 'Project Courses',
    content:
      'Project courses are essentially classes that focus on a specific topic or project. These classes are meant to be more hands-on and project-based. You have to take 2 project courses in total. The project courses that are offered vary from year to year, but some examples of project courses are: COMP_SCI 330 (Human-Computer Interaction) and COMP_SCI 329 (HCI Studio).',
  },
  {
    id: '5',
    title: 'Math Courses',
    content:
      "As a component of the CS majors, all Computer Sciences are required to take classes in both math and statistics. The classes and order that you take these classes largely depends on again, how many AP credits you came into Northwestern with. Likewise, between Weinberg and McCormick, some of the classes may be different (Math 230-1 vs. Math 228-1) but the general content is the same. In general, you must take Calc 1, Calc 2, Calc 3, Linear Algebra, and an introductory statistics course. You can take these classes in any order that you want, but it is recommended that you take Calc 1 and Calc 2 first, then Linear Algebra, and then Calc 3. You can take the statistics course whenever you want (since it's a pre-req for only a couple of classes).",
  },
];
