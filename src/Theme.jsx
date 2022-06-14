import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#133676',
      dark: '#2e85d4', // Hover colour which in our case is a lighter colour
    },
    secondary: {
      main: '#2e85d4',
    },
    text: {
      primary: '#000000',
    },
    background: {
      default: '#ffffff',
    },
    error: {
      main: '#E02826',
    },
    success: {
      main: '#00AD50',
      light: '#48C830',
    },
    divider: '#707070',
  },
  typography: {
    fontFamily: ['Montserrat', 'serif'].join(','),
    h1: {
      fontSize: 18,
      fontWeight: 400,
    },
    h2: {
      fontSize: 22,
      fontWeight: 700,
      fontFamily: 'Montserrat',
      letterSpacing: '.1em',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: 20,
      },
    },
    h3: {
      fontSize: 18,
      fontWeight: 700,
    },
    h4: {
      fontSize: 14,
      fontWeight: 600,
    },
    h5: {
      fontSize: 14,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
    },
    body1: {
      fontSize: 18,
      fontWeight: 500,
    },
    body2: {
      fontSize: 16,
      '@media (max-width:600px)': {
        fontSize: 14,
      },
    },
    caption: {
      fontSize: 14,
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          color: '#000',
          '&:hover': {
            background: 'transparent',
            color: '#2e85d4',
          },
        },
        startIcon: {
          marginRight: '4px',
          '& > :nth-of-type(1)': {
            fontSize: '22px',
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          background: 'rgb(221 221 221 / 50%)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFF',
          p: 0,
          boxShadow:
            '0px 1px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          '& .MuiTooltip-arrow': {
            color: 'var(--white)',
          },
          '.MuiTooltip-arrow: before': {
            boxShadow: '1px 1px 1px 0px rgb(0 0 0 / 25%)',
          },
        },
      },
    },
  },
});
