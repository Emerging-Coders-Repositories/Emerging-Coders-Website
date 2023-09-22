import React from "react"; 
import { Tabs, Tab, Card, CardBody, Link, Image } from "@nextui-org/react"; 

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
                          <br />
                          <br />
                          Authors: <Link showAnchorIcon href="https://www.linkedin.com/in/ethanpineda/" target="_blank" color="secondary">Ethan Pineda</Link>, <Link showAnchorIcon href="https://www.linkedin.com/in/dopineda/" target="_blank" color="secondary">Danny Pineda</Link>
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
                <section class="mb-10">
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
                    <div>
                      <h4 class="text-xl font-bold mb-5">
                        Mock Interviews
                      </h4>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        Mock interviews are arguably the best and most efficient way to prepare for technical interviews. Mock interviews are essentially practice interviews that you do with someone else such as a friend, an upperclassmen, or your roommate. 
                        The purpose of mock interviews is to simulate the experience of a real technical interview. This allows you to get a feel for what a real technical interview is like and allows you to practice your problem solving skills in a more realistic environment.
                        The best thing about doing mock interviews is that you are able to gain insights into your strengths and weaknesses. This allows you to focus on improving your weaknesses and building on your strengths. You can also become comfortable with having to solve technical problems on a time crunch and pressure. 
                        Overall, it is <strong>strongly</strong> suggested that you do at least a couple of mock interviews while preparing for an interview. When you doing a mock interview, we recommend using this <a href="https://www.algoexpert.io/mock-interviews/feedback?id=fake_feedback_form" class="text-purple-700" target="_blank">scorecard</a> to provide quantitative feedback to the interviewee.
                      </p>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        If you're unsure what a mock interview should look like, here is a video of a mock interview between software engineers. 
                      </p>
                      <a href="https://www.youtube.com/watch?v=1qw5ITr3k9E" target="_blank">
                        <Image src="https://www.freecodecamp.org/news/content/images/2023/03/software-mock.png" />
                      </a>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="mx-auto max-w-3xl text-left">
                    <h4 class="text-3xl font-bold mb-10">
                      During the Technical Interview
                    </h4>
                    <p class="text-gray-700 dark:text-gray-400 mb-5">
                      The technical interview can be scary and daunting. We've been there! But, we're here to help you out and offer some tips and tricks that we've picked up along the way to help you during the interview. 
                    </p>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        1. Ask Questions
                      </h5>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        Asking questions is one of the most important things that you can do during a technical interview. It shows that you are engaged and interested in the problem that you are solving. It also shows that you are able to think critically and ask the right questions to get the information that you need to solve the problem.
                        It's important to ask questions throughout the interview to make sure that you are on the right track and that you are solving the problem correctly. It's also important to ask questions to clarify any ambiguities in the problem statement.
                        <strong> do not</strong> make assumptions about the problem statement. If you are unsure about something, ask the interviewer.
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        2. Communicate, Communicate, and Communicate
                      </h5>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        It's important to communicate your thought process and what you are thinking to your interviewer. The emphasis of the technical interview is <strong>not always </strong> going to be on solving the problem. 
                        It's vital that during the interview you are constantly communicating your though process and problem solving over anything else. This is because the interviewer wants to see how you think and how you approach problems.
                        If you are are able to communicate well, <strong>you can actually get better help to solve the problem</strong>.
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        3. Listen to your interviewer and to their suggestions
                      </h5>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        It's important to listen to your interviewer and to their suggestions. They are there to help you and want you to succeed. If they are giving you suggestions, it's because they want you to succeed and want to help you out. 
                        It's also important to listen to your interviewer because they may give you hints or tips that can help you solve the problem.
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        4. Don’t bluff
                      </h5>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        If you don’t know the answer, take a few minutes to think about it. Say that you have not encountered a similar scenario, but you are going to try to work through a process to solve the problem. Think out loud, ask for some direction.
                        <strong> If you're really stuck</strong>, you can as to go through examples of the problem. This will help you understand the problem better and will help you come up with a solution.
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        5. Try a Brute Force Solution
                      </h5>
                      <p class="text-gray-700 dark:text-gray-400 mb-5">
                        It's okay if you don't immediately see the most optimal solution to the problem, you can always start out with a brute force solution to the problem and then optimize it later.
                      </p>
                    </div>
                    <div class="mb-5">
                      <h5 class="text-xl font-bold mb-5">
                        6. Dress Code
                      </h5>
                      <p class="text-gray-700 dark:text-400 mb-5">
                      For most interviews, business professional attire is expected. This is true for many engineering and technology firms. But there are exceptions, particularly in the startup/tech space, some west coast firms, and for some software focused roles. Please dress according to pre-interview guidelines provided by the company. If in doubt, ask the recruiter.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div class="flex justify-center mb-10">
                  <div class="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        That's all we have for this guide, we hope that you found the information on this page useful and that it helps you prepare for your next technical interview! Best of luck to you on your technical interviews! 🫶🏽🫶🏽
                      </p>
                  </div>
              </div>
          </div>
        </>
    );
};