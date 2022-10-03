
// @mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import palette from './theme/palette';
import typography from './theme/typography';



// ----------------------------------------------------------------------


export default function ThemeProvider({ children }) {
    const theme = createTheme({
        mode: "light",
        typography: typography,
        // breakpoints: {
        //     values: {
        //         xs: 0,
        //         sm: 600,
        //         md: 1340,
        //         lg: 1570,
        //         xl: 1536,
        //     },
        // },

        palette: {
            primary: {
                main: '#FA541C',
                dark: '#212B36',
                darker: '#770508',
            },
            secondary: {
                main: "#68D8EA",
            },
            text: {
                primary: "#212B36",

            },
            info: {
                main: "#2094D5",
            },
            error: {
                main: "#B40516",
            },
        },
    });





    // theme.components = componentsOverride(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
