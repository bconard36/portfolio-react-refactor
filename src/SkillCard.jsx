import { useState } from "react";

/**
 * Reusable skill card component for portfolio website
 * Holds the logic to show/hide the skill info text on mouse over events and on mobile tap events 
 * @param {Object} icon - svg file to be rendered 
 * @param {String} wrapperClass - className for the icon wrapper element 
 * @param {String} figureClass - className for the figure to hold the skill content 
 * @param {String} caption - caption for the SVG image 
 * @param {String} info - description of the skill 
 * @returns a reusable card component 
 */
const SkillCard = ({ icon, wrapperClass, figureClass, caption, info }) => {
    const Icon = icon;

    // Handle Desktop Hover 
    const [isHovered, setIsHovered] = useState(false);

    // Handle Mobile Tap 
    const handleTap = () => {
        // evt.preventDefault();
        setIsHovered(prev => !prev); // Double check this logic once tested in actual mobile setting
    }

    return ( 
        <>
            <figure className={figureClass}>
                <div className={wrapperClass}>
                    <Icon className="skill-icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchEnd={handleTap}/>
                </div>
                <figcaption className="skill-caption">{caption}</figcaption>
                <p className={isHovered ? "skill-info show" : "skill-info"}>{info}</p>
            </figure>
        </>
     );
}
 
export default SkillCard;