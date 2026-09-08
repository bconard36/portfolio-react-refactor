/**
 * Button Component for Portfolio Website 
 * Tracks and modifies state to show/hide a welcome message 
 */
import { useState } from "react";

const Button = () => {

    const [isVisible, setIsVisible] = useState(false);

    const displayWelcome = () => {
        setIsVisible(prevState => !prevState);
    }

    return ( 
        <>
            <div className="button-container">
                <button id="greet-button" onClick={displayWelcome}>Click to Say Hi!</button>
                <div id="greet-message" className={isVisible ? "show" : ""}>👋 Welcome to my portfolio page!</div>
            </div>
        </>
     );
}
 
export default Button;