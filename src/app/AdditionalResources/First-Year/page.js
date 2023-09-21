"use client"; 
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/Components/NavigationBar/NavigationBar";
import FirstYearGuide from "@/app/Components/FirstYearGuide/FirstYearGuide";
import Footer from "@/app/Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <FirstYearGuide />
                <Footer />
            </NextUIProvider>
        </>
    );
};