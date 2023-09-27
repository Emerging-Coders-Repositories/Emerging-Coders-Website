"use client";
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import OpportunitiesComponent from "@/app/Components/SWEOpportunitiesComponent/SWEOpportunitiesComponent"; 
import Footer from "../../Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <OpportunitiesComponent />
                <Footer /> 
            </NextUIProvider>
        </>
    );
};