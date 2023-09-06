import React from "react"; 
import axios from "axios"; 
import { useState, useEffect, useMemo } from "react";
import { Progress, Tab } from "@nextui-org/react";
import {Table as NextTable, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
export default function OpportunitiesComponent() {

    const [readmeData, setReadmeData] = useState("");
    const [jobsList, setJobsList] = useState([]);
    const [fetchingError, setFetchingError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [page,setPage] = useState(1);
    const [pages, setPages] = useState(0); 
    const [tableItems, setTableItems] = useState([]);
    const rowsPerPage = 20; 
    
    // Fetch README.md file from SWE Tracker
    const fetchREADME = async () => {

        const readmeURL = process.env.NEXT_PUBLIC_SWE_TRACKER_URL; 

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
            decodeREADME(decodedContent);
        } catch (error) {
            console.log("Error fetching README.md file: ", error);
            setFetchingError(true);
        };
    };

    // The README is encoded in base64 so this function decodes it and parses it into a list of jobs
    const decodeREADME = async (content) => {
        // regex to parse the README.md file into a list of jobs
        const regex = /\| ([^\|]+) \| ([^\|]+) \| \[([^\]]+)\]\(([^)]+)\) \| ([^\|]+) \| ([^\|]+) \|\n/g;
        let match;
        const jobList = [];
        while ((match = regex.exec(content))) {
            const company = match[1].trim();
            const investors = match[2].trim();
            const title = match[3].trim();
            const link = match[4].trim();
            const status = match[5].trim();
            const addedOn = match[6].trim();
            jobList.push({
                company,
                investors,
                title,
                link,
                status,
                addedOn,
            });
            }
        const jobsListLength = await jobList.length;
        setPages(Math.ceil(jobsListLength / rowsPerPage))
        setJobsList(jobList);
        setIsFetching(false);
    }

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
            <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Summer 2024 Internships Directory</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                            This is an updated repository of summer 2024 internships that we have fetched from various online GitHub repositories.
                            We are constantly updating this list, so check back often!
                        </p>
                </div> 
                {jobsList.length > 0 && !isFetching && (
                    <NextTable
                    aria-label="Summer 2024 Internships Tracker"
                    removeWrapper
                    bottomContent = {
                        <div class="flex w-full justify-center">
                            <Pagination 
                            isCompact
                            showControls
                            showShadow
                            color = "secondary"
                            page = {page}
                            total = {pages}
                            onChange = {(page) => setPage(page)}
                            />
                        </div>
                    }
                    bottomContentPlacement="outside"
                    isStriped
                    hideHeader
                    topContent = {
                        <div class="flex w-full justify-center">
                            <TableColumn key="company" align='center'>COMPANY</TableColumn>
                        <TableColumn key="title" align='center'>TITLE</TableColumn>
                        <TableColumn key="link" align='center'>LINK</TableColumn>
                        <TableColumn key="addedOn" align='center'>ADDED ON</TableColumn>
                        </div>
                        
                    }
                    >
                    <TableHeader>
                        <TableColumn key="company" align='center'>COMPANY</TableColumn>
                        <TableColumn key="title" align='center'>TITLE</TableColumn>
                        <TableColumn key="link" align='center'>LINK</TableColumn>
                        <TableColumn key="addedOn" align='center'>ADDED ON</TableColumn>
                    </TableHeader>
                    <TableBody items={jobsList}>
                        {jobsList.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((job, index) => (
                            <TableRow key={index}>
                                <TableCell key="company">{job.company}</TableCell>
                                <TableCell key="title">{job.title}</TableCell>
                                <TableCell key="link"><a href={job.link} target="_blank" rel="noopener noreferrer">Apply</a></TableCell>
                                <TableCell key="addedOn">{job.addedOn}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </NextTable>
                )}
            </div>
        </div>
    );
};