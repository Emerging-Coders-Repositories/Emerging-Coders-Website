import React from "react"; 
import { Link } from "@nextui-org/react"; 

export default function SponsorsComponent() {

    return (
        <>
            <section class="bg-white dark:bg-gray-900 min-h-screen">
                <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-lg lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-light font-extrabold text-gray-900 dark:text-white">Sponsors</h2>
                        <div class="p-10">
                            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                Our community is eager to learn more about career opportunities in technology and the companies that are leading and transforming the technology not only in terms of innovation but also in terms of diversity and inclusion. 
                                We are always looking for new sponsors to help us achieve our mission of providing a community for first-generation and low-income students at Northwestern University who are passionate about technology and helping others.
                                If you are interested in sponsoring EmergingCoders, you can reach out to us through our <a class="text-purple-700" href="/Contact">contact form</a> or, reach out to us directly at <a class="text-purple-700" href="mailto:nuemergingcoders@gmail.com">nuemergingcoders@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <h3 class="font-extrabold text-2xl text-gray-900 dark:text-white">We are currently seeking our first sponsors!</h3>
                        </div>
                        {/* <p class="text-gray-500 font-light">
                            EmergingCoders is the only and largest student organization at Northwestern University that is dedicated to serving first-generation and low-income students who are passionate about technology and helping others. 
                            We are a community of over 150 students across different majors, departments, and schools. Our community is filled with diverse and eager students ready to learn more and apply their skills to the real world.
                        </p> */}
                    </div>
                    <Link isBlock showAnchorIcon href="/emerging_coders_sponsorship_package.pdf" color="secondary" target="_blank" size="lg">View the 2023-2024 Emerging Coders Sponsorship Packet</Link>
                </div>
            </section>
        </>
    );
};