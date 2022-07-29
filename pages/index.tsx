import type { NextPage } from 'next';
import styles from '../styles/module/Home.module.css';
import { Button, TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import HeaderComponent from "../components/HeaderComponent";

const Home: NextPage = () => {
    const form = useForm({
        initialValues: { username: '', password: '' },

        validate: {
            username: (value) => (value.length === 0 ? 'Please input your username.' : null),
            password: (value) => (value.length === 0 ? 'Please input your password.' : null),
        },
    });

    return (
        <div className={styles.container}>
            <HeaderComponent title="Login" />

            <main className={styles.main}>
                <form onSubmit={form.onSubmit(console.log)}>
                    <TextInput
                        placeholder="Input your username"
                        label="Username"
                        {...form.getInputProps('username')}
                    />
                    <PasswordInput
                        placeholder="Input your password"
                        label="Password"
                        {...form.getInputProps('password')}
                    />

                    <Button type="submit" mt="sm">
                        Login
                    </Button>
                </form>
            </main>

        </div>
    );
};

export default Home;
