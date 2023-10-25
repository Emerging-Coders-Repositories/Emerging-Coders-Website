import React from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

export default function EventCard({
    imageUrl,
    title,
    date,
    time,
    endTime,
    description,
    location,
    formattedDate,
    formattedStartTime,
    formattedEndTime, 
    upcoming, 
}) {
    return (
        <div className="mx-3 mt-6 p-4 bg-white rounded-lg shadow-lg dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 md:flex md:flex-row mb-7">
            <img
                className="rounded-lg w-full md:w-1/3 md:mr-4"
                src={imageUrl}
                alt={`The event flyer for Emerging Coders ${title} event`}
            />
            <div className="mt-4 md:mt-0 md:flex-grow">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {title || "No title"}
                </h5>
                <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {location || "No location"}
                </h6>
                <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {formattedDate || "No date"}
                </h6>
                <h6 className="mb-2 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {formattedStartTime || "No time"} - {formattedEndTime || "No end time"}
                </h6>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {description || "No description"}
                </p>
                {upcoming && (
                    <div className="flex justify-center mb-5">
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
                )}
            </div>
        </div>
    );
};
