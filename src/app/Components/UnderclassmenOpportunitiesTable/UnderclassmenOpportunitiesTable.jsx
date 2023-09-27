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
            };
            const readme = await response.data; 
            const content = await readme.content;   
            const decodedContent = atob(content);
            // console.log("decodedContent: ", decodedContent);
            setReadmeData(decodedContent);
            decodeREADME(decodedContent);
        } catch (error) {
            console.log("Error fetching README.md file: ", error);
            setFetchingError(true);
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
          console.log("match: ", match);
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
      
        console.log("extractedData: ", extractedData);
      }
      

    useEffect(() => {
        fetchUnderclassmenREADME();
    }, [])

    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">

        </div>
    );
};