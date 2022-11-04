import { createTheme, responsiveFontSizes } from '@mui/material';
import { InfoColorsTypes, PrimaryColorsTypes, SecondaryColorsTypes } from 'types/styles/ThemeTypes';

const PRIMARY: PrimaryColorsTypes = {
  main: '#1A3C60'
};

const SECONDARY: SecondaryColorsTypes = {
  main: '#F2F2F2',
  light: '#FFFFFF'
};

const INFO: InfoColorsTypes = {
  main: '#DC823D'
};

const theme = createTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO
  },

  typography: {
    fontSize: 16,
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '6rem',
      fontWeight: 500
    }
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            border: `solid 1px ${PRIMARY.main}`,
            color: PRIMARY.main,
            backgroundColor: SECONDARY.main,
            borderRadius: '4px',
            '&:hover': {
              border: `solid 1px ${PRIMARY.main}`,
              backgroundColor: SECONDARY.main,
              boxShadow: `0px 2px 15px -1px ${PRIMARY.main}`
            }
          }
        },
        {
          props: { variant: 'contained' },
          style: {
            textTransform: 'none',
            textAlign: 'center',
            border: `solid 1px ${PRIMARY.main}`,
            color: SECONDARY.main,
            backgroundColor: PRIMARY.main,
            borderRadius: '4px',
            '&:hover': {
              border: `solid 1px ${PRIMARY.main}`,
              backgroundColor: PRIMARY.main,
              boxShadow: `0px 2px 15px -1px ${PRIMARY.main}`
            }
          }
        }
      ]
    }
  }
});

const responsiveFontTheme = responsiveFontSizes(theme);
export default responsiveFontTheme;
