import {
  Box,
  Container,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './searchfield.scss';

const SearchField = () => {
  return (
    <Container maxWidth="lg">
      <Box className="search">
        <Typography className="search_text">Filter by keywords</Typography>
        <TextField
          placeholder="Search article"
          size="small"
          //   onChange={event => handleFilterChange(event.target.value)}
          className="search_bar"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Typography className="search_text">
          {/* {{displayArticles.length} ? `Results ${displayArticles.length}` : `No matching results :(`} */}
          10
        </Typography>
      </Box>
    </Container>
  );
};

export default SearchField;
