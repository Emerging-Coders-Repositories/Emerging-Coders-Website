import React from "react"; 
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function EventCard({imageUrl, title, date, time, endTime, description, location, formattedDate, formattedStartTime, formattedEndTime}) {

    console.log(imageUrl, title, date, time, endTime, description, location)

    // name="Sample Event"
    // description="Play with me!"
    // startDate="2023-10-10"
    // startTime="10:15"
    // endTime="17:45"
    // timeZone="America/Chicago"
    // location="World Wide Web"
    // options="'Apple','Google','Outlook.com','Yahoo'"
    // hideIconModal
    // hideBackground
    // hideCheckmark
    // size="4"

    return (
        <div class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
            <img
                class="rounded-t-lg"
                src={imageUrl}
                alt={`The event flyer for Emerging Coders ${title} event`} />
            <div class="p-6 ">
                <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title || "No title"}
                </h5>
                <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {location || "No location"}
                </h6>
                <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {formattedDate || "No date"}
                </h6> 
                <h6 class="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {formattedStartTime|| "No time"} - {formattedEndTime || "No end time"}
                </h6> 
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {description || "No description"}
                </p>  
                </div>
                <div class="flex justify-center mb-5">
                    <AddToCalendarButton 
                        name={`Emerging Coders: ${title}`}
                        description={description}
                        startDate={date}
                        startTime={time}
                        endTime={endTime}
                        timeZone="America/Chicago"
                        location="World Wide Web"
                        options="'Apple','Google','Outlook.com'"
                        hideIconModal
                        hideBackground
                        hideCheckmark
                        size="4"
                    />
                </div>
        </div>
    );
};