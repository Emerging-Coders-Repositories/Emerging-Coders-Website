import ExecutiveBoardMemberCard from "@/pages/landing/meet-the-exec/exec-member-card";
import { executiveMembers } from "@/constants/executive-boards-list";
import { juniorExecutiveMembers } from "@/constants/junior-executive-boards-list";

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
          <ExecutiveBoardMemberCard member={member} />
        </div>
      ))}
    </div>
  );
}
