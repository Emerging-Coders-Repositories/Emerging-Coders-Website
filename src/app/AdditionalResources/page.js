"use client"; 
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import ResourcesComponent from "../Components/ResourcesComponent/ResourcesComponent";
import Footer from "../Components/Footer/Footer";

export default function Page() {

    return (
        <>
            <NextUIProvider>
                <NavigationBar /> 
                <ResourcesComponent />
                <Footer />
            </NextUIProvider>
        </>
    );
};