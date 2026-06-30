import Button from "./Button";

const About = () => {
    return ( 
        <>
            <hr />
            <section id="about">
                <h1>About Me</h1>
                <Button />
                <div className="about-container">
                    <div className="bio-text">
                        <div className="column">
                            <p>
                                I design and build web experiences with a focus on clarity, accessibility, 
                                and thoughtful user interaction. My education in web development and design, 
                                combined with self-motivated projects and hands-on experience in data analysis 
                                using Python, SQL and Tableau give me a perspective that bridges visual design 
                                concepts with evidence-based decision making. 
                            </p>
                        </div>
                        <div className="column">
                            <p>
                                A Bachelor's in Communication Studies, alongside years of leadership and customer service
                                experience, has sharpened my ability to communicate clearly, collaborate effectively, and 
                                advocate for the user. I'm actively seeking opportunities in web development, UI/UX 
                                design, or data analytics, where I can bring my full range of skills to a thoughtful, 
                                tech-focused team. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default About;