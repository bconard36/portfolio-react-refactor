import UXIcon from "./assets/UXIcon.svg?react";
import WebDevIcon from "./assets/webDevIcon.svg?react";
import DatabaseIcon from "./assets/databaseIcon.svg?react";
import CommIcon from "./assets/communicationIcon.svg?react";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <>
      <hr />
      <section id="skills">
        <h1>Skills</h1>

        <div className="skills-container">
          <SkillCard
            icon={WebDevIcon}
            wrapperClass="skill-icon-wrapper"
            figureClass="web-dev"
            caption="Web Development"
            info="I build full-stack applications with clean, well-structured code — from front-end interfaces to back-end architecture."
          />
          <SkillCard
            icon={UXIcon}
            wrapperClass="skill-icon-wrapper uiux"
            figureClass="ui-ux"
            caption="UI/UX Design"
            info="I design intuitive, accessible interfaces, translating wireframes and mockups into functional, user-first experiences."
          />

          <SkillCard
            icon={DatabaseIcon}
            wrapperClass="skill-icon-wrapper"
            figureClass="analysis"
            caption="Database &amp; Data Fluency"
            info="I design relational database schemas and write efficient SQL, with additional experience turning raw data into clear insights."
          />
          <SkillCard
            icon={CommIcon}
            wrapperClass="skill-icon-wrapper communication-skill"
            figureClass="communication"
            caption=" Leadership &amp; Communication"
            info="Years of leading teams taught me to communicate clearly, take ownership, and bridge the gap between technical and non-technical collaborators."
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
