import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
  LinearProgress,
} from '@mui/material';
import './articlePage.scss';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import items from '../../utils/data.json';
import { useParams, Link } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();
  const data = items.find(item => item.id === Number(id));
  console.log(id);

  return (
    <Container className="article_container" maxWidth="lg">
      <img className="article_image" src={data?.imageUrl} alt={data?.title} />
      <Paper className="article_content">
        <Typography className="article_content--title">
          {data?.title}
        </Typography>
        <Typography className="article_summary">{data?.summary}</Typography>

        <Box className="article_center_container">
          <Button
            startIcon={
              <KeyboardBackspaceIcon className="article_button--icon" />
            }
            className="article_content--button"
            component={Link}
            to={'/'}
          >
            Back to homepage
          </Button>
          <Button
            endIcon={<NewspaperIcon className="article_button--icon" />}
            className="article_content--button"
            component={'a'}
            target="_blanc"
            href={data?.url}
          >
            Read the article
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ArticlePage;
