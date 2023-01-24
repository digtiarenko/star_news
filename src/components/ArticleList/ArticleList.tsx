import { Box, Button, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useGetArticlesQuery } from '../../redux/articles/articleAPI';
import { Article } from '../../types/types';
import Loader from '../Loader/Loader';
import {
  useAppDispatch,
  useAppSelector,
  selectCount,
} from '../../redux/pagination/paginationSlice';
import './articleList.scss';

const ArticleList = () => {
  const page = useAppSelector(selectCount);
  console.log('page:', page);
  // const numberOfArticlesToFetch = page;
  const { data, isLoading } = useGetArticlesQuery(page);

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <>
          <Typography className="search_text">Results: {page}</Typography>
          <Box className="list_container">
            {data.map((article: Article) => {
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
            >
              Load more
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default ArticleList;
