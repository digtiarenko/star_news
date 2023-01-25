import { Box, Button, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
// import { useDispatch, useSelector } from 'react-redux';
import ArticleCard from '../ArticleCard/ArticleCard';
import { useGetArticlesQuery } from '../../redux/articleAPI';
import { Article } from '../../types/types';
import Loader from '../Loader/Loader';
import {
  useAppDispatch,
  useAppSelector,
  getPage,
  increment,
} from '../../redux/paginationSlice';
import './articleList.scss';
import { getFilter } from '../../redux/filterSlice';
import { filterArticlesByKeywords } from '../../utils/filterFunction';

const ArticleList = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector(getPage);
  const { data, isLoading } = useGetArticlesQuery(page);
  const filterValue = useAppSelector(getFilter);
  const filterArray: string[] = filterValue.trim().split(' ');

  const filterArticles = filterValue
    ? filterArticlesByKeywords(data!, filterArray)
    : data;

  return (
    <>
      {isLoading && <Loader />}
      {data && (
        <>
          <Typography className="search_text">
            Results: {data.length}
          </Typography>
          <Box className="list_container">
            {filterArticles?.map((article: Article) => {
              return (
                <ArticleCard
                  keywords={filterValue}
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
              onClick={() => dispatch(increment())}
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
// Scroll
// useEffect(() => {
//   if (data && data.length > 9) {
//     window.scrollBy({
//       top: window.innerHeight * 0.8,
//       behavior: 'smooth',
//     });
//   }
// }, [data]);
