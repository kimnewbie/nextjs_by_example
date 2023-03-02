import Head from 'next/head';
import NavBar from "../components/NavBar";
import '../styles/globals.css';

/**
 * 공통된 레이아웃
 */


function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/icons/favicon.ico"></link>
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    )
}

export default App;