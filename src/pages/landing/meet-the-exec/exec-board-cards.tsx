import React from "react";
import Link from "next/link";

// Define types for executive member data
interface ExecMember {
  name: string;
  role: string;
  major: string;
  additionalInfo?: string;
  year?: string;
  pronouns: string;
  image: string;
  linkedin?: string;
  email?: string;
  isisFound?: boolean;
}

const executiveMembers: ExecMember[] = [
  {
    role: "President",
    name: "Safiya Menk",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/safiyamenk/",
    image: "https://emergingcoders.org/Safiya.jpeg",
    email: "safiyamenk2025@u.northwestern.edu",
    isisFound: true,
  },
  {
    role: "Vice President",
    name: "Ethan Piñeda",
    pronouns: "He/They",
    major: "Computer Science & Data Science",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/ethanpineda/",
    image: "https://emergingcoders.org/Ethan.jpeg",
    email: "ethanpineda2025@u.northwestern.edu",
    isisFound: true,
  },
  {
    role: "Secretary",
    name: "Sydney Hoppenworth",
    pronouns: "She/They",
    major: "Computer Science",
    year: "Junior",
    linkedin: "https://www.linkedin.com/in/sydney-hoppenworth",
    image: "https://emergingcoders.org/Sydney.jpg",
    email: "sydneyhoppenworth2026@u.northwestern.edu",
  },
  {
    role: "Social Media Chair",
    name: "Eden Kim",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Junior",
    linkedin: "",
    image: "https://emergingcoders.org/Eden.jpg",
    email: "edenkim2025@u.northwestern.edu",
  },
  {
    role: "Treasurer",
    name: "Samreen Ibrahim",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Junior",
    linkedin: "",
    image: "https://emergingcoders.org/Samreen.jpeg",
    email: "",
  },
  {
    role: "Webmaster",
    name: "Desmond Yayra",
    pronouns: "He/They",
    major: "Computer Science",
    year: "Senior",
    linkedin: "https://www.linkedin.com/in/ethanpineda/",
    image: "https://emergingcoders.org/Desmond.jpg",
    email: "desmondadanuty2025@u.northwestern.edu",
  },
  {
    role: "Professional Liaison",
    name: "Yafet Hailu",
    pronouns: "He/Him",
    major: "Computer Engineering & HCI Certificate",
    year: "Junior",
    linkedin: "https://www.linkedin.com/in/yafet-hailu-a8b854205/",
    image: "https://emergingcoders.org/Yafet.jpg",
    email: "YafetHailu2026@u.northwestern.edu",
  },
];

const juniorExecBoard2024 = [
  {
    role: "Junior Exec Board Member",
    name: "Acton Healy",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    img: "/jeb_2024/Acton.jpeg",
    email: "actonhealy2028@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Xiaolin Liu",
    pronouns: "She/Her",
    major: "Computer Science & Data Science",
    year: "Junior",
    linkedin: "",
    img: "/jeb_2024/Xiaolin Liu.jpeg",
    email: "xiaolinliu2026@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Lana Alnajm",
    pronouns: "She/Her",
    major: "Computer Science & Legal Studies",
    year: "Freshman",
    linkedin: "",
    img: "/jeb_2024/Lana.jpeg",
    email: "lanaalnajm@gmail.com",
  },
  {
    role: "Junior Exec Board Member",
    name: "Faris Eltayib",
    pronouns: "He/Him",
    major: "Computer Engineering",
    year: "Sophomore",
    linkedin: "",
    img: "/jeb_2024/Eltayib.jpg",
    email: "fariseltayib2027@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Joanna Echeverri",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Sophomore",
    linkedin: "",
    img: "/jeb_2024/Joanna.jpg",
    email: "joannaecheverriporras2027@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Alejandro Chavarria",
    pronouns: "He/Him",
    major: "Industrial Engineering",
    year: "Junior",
    linkedin: "",
    img: "/jeb_2024/Alejandro.jpg",
    email: "alejandrochavarriagonzalez2026@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Abem Girmai",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    img: "/jeb_2024/Abem.jpg",
    email: "abemgirmai2028@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Omotayo Oludemi",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Sophomore",
    linkedin: "",
    img: "/jeb_2024/Omotayo.jpeg",
    email: "omotayooludemi2027@u.northwestern.edu",
  },

  {
    role: "Junior Exec Board Member",
    name: "Marissa Rocha",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    img: "/jeb_2024/Marissa.jpeg",
    email: "marissarocharangel2028@u.northwestern.edu",
  },

  {
    role: "Junior Exec Board Member",
    name: "Diego Perez-Aguilar",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    img: "/jeb_2024/Perez-Aguilar.jpeg",
    email: "diegoperez-aguilar2028@u.northwestern.edu",
  },
];

const juniorExecutiveMembers: ExecMember[] = [
  {
    role: "Junior Exec Board Member",
    name: "Acton Healy",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Acton.jpeg",
    email: "actonhealy2028@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Xiaolin Liu",
    pronouns: "She/Her",
    major: "Computer Science & Data Science",
    year: "Junior",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Xiaolin%20Liu.jpeg",
    email: "xiaolinliu2026@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Lana Alnajm",
    pronouns: "She/Her",
    major: "Computer Science & Legal Studies",
    year: "Freshman",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Lana.jpeg",
    email: "lanaalnajm@gmail.com",
  },
  {
    role: "Junior Exec Board Member",
    name: "Faris Eltayib",
    pronouns: "He/Him",
    major: "Computer Engineering",
    year: "Sophomore",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Eltayib.jpg",
    email: "fariseltayib2027@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Joanna Echeverri",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Sophomore",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Joanna.jpg",
    email: "joannaecheverriporras2027@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Alejandro Chavarria",
    pronouns: "He/Him",
    major: "Industrial Engineering",
    year: "Junior",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Alejandro.jpg",
    email: "alejandrochavarriagonzalez2026@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Abem Girmai",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Abem.jpg",
    email: "abemgirmai2028@u.northwestern.edu",
  },
  {
    role: "Junior Exec Board Member",
    name: "Omotayo Oludemi",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Sophomore",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Omotayo.jpeg",
    email: "omotayooludemi2027@u.northwestern.edu",
  },

  {
    role: "Junior Exec Board Member",
    name: "Marissa Rocha",
    pronouns: "She/Her",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Marissa.jpeg",
    email: "marissarocharangel2028@u.northwestern.edu",
  },

  {
    role: "Junior Exec Board Member",
    name: "Diego Perez-Aguilar",
    pronouns: "He/Him",
    major: "Computer Science",
    year: "Freshman",
    linkedin: "",
    image: "https://emergingcoders.org/jeb_2024/Perez-Aguilar.jpeg",
    email: "diegoperez-aguilar2028@u.northwestern.edu",
  },
];

const MemberCard = ({ member }: { member: ExecMember }) => {
  return (
    <div className="flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1 text-base">
      <div className="w-24 h-24 mb-3 overflow-hidden rounded-full">
        <img
          src={member.image}
          alt={`${member.name}'s photo`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const imgElement = e.target as HTMLImageElement;
            imgElement.src = "https://via.placeholder.com/150";
          }}
        />
      </div>
      <h3 className="text-lg font-bold text-white">{member.name}</h3>
      <p className="text-sm text-gray-300 mb-1">{member.role}</p>
      <p className="text-xs text-gray-400">{member.major}</p>

      {member.additionalInfo && (
        <p className="text-xs text-gray-500 mt-1">{member.additionalInfo}</p>
      )}

      <div className="flex flex-col mt-1">
        <p className="text-xs text-gray-500">{member.year}</p>
        <p className="text-xs text-gray-500">{member.pronouns}</p>
      </div>
      <div className="flex mt-2 space-x-3">
        {member.linkedin && (
          <Link
            href={member.linkedin}
            target="_blank"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        )}

        {member.email && (
          <Link
            href={member.email}
            className="text-gray-500 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
};

export default function ExecutiveBoardCards({
  boardType,
}: {
  boardType: "executive" | "junior";
}) {
  const members =
    boardType === "executive" ? executiveMembers : juniorExecutiveMembers;

  return (
    <div className="flex flex-wrap justify-center gap-12">
      {members.map((member, index) => (
        <div key={index} className="w-40">
          <MemberCard member={member} />
        </div>
      ))}
    </div>
  );
}
