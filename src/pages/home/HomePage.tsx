import { Container } from '@mui/material';

import ArticleList from '../../components/ArticleList/ArticleList';
import SearchField from '../../components/Searchfield/SearchField';

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <SearchField />
      <ArticleList />
    </Container>
  );
};

export default HomePage;
