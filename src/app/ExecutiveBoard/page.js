"use client"
import React from "react"; 
import {NextUIProvider} from "@nextui-org/react";
import ExecBoard from "../Components/ExecBoard/ExecBoard";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Footer from "../Components/Footer/Footer";
export default function Page() {
    return (
        <>
            <NextUIProvider>
                <NavigationBar />
                <ExecBoard />
                <Footer /> 
            </NextUIProvider>
        </>

    );
}