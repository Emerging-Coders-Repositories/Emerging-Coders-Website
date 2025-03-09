// import React, { useState, useEffect } from "react";
// import { Progress } from "@nextui-org/react";
// import EventCard from "../EventCard/EventCard";

// const GOOGLE_CALENDAR_ID = "nuemergingcoders@gmail.com";
// const API_KEY = "AIzaSyB1qSMHewrQa4qyILiF0xZi5r3GRmH2WCQ";

// export default function UpcomingEventsComponent() {
//     const [events, setEvents] = useState([]);
//     const [fetchingError, setIsFetchingError] = useState(false);
//     const [isFetching, setIsFetching] = useState(true);

    
//     const fetchUpcomingEvents = async () => {
//         try {
//             const response = await fetch(
//                 `https://www.googleapis.com/calendar/v3/calendars/${GOOGLE_CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&orderBy=startTime&singleEvents=true`
//             );

//             if (!response.ok) {
//                 throw new Error("Failed to fetch events");
//             }

//             const data = await response.json();
//             setEvents(data.items || []);
//             setIsFetching(false);
//         } catch (error) {
//             console.error("Error fetching events:", error);
//             setIsFetchingError(true);
//         }
//     };

    
//     const formatDateTime = (dateTimeString) => {
//         const dateObj = new Date(dateTimeString);
//         return dateObj.toLocaleString("en-US", {
//             weekday: "long",
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//             hour: "numeric",
//             minute: "2-digit",
//             hour12: true,
//         });
//     };

//     useEffect(() => {
//         fetchUpcomingEvents();
//     }, []);

//     if (fetchingError) {
//         return (
//             <div className="m-0 mx-auto">
//                 <div className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4 max-w-screen-md">
//                     <h2 className="mb-4 text-xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
//                         There was an error fetching our upcoming events. Please check our Instagram,{" "}
//                         <a className="text-purple-700" href="https://www.instagram.com/nu.emergingcoders/">
//                             @nuemergingcoders
//                         </a>
//                     </h2>
//                 </div>
//             </div>
//         );
//     }

//     if (isFetching) {
//         return (
//             <div className="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 flex justify-center items-center flex-col">
//                 <div className="bg-white dark:bg-gray-900 min-h-screen gap-4">
//                     <h2 className="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
//                         Fetching upcoming events...
//                     </h2>
//                     <Progress size="sm" isIndeterminate aria-label="Loading..." className="max-w-md" color="secondary" />
//                 </div>
//             </div>
//         );
//     }

//     if (events.length === 0 && !isFetching) {
//         return (
//             <div className="bg-white dark:bg-gray-900 flex justify-center items-center flex-col gap-4">
//                 <h2 className="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
//                     We don't have any upcoming events at the moment. Please check back later!
//                 </h2>
//             </div>
//         );
//     }

//     return (
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
//             {events.map((event, index) => (
//                 <EventCard
//                     key={index}
//                     title={event.summary}
//                     location={event.location || "Online"}
//                     date={event.start.dateTime || event.start.date}
//                     description={event.description || "No description available"}
//                     time={event.start.dateTime ? formatDateTime(event.start.dateTime) : "All Day"}
//                     endTime={event.end?.dateTime ? formatDateTime(event.end.dateTime) : null}
//                     formattedStartTime={event.start.dateTime ? formatDateTime(event.start.dateTime) : "All Day"}
//                     formattedEndTime={event.end?.dateTime ? formatDateTime(event.end.dateTime) : ""}
//                     upcoming={true}
//                 />
//             ))}
//         </div>
//     );
// }

// Will use the format above when I find a way to fetch flyers.

import React, { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import { Table as NextTable, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

const GOOGLE_CALENDAR_ID = "nuemergingcoders@gmail.com";
const API_KEY = "AIzaSyB1qSMHewrQa4qyILiF0xZi5r3GRmH2WCQ";

export default function UpcomingEventsComponent() {
    const [events, setEvents] = useState([]);
    const [fetchingError, setFetchingError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    const fetchUpcomingEvents = async () => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/calendar/v3/calendars/${GOOGLE_CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&orderBy=startTime&singleEvents=true`
            );

            if (!response.ok) {
                throw new Error("Failed to fetch events");
            }

            const data = await response.json();
            setEvents(data.items || []);
            setIsFetching(false);
        } catch (error) {
            console.error("Error fetching events:", error);
            setFetchingError(true);
        }
    };

    const formatDate = (dateTimeString) => {
        const dateObj = new Date(dateTimeString);
        return dateObj.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const formatTime = (dateTimeString) => {
        const dateObj = new Date(dateTimeString);
        return dateObj.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        }).toLowerCase();
    };

    useEffect(() => {
        fetchUpcomingEvents();
    }, []);

    if (fetchingError) {
        return (
            <div className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                    There was an error fetching our upcoming events. Please check our Instagram, {" "}
                    <a className="text-purple-700" href="https://www.instagram.com/nu.emergingcoders/">@nuemergingcoders</a>
                </h2>
            </div>
        );
    }

    if (isFetching) {
        return (
            <div className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fetching upcoming events...</h2>
                <Progress size="sm" isIndeterminate aria-label="Loading..." className="max-w-md" color="secondary" />
            </div>
        );
    }

    if (events.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    We don't have any upcoming events at the moment. Please check back later!
                </h2>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="py-8 px-10 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Emerging Coders Upcoming Events</h2>
                    <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                        These are current planned upcoming events for the current quarter.
                    </p>
                </div>
                <NextTable aria-label="Upcoming Events Tracker" isStriped>
                    <TableHeader>
                        <TableColumn key="event">EVENT</TableColumn>
                        <TableColumn key="location">LOCATION</TableColumn>
                        <TableColumn key="date">DATE</TableColumn>
                        <TableColumn key="time">TIME</TableColumn>
                        <TableColumn key="description">DESCRIPTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {events.map((event, index) => {
                            const eventDetails = event.summary;
                            const locationMatch = eventDetails.match(/@(.*)/);
                            const location = locationMatch ? locationMatch[1].trim() : "TBD";
                            return (
                                <TableRow key={index}>
                                    <TableCell>{eventDetails.split("@")[0].trim()}</TableCell>
                                    <TableCell>{location}</TableCell>
                                    <TableCell>{formatDate(event.start.dateTime || event.start.date)}</TableCell>
                                    <TableCell>{event.start.dateTime ? formatTime(event.start.dateTime) : "All Day"}</TableCell>
                                    <TableCell>{event.description || "No description available"}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </NextTable>
            </div>
        </div>
    );
}
