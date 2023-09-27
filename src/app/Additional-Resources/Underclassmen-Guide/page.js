"use client"; 
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/Components/NavigationBar/NavigationBar";
import UnderclassmenGuide from "@/app/Components/UnderclassmenGuide/UnderclassmenGuide";
import Footer from "@/app/Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <UnderclassmenGuide /> 
                <Footer />
            </NextUIProvider>
        </>
    );
};