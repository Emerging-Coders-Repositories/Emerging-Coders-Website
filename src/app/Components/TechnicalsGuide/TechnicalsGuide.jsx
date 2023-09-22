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
              <div className="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <section className="mb-8">
                    <div className="max-w-3xl mx-auto text-left">
                      <h3 className="text-2xl font-bold mb-4">
                        Introduction to Technical Interviews
                      </h3>
                      <p className="text-gray-700 dark:text-gray-400">
                        In the fast-paced world of software engineering, technical interviews play a crucial role in assessing a candidate's skills and suitability for a role. These interviews are designed to evaluate not just your coding abilities but also your problem-solving skills, algorithmic thinking, and, in some cases, your ability to design scalable systems.
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 my-5">
                        <strong>Why Are Technical Interviews Important?</strong>
                      </p>
                      <ul className="list-disc pl-6">
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
                  <section className="mb-8">
                    <div className="max-w-3xl mx-auto text-left">
                      <h3 className="text-2xl font-bold mb-4">Types of Technical Interviews</h3>
                      <p className="text-gray-700 dark:text-gray-400">
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
                      <p className="text-gray-700 dark:text-gray-400">
                        These are just a few examples of the most Common examples of the types of technical interviews that you may encounter throughout your career. It's essential to understand the specific requirements of the job that you're applying for to be able to prepare effectively. 
                      </p>
                    </div>
                  </section>
                <section class="mb-8">
                  <div class="max-w-3xl mx-auto text-left">
                    <h3 class="text-2xl font-bold mb-4">
                      Preparing for Technical Interviews
                    </h3>
                    
                  </div>
                </section>
              </div>
          </div>
        </>
    );
};