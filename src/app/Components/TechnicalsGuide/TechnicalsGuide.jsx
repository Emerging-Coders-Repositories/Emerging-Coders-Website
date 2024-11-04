import React from "react";
import { Link } from "@nextui-org/react";
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
              👋 Hey there, on this page, you will find a general handbook and
              guide to preparing and tackling software engineer technical
              interviews. The purpose of this page is to provide you with the
              resources and knowledge you need to start getting ready to ace
              your next technical interview! If you have any suggestions to
              improve this page, please make a PR on the{" "}
              <Link
                showAnchorIcon
                href="https://github.com/ethanpaneraa/Emerging-Coders-Website"
                color="secondary"
                target="_blank"
                size="md"
              >
                EmergingCoders Website Repo
              </Link>
              <br />
              <br />µ Authors:{" "}
              <Link
                showAnchorIcon
                href="https://www.linkedin.com/in/ethanpineda/"
                target="_blank"
                color="secondary"
              >
                Ethan Pineda
              </Link>
              ,{" "}
              <Link
                showAnchorIcon
                href="https://www.linkedin.com/in/dopineda/"
                target="_blank"
                color="secondary"
              >
                Danny Pineda
              </Link>
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
              That's all we have for this guide, we hope that you found the
              information on this page useful and that it helps you prepare for
              your next technical interview! Best of luck to you on your
              technical interviews! 🫶🏽🫶🏽
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
