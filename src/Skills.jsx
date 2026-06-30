import UXIcon from './assets/UXIcon.svg?react'
import WebDevIcon from './assets/webDevIcon.svg?react'
import AnalysisIcon from './assets/analysisIcon.svg?react'
import CommIcon from './assets/communicationIcon.svg?react'
import SkillCard from "./SkillCard";


const Skills = () => {   

    return ( 
        <>
            <hr />
            <section id="skills">
                <h1>Skills</h1>
            
                <div className="skills-container">
                    <SkillCard
                        icon={UXIcon}
                        wrapperClass="skill-icon-wrapper uiux"
                        figureClass="ui-ux"
                        caption="UI/UX Design"
                        info="I create intuitive, accessible designs that blend usability with a clean, engaging user experience."
                    />
                    <SkillCard 
                        icon={WebDevIcon}
                        wrapperClass="skill-icon-wrapper"
                        figureClass="web-dev"
                        caption="Web Development"
                        info="I build responsive, efficient websites that bring creative ideas to life through clean, well-structured code."
                    />
                    <SkillCard 
                        icon={AnalysisIcon}
                        wrapperClass="skill-icon-wrapper"
                        figureClass="analysis"
                        caption="Business & Data Analysis"
                        info="I turn complex data into clear insights that support smarter design and business decisions."
                    />
                    <SkillCard 
                        icon={CommIcon}
                        wrapperClass="skill-icon-wrapper communication-skill"
                        figureClass="communication"
                        caption="Communication"
                        info="I communicate ideas clearly and effectively to bridge the gap between technical and creative teams."
                    />
                </div>
            </section>
        </>
     );
}
 
export default Skills;