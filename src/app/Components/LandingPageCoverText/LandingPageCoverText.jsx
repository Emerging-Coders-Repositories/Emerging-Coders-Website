import React from "react"; 
import { Button } from "@nextui-org/react";
import FadeInAnimation from "../FadeInAnimation/FadeInAnimation.jsx";

export default function LandingPageCoverText() {

    return (
        <div class="flex flex-col items-center justify-center px-4 text-center text-black gap-5">
            <FadeInAnimation>
                <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl">Emerging Coders</h1>
                <p class="mt-2 text-lg md:text-xl lg:text-2xl">Northwestern University's Community of First-Generation and Low-Income Technologist</p>
                <div class="flex flex-row justify-center mt-6 space-x-4 gap-2">
                    <Button color="secondary"  onPress={() => window.open("https://groupme.com/join_group/89417887/c1x6DI3U", "_blank")}>
                        Join
                    </Button>
                    <Button color="secondary">
                        <a href="#About" name="About">About</a>
                    </Button>
                </div>
            </FadeInAnimation>
        </div>
    );
}; 