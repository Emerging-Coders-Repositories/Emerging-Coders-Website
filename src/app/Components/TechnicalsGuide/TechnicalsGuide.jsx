import React from "react"; 
import { Tabs, Tab, Card, CardBody, Link } from "@nextui-org/react"; 

export default function TechnicalsGuide() {

    const typeOfInterviewsTabs = [
      {
        id: "coding",
        label: "Coding",
        content: "In coding interviews, you'll be asked to solve programming challenges on a whiteboard, a shared online code editor, or on paper. These challenges test your ability to write clean, efficient, and bug-free code. Common topics include data structures, algorithms, and problem-solving.",
      },
      {
        id:"system-design",
        label: "System Design",
        content: "System design interviews focus on your ability to architect complex software systems. You'll be asked to design a scalable, reliable, and efficient system based on real-world scenarios. This type of interview assesses your knowledge of system architecture, database design, and scalability.",
      },
      {
        id: "behavioral",
        label: "Behavioral",
        content: "Behavioral interviews evaluate your soft skills and assess your ability to work effectively within a team. You may be asked about your past experiences, how you handle challenges, and how you collaborate with colleagues.",
      },
      {
        id: "take-home",
        label: "Take Home Projects",
        content: "Some companies may ask you to complete a coding project at home and submit it within a specified timeframe. Take-home projects allow you to showcase your coding skills and problem-solving abilities in a more relaxed environment.",
      },
    ];

    return (
        <>
          <div class="bg-white dark:bg-gray-900 min-h-screen">
              <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                  <div class="mx-auto max-w-screen-sm">
                      <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                          Software Engineer Technical Interview Guide
                      </h2>
                  </div> 
              </div>
              <div class="flex justify-center">
                  <div class="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                          👋 Hey there, on this page, you will find a general handbook and guide to preparing and tackling software engineer technical interviews. The purpose of this page is to provide you with the resources and knowledge you need to start getting ready to ace your next technical interview!
                          If you have any suggestions to improve this page, please make a PR on the <Link showAnchorIcon href="https://github.com/ethanpaneraa/Emerging-Coders-Website" color="secondary" target="_blank" size="md">EmergingCoders Website Repo</Link>
                      </p>
                  </div>
              </div>
              <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <section class="mb-8">
                    <div class="max-w-3xl mx-auto text-left">
                      <h3 class="text-3xl font-bold mb-5">
                        Introduction to Technical Interviews
                      </h3>
                      <p class="text-gray-700 dark:text-gray-400 mb-10">
                        In the fast-paced world of software engineering, technical interviews play a crucial role in assessing a candidate's skills and suitability for a role. These interviews are designed to evaluate not just your coding abilities but also your problem-solving skills, algorithmic thinking, and, in some cases, your ability to design scalable systems.
                      </p>
                      <h4 class="text-2xl font-bold text-gray-900 mb-5">
                        Why are technical interviews important?
                      </h4>
                      <ul class="list-disc pl-6">
                        <li>
                          They help companies gauge your technical skills, ensuring that you can meet the demands of the job.
                        </li>
                        <li>
                          They assess your ability to think critically and solve complex problems under pressure.
                        </li>
                        <li>
                          Interviews often include behavioral questions to determine if you'll be a good fit for the company culture.
                        </li>
                        <li>
                          Preparing for technical interviews can be a valuable learning experience, helping you grow as a software engineer.
                        </li>
                      </ul>
                  </div>
                  </section>
                  <section class="mb-8">
                    <div class="max-w-3xl mx-auto text-left">
                      <h3 class="text-3xl font-bold mb-5">Types of Technical Interviews</h3>
                      <p class="text-gray-700 dark:text-gray-400">
                        Technical interviews come in various forms, each serving a specific purpose in evaluating a candidate's capabilities. Here are some common types:
                      </p>
                      <div class="my-5 mb-5 flex w-full flex-col">
                        <Tabs aria-label="Dynamic tabs" items={typeOfInterviewsTabs}>
                          {(item) => (
                            <Tab key={item.id} title={item.label}>
                              <Card>
                                <CardBody>
                                  {item.content}
                                </CardBody>
                              </Card>
                            </Tab>
                          )}
                        </Tabs>
                      </div>
                      <p class="text-gray-700 dark:text-gray-400">
                        These are just a few examples of the most Common examples of the types of technical interviews that you may encounter throughout your career. It's essential to understand the specific requirements of the job that you're applying for to be able to prepare effectively. 
                      </p>
                    </div>
                  </section>
                <section class="mb-8">
                  <div class="max-w-3xl mx-auto text-left">
                    <h3 class="text-3xl font-bold mb-10">
                      Studying and Preparing for Technical Interviews
                    </h3>
                    <div class="mb-5">
                      <h4 class="text-2xl font-bold mb-5">
                        Choosing a Programming Language
                      </h4>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        The first step in preparing for technical interviews is to choose a programming Language to study with. Generally, your interviewers will allow you to choose between popular coding languages such as Python, C, C++, and JavaScript. While you could technically do your technical interviews in a language such as Racket, it is not recommended as it is not a popular language and is not used in industry. 
                        Unless you are interviewing for a more specific role such as a mobile app developer or a front-end developer position,  you should be able to have free reign over the coding language that you do your interviews in.
                      </p>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        Ideally, you should a choose a programming language that you already have some experience with or at least used in one of your classes. This will allow you to focus more in studying the problem solving aspects of the technical interview more than the syntax of the language.
                        However, if you are not familiar with any of the popular programming languages, it is recommended that you choose a language that is easy to learn and has a lot of resources available online such as Python.
                      </p>
                      <p class="text-gray-700 dark:text-gray-400 mb-10">
                        Our recommendation based on what we've seen and used ourselves, is to use a language such as Python or JavaScript. This is due to the fact that these languages are easy to learn and have a lot of resources available online.
                        Additionally, they already have a lot of built in functions, data structures, and libraries that you can use to solve problems. This makes your job during the interview a lot easier as you don't have to worry about implementing these things yourself. Thus, giving you more time to focus on the problem solving aspect of the interview.
                      </p>
                    </div>
                    <div>
                      <h4 class="text-2xl font-bold mb-5">
                        Practicing and Studying
                      </h4>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        Nowadays, there are a lot of resources that exists on the internet that can help you prepare for technical interviews. These resources can range from books, to online courses, to practice problems, and more.
                        Unfortunately, some resources are mostly just trying to make money off of you and don't offer anything useful behind their paywalls. So, we've compiled a list of resources and tools that we've used in our studying and preparing that we felt were the most helpful while accommodating for various learning styles! 
                      </p>
                      <h5 class="text-xl font-bold mb-5">
                        Books
                      </h5>
                      <div class="mb-5">
                        <Link showAnchorIcon href="https://github.com/Avinash987/Coding/blob/master/Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf" color="secondary" target="_blank" size="lg">
                            Cracking the Coding Interview
                        </Link>
                      <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                        "Cracking the Coding Interview" is a renowned book by Gayle Laakmann McDowell. It offers a comprehensive collection of 189 programming questions and solutions, making it an invaluable resource for interview preparation. This book covers various coding topics and provides detailed explanations to help you understand the concepts better.
                      </p>
                      </div>
                      <div class="mb-5">
                        <Link showAnchorIcon href="https://github.com/lakhbawa/PDF---Grokking-the-Coding-Interview-Patterns-for-Coding-Questions/blob/main/Grokking%20the%20Coding%20Interview%20in%2016%20Patterns.pdf" color="secondary" target="_blank" size="lg" >Grokking the Coding Interview</Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                          "Grokking the Coding Interview" is a book that focuses on problem-solving patterns for coding questions. It helps you understand common patterns and techniques used in technical interviews, making it easier to tackle a wide range of coding challenges.
                        </p>
                      </div>
                      <h5 class="text-xl font-bold mb-5">
                        Coding Practice Websites
                      </h5>
                      <div class="mb-5">
                        <Link showAnchorIcon href="https://leetcode.com/" color="secondary" target="_blank" size="lg">
                            LeetCode
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                          LeetCode is the most popular and widely-used platform that provides coding challenges and mock interviews. Leetcode is most known for its large and extensive collection of practice problems ranging in various difficulties that are frequently asked in technical interviews.
                        </p>
                      </div>
                      <div class="mb-5">
                        <Link showAnchorIcon href="https://neetcode.io/" color="secondary" target="_blank" size="lg">
                            NeetCode
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                          NeetCode is very similar to LeetCode in that it provides a large collection of practice problems that are frequently asked in technical interviews. However, NeetCode is unique in that it provides list of curated problems that are organized by topic and difficulty. This makes it easier to find problems that you want to practice. This helps balance off the fact that LeetCode can get overwhelming with the amount of problems that it has whereas NeetCode gives you more structure and insight into what you should be focusing on. 
                        </p>
                      </div>
                      <div class="mb-5">
                        <Link showAnchorIcon href="https://www.codewars.com/" color="secondary" target="_blank" size="lg">
                            CodeWars
                        </Link>
                        <p class="text-gray-700 dark:text-gray-400 mb-2 my-3">
                          CodeWars offers a unique approach to coding challenges by using kata, which are small coding exercises that you can complete to improve your skills. It's a fun and interactive way to practice coding.
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