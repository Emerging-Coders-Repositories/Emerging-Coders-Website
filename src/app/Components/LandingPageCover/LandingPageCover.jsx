// "use client"
import React from "react"; 
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import LandingPageCoverText from "../LandingPageCoverText/LandingPageCoverText";
// import "./LandingPageCover.css"
export default function LandingPageCover()  {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };


    return (
        <div class="relative h-screen">
                    <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                        modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                        }
                    },
                    particles: {
                        color: {
                        value: "#8a51fd"
                        },
                        links: {
                        color: "#8a51fd",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                        },
                        collisions: {
                        enable: true
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 1,
                        straight: false
                        },
                        number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                        },
                        opacity: {
                        value: 0.5
                        },
                        shape: {
                        type: "circle"
                        },
                        size: {
                        value: { min: 1, max: 5 }
                        }, 
                    },
                    fullScreen: {
                        enable: false,
                        // zIndex: 0
                    },
                    detectRetina: true
                    }}
                />
                <div class="absolute inset-0 flex items-center justify-center">
                    <LandingPageCoverText />
                </div>
        </div>
    );
};
