import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

const primaryColor = green[400];
const secondaryColor = green[600];

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
    },
    shape: {
        borderRadius: 5,
    },

    components: {
    MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1.8vh',
            color: "white",
            fontWeight: 700,
          },
          sizeMedium: {
              fontSize: '1.5vh'
          }
        },
      },
    },

    MuiTextField: {
        styleOverrides: {
            root: {
                minWidth: '200px',
                '&:hover': {
                    border: secondaryColor
                }
            }
        }
    }
});

export default theme;