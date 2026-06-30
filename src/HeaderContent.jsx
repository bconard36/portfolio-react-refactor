import headshot from './assets/professional_headshot.png'

const HeaderContent = () => {
    return ( 
        <div className="header-content">
            <div className="intro-text">
                <h2>Hi, I'm Billy!</h2>
                <p>Web Developer & Designer</p>
            </div>
            <img src={headshot} alt="a headshot picture of a person in a suit and tie." id="headshot" />
        </div>
     );
}
 
export default HeaderContent;