import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme({
    typography: {
        fontFamily: '\'Quicksand\', sans-serif',
    },
    palette: {
        mode: 'dark',
    },
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default MyApp;