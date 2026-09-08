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
                I build web applications with an eye for clean architecture and
                thoughtful user experience — software that's designed through
                the eyes of the person using it. My education in web
                development, database design, and SQL gave me a solid technical
                foundation, and I bring the same care to the details that don't
                show up in a demo: reliability, clear structure, and following
                through on what I start.
              </p>
            </div>
            <div className="column">
              <p>
                Before development, I spent 6+ years leading teams and
                operations in fast-paced, high-accountability environments. That
                background shapes how I build now — high standards for
                reliability, usability, and functionality. I'm currently looking
                for a web devlopment role, front-end or full-stack, where I can
                bring both halves of that experience to a team building real
                projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
