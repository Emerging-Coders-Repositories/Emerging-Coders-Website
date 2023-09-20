"use client"; 
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import SponsorsComponent from "../Components/SponsorsComponent/SponsorsComponent";
import Footer from "../Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <SponsorsComponent /> 
                <Footer />
            </NextUIProvider>
        </>
    );
};