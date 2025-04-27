import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface Odds {
  platform: string;
  team1Odds: number;
  team2Odds: number;
}

const BettingOdds: React.FC<{ odds: Odds[] }> = ({ odds }) => {
  return (
    <div>
      <h2 className="text-3xl">Betting Odds</h2>
      {odds.map((odd, index) => (
        <Card key={index} className="m-4">
          <CardContent>
            <Typography variant="h6">{odd.platform}</Typography>
            <Typography>Team 1 Odds: {odd.team1Odds}</Typography>
            <Typography>Team 2 Odds: {odd.team2Odds}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BettingOdds;
