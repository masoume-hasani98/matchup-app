import { Typography, Card, List, ListItem, Link } from '@mui/material';
import { Article } from '@/types/matchup';

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <Card className="p-4">
      <Typography variant="h6" className="mb-4">مقالات مرتبط</Typography>
      <List>
        {articles.map((article, index) => (
          <ListItem key={index}>
            <Link href={article.link} target="_blank" rel="noopener noreferrer" color="primary">
              {article.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default RelatedArticles;
