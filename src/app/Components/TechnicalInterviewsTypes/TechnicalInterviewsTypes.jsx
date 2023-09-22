import React from "react"; 
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export default function TechnicalInterviewsTypes() {

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
    );
};