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
            pronouns: "He/They",
            major: "Computer Science & Data Science",
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

    const juniorExecBoardMembers = [
        {
            role: "Junior Exec Board Member",
            name: "Kathy Cui",
            pronouns: "She/Her", 
            major: "Computer Science", 
            classStanding: "Sophomore",
            linkedin: "https://www.linkedin.com/in/",
            img: "/Kat.jpg", 
            email: "KathyCui2026@u.northwestern.edu", 
            website: "", 
        }, 
        {
            role: "Junior Exec Board Member", 
            name: "Yafet Hailu", 
            pronouns: "He/Him",
            major: "Computer Engineering & HCI Certificate",
            classStanding: "Sophomore",
            linkedin: "https://www.linkedin.com/in/yafet-hailu-a8b854205/",
            img: "/Yafet.jpg",
            email: "YafetHailu2026@u.northwestern.edu", 
            website: "", 
        }, 
        {
            role: "Junior Exec Board Member",
            name: "Mukhtar Handulle", 
            pronouns: "He/Him",
            major: "Computer Science",
            classStanding: "Freshmen",
            linkedin: "https://www.linkedin.com/in/mukhtar-handulle", 
            img: "/Mukhtar.jpg",
            email: "MukhtarHandulle2027@u.northwestern.edu", 
            website: "", 
        }, 
        {
            role: "Junior Exec Board Member",
            name: "Sydney Hoppenworth", 
            pronouns: "She/They",
            major: "Computer Science",
            classStanding: "Sophomore",
            linkedin: "https://www.linkedin.com/in/sydney-hoppenworth", 
            img: "/Sydney.jpg",
            email: "sydneyhoppenworth2026@u.northwestern.edu", 
            website: "",
        },
        {
            role: "Junior Exec Board Member",
            name: "Eden Kim", 
            pronouns: "She/Her",
            major: "Computer Science",
            classStanding: "Junior",
            linkedin: "",
            img: "/Eden.jpg",
            email: "edenkim2025@u.northwestern.edu", 
            website: "",
        }, 
        {
            role: "Junior Exec Board Member",
            name: "Ariel Garcia", 
            pronouns: "He/Him",
            major: "Computer Science",
            classStanding: "Freshmen",
            linkedin: "",
            img: "/Ariel.jpg",
            email: "ArielGarcia2027@u.northwestern.edu", 
            website: "",
        }, 
        {
            role: "Junior Exec Board Member", 
            name: "Samreen Ibrahim",
            pronouns: "She/Her",
            major: "Computer Science",
            classStanding: "Sophomore",
            linkedin: "",
            img: "/Samreen.jpeg",
            email: "",
            website: "",
        }, 
        {
            role: "Junior Exec Board Member", 
            name: "Arturo Fonseca", 
            process: "He/Him",
            major: "Computer Science & Data Science",
            classStanding: "Junior",
            linkedin: "https://www.linkedin.com/in/arturo-f/",
            img: "/Arturo.jpeg",
            email: "",
            website: "",
        },
    ]

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
                        <div class="mx-auto mb-8 max-w-screen-xl lg:mb-16">
                            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Meet the Emerging Coders Team</h2>
                        </div> 
                        <div class="mx-auto max-w-screen-sm">
                            <h3 class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Executive Board</h3>
                        </div>
                        <div class="mx-auto max-w-screen-xl lg:mb-16 mb-8">
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Our Executive Board members are passionate and dedicated to supporting our community and members. Each executive board member plays a pivotal role in the club, and is responsible for planning and executing events, managing the club, and supporting our members. If you have any questions about Emerging Coders, feel free to reach out to any of our executive board members!
                            </p>
                        </div>
                        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
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
                        <div class="mx-auto max-w-screen-sm lg:mb-4 mt-40">
                            <h3 class="mb-4 text-3xl tracking-light font-bold text-gray-900 dark:text-white">Junior Executive Board</h3>
                        </div>  
                        <div class="mx-auto max-w-screen-xl lg:mb-16 mb-8">
                            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Our Junior Executive Board (JEB) members are underclassmen who are passionate about technology and helping others by taking a leadership role within Emerging Coders. Every quarter, we allow our JEB to plan and execute events, and take on leadership roles in the club. Each member is given the opportunity to lead a project or event, and are given the resources and support to do so.
                            </p>
                        </div>
                        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
                            {juniorExecBoardMembers.map((member, index) => (
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