import React from "react"; 
import { Link } from "@nextui-org/react"
export default function UnderclassmenGuide() {

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
                                    The purposes of this guide is to provide additional context and guidance when it comes to navigating the Computer Science major at Northwestern. The department already provides lots of resources, guides, and opportunities for students to succeed, but we wanted to provide a more personal and condensed guide that is based on the experiences of our members and alumni.
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
                                    Before we say anything, ultimately the decision to pursue a Computer Science degree is going to be up to you. Again, a lot of this advice in this guide is subjective and your milage may vary, so take everything with a grain of salt.
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
                                        A Computer Science is very versatile and the skills that you learn in a CS degree can be applied to a wide variety of fields and industries. You don't have to become a software engineer after graduation, you can become a data scientist, a product manager, a UX designer, a technical writer, a technical recruiter, and so much more!
                                        <br />
                                        <br />
                                        Of course, if you choose to work in technology, you'll be joining a fast-growing industry with a lot of opportunities for career growth and advancement. The tech industry is also known for its competitive salaries and benefits, as well as its flexible work arrangements.
                                    </p>

                                </div>
                            </div>
                            <div class="mb-5">
                                <h3 class="text-2xl font-bold mb-5">
                                    What is the CS major like at Northwestern?
                                </h3>
                                <p class="text-gray-700 dark:text-gray-400 mb-10">
                                    The Computer Science major at Northwestern is a very diverse and versatile major. Because of the quarter system, its possible to take classes in a variety of different fields and topics in CS from systems/hardware, game development, human-computer interaction, artificial intelligence, and theory.  
                                    <br />
                                </p>
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
