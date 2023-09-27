import React from "react"; 
import axios from "axios"; 
import { useState, useEffect, useMemo } from "react"; 
import { Progress, 
        Table, 
        TableHeader, 
        TableColumn, 
        TableBody, 
        TableRow, 
        TableCell, 
        Pagination 
} from "@nextui-org/react"

export default function UnderclassmenOpportunitiesTable() {

    const [readmeData, setReadmeData] = useState("");
    const [jobsList, setJobsList] = useState([]);
    const [fetchingError, setFetchingError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [page,setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [search, setSearch] = useState("");
    const rowsPerPage = 10;

    const fetchUnderclassmenREADME = async () => {

        const underclassmenReadmeURL = process.env.NEXT_PUBLIC_UNDERCLASSMEN_OPPORTUNITIES_URL;

        try {
            const response = await axios.get(underclassmenReadmeURL);

            if (response.status !== 200) {
                setFetchingError(true);
                setIsFetching(false);
            };
            const readme = await response.data; 
            const content = await readme.content;   
            const decodedContent = atob(content);
            // console.log("decodedContent: ", decodedContent);
            setReadmeData(decodedContent);
            decodeREADME(decodedContent);
            setIsFetching(false);
        } catch (error) {
            console.log("Error fetching README.md file: ", error);
            setFetchingError(true);
            setIsFetching(false);
        };
    };  

    const decodeREADME = (content) => {
        // Initialize variables to store extracted data
        const extractedData = [];
        // Find the start and end markers for the "Internships" section
        const startIndex = content.indexOf("## Internships");
        let endIndex = content.indexOf("##", startIndex + 1);
        if (endIndex === -1) {
            endIndex = content.length;
        }
        // Extract the content of the "Internships" section
        const internshipsSection = content.substring(startIndex, endIndex);
        // Split the section into lines
        const lines = internshipsSection.split('\n');
        // Regular expression to match a line with program information
        const programRegex = /\[([^\]]+)\]\(([^)]+)\) +\| *([^|]+) *\| *([^|]+) *\| *([^|\n]+)/;
        lines.forEach((line) => {
            const match = line.match(programRegex);
            if (match) {
                const name = match[1].trim();
                const link = match[2].trim();
                const status = match[3].trim();
                const year = match[4].trim();
                extractedData.push({
                    name,
                    link,
                    status,
                    year,
                });
            }
        });
        setJobsList(extractedData);
    };

    const isInternshipsOpen = (internshipStatus) => {
        if (internshipStatus.includes("Open")) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        fetchUnderclassmenREADME();
    }, []); 

    if (fetchingError) {
        return (
            <div class="m-0 mx-auto">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4 max-w-screen-md m-0 mx-auto">
                    <h2 class="mb-4 text-xl tracking-light font-bold text-center text-gray-400 dark:text-white">
                        There was an error fetching summer 2024 internships for underclassmen! Please try again later!
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
                    Fetching Summer 2024 Underclassmen Internships... this may take a while 
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
                    We couldn't find any summer 2024 Underclassmen internships, sorry about that! Please check back later!
                </h2>
            </div>
        )    
    };

    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <div class="py-8 px-10 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        Underclassmen 2024 Internships
                    </h2>
                    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        This is an automatically generated list of internships for underclassmen for summer 2024. Most of these internships are Software Engineering focused, but some programs have aspects of Product Management, Data Science, and other roles.
                    </p>
                </div>
                <div class="py-5">
                {/* This would be the search bar */}
                </div>
                <div>
                    {jobsList.length > 0 && !isFetching && (
                        <Table
                            aria-label="Underclassmen Internships Table"
                            isStriped
                        >
                            <TableHeader>
                                <TableColumn key="name">Name</TableColumn>
                                <TableColumn key="status">Status</TableColumn>
                                <TableColumn key="year">Year</TableColumn>
                                <TableColumn key="link">Link</TableColumn>
                            </TableHeader>
                            <TableBody>
                                {jobsList.map((job, index) => (
                                    <TableRow key={index}>
                                        <TableCell key="name">
                                            {job.name}
                                        </TableCell>
                                        <TableCell key="Year">
                                            {job.year}
                                        </TableCell>
                                        <TableCell key="status">
                                            {isInternshipsOpen(job.status) ? ("✅ Open") : ("❌ Closed/Not Open Yet")}
                                        </TableCell>
                                        <TableCell key="link">
                                            <a href={job.link} target="_blank">Link</a>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
            </div>
            </div>
        </div>
    );
};