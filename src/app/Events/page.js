"use client"
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import UpcomingEventsComponent from "../Components/UpcomingEventsComponent/UpcomingEventsComponent";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <UpcomingEventsComponent />
                <Footer />
            </NextUIProvider>
        </>
    );
};