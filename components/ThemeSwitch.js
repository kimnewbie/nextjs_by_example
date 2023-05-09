import { useState } from 'react';
import DarkTheme from './DarkTheme';


function loadDarkMode() {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    const value = localStorage.getItem('darkMode');
    return (value === null) ? false : JSON.parse(value);
}

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(loadDarkMode);

    const handleClick = () => {
        // server side라서 localStorage에 저장해주어야 한다.
        // darkMode가 boolean이라 JSON.stringify를 해줌
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    console.log('[ThemeSwitch] darkMode:', darkMode);
    const text = darkMode ? 'Light Mode' : 'Dark Mode';
    return (
        <>
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
        button {
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
      `}</style>
            {darkMode && <DarkTheme />}
        </>
    );
}

export default ThemeSwitch;