export type ResultType = 'W' | 'L' | 'D';

export interface Team {
  name: string;
  logo: string;
}

export interface Game {
  opponent: string;
  result: ResultType;
  date: string;
}

export interface Odds {
  platform: string;
  odds: string;
}

export interface Article {
  title: string;
  link: string;
}

export interface MatchupData {
  teamA: Team;
  teamB: Team;
  startTime: string;
  pastGamesTeamA: Game[];
  pastGamesTeamB: Game[];
  odds: Odds[];
  articles: Article[];
}
