import React from "react"; 
import { Link, } from "@nextui-org/react"; 
import TechnicalInterviewsIntro from "../TechnicalInterviewsIntro/TechnicalInterviewsIntro";
import TechnicalInterviewsTypes from "../TechnicalInterviewsTypes/TechnicalInterviewsTypes";
import TechnicalInterviewStudying from "../TechnicalInterviewStudying/TechnicalInterviewStudying";
import TechnicalInterviewTips from "../TechnicalInterviewTips/TechnicalInterviewTips";

export default function TechnicalsGuide() {

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
                          <br />µ
                          Authors: <Link showAnchorIcon href="https://www.linkedin.com/in/ethanpineda/" target="_blank" color="secondary">Ethan Pineda</Link>, <Link showAnchorIcon href="https://www.linkedin.com/in/dopineda/" target="_blank" color="secondary">Danny Pineda</Link>
                          (not related)
                      </p>
                      
                  </div>
              </div>
              <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                  <TechnicalInterviewsIntro />
                  <TechnicalInterviewsTypes />
                  <TechnicalInterviewStudying />
                  <TechnicalInterviewTips />
              </div>
              <div class="flex justify-center mb-10">
                  <div class="block max-w-3xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                      <p class="font-normal text-gray-700 dark:text-gray-400">
                        That's all we have for this guide, we hope that you found the information on this page useful and that it helps you prepare for your next technical interview! Best of luck to you on your technical interviews! 🫶🏽🫶🏽
                      </p>
                      <p>
                      of course, in the grand scheme of things, this may not seem like a long time but i just wanted to say real quick that this has one of the best months that I’ve had in a while. Since the first day we met i knew from the bottom of my heart that what we could have together would be real. i geniuely feel like i can be myself around you and that you truly accept me for who i am. when i am around you, it's like nothing else matters. i just want to focus on you and being present. 

                      i love the adventures that we go on. i love how you get me to explore and take part in my passions and interest again. i love how supportive we are of each other's work. it's those small things that me feel like we are going to be together for a long time. 

                      of course, this is just the beginning and i am excited to see where this goes. i am excited to see how we grow together and how we can continue to support each other. everyday i look forward to talking to you and seeing you. i am exicted to see you to continue to grow and pursue your dreams and passions, i'll always be here to support you. 

                      again, happy one-month annivesary brianna <333 im so grateful and lucky to have you in my life. 
                      </p>
                  </div>
              </div>
          </div>
        </>
    );
};