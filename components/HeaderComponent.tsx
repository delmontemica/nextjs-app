import Head from 'next/head';

type Props = {
    title: string,
}

const HeaderComponent = (props: Props) => {
    const { title } = props;
    const appTitle = `Finance app - ${ title }`;

    return (
        <Head>
            <title>{ appTitle }</title>
            <meta name="description" content="Finance app made with Next.js" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default HeaderComponent;
