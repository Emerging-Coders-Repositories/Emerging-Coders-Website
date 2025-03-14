import ExecutiveBoardMemberCard from "@/pages/landing/meet-the-exec/exec-member-card";
import { executiveMembers2526 } from "@/constants/executive-boards-list";
import { juniorExecutiveMembers2526 } from "@/constants/junior-executive-boards-list";

export default function ExecutiveBoardCards({
  boardType,
}: {
  boardType: "executive" | "junior";
}) {
  const members =
    boardType === "executive"
      ? executiveMembers2526
      : juniorExecutiveMembers2526;

  return (
    <div className="flex flex-wrap justify-center gap-12">
      {members.map((member, index) => (
        <div key={index} className="w-40">
          <ExecutiveBoardMemberCard member={member} />
        </div>
      ))}
    </div>
  );
}
