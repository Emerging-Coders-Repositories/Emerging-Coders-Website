export interface ExecMember {
  name: string;
  role: string;
  major: string;
  additionalInfo?: string;
  year?: string;
  pronouns: string;
  image: string;
  linkedin?: string;
  email?: string;
  isFounder?: boolean;
}

export interface ExecTeam {
  name: string;
  executive: ExecMember[];
  general: ExecMember[];
}

export interface RosterYear {
  year: string;
  chairs?: ExecMember[];
  teams?: ExecTeam[];
  error?: string;
}

export interface YearlyBoard {
  year: string;
  executiveBoard: ExecMember[];
  juniorExecutiveBoard: ExecMember[];
}
