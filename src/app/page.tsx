'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMatchupData } from '@/services/matchupService';
import MatchupHeader from '@/components/MatchupHeader';
import { Container } from '@mui/material';
import { useMatchupStore } from '@/store/matchupStore';
import Last10Games from '@/components/LastGames';
import OddsTable from '@/components/OddTable';
import RelatedArticles from '@/components/RelatedArticle';
import BetSignals from '@/components/BestSignals';

export default function Home() {
  const { data, setData } = useMatchupStore();
  const { data: fetchedData } = useQuery({
    queryKey: ['matchup'],
    queryFn: getMatchupData,
  });

  useEffect(() => {
    if (fetchedData) setData(fetchedData);
  }, [fetchedData, setData]);

  if (!data) return null;

  return (
    <Container maxWidth="lg" className="py-10">
      <div className="flex flex-col gap-8">

        <div>
          <MatchupHeader
            teamA={data.teamA}
            teamB={data.teamB}
            startTime={data.startTime}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Last10Games games={data.pastGamesTeamA} title={`بازی‌های اخیر ${data.teamA.name}`} />
          <Last10Games games={data.pastGamesTeamB} title={`بازی‌های اخیر ${data.teamB.name}`} />
        </div>

        <div>
          <OddsTable odds={data.odds} />
        </div>

        <div>
          <RelatedArticles articles={data.articles} />
        </div>

        <div>
          <BetSignals />
        </div>

      </div>
    </Container>
  );
}
