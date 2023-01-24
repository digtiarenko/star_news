import {
  // Container,
  Typography,
  Button,
  // Paper,
  Box,
  Card,
  CardContent,
  CardMedia,
  // CardActionArea,
  // LinearProgress,
} from '@mui/material';
import Highlighter from 'react-highlight-words';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Article } from '../../types/types';
import { Link } from 'react-router-dom';
import './articleCard.scss';

type ArticleCardProps = {
  article: Article;
  keywords?: string;
  onOpen?: (id: number) => void;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  keywords,
  onOpen,
}) => {
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="180"
        image={article.imageUrl}
        alt={article.title}
      />
      <CardContent>
        <Box className="card_date">
          <CalendarMonthIcon
            className="card_date--icon"
            fontSize="small"
            color="secondary"
          />
          <Typography color="secondary" variant="subtitle2">
            {article.updatedAt}
          </Typography>
        </Box>
        <Box className="card_title">
          <Highlighter
            textToHighlight={article.title}
            searchWords={'keywords'.split(' ')}
            autoEscape={true}
          />
        </Box>
        <Box className="card_summary">
          <Highlighter
            textToHighlight={article.summary}
            searchWords={'keywords'.split(' ')}
          />
        </Box>
      </CardContent>
      <Button
        className="card_button"
        endIcon={<ArrowRightAltIcon className="card_button--icon" />}
        size="small"
        component={Link}
        to={`/article/${article.id}`}
      >
        Read more
      </Button>
    </Card>
  );
};

export default ArticleCard;
