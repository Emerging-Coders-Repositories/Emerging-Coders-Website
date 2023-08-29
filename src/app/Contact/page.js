"use client"
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";

export default function Page() {
    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <ContactComponent />
                <Footer />
            </NextUIProvider>
        </>
    );
};