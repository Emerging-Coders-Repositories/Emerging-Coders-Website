import React from "react"; 
import { useState } from "react"; 
import { 
    Accordion, 
    AccordionItem, 
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell, 
    Link,
    Tooltip } from "@nextui-org/react";

export default function UnderclassmenGuide() {

    const [page, setPage] = useState(1);

    const accordionItems = [
        {
            key: "1",
            title: "Core Classes",
            text: "There are 6 total core classes for the CS major. You can think of these are being the foundational classes for the major. If you come into Northwestern CS with AP CS credit, then you can skip one of the core classes, COMP_SCI 150. But the rest of the core classes are required for the major. The core classes are as follows: COMP_SCI 111, COMP_SCI 150, COMP_SCI 211, COMP_SCI 212 COMP_SCI 213, COMP_SCI 214. NOTE: COMP_SCI 110, does not count for either the CS major or minor! It is a class that is meant to be an introduction to programming for non-CS majors. Though, you could still take the class if you're unsure about Computer Science",
        },
        {
            key: "2", 
            title: "Breadth Courses",
            text: "The Breadth Courses you can think of as being extensions of the core classes but with more flexibility in terms of the options that you have. There are 5 breadth areas: Theory, Systems, Artificial Intelligence, Interfaces, and Software Development and Programming Languages. You only have to take one class from each breadth area. (More on this later)"
        },
        {
            key: "3", 
            title: "Technical Electives",
            text: "Tech electives are classes you take that are at the 300 level or above. You have to take a total of 6 technical electives in total. So in short, once you finish your breadth or project classes, the additional classes that you take will count as electives. Keep in mind that it may be wise to save some tech electives slots open on your schedule since classes like COMP_SCI 396's (special topics in Computer Science) and COMP_SCI 399 (independent research) don't fullfil any of the breadth requirements and can only satisfy technical electives."
        },
        {
            key: "4",
            title: "Project Courses",
            text: "Project courses are essentially classes that focus on a specific topic or project. These classes are meant to be more hands-on and project-based. You have to take 2 project courses in total. The project courses that are offered vary from year to year, but some examples of project courses are: COMP_SCI 330 (Human-Computer Interaction) and COMP_SCI 329 (HCI Studio)."
        },
        {
            key: "5",
            title: "Math Courses",
            text: "As a component of the CS majors, all Computer Science students are required to take classes in both math and statistics. The classes and order that you take these classes largely depends on again, how many AP credits you came into Northwestern with. Likewise, between Weinberg and McCormick, some of the classes may be different (Math 230-1 vs. Math 228-1) but the general content is the same. In general, you must take Calc 1, Calc 2, Calc 3, Linear Algebra, and an introductory statistics course. You can take these classes in any order that you want, but it is recommended that you take Calc 1 and Calc 2 first, then Linear Algebra, and then Calc 3. You can take the statistics course whenever you want (since it's a pre-req for only a couple of classes)."
        },
    ];

    return (
        <>
            <div class="bg-white dark:bg-gray-900 min-h-screen">
                <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-md">
                        <h2 class="mb-4 text-3xl tracking-light font-extrabold text-gray-900 dark:text-white">
                            Northwestern University CS Underclassmen Guide
                        </h2>
                    </div>
                </div>
                <div class="flex justify-center">
                        <div class="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <p class="font-normal text-gray-700 dark:text-gray-400">
                            ✋ Hey! This guide is mostly pertained to current first-years, second-years, and folks who are switching to Computer Science! A lot of the information that will be presented in this guide is based on various anecdotal experiences from our members and alumni and we have found to work for most folks within our community. 
                            If you have any suggestions, comments, or things you would like to be added, please make a PR on the <Link showAnchorIcon href="https://github.com/ethanpaneraa/Emerging-Coders-Website" target="_blank" color="secondary">EmergingCoders Website Repo</Link>
                            <br />
                            <br />
                            Authors: <Link showAnchorIcon href="https://www.linkedin.com/in/ethanpineda/" target="_blank" color="secondary">Ethan Pineda</Link>
                            </p>
                        </div>
                </div>
                <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                    <section class="mb-8">
                        <div class="max-w-3xl mx-auto text-left">
                            <h3 class="text-3xl font-bold mb-10">
                                Introduction
                            </h3>
                            <div class="mb-5">
                                <h4 class="text-2xl font-bold mb-5">
                                    How to Use This Guide
                                </h4>
                                <p class="text-gray-700 dark:text-gray-400 mb-5">
                                    The purpose of this guide is to provide additional context and guidance when it comes to navigating the Computer Science major at Northwestern. The department already provides lots of resources, guides, and opportunities for students to succeed, but we wanted to provide a more personal and condensed guide that is based on the experiences of our members and alumni.
                                    This guide by no means is perfect to every situation, interest, or path that you may embark on during your time at Northwestern but, if you someone that is completely new to Computer Science (like many of us were), or you don't have someone to ask questions to, we hope that this guide can help you out with answering some of your questions. Keep in mind also that this guide is mostly geared for those wanting to enter <strong>industry</strong> after graduation. A more detailed version for folks interested in graduate school will be coming soon!
                                    <br />
                                    <br />
                                    <strong>NOTE:</strong> This guide was built on the requirements for the Computer Science Major from the 2023-2024 Academic Year. 
                                </p>
                            </div>
                            <div class="mb-10">
                                <h4 class="text-2xl font-bold mb-5">
                                    What this Guide Covers
                                </h4>
                                <p class="text-gray-700 dark:text-gray-400 mb-5">
                                    There are 3 main sections with various subsections to each topic to this guide:
                                </p>
                                <ul class="list-disc pl-6">
                                    <li>Should I Pursue a CS major?</li>
                                    <li>What is the CS major like at Northwestern?</li>
                                    <li>What should I do to prepare for a career in tech</li>
                                </ul>
                            </div>
                            <h3 class="text-3xl font-bold mb-10">
                                Now let's get started!
                            </h3>
                            <div class="mb-5">
                                <h3 class="text-2xl font-bold mb-5">
                                    Should I Pursue a CS major?
                                </h3>
                                <p class="text-gray-700 dark:text-gray-400 mb-10">
                                    Before we say anything, ultimately the decision to pursue a Computer Science degree is going to be up to you. Again, a lot of this advice in this guide is subjective and your mileage may vary, so take everything with a grain of salt.
                                </p>
                                <div class="mb-5">
                                    <h4 class="text-xl font-bold mb-5">
                                        What is Computer Science?
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 mb-5">
                                        In simple terms, Computer science is like a magical world of instructions and thinking for computers. It's all about teaching computers how to do cool stuff. Just like you learn math and languages in school, computer scientists learn how to talk to computers. 
                                        Imagine you have a really smart robot friend, and you want to tell it what to do. Computer science helps you do that. You can tell the robot to play your favorite game, draw pictures, solve math problems, or even talk to your friends on the internet.
                                        <br/>
                                        <br/>
                                        Here are some important things in computer science:
                                    </p>
                                    <ul class="list-disc pl-6">
                                        <li><strong>Coding: </strong> This is like giving instructions to your robot friend. You use special languages (like C, Python, or JavaScript) to write these instructions. It's like creating a recipe for the robot to follow.</li>
                                        <li><strong>Algorithms: </strong>Think of this as a plan or a recipe for your robot. It's a step-by-step guide on how to solve a problem, like finding the best way to get from your house to the park.</li>
                                        <li><strong>Data: </strong>This is like information that the robot needs to remember. It could be your favorite game scores, your friends' names, or anything else. Computer scientists figure out how to store and use this data.</li>
                                        <li><strong>Hardware: </strong> These are the physical parts of a computer, like the screen, keyboard, and memory. Computer scientists design and build these parts to make computers work.</li>
                                        <li><strong>Software: </strong>This is like the apps and programs you use on your computer or tablet. Computer scientists create software to do all kinds of fun and useful things.</li>
                                    </ul>
                                    <br />
                                    Computer science is like a big playground where you can create, explore, and solve puzzles with computers. It's not just about playing games but also about making the world a better place by solving real-world problems. So, if you're curious and love to learn, computer science can be a fantastic adventure for you!
                                </div>
                                <div class="mb-5">
                                    <h4 class="text-xl font-bold mb-5">
                                        Why Computer Science?
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 mb-10">
                                        Pursuing a degree in computer science offers not only promising career prospects but also the chance to make a meaningful impact on the world through innovation and problem-solving. It's a field that rewards curiosity, adaptability, and a passion for learning.
                                        A Computer Science degree is very versatile and the skills that you learn in a CS degree can be applied to a wide variety of fields and industries. You don't have to become a software engineer after graduation, you can become a data scientist, a product manager, a UX designer, a technical writer, a technical recruiter, and so much more!
                                        <br />
                                        <br />
                                        Of course, if you choose to work in technology, you'll be joining a fast-growing industry with a lot of opportunities for career growth and advancement. The tech industry is also known for it's competitive salaries and benefits, as well as its flexible work arrangements.
                                    </p>
                                </div>
                            </div>
                            <div class="mb-5">
                                <h3 class="text-2xl font-bold mb-5">
                                    What is the CS major like at Northwestern?
                                </h3>
                                <p class="text-gray-700 dark:text-gray-400 mb-10">
                                    The Computer Science major at Northwestern is a very diverse and versatile major. Because of the quarter system, its possible to take classes in a variety of different fields and topics in CS from systems/hardware, game development, human-computer interaction, artificial intelligence, and theory.  
                                    Depending on your planning and how many credits you come into Northwestern with, it's even possible to double major or minor in another field or even graduate with a <Link showAnchorIcon href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/combined-bs-ba-ms-program.html" target="_blank" color="secondary">Masters in Computer Science in 4 years</Link>. 
                                </p>
                                <div class="mb-5">
                                    <h4 class="text-xl font-bold mb-5">
                                        What are the requirements for the CS major?
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 mb-5">
                                        The Computer Science Department already has a <Link showAnchorIcon href="https://www.mccormick.northwestern.edu/computer-science/academics/undergraduate/bachelors/#bs-ba-curriculum" target="_blank" color="secondary">general overview of the curriculum</Link> that you could use to get a better understanding of the requirements for the major. 
                                        <br />
                                        <br />
                                        But, the curriculum can be broken down into the following: 
                                    </p>
                                    <Accordion variant="splitted">
                                        {accordionItems.map((item) => (
                                            <AccordionItem key={item.key} aria-label={`Accordion ${item.key}`} title={item.title} subtitle="Press to expand">
                                                {item.text}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                    <h4 class="text-xl font-bold my-10 mb-5">
                                        Okay, but what does this all mean?
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 my-10">
                                        This is a lot of information! And for the most part, a lot of this information you could have just found online through the department website. Let's now break down some of the components of the major and what they mean.
                                    </p>
                                    <h4 class="text-xl font-bold mb-5">
                                        Should I do a BA or BS in Computer Science?
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 mb-10">
                                        If you choose to pursue Computer Science in either McCormick or Weinberg, the difference is only in the classes that you need to take outside of Computer Science (your graduation requirements) albeit, some of the specific math classes are different between the two schools. But, in terms of just Computer Science classes, both degrees have the <strong>same</strong> requirements. 
                                        <br />
                                        <br />
                                        The McCormick version of Computer Science is more geared towards students who want to learn more about the "engineering" side of Computer Science. This just means that you'll take more engineering-focused classes such as DTC, and EA. 
                                        <br />
                                        <br />
                                        On the contrary, the Weinberg route in CS is good if you want a more holistic education since you'll have more opportunities to take classes outside of CS such as humanities, social sciences, and other STEM classes. It's also worth noting that a lot of people choose Weinberg CS because it's a lot easier to double-major in CS and another "fun" field such as Creative Writing or Economics. 
                                        <br />
                                        <br />
                                        <strong>It's important to emphasize that between the two schools, there is no difference in terms of job placement. Technology companies do not care if you graduate with a BS or BA in CS, what matters most is if you have the technical skills and background that they are looking for! Not what your degree type is. </strong>
                                    </p>
                                    <h4 class="text-xl font-bold mb-5">
                                        What Order should I Take The Core Classes In? 
                                    </h4>
                                    <p class="text-gray-700 dark:text-gray-400 mb-10">
                                        Before we begin, it's important to note that the CS department already has sample 4-year schedules for both <Link showAnchorIcon href="https://www.mccormick.northwestern.edu/computer-science/documents/students/undergraduate/mcc-cs-4-year-plan.pdf" target="_blank" color="secondary">McCormick</Link> and <Link showAnchorIcon href="https://www.mccormick.northwestern.edu/computer-science/documents/students/undergraduate/wcas-cs-4-year-plan.pdf" target="_blank" color="secondary">Weinberg</Link> students. 
                                        And while these sample 4-year planners are useful, they don't provide as much context as to why you should take classes in a certain order. Likewise, there's a lot of subjectiveness in terms of what classes you should take first and what classes you should take later.
                                        So let's talk through some of the suggestions that we have. 
                                    </p>
                                    <h5 class="text-lg font-bold mb-5">
                                        Weinberg Students
                                    </h5>
                                    <div class="mb-10">
                                        <Table aria-label="Sample CS Classes Schedule">
                                            <TableHeader>
                                                <TableColumn key="fall" align="center">Fall</TableColumn>
                                                <TableColumn key="winter" align="center">Winter</TableColumn>
                                                <TableColumn key="spring" align="center">Spring</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                        <TableCell key="fall">COMP_SCI 111</TableCell>
                                                        <TableCell key="winter">COMP_SCI 150</TableCell>
                                                        <TableCell key="spring">COMP_SCI 214</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall">MATH 220-1</TableCell>
                                                        <TableCell key="winter">MATH 220-2</TableCell>
                                                        <TableCell key="spring">MATH 230-1</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall">SEMINAR/DISTRO</TableCell>
                                                        <TableCell key="winter">SEMINAR/DISTRO</TableCell>
                                                        <TableCell key="spring">SEMINAR/DISTRO</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div class="mb-10">
                                        <Table aria-label="Sample CS Classes Schedule">
                                            <TableHeader>
                                                <TableColumn key="fall" align="center">Fall</TableColumn>
                                                <TableColumn key="winter" align="center">Winter</TableColumn>
                                                <TableColumn key="spring" align="center">Spring</TableColumn>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                        <TableCell key="fall">COMP_SCI 211</TableCell>
                                                        <TableCell key="winter">COMP_SCI 213</TableCell>
                                                        <TableCell key="spring">COMP_SCI 212</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall">MATH 240</TableCell>
                                                        <TableCell key="winter"><Tooltip content="Many Weinberg CS students opt to make IEMS 201 (the McCormick version of STAT 210 since it's a bit more manageable."><p>STAT 210/Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                        <TableCell key="fall"><Tooltip content="You can either take a distro or a 300 level CS class here" placement="top"><p>Unrestricted</p></Tooltip></TableCell>
                                                    </TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <h5 class="text-lg font-bold mb-5">
                                        The Key Takeaways
                                    </h5>
                                    <p class="text-gray-700 dark:text-gray-400 mb-10">
                                        This recommend study is not exhaustive and won't work for everyone (since everyone's paths are different!). But the key things to take away from this is that:
                                        <br />
                                        <br />
                                        If you want to have a solid foundation for recruitment season, you should aim to take CS 214 <strong>first</strong>. This is because in CS 214, you learn about data structures and algorithms which are the bread and butter of technical interviews. The class will give you the foundation to be able to start to understand LeetCode style questions a bit better and will help you in your technical interviews.
                                        Likewise, doing CS 211 after 214 is an optimal choice since you'll learn about common languages such as C and C++ as well as the Unix environment and learn more about Object-Oriented Programming. Additionally, both classes are the most popular pre-requisites for many of the 300-level CS classes. So the earlier you can take them, the more options you'll have during your second year of Computer Science. 
                                        <br />
                                        <br />
                                        It's very common to pair CS 214 and CS 211 together. And while it's manageable, keep in mind that a lot of the content between the two classes is very different. So it's important to be able to manage your time well and be able to balance the workload between the two classes. But if you switched to CS late, or you're a second-year, it's very common to take CS 214 and CS 211 together.
                                        <br />
                                        <br />
                                        Now, you may be wondering what's the reasoning behind putting CS 212 so late if you only need 111 to take it. The idea with CS 212 so late in our schedules is because CS 212 is an <strong>extremely</strong> difficult class since it's a discrete maths course. You'll be learning about proofs, induction, and other topics that are very different from the other CS classes since it is very theory focused. 
                                        CS 212 is by no means impossible to do well in, but you probably want to put it off while you learn some of the other CS topics first because in terms of industry, you'll probably never use the content from CS 212 and <strong>very few</strong> classes have it as a pre-req.
                                    </p>
                                </div>
                            </div>
                            <div class="flex justify-center mb-10">
                            <div class="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                                <p class="font-normal text-gray-700 dark:text-gray-400">
                                    That's all we have for this guide, we hope that you found the information on this page useful and that it helps you understand how to navigate the Computer Science major a bit better! 🫶🏽🫶🏽
                                </p>
                            </div>
                        </div>
                        </div>
                    </section>
                    
                </div>
            </div>
        </>
    );
};

// Should I pursue a CS major? 
    // What is CS?
    // why CS
    // What you can with a CS major
// What is the CS major like at Northwestern?
    // What are the requirements for the CS major?
    // General Advice for Picking order of intro classes
    // What do the Breadth courses mean? 
     // Support, Resources, Opertunities
// What should I do to prepare for a career in tech? 
    // What to do during the summers
    // What to do during the school year
    // How to get involved in tech
// Final thoughts
