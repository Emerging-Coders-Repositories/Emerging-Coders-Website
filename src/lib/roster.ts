import type {
  RosterYear,
  YearlyBoard,
  ExecMember,
  ExecTeam,
} from "@/types/exec-board-type";
import {
  foundingExecutiveMembers,
  executiveMembers,
  ExecutiveBoard20232024,
} from "@/constants/executive-boards-list";
import {
  foundingJuniorExecutiveMembers,
  juniorExecutiveMembers,
} from "@/constants/junior-executive-boards-list";

function getLastName(member: ExecMember) {
  const name = member.name;
  const split = name.split(" ");
  return split[split.length - 1];
}

function sorted(roster: RosterYear[]): RosterYear[] {
  return roster.map((year) => ({
    ...year,
    teams: year.teams?.map((team) => ({
      ...team,
      executive: team.executive.sort((a, b) =>
        getLastName(a).localeCompare(getLastName(b))
      ),
      general: team.general.sort((a, b) =>
        getLastName(a).localeCompare(getLastName(b))
      ),
    })),
  }));
}

function convertExecBoardToRoster(
  year: string,
  exec: ExecMember[],
  junior: ExecMember[]
): RosterYear {
  const roleMap: Record<string, ExecMember[]> = {};

  exec.forEach((member) => {
    const role = member.role;
    if (!roleMap[role]) {
      roleMap[role] = [];
    }
    roleMap[role].push(member);
  });

  const teams: ExecTeam[] = Object.entries(roleMap).map(([role, members]) => ({
    name: role,
    executive: members,
    general: [],
  }));

  const juniorTeam: ExecTeam = {
    name: "Junior Executive Board",
    executive: [],
    general: junior,
  };

  teams.push(juniorTeam);

  return {
    year,
    teams,
  };
}

const currentExecRoster = convertExecBoardToRoster(
  "2024-2025",
  executiveMembers,
  juniorExecutiveMembers
);

const ExecutiveBoard2023to2024 = convertExecBoardToRoster(
  "2023-2024",
  foundingExecutiveMembers,
  foundingJuniorExecutiveMembers
);

const foundingExecRoster = convertExecBoardToRoster(
  "2022-2023",
  foundingExecutiveMembers,
  []
);

export const historicalRoster: RosterYear[] = sorted([
  currentExecRoster,
  ExecutiveBoard2023to2024,
  foundingExecRoster,
]);

export const execBoards: Record<string, YearlyBoard> = {
  "2024-2025": {
    year: "2024-2025",
    executiveBoard: executiveMembers,
    juniorExecutiveBoard: juniorExecutiveMembers,
  },
  "2023-2024": {
    year: "2023-2024",
    executiveBoard: ExecutiveBoard20232024,
    juniorExecutiveBoard: foundingJuniorExecutiveMembers,
  },
  "2022-2023": {
    year: "2022-2023",
    executiveBoard: ExecutiveBoard20232024,
    juniorExecutiveBoard: [],
  },
};
