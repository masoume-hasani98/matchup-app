import { Typography, Table, TableBody, TableCell, TableHead, TableRow, Card } from '@mui/material';
import { Odds } from '@/types/matchup';

interface OddsTableProps {
  odds: Odds[];
}

const OddsTable = ({ odds }: OddsTableProps) => {
  return (
    <Card className="p-4">
      <Typography variant="h6" className="mb-4">ضرایب پیش‌بینی</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>پلتفرم</TableCell>
            <TableCell>ضریب</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {odds.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.platform}</TableCell>
              <TableCell>{item.odds}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default OddsTable;
