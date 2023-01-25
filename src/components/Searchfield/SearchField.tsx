import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchfield.scss';
import {
  useAppDispatch,
  changeFilter,
  getFilter,
  useAppSelector,
} from '../../redux/filterSlice';

const SearchField = () => {
  const dispatch = useAppDispatch();

  const filterValue = useAppSelector(getFilter);

  const onChangeFilter = (event: { target: { value: any } }) => {
    const { value } = event.target;
    if (value === ' ') {
      return;
    }
    dispatch(changeFilter(value));
  };

  return (
    <Container maxWidth="lg">
      <Box className="search">
        <Typography className="search_text">Filter by keywords</Typography>
        <TextField
          value={filterValue}
          placeholder="Search article"
          size="small"
          onChange={onChangeFilter}
          className="search_bar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
};

export default SearchField;
