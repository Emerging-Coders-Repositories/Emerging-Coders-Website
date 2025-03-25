import { RosterYear } from "@/types/exec-board-type";
import RosterMemberList from "./roster-member-list";

interface RosterSectionProps {
  data: RosterYear;
}

export default function RosterSection({ data }: RosterSectionProps) {
  const sortedTeams = data.teams?.slice().sort((a, b) => {
    if (a.name === "Junior Executive Board") return 1;
    if (b.name === "Junior Executive Board") return -1;

    const roleOrder = [
      "President",
      "Vice President",
      "Secretary",
      "Treasurer",
      "Social Media Chair",
      "Webmaster",
      "Professional Liaison",
    ];

    const aIndex = roleOrder.indexOf(a.name);
    const bIndex = roleOrder.indexOf(b.name);

    if (aIndex >= 0 && bIndex >= 0) return aIndex - bIndex;
    if (aIndex >= 0) return -1;
    if (bIndex >= 0) return 1;

    return a.name.localeCompare(b.name);
  });

  return (
    <div className="my-18 text-white" id={data.year}>
      <h2 className="text-3xl font-bold text-white mb-4 pb-6 border-b border-neutral-800">
        {data.year} Executive Board
      </h2>

      {data.error && <p className="text-red-300 mb-4">{data.error}</p>}

      {sortedTeams && (
        <div className="flex flex-wrap">
          {sortedTeams.map((team) => {
            const isJuniorBoard = team.name === "Junior Executive Board";
            return (
              <div
                key={team.name}
                id={`${data.year}-${team.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className={
                  isJuniorBoard
                    ? "w-full"
                    : "w-full md:w-1/2 lg:w-1/3 pr-8 mb-4"
                }
              >
                {!isJuniorBoard && (
                  <h3 className="text-base text-neutral-500 font-extrabold uppercase flex items-center gap-2">
                    {team.name}
                  </h3>
                )}

                {isJuniorBoard && team.general.length > 0 && (
                  <h3 className="text-base text-neutral-500 font-extrabold uppercase flex items-center gap-2">
                    {team.name}
                  </h3>
                )}

                {team.executive.length > 0 && (
                  <RosterMemberList members={team.executive} bold />
                )}

                {team.general.length > 0 && (
                  <RosterMemberList members={team.general} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
