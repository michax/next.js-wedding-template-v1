
// @mui
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import palette from './theme/palette';
import typography from './theme/typography';



// ----------------------------------------------------------------------


export default function ThemeProvider({ children }) {

    const themeOptions =({
        palette: palette.light,
        typography,
        shape: { borderRadius: 8 },
    }
    );

    const theme = createTheme(themeOptions);
    // theme.components = componentsOverride(theme);

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    );
}
