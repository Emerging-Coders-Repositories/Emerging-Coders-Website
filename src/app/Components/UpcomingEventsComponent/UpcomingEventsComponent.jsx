import React from "react"; 
import { useState, useEffect } from "react"; 
import { supabase } from '../../../../src/client'; 
import { Progress } from "@nextui-org/react";
import EventCard from "../EventCard/EventCard";
// import 'add-to-calendar-button';
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
            <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px- flex justify-center items-center flex-col">
                <div class="bg-white dark:bg-gray-900 min-h-screen gap-4">
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
            <div class="bg-white dark:bg-gray-900 flex justify-center items-center flex-col gap-4">
                <h2 class="mb-4 text-2xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
                    We don't have any upcoming events at the moment. Please check back later!
                </h2>
            </div>
        )
    }


    // case for if there are upcoming events
    return (
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
                {
                events.map((event,   index) => (
                    <EventCard 
                        key={index}
                        imageUrl={event.imageUrl}
                        title={event.title}
                        location={event.location}
                        date={event.date}
                        description={event.description}
                        time={event.time}
                        endTime={event.endTime}
                        formattedStartTime={convertTo12HourTime(event.time)}
                        formattedEndTime={convertTo12HourTime(event.endTime)}
                        formattedDate={formatDate(event.date)}
                        upcoming={true}
                    />
                ))
            }
            </div>
    );
};