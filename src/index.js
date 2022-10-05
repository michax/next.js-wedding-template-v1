
// @mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import typography from './theme/typography';



// ----------------------------------------------------------------------


export default function ThemeProvider({ children }) {
    const theme = createTheme({
        mode: "light",
        typography: typography,

        palette: {
            primary: {
                main: '#FA541C',
                dark: '#212B36',
                darker: '#770508',
        
            },
            secondary: {
                light: '#FFFFF',
                main: "#F2779A",
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






    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
