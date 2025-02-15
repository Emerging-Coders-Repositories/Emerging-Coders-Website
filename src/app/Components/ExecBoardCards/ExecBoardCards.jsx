import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

export default function ExecBoardCards({
  role,
  name,
  pronouns,
  major,
  classStanding,
  linkedin,
  img,
  email,
  website,
  isVisible,
  founder,
}) {
  return (
    <div
      class={`text-center text-gray-500 dark:text-gray-400 transform transition-opacity ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      <div class="text-center text-gray-500 dark:text-gray-400">
        <Image
          src={img}
          alt={`Picture of ${name}`}
          width={144}
          height={144}
          className="mx-auto mb-4 w-36 h-36 rounded-full object-cover"
        />

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href={website ? website : linkedin} target="blank">
            {name}
          </a>
        </h3>
        <p class="font-bold text-gray-900">{major}</p>
        {founder && <p>Founding Exec Member</p>}
        <p>{role}</p>
        <p>{classStanding}</p>
        <p>{pronouns}</p>
        <ul class="flex justify-center mt-4 space-x-4">
          <li>
            <a
              href={linkedin}
              class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
              target="blank"
            >
              <LinkedInIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${email}`}
              class=" hover:text-gray-900 dark:hover:text-white"
            >
              <EmailIcon fontSize="medium" sx={{ color: "black" }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
