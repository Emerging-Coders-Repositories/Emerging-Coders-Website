// "use client"
import React from "react";
import { useState } from "react"; 

export default function NavigationBar() {

    const [isExpanded, toggleExpansion] = useState(false);
    const [isDropdownVisible, toggleDropdown] = useState(false); 


    const handleToggle = () => {
        toggleExpansion(!isExpanded);
    };

    const handleDropdownToggle = () => {
      toggleDropdown(!isDropdownVisible); // Toggle the dropdown visibility
    };

    const links = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Upcoming Events",
            url: "/UpcomingEvents",
        },
        {
            name: "Board", 
            url: "/ExecutiveBoard",
        },
        {
            name: "Contact Us", 
            url: "/Contact",
        },
        {
            name: "FAQ",
            url: "/FAQ", 
        },
        {
          name: "Resources",
          url: "/AdditionalResources",
          dropdown: [
            {
              name: "First Year",
              url: "/First-Year",
            },
            {
              name: "Technical Interviews",
              url: "/Technical-Interview",
            },
          ],
        },
        {
            name: "Opportunities",
            url: "/Opportunities", 
        },
        {
          name: "Sponsors", 
          url: "/Sponsors", 
        },
    ]

    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900" >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://se-images.campuslabs.com/clink/images/7fa49590-7782-41cb-942b-c4602cdf50c4e027cf3b-b17e-4e7c-82c9-4012c2c07b3c.png?preset=med-sq"
              className="h-8 mr-3"
              alt="Emerging Coders Logo"
            />
            <div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Emerging Coders
              </span>
            </div>
          </a>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isExpanded}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isExpanded ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {links.map((link, index) => (
              <li key={index}>
                {link.name === "Resources" ? (
                  <>
                    <button
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      onClick={handleDropdownToggle}
                      className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                    >
                      {link.name}
                      <svg
                        className={`w-2.5 h-2.5 ml-2.5 transform transition-transform ${
                          isDropdownVisible ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div
                      id="dropdownNavbar"
                      className={`z-10 ${
                        isDropdownVisible ? "block" : "hidden"
                      } absolute my-2 z-100 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-400"
                        aria-labelledby="dropdownLargeButton"
                      >
                        {link.dropdown.map((dropdownLink, key) => (
                          <li key={index}>
                          <a
                            href={`/AdditionalResources/${dropdownLink.url}`}
                            className="block px-4 py-2 text-gray-700"
                          >
                            {dropdownLink.name}
                          </a>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                      <a
                      href={link.url}
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      {link.name}
                    </a>
                    )
                    }
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    );
};