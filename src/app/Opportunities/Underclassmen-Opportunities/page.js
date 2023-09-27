"use client"; 
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import UnderclassmenOpportunitiesTable from "../../Components/UnderclassmenOpportunitiesTable/UnderclassmenOpportunitiesTable";
import Footer from "../../Components/Footer/Footer";


export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <UnderclassmenOpportunitiesTable />
                <Footer /> 
            </NextUIProvider>
        </>
    );
};