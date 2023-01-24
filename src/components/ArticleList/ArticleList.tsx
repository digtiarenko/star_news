import {
  Box,
  Button,
  Container,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import './articleList.scss';
import { useNavigate } from 'react-router-dom';
import mockdata from '../../utils/data.json';
import ArticleCard from '../ArticleCard/ArticleCard';

const ArticleList = () => {
  const navigate = useNavigate();
  // const handleArticleOpen = (id: number) => {
  //   navigate(`/${id}`);
  // };
  return (
    <>
      <Box className="list_container">
        {mockdata.map(article => {
          return (
            <ArticleCard
              keywords={'keywords'}
              key={article.id}
              article={article}
            />
          );
        })}
      </Box>
      <Box className="center_container">
        <Button
          className="loadMore_button"
          endIcon={<KeyboardDoubleArrowDownIcon />}
          size="small"

          // onClick={() => onOpen(article.id)}
        >
          Load more
        </Button>
      </Box>
    </>
  );
};

export default ArticleList;
