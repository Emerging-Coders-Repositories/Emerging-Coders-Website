import React from "react"; 
import { useState, useEffect } from "react"; 
import { supabase } from '../../../../src/client'; 
import { Progress } from "@nextui-org/react";

export default function UpcomingEventsComponent() {

    // state to hold all of the upcoming events
    const [events, setEvents] = useState([]);
    const [fetchingError, setIsFetchingError] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    // function to fetch all of the upcoming events
    const fetchUpcomingEvents = async () => {

        // get todays date
        let todaysDate = new Date().toISOString();

        // fetch all of the upcoming events
        try {
            // using supabase to fetch all of the upcoming events
            await supabase
            .from("eventData")
            .select()
            .order('date', { ascending: false })
            // we only wants the events that are upcoming, not the ones that have already passed
            .gte('date', todaysDate)
            .then((results) => {
                console.log(results.data); 
                setEvents(results.data);
                setIsFetching(false); 
            })
            // error handling
            .catch((err) => {
                setIsFetchingError(true);
            });
            // error handling
        } catch (err) {
            console.log("error", err);
            setIsFetchingError(true);
        };
    }; 

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



    

    // useEffect to fetch all of the upcoming events
    useEffect(() => {
        fetchUpcomingEvents();
    }, []);

    // case for if there is an error fetching the upcoming events
    if (fetchingError) {
        return (
            <div class="m-0 mx-auto">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4 max-w-screen-md m-0 mx-auto">
                    <h2 class="mb-4 text-xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        There was an error fetching our upcoming events. If you would like to see upcoming events, please look at our instagram, <a class="text-purple-700" href="https://www.instagram.com/nu.emergingcoders/">@nuemergingcoders</a> 
                    </h2>
                </div>
            </div>
        );
    };

    // case for if we are fetching the upcoming events
    if (isFetching) {

        return (
            <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                    <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                        Fetching upcoming events...
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

    // case for if there are no upcoming events
    if (events.length === 0 && !isFetching) {
        
        return (
            <div class="bg-white dark:bg-gray-900 min-h-screen flex justify-center items-center flex-col gap-4">
                <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    We don't have any upcoming events at the moment. Please check back later!
                </h2>
            </div>
        )
    }


    // case for if there are upcoming events
    return (
        <div class="bg-white dark:bg-gray-900 min-h-screen">
            <div class="py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Upcoming Events</h2>
                <p class="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Check out our upcoming events! If you would like to see more, please visit our instagram, <a class="text-purple-700" href="https://www.instagram.com/nu.emergingcoders/">@nuemergingcoders</a> 
                </p>
            </div>
            <div class="grid-cols-1 sm:grid md:grid-cols-3 py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
                {
                events.map((event,   index) => (
                    <div key={index} class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
                        <img
                        class="rounded-t-lg"
                        src={event.imageUrl}
                        alt="Hollywood Sign on The Hill" />
                        <div class="p-6">
                        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {event?.title || "No title"}
                        </h5>
                        <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {event?.location || "No location"}
                        </h6>
                        <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {formatDate(event?.date) || "No date"}
                        </h6> 
                        <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                            {event?.time || "No time"} - {event?.endTime || "No end time"}
                        </h6> 
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            {event?.description || "No description"}
                        </p>  
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};