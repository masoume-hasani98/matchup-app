import Image from 'next/image';
import { useCountdown } from '@/hooks/useCountdown';
import { Typography, Box } from '@mui/material';

interface MatchupHeaderProps {
  teamA: { name: string; logo: string };
  teamB: { name: string; logo: string };
  startTime: string;
}

const MatchupHeader = ({ teamA, teamB, startTime }: MatchupHeaderProps) => {
  const [hours, minutes, seconds] = useCountdown(startTime);
  const isGameStarted = new Date() > new Date(startTime);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-2xl shadow-md">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center">
          <Image src={teamA.logo} alt={teamA.name} width={80} height={80} />
          <Typography variant="subtitle1">{teamA.name}</Typography>
        </div>
        <Typography variant="h5" className="font-bold">VS</Typography>
        <div className="flex flex-col items-center">
          <Image src={teamB.logo} alt={teamB.name} width={80} height={80} />
          <Typography variant="subtitle1">{teamB.name}</Typography>
        </div>
      </div>

      {isGameStarted ? (
        <Typography variant="h6" color="green">
          بازی در حال انجام یا انجام شده است!
        </Typography>
      ) : (
        <Box className="flex gap-4">
          <Typography variant="h6" color="primary">{hours}h</Typography>
          <Typography variant="h6" color="primary">{minutes}m</Typography>
          <Typography variant="h6" color="primary">{seconds}s</Typography>
        </Box>
      )}
    </div>
  );
};

export default MatchupHeader;
