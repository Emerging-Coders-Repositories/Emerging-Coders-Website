import React, { useState, useEffect } from "react";
import ExecBoardCards from "../ExecBoardCards/ExecBoardCards";
import { execBoard2023, juniorExecBoard2023 } from "./execBoard2023";
import { execBoard2024, juniorExecBoard2024 } from "./execBoard2024";

export default function ExecBoard() {
  const [visibleExecMembers, setVisibleExecMembers] = useState([]);
  const [visibleJuniorMembers, setVisibleJuniorMembers] = useState([]);
  const [currentYear, setCurrentYear] = useState(2024);
  const execBoards = {
    2024: { execBoard: execBoard2024, juniorExecBoard: juniorExecBoard2024 },
    2023: { execBoard: execBoard2023, juniorExecBoard: juniorExecBoard2023 },
  };

  const { execBoard, juniorExecBoard } = execBoards[currentYear];

  useEffect(() => {
    const execAnimationInterval = setInterval(() => {
      setVisibleExecMembers((prevVisible) => {
        if (prevVisible.length < execBoard.length) {
          return [...prevVisible, execBoard[prevVisible.length]];
        } else {
          clearInterval(execAnimationInterval);
          return prevVisible;
        }
      });
    }, 80);

    const juniorAnimationInterval = setInterval(() => {
      setVisibleJuniorMembers((prevVisible) => {
        if (prevVisible.length < juniorExecBoard.length) {
          return [...prevVisible, juniorExecBoard[prevVisible.length]];
        } else {
          clearInterval(juniorAnimationInterval);
          return prevVisible;
        }
      });
    }, 80);

    return () => {
      clearInterval(execAnimationInterval);
      clearInterval(juniorAnimationInterval);
    };
  }, [execBoard, juniorExecBoard]);

  // Function to set the year
  const handleYearChange = (year) => {
    setCurrentYear(year);
    setVisibleExecMembers([]); // Reset animation
    setVisibleJuniorMembers([]); // Reset animation
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-10 mx-auto max-w-screen-2xl text-center lg:py-16 lg:px-6">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Meet the Emerging Coders Team
          </h2>

          {/* Executive Board Section */}
          <div className="mx-auto max-w-screen-sm">
            <h3 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
              Executive Board - {currentYear}
            </h3>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {execBoard.map((member, index) => (
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
                isVisible={visibleExecMembers[index]}
                founder={member.founder}
              />
            ))}
          </div>

          {/* Junior Executive Board Section */}
          <div className="mx-auto max-w-screen-sm lg:mb-4 mt-40">
            <h3 className="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
              Junior Executive Board
            </h3>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-8">
            {juniorExecBoard.map((member, index) => (
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
                isVisible={visibleJuniorMembers[index]}
              />
            ))}
          </div>

          {/* Year Selection Buttons */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-4 p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
              {Object.keys(execBoards).map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearChange(parseInt(year))}
                  className={`px-4 py-2 rounded-lg text-white ${
                    currentYear === parseInt(year)
                      ? "bg-gray-900 dark:bg-gray-700"
                      : "bg-gray-500 dark:bg-gray-600"
                  } hover:bg-gray-800 transition duration-200`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
