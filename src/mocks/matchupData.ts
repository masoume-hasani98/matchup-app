import { MatchupData } from '@/types/matchup';

export const mockMatchupData: MatchupData = {
  teamA: { name: 'Girona FC', logo: '/logos/girona.png' },
  teamB: { name: 'Real Betis', logo: '/logos/betis.png' },
  startTime: '2025-05-01T18:00:00Z',
  pastGamesTeamA: [
    { opponent: 'Barcelona', result: 'W', date: '2025-04-20' },
    { opponent: 'Valencia', result: 'L', date: '2025-04-17' },
    { opponent: 'Sevilla', result: 'D', date: '2025-04-14' },
  ],
  pastGamesTeamB: [
    { opponent: 'Villareal', result: 'L', date: '2025-04-22' },
    { opponent: 'Atletico', result: 'W', date: '2025-04-19' },
    { opponent: 'Bilbao', result: 'D', date: '2025-04-16' },
  ],
  odds: [
    { platform: 'Platform A', odds: '1.75' },
    { platform: 'Platform B', odds: '1.80' },
    { platform: 'Platform C', odds: '1.78' },
  ],
  articles: [
    { title: 'Preview: Girona vs Betis', link: '#' },
    { title: 'Top Predictions for Girona', link: '#' },
    { title: 'Will Betis Upset Girona?', link: '#' },
  ],
};
