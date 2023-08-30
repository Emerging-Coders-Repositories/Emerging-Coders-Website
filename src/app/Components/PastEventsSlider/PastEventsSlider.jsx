import React from "react"; 

export default function PastEventsSlider({
}) {


    const images = [
        "/Apple.JPG", 
        "/EmergingLeetCoders.JPG", 
        "/IceCreamSocial.JPG", 
        "/ProfHeadshot.JPG", 
        "/ResumeWorkshop.JPG",
        "/ScavengerHunt.JPG",
    ];

    return (

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    {images.map((image, index) => (
        <div key={index}>
            <img class="h-auto max-w-full rounded-lg" src={image} alt="" />
        </div>
    ))}
</div>
    );
};