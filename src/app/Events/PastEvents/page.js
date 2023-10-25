"use client"; 
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import PastEvents from "@/app/Components/PastEvents/PastEvents";
import NavigationBar from "@/app/Components/NavigationBar/NavigationBar";
import Footer from "@/app/Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <PastEvents /> 
                <Footer />
            </NextUIProvider>
        </>
    );
};