import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: "'Quicksand', sans-serif",
    },
    palette: {
        mode: 'dark',
    },
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={ theme }>
            <Component { ...pageProps } />
        </ThemeProvider>
    );
}

export default MyApp;