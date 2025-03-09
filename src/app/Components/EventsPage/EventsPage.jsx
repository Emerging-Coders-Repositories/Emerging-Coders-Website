import React from "react";
import UpcomingEventsComponent from "../UpcomingEventsComponent/UpcomingEventsComponent";
import { Button, Link } from "@nextui-org/react";

export default function EventsPage() {

    return (
        <div className="bg-white min-h-screen">
            <div className="py-2 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-light font-extrabold text-center text-gray-900 dark:text-white">
                    View Our Events Below
                </h2>
                <p className="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    We have a lot of events coming up in the future! Feel free to check them out below and sign up for any that interest you! You can also view any events that we have already hosted in the past.
                </p>
            </div>
            <UpcomingEventsComponent />
            <div className="flex justify-center items-center mt-8 mb-10">
                <Button
                    href="/Events/PastEvents"
                    as={Link}
                    color="secondary"
                    variant="ghost"
                >
                    View Our Past Events
                </Button>
            </div>
        </div>
    );
};
