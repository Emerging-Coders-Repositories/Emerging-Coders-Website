"use client";
import React from "react"; 
import { NextUIProvider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
export default function NotFound() {

    return (
    <div>
        <NextUIProvider>
            <NavigationBar />
            <div class="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center px-4 text-center text-black gap-5">
                    <h1 className="text-9xl font-bold">404</h1>
                    <h2 className="text-xl font-semibold">Looks like the page you're looking for doesn't exist ¯\_(ツ)_/¯</h2>
                    <Button color="secondary">
                        <a href="/">Go Home</a>
                    </Button>
                </div>
            </div>
            <Footer />
        </NextUIProvider>
    </div>
    );
};