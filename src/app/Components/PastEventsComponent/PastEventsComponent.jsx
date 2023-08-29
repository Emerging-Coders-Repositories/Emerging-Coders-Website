import React from "react"; 
import PastEventsSlider from "../PastEventsSlider/PastEventsSlider";
import FadeInAnimation from "../FadeInAnimation/FadeInAnimation";

export default function PastEventsComponent() {
    
    return (
        <div class="bg-gray-50 p-10">
            <FadeInAnimation>
                <div class="container mx-auto">
                    <div id="#PastEvents" class="mb-32 text-center">
                        <div class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-10 md:space-y-0 lg:gap-12 lg:items-center">
                            <PastEventsSlider
                            />
                            <div class="md:7/12 lg:w:-1/2">
                                <h2 class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-black">
                                    What We've Done
                                </h2>
                                <p class="my-8 text-gray-600 dark:gray-300">
                                    We've hosted a variety of event types ranging from social events to professional development events. Our events are open to all Northwestern students and we encourage you to attend our events to learn more about Emerging Coders and the FGLI community at Northwestern.
                                    To learn what we having upcoming next, check out our <a href="/UpcomingEvents" class="text-purple-700">events page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInAnimation>
        </div>
    );
    
};