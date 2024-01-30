import React from "react"; 
import { useState, useEffect } from "react"; 
import { supabase } from "@/client";
import EventCard from "../EventCard/EventCard";
import { Progress, Button, Link } from "@nextui-org/react";

export default function PastEvents() {

    const [pastEvents, setPastEvents] = useState([]); 
    const [isFetching, setIsFetching] = useState(true);
    const [fetchingError, setFetchingError] = useState(false);

    const fetchPastEvents = async () => {

        let todaysData = new Date().toISOString();

        try {
            console.log("fetching past events");
            await supabase
            .from("eventData")
            .select()
            .order("date", { ascending: false })
            .lte("date", todaysData)
            .then((results) => { 
                setPastEvents(results.data)
                setIsFetching(false); 
            })
            .catch((error) => {
                setFetchingError(true); 
                setIsFetching(false); 
            });
        } catch(error) {
            console.log("error:", error);
            setFetchingError(true);
            setIsFetching(false); 
        };
    };

    useEffect(() => {
        fetchPastEvents();
    }, []);

    // function to format the date into a more readable format
    const formatDate = (date) => {

        // base case
        if (!date) {
            return
        }

        // array of months
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // split the date into an array
        const brokenDownDate = date.split("-");
        // get the year
        const year = brokenDownDate[0];
        // get the month
        let month = brokenDownDate[1];
        // remove the 0 from the month if it exists
        if (month.includes("0")) {
            month.replace("0", "");
        }
        // get the day
        const day = brokenDownDate[2];
        // get the month string
        const monthString = months[month - 1];
        // get the day string
        const dayString = (day === 1) ? "1st" : (day === 2) ? "2nd" : (day === 3) ? "3rd" : day + "th";

        return `${monthString} ${dayString}, ${year}`;
    }; 

    const convertTo12HourTime = (time) => {
        const [hours, minutes] = time.split(':').slice(0, 2);

        // Parse hours and minutes as integers
        const hoursInt = parseInt(hours, 10);
        const minutesInt = parseInt(minutes, 10);

        // Determine AM or PM
        const period = hoursInt >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const hours12h = hoursInt % 12 || 12; // Handle midnight (0) as 12

        // Create the 12-hour formatted time string
        const time12h = `${hours12h}:${minutesInt < 10 ? '0' : ''}${minutesInt} ${period}`;

        return time12h;
    };


    if (isFetching) {
        return (
            <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                    <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        Fetching past events...
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

    if (pastEvents.length === 0 && !isFetching) {
        return (
            <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    It seems like there might be an issue with displaying our past events. Please try again later or you can checkout out our <a target="_blank" href="https://www.instagram.com/nu.emergingcoders/">instagram</a> to see a list of our past events!
                </h2>
            </div>
        )
    };

    return (
        <div className="bg-white min-h-screen">
            <div class="py-y lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-light font-extrabold text-center text-gray-900 dark:text-white">
                    Events Archive
                </h2>
                <p class="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    View any events that we have hosted in the past below!
                </p>
            </div>
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
            {
                pastEvents.map((event, index) => {
                    return (
                        <EventCard 
                        key={index}
                        imageUrl={event.imageUrl}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        description={event.description}
                        time={event.time}
                        endTime={event.endTime}
                        formattedDate={formatDate(event.date)}
                        formattedStartTime={convertTo12HourTime(event.time)}
                        formattedEndTime={convertTo12HourTime(event.endTime)}
                        upcoming={false}
                    />
                    )
                })
            }
            <div class="flex justify-center items-center mt-8 mb-10">
                <Button
                    href="/Events"
                    as={Link}
                    color="secondary"
                    variant="ghost"
                >
                    View Our Upcoming Events
                </Button>
            </div>
            </div>
        </div>
    );
};