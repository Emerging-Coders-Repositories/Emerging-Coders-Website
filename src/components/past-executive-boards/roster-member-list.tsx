import type { ExecMember } from "@/types/exec-board-type";
import { Fragment } from "react";

interface RosterMemberListProps {
  title?: string;
  members: ExecMember[];
  horizontal?: boolean;
  bold?: boolean;
}

export default function RosterMemberList({
  title,
  members,
  horizontal,
  bold,
}: RosterMemberListProps) {
  return (
    <div className="mt-0.5">
      {title && (
        <h4 className="text-xs font-bold text-neutral-600 uppercase">
          {title}
        </h4>
      )}
      <ul className={`list-none ${horizontal ? "flex" : ""}`}>
        {members.length > 0 ? (
          members.map((member, j) => (
            <Fragment key={j}>
              <li
                className={`text-base ${
                  bold
                    ? "font-medium text-gray-200"
                    : "font-normal text-gray-200"
                }`}
              >
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-white hover:decoration-white"
                  >
                    {member.name}
                  </a>
                ) : (
                  <span>{member.name}</span>
                )}
              </li>
              {horizontal && j < members.length - 1 && (
                <span className="text-gray-600"> • </span>
              )}
            </Fragment>
          ))
        ) : (
          <li className="text-base font-normal text-gray-500 italic">
            No members
          </li>
        )}
      </ul>
    </div>
  );
}
