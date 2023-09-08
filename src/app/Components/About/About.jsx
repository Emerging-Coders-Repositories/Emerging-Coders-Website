import React from "react"; 
import FeaturedImages from "../FeaturedImages/FeaturedImages";
import FadeInAnimation from "../FadeInAnimation/FadeInAnimation";

export default function About() {

    return (
        <div class="bg-gray-50 p-1" id="#About">
        <FadeInAnimation>
            <div class="container my-24 mx-auto md:px-6">
                <div id="#About" class="mb-32 text-center">
                        <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-10 md:space-y-0 lg:gap-12 lg:items-center">
                            <FeaturedImages />
                            <div class="md:7/12 lg:w-1/2">
                                <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black">
                                About Emerging Coders
                                </h2>
                                <p class="my-8 text-gray-600 dark:text-gray-300 py-8 mx-auto max-w-screen-2xl text-center lg:px-6">
                                    Emerging Coders is a community for FGLI (First-generation, Low-income) students who are interested in Tech. Our purpose is to enable students in the club improve their skills (e.g., coding projects, networking etc.), provide mentorship and resources throughout your college experience, and to create meaningful projects.  
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </FadeInAnimation>
        </div>
    );
};