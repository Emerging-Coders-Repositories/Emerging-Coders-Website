import React from "react";
import InProgress from "../InProgress/InProgress";
import { Card } from "@nextui-org/react"; 
export default function ResourcesComponent() {

    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <div class="py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-light font-extrabold text-center text-gray-900 dark:text-white">
                    Resources
                </h2>
                <p class="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    View our resources that members of our community have written and contributed too. 
                </p>
            </div>
            
        </div>
    );
};