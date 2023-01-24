import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary: {
      main: '#9e9e9e',
    },
    secondary: {
      main: '#a4a7b8',
    },
  },
});
