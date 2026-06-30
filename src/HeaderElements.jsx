import { useEffect, useState } from "react";
import personalLogo from './assets/Personal_Logo.png'
const HeaderElements = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(true); // State replaces toggle button    

    useEffect(() => {
        if (!isDarkMode) {
            document.documentElement.classList.add("light-mode");
            document.body.classList.add("light-mode");
        } 

        if (isDarkMode) {
            document.documentElement.classList.remove("light-mode");
            document.body.classList.remove("light-mode");
        }


    }, [isDarkMode]);

    return ( 
        <>
        <header>
            <div className="header-top">
                <img src={personalLogo} alt="The letters B and C with text and a computer graphic." id="logo" />
                <button id="light-mode" onClick={() => setIsDarkMode(!isDarkMode)}>{
                        isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
                    }</button>
            </div>
            {children}
        </header>
        </>
     );
}
 
export default HeaderElements;