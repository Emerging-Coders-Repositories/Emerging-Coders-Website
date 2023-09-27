import React from "react"; 
import FadeInAnimation from "../FadeInAnimation/FadeInAnimation";

export default function KeyPoints() {

    return (
        <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
            <FadeInAnimation>
                <section class="mb-32 text-center">
                    <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black my-11">
                        What We Do At Emerging Coders
                    </h2>
                    <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                        <div class="mb-12 md:mb-0">
                            <div class="mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="black" class="h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold">Mentorship</h5>
                            <p class="text-neutral-500 dark:text-neutral-300">
                            We aim to provide mentorship and support opportunities for underrepresented groups within the Northwestern Computer Science community and beyond. 
                            We are welcoming of all majors and backgrounds, and we hope to provide a safe space for students to learn and grow together.
                            </p>
                        </div>

                        <div class="mb-12 md:mb-0">
                            <div class="mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="black" class="h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold">
                                    Technical Development
                            </h5>
                            <p class="text-neutral-500 dark:text-neutral-200">
                                We strive to provide accessible and inclusive technical development opportunities for all of our members by hosting workshops, speaker events, and other events to help our members learn and grow as developers, engineers, designers, product managers, and more.
                            </p>
                        </div>
                        
                        <div class="mb-12 md:mb-0">
                            <div class="mb-6 inline-block rounded-md bg-secondary-200 p-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="black" class="h-6 w-6"> <g> <path stroke-linecap="round" stroke-linejoin="round" d="M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z"/> </g> </svg>
                            </div>
                            <h5 class="mb-4 text-lg font-bold">
                                Establish Community
                            </h5>
                            <p class="text-neutral-500 dark:text-neutral-200">
                                We want to provide a safe, welcoming, and inclusive community for all of our members. We hope that we can all lean on one another for support and guidance. 
                            </p>
                        </div>

                    </div>
                </section>
            </FadeInAnimation>
        </div>
    );
};