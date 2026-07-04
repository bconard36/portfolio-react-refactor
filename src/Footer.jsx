import LinkedInIcon from './assets/linked_in_icon.svg?react'
import GitHubIcon from './assets/github_icon.svg?react'
import EmailIcon from './assets/email_icon.svg?react'
import ResumeIcon from './assets/resume_graphic.svg?react'

const Footer = () => {
    return ( 
        <>
            <div className="socials">
                <a href="https://www.linkedin.com/in/williamconard/" target="_blank">
                    <LinkedInIcon className="social-icon-fill" />
                </a>
                <a href="https://github.com/bconard36" target="_blank">
                    <GitHubIcon className="social-icon-fill"/>
                </a>
                <a href="/">
                    <EmailIcon className="social-icon-fill"/>
                </a>
                <a href="/files/June2026_DeveloperResume.pdf" download="Billy Conard Resume - June 2026">
                    <ResumeIcon className="social-icon-fill"/>
                </a>
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} | Billy Conard's Portfolio Website | All rights reserved</p>
            </footer>
        </>
     );
}
 
export default Footer;
