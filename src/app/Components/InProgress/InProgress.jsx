import React from "react"; 

export default function InProgress() {

    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    This page is still in progress, please check back later!
                </h2>
            </div>
        </div>
    );
}; 