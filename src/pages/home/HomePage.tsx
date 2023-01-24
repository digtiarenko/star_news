import {
  Box,
  Button,
  Container,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';

import ArticleList from '../../components/ArticleList/ArticleList';
import SearchField from '../../components/Searchfield/SearchField';
import ArticlePage from '../article/ArticlePage';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <SearchField />
      <ArticleList />
    </Container>
  );
};

export default HomePage;
