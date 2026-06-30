import headshot from './assets/professional_headshot.png'

const HeaderContent = () => {
    return ( 
        <div className="header-content">
            <div className="intro-text">
                <h2>Hi, I'm Billy!</h2>
                <p className="hook">Web Developer, Data Analyst, and UX-Focused Designer</p>
                <p className="statement">I build responsive web applications and turn data into clear, actionable insights.</p>
            </div>
            <img src={headshot} alt="a headshot picture of a person in a suit and tie." id="headshot" />
        </div>
     );
}
 
export default HeaderContent;