// "use client"
import React from "react"; 
import LandingPageCover from "../LandingPageCover/LandingPageCover";
import FeaturedImages from "../FeaturedImages/FeaturedImages";
import About from "../About/About";
import KeyPoints from "../KeyPoints/KeyPoints";
import PastEventsComponent from "../PastEventsComponent/PastEventsComponent";
export default function  LandingPage() {

    return (
        <div>
            <LandingPageCover /> 
            <About />
            <KeyPoints /> 
            <PastEventsComponent /> 
        </div>
    );
};
