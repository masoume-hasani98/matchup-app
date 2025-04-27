import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Card } from '@mui/material';
import { Game } from '@/types/matchup';

interface Last10GamesProps {
  games: Game[];
  title: string;
}

const Last10Games = ({ games, title }: Last10GamesProps) => {
  return (
    <Card className="p-4">
      <Typography variant="h6" className="mb-4">{title}</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>حریف</TableCell>
            <TableCell>نتیجه</TableCell>
            <TableCell>تاریخ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {games.map((game, index) => (
            <TableRow key={index}>
              <TableCell>{game.opponent}</TableCell>
              <TableCell className={game.result === 'W' ? 'text-green-600' : game.result === 'L' ? 'text-red-600' : 'text-gray-600'}>
                {game.result === 'W' ? 'برد' : game.result === 'L' ? 'باخت' : 'مساوی'}
              </TableCell>
              <TableCell>{new Date(game.date).toLocaleDateString('fa-IR')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default Last10Games;
