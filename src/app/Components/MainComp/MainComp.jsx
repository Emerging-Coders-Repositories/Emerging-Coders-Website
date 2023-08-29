"use client"

import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import { NextUIProvider } from "@nextui-org/react";
export default function MainComp() {

    return (
        <div>
            <NextUIProvider>
                <NavigationBar />
                <LandingPage />
                <Footer />
            </NextUIProvider>
        </div>
    )
}