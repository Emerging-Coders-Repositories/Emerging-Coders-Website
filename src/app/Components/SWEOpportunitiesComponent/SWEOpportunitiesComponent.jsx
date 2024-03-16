import React from "react"; 
import axios from "axios"; 
import { useState, useEffect, useMemo } from "react";
import { Progress, Tab } from "@nextui-org/react";
import { Table as NextTable, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, } from "@nextui-org/react";
import { Cottage } from "@mui/icons-material";

export default function OpportunitiesComponent() {

    const [readmeData, setReadmeData] = useState("");
    const [jobsList, setJobsList] = useState([]);
    const [fetchingError, setFetchingError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [page,setPage] = useState(1);
    const [pages, setPages] = useState(0);
    
    // search = ""
    //setSearch changes the value of search
    const [search, setSearch] = useState("");
    const rowsPerPage = 20; 
    
    // Fetch README.md file from SWE Tracker
    const fetchREADME = async () => {

        // change "next pub.." to new named api
        const readmeURL = process.env.NEW_NEXT_PUBLIC_SWE_TRACKER_URL; 

        try {
            const response = await axios.get(readmeURL);
            // check to make sure the fetch was successful
            if (response.status !== 200) {
                setFetchingError(true);
            };
            const readme = await response.data; 
            const content = await readme.content; 
            const decodedContent = atob(content);
            setReadmeData(decodedContent);
            decodeREADME(decodedContent); // Fetch error occurs in decodeREADME
        } catch (error) {
            console.log("Error fetching README.md file: ", error);
            setFetchingError(true);
        };
    };

    // The README is encoded in base64 so this function decodes it and parses it into a list of jobs
    const decodeREADME = async (content) => {
        // initial regex to parse the README.md file into a list of jobs
        // const regex = /\| ([^\|]+) \| ([^\|]+) \| \[([^\]]+)\]\(([^)]+)\) \| ([^\|]+) \| ([^\|]+) \|\n/g;

        // regex for company name exists
        const regex1 = /\| \*\*\[([^\]]+)\]\(([^)]+)\)\*\* \| ([^\|]+) \| ([^\|]+) \| <a href="([^"]+)"><img src="[^"]+" width="[^"]+" alt="[^"]+"><\/a> <a href="([^"]+)"><img src="[^"]+" width="[^"]+" alt="[^"]+"><\/a> \| ([^\|]+) \|\n/g;
        
        // regex for '↳': ↳, role, location, applylink, simplifylink, date posted
        const regex2 = /\| ([^\|]+) \| ([^\|]+) \| ([^\|]+) \| <a href="([^"]+)"><img src="[^"]+" width="[^"]+" alt="[^"]+"><\/a> <a href="([^"]+)"><img src="[^"]+" width="[^"]+" alt="[^"]+"><\/a> \| ([^\|]+) \|\n/g;
        
        let match;
        const jobList = [];

        // 
        while ((match = regex1.exec(content)||(match = regex2.exec(content)))) {
            if ((match = regex1.exec(content))) {
                const companyLinkText = match[1].trim();        // Extract company link text
                const companyLinkUrl = match[2].trim();         // Extract company link URL
                const role = match[3].trim();                   // Extract role
                const location = match[4].trim();               // Extract location
                const applyLink = match[5].trim();              // Extract application link URL
                const simplifyLink = match[6].trim();           // Extract Simplify link URL
                const datePosted = match[7].trim();             // Extract date posted

                jobList.push({
                    company: { text: companyLinkText, url: companyLinkUrl },  // Storing company link text and URL in an object
                    role,
                    location,
                    application: { apply: applyLink, url: simplifyLink }, // Storing application link text and URL in an object
                    datePosted
                });
            } else {
                match = regex2.exec(content)
                const companyLinkText = match[1].trim();  // Extract company link text
                const role = match[2].trim();             // Extract role
                const location = match[3].trim();         // Extract location
                const applyLink = match[4].trim();        // Extract application link URL
                const simplifyLink = match[5].trim();     // Extract simplify link URL
                const datePosted = match[6].trim();       // Extract date posted

                jobList.push({
                    company: { text: companyLinkText, url: null},  // Storing company link text and URL in an object
                    role,
                    location,
                    application: { apply: applyLink, simplify: simplifyLink }, // Storing application link text and URL in an object
                    datePosted
                });
            };
        };
        const jobsListLength = await jobList.length;
        setPages(Math.ceil(jobsListLength / rowsPerPage))
        setJobsList(jobList);
        setIsFetching(false);
    };
        


    const handleSearch = (event) => {
        // changing the value of search
        setSearch(event.target.value);
    };

    const filteredJobs = useMemo(() => {

        const lowerSearch = search.toLowerCase();
        if (!lowerSearch) {
            return jobsList;
        }
        return jobsList.filter((job) => {
            return (
                job.role.toLowerCase().includes(lowerSearch) ||
                job.company.text.toLowerCase().includes(lowerSearch) // may be an issue because company names as arrows won't show up
            );
        });
    }, [jobsList, search]);

    useEffect(() => {
        fetchREADME();
    }, []);

    if (fetchingError) {
        return (
            <div class="m-0 mx-auto">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4 max-w-screen-md m-0 mx-auto">
                    <h2 class="mb-4 text-xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        There was an error fetching summer 2024 internships from our SWE Tracker, please try again later!
                    </h2>
                </div>
            </div>
        );
    };

    if (isFetching) {
        return (
            <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                    <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        Fetching Summer 2024 Internships... this may take a while 
                    </h2>
                    <Progress
                    size="sm"
                    isIndeterminate
                    aria-label="Loading..."
                    className="max-w-md"
                    color="secondary"
                    />
                </div>
            </div>
        );
    }; 

    if (jobsList.length === 0 && !isFetching) {
        return (
            <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    We couldn't find any summer 2024 internships, sorry about that! Please check back later!
                </h2>
            </div>
        )
    };

    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <div class="py-8 px-10 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Summer 2024 Internships Directory</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            This is an updated repository of summer 2024 internships that we have fetched from various online GitHub repositories.
                            We are constantly updating this list, so check back often!
                        </p>
                </div> 
                <div>
                <form class="py-5">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Search Job titles..." required onChange={
                            (event) => handleSearch(event)
                        } />
                    </div>
                </form>
                </div>
                {jobsList.length > 0 && !isFetching && (
                    <NextTable
                    aria-label="Summer 2024 Internships Tracker"
                    bottomContent = {
                        <div class="flex w-full justify-center">
                            <Pagination 
                            isCompact
                            showControls
                            showShadow
                            color = "secondary"
                            page = {page}
                            total = {Math.ceil(filteredJobs.length / rowsPerPage)}
                            onChange = {(page) => setPage(page)}
                            />
                        </div>
                    }
                    bottomContentPlacement="outside"
                    isStriped
                    // hideHeader
                    >
                    <TableHeader>
                        <TableColumn key="company" align='center'>COMPANY</TableColumn>
                        <TableColumn key="role" align='center'>ROLE</TableColumn>
                        <TableColumn key="location" align='center'>LOCATION</TableColumn>
                        <TableColumn key="application" align='center'>APPLICATION</TableColumn>
                        <TableColumn key="simplify" align='center'>SIMPLIFY</TableColumn>
                        <TableColumn key="datePosted" align='center'>DATE POSTED</TableColumn>
                    </TableHeader>
                    <TableBody items={jobsList}>
                        {filteredJobs.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((job, index) => (
                            <TableRow key={index}>
                                <TableCell key="company"><a href={job.company.url} target="_blank" rel="noopener noreferrer">{job.company.text}</a></TableCell>
                                <TableCell key="role">{job.role}</TableCell>
                                <TableCell key="location">{job.location}</TableCell>
                                <TableCell key="application"><a href={job.application.apply} target="_blank" rel="noopener noreferrer">{'Apply Here'}</a></TableCell>
                                <TableCell key="simplify"><a href={job.application.simplify} target="_blank" rel="noopener noreferrer">{'Apply through Simplify'}</a></TableCell>
                                <TableCell key="datePosted">{job.datePosted}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </NextTable>
                )}
            </div>
        </div>
    );
};