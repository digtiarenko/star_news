import CircularProgress from '@mui/material/CircularProgress';
import { Box, Stack } from '@mui/material';
import './loader.scss';

const Loader = () => {
  return (
    <Box className="loader_container">
      <Stack className="loader_box" spacing={4} direction="row">
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
