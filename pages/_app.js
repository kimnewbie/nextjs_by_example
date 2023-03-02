import NavBar from "../components/NavBar";
import '../styles/globals.css';

/**
 * 공통된 레이아웃
 */


function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    )
}

export default App;