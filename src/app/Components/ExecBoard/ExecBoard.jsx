import React from "react"; 
import { useState, useEffect } from "react"; 
import ExecBoardCards from "../ExecBoardCards/ExecBoardCards";

export default function ExecBoard() {

    const [visibleMembers, setVisibleMembers] = useState([]);

    const execBoardMembers = [
        {
            role: "President",
            name: "Emran Majidy",
            pronouns: "He/Him",
            major: "Computer Science",
            classStanding: "Junior", 
            linkedin: "https://www.linkedin.com/in/emranm/",
            img: "/Emran.jpeg",
            email: "emranmajidy2025@u.northwestern.edu",
            website: "", 
        }, 
        {
            role: "Vice President",
            name: "Amiin Muse",
            pronouns: "He/Him",
            major: "Computer Science & Data Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/amiin-muse/",
            img: "/Amiin.jpeg",
            email: "amiinmuse2025@u.northwestern.edu", 
            website: "", 
        },
        {
            role: "Vice President", 
            name: "Chisara Ojiako",
            pronouns: "He/Him",
            major: "Computer Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/godfrey-ojiako/",
            img: "/Chisara.jpeg",
            email: "godfreyojiako2025@u.northwestern.edu", 
            website: "", 
        },
        {
            role: "Secretary",
            name: "Attzy Rodriguez",
            pronouns: "She/Her",
            major: "Cognitive Science & Design Certificate",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/attzy-rodriguez-887917206/",
            img: "/Attzy.jpeg",
            email: "attzyrodriguez2025@u.northwestern.edu",
            website: "", 
        },
        {
            role: "Treasurer",
            name: "Safiya Menk",
            pronouns: "She/Her",
            major: "Computer Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/safiyamenk/",
            img: "/Safiya.jpeg",
            email: "safiyamenk2025@u.northwestern.edu", 
            website: "", 
        },
        {
            role: "Social Media Chair",
            name: "Audrey Benitez-Rojo",
            pronouns: "She/Her",
            major: "Computer Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/aixabenitezrojo/",
            img: "/Audrey.jpeg",
            email: "audreybenitezrojo2025@u.northwestern.edu",
            website: "", 
        },
        {
            role: "Webmaster",
            name: "Ethan Piñeda",
            pronouns: "He/Him",
            major: "BA/MS Computer Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/ethanpineda/",
            img: "/Ethan.jpeg",
            email: "ethanpineda2025@u.northwestern.edu",
            website: "https://ethanpaneraa.github.io/Ethan/"
        },
        {
            role: "Professional Liaison",
            name: "Donell Makuvire",
            pronouns: "He/Him",
            major: "Computer Science",
            classStanding: "Sophomore",
            linkedin: "https://www.linkedin.com/in/donell-makuvire/",
            img: "/Don.jpeg",
            email: "donellmakuvire2026@u.northwestern.edu", 
            website: "", 
        },
    ];

    useEffect(() => {
        const animationInterval = setInterval(() => {
          setVisibleMembers((prevVisible) => {
            if (prevVisible.length < execBoardMembers.length) {
              return [...prevVisible, execBoardMembers[prevVisible.length]];
            } else {
              clearInterval(animationInterval);
              return prevVisible;
            }
          });
        }, 80);
        return () => {
          clearInterval(animationInterval);
        };
      }, [execBoardMembers, visibleMembers]);


    return (
        <div>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
                        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet the Emerging Coders Team</h2>
                            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
                                We are a team of first-generation and low-income students at Northwestern University who are passionate about technology and helping others.
                                Have any questions or want to get involved? Feel free to reach out to us!
                            </p>
                        </div> 
                        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {execBoardMembers.map((member, index) => (
                                <ExecBoardCards 
                                    key={index}
                                    role={member.role}
                                    name={member.name}
                                    pronouns={member.pronouns}
                                    major={member.major}
                                    classStanding={member.classStanding}
                                    linkedin={member.linkedin}
                                    img={member.img}
                                    email={member.email}
                                    website={member.website}
                                    isVisible={visibleMembers[index]}
                                />
                            ))}
                        </div>  
                    </div>
                </section>
        </div>
    )
}