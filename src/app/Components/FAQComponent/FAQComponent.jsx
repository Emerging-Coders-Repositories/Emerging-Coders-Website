import React from "react"; 
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function FAQComponent() {

    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    const answers = [
        "Emerging Coders is a community for FGLI (First-generation, Low-income) students who are interested in Tech. Our purpose is to enable students in the club improve their skills (e.g., coding projects, networking etc.), provide mentorship and resources throughout your college experience, and to create meaningful projects.",
        "Becoming a Member of Emerging Coders is easy! We don't have any requirements or application to join our community. The best way of joining is to join our GroupMe or to follow us on Instagram @nuemergingcoders.",
        "As a club, we aim to provide resources, opportunities, and experiences related to the Technology industry for our members and community. We do this by hosting events, workshops, and projects throughout the academic year. In the past, we have done panels with Northwestern students who have had industry experience in technology, LeetCode workshops, community building socials, and so much more!",
        "If your club, organization, or company is interested in working with Emerging Coders, please contact us using the contact us page on this website or send an email at nuemergingcoders@gmail.com and we will get back to you as soon as possible!",
        "There is not strict requirement for anyone to be considered to be a member of Emerging Coders. We welcome anyone who is interested in learning more about the technology industry and is willing to learn and grow with us! Feel free to come to any of our events and workshops as you please to learn more about us and what we do!",
        "If you would like to ask a specific question from the Emerging Coders team, or just want to schedule a coffee chat with one of us, you find our contact information on the Board page of this website."
    ]; 

    return (
        <div class="py-8 px-5 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
            <div class="py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                <p class="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Have a question? Check out our frequently asked questions below. If you don't see your question, feel free to contact us!
                </p>
            </div>
            <div class="bg-white dark:bg-gray-900 min-h-screen flex  items-center flex-col gap-4 max-w-screen-md m-0 mx-auto">
                <Accordion selectionMode="multiple">
                    <AccordionItem key="1" aria-label="Accordion 1" title="What is Emerging Coders?">
                        {answers[0]}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="How do I join Emerging Coders?">
                        {answers[1]}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Do I need to show up to every event to be a member of Emerging Coders?">
                        {answers[4]}
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title="What does Emerging Coders Exactly Do?">
                        {answers[2]}
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Accordion 5" title="My club or organization wants to work with Emerging Coders, how should we go about that?">
                        {answers[3]}
                    </AccordionItem>
                    <AccordionItem key="6" aria-label="Accordion 6" title="I want to ask a question to a specific member of the Emerging Coders team, how can I do that?">
                        {answers[5]}
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};