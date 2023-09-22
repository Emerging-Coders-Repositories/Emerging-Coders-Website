"use client";
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "@/app/Components/NavigationBar/NavigationBar";
import TechnicalsGuide from "@/app/Components/TechnicalsGuide/TechnicalsGuide";
import Footer from "@/app/Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <TechnicalsGuide /> 
                <Footer />
            </NextUIProvider>
        </>
    );
};