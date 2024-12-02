import React from "react";

export default function Footer() {

    const basePath =
    process.env.NODE_ENV === "production" ? "/Emerging-Coders-Website" : "";

    const links = [
        {
            name: "Home",
            url: `${basePath}/`,
          },
          {
            name: "Board",
            url: `${basePath}/ExecutiveBoard`,
          },
          {
            name: "Contact Us",
            url: `${basePath}/Contact`,
          },
          {
            name: "FAQ",
            url: `${basePath}/FAQ`,
          },
        {
            name: "Resources",
            url: `${basePath}/Additional-Resources/Technical-Interview`,
        },
        {
            name: "Opportunities",
            url: `${basePath}/Opportunities/SWE-Opportunities`,
        },
        {
            name: "Sponsors",
            url: `${basePath}/Sponsors`,
        },
    ]

    const currentYear = new Date().getFullYear();

    return (
    <footer class="p-4 bg-gray-800 md:p-8 lg:p-10 dark:bg-gray-800 z-100">
        <div class="mx-auto max-w-screen-xl text-center z-100">
            <a href="#" class="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
                Emerging Coders    
            </a>
        <ul class="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
            {links.map((link, index) => (
                <li key={index}>
                <a href={link.url} class="mr-4 hover:underline md:mr-6">{link.name}</a>
                </li>
            ))}
        </ul>
        <div class="flex flex-col justify-center mt-6 space-x-4 gap-2">
            <span class="text-sm text-white sm:text-center dark:text-gray-400">© {currentYear} <a href="#" class="hover:underline">Emerging Coders™</a>. All Rights Reserved.</span>
            <span class="text-sm text-white sm:text-center dark:text-gray-400">Built and Designed By: <a href="https://www.linkedin.com/in/ethanpineda/" target="blank" class="hover:underline">Ethan Pineda</a></span>
            <span class="text-sm text-white sm:text-center dark:text-gray-400">This project is open source, contribute <a href="https://github.com/ethanpaneraa/Emerging-Coders-Website" target="blank" class="hover:underline">here</a></span>
        </div>
        </div>
    </footer>
    );
};

