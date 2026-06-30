import School from "./School";
import PCC from './assets/portland-community-college-seal.png'
import NSMU from './assets/NMSU_seal_circle_enhanced.png'

const Education = () => {
    return ( 
        <>
            <hr />
            <section id="education">
                <h1>Education</h1>
                <div className="education-container">
                    <School 
                        figureClass="pcc"
                        img={PCC}
                        imgAlt="An image of Portland Community College's Seal"
                        imgClass="pcc-seal"
                        degree="Associate's of Applied Science"
                        field="Web Design & Development"
                        school="Portland Community College"
                        date="Spring 2026"
                    />
                    <School 
                        figureClass="pcc"
                        img={PCC}
                        imgAlt="An image of Portland Community College's Seal"
                        imgClass="pcc-seal"
                        degree="Certificate"
                        field="Database Design & SQL"
                        school="Portland Community College"
                        date="Spring 2026"
                    />
                    <School 
                        figureClass="nmsu"
                        img={NSMU}
                        imgAlt="An image of New Mexico State University's Seal"
                        imgClass="nmsu-seal"
                        degree="Bachelor's of Arts"
                        field="Communication Studies"
                        school="New Mexico State University"
                        date="Fall 2015"
                    />
                </div>
            </section>
        </>
     );
}
 
export default Education;