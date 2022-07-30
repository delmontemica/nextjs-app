import type { NextPage } from 'next';
import styles from '../styles/module/Home.module.css';
import HeaderComponent from '../components/HeaderComponent';
import { Box, Button, TextField } from '@mui/material';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('username'),
            password: data.get('password'),
        });
        router.push('/dashboard');
    };

    return (
        <div className={styles.container}>
            <HeaderComponent title="Login" />
            <main className={styles.main}>
                <Box component="form"
                     onSubmit={handleSubmit}
                >
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal" />
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </main>

        </div>
    );
};

export default Home;
