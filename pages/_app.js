/**
 * 공통된 레이아웃
 */

import NavBar from "../components/NavBar";

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