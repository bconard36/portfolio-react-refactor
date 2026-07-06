import ProjectCard from "./ProjectCard";
import SkuSuks from './assets/SkuSucks_ScreenShot.png';
import PHT from './assets/portland_historical_tours_screenshot.png';
import DataImg from './assets/Python-and-SQL.png';
import FoodTruck from './assets/cropped_burrito_masala.png';
import PCC from './assets/pcc-food-pantry.png';
import Fitness from './assets/fitnessCalculator.png';
import Woodworks from './assets/conards_woodworks_screenshot.png';

const Projects = () => {
    return ( 
        <> 
            <hr />
            <section id="projects">

                <h1>Portfolio Projects</h1>
                <div id="project-list">
                    <ProjectCard 
                        title="Pantry Connect"
                        img={PCC}
                        description="A full-stack notification system built with a team to help PCC's food pantry communicate with students about availability and events."
                        process="Collaborated with a team to design and build a secure account system, including registration, login, and password reset with hashed tokens and email-based verification."
                        outcome="A production-ready authentication system — secure registration, login, and password reset — built using industry-standard practices like password hashing and token expiration."
                        technologies="Node.js, Express, MSSQL, bcrypt, Nodemailer"
                        link="https://github.com/bconard36/PCC-Food-Pantry-Notification-System"
                    />
                    <ProjectCard 
                        title="SkuSuks E-Commerce Application"
                        img={SkuSuks}
                        description="A custom-built e-commerce website for a real clothing brand client, currently live and awaiting Shopify integration."
                        process="Worked directly with the client through an iterative design and development process — translating their vision into a fully functional, branded storefront using Figma for prototyping and hand-coded HTML, CSS, and JavaScript for the build."
                        outcome="Delivered a live, production-ready website deployed via Vercel. Shopify credentials are pending for full store functionality — demonstrating real-world client collaboration and end-to-end delivery."
                        technologies="React, Vercel, Shopify API, HTML/CSS, JavaScript, GitHub"
                        link="https://sku-suks-react-refactor.vercel.app/"
                    />
                    <ProjectCard 
                        title="Conard's Woodworks"
                        img={Woodworks}
                        description="A custom-built portfolio and quote-request website for a real woodworking business client, showcasing handcrafted pieces and streamlining custom order inquiries."
                        process="Worked directly with the client to design and build a clean, gallery-focused site that highlights their craftsmanship — using hand-coded HTML, CSS, and JavaScript to create a fast, responsive storefront-style experience without traditional e-commerce checkout."
                        outcome="Delivered a live, production-ready website deployed via Vercel, featuring a photo gallery and integrated contact form for custom quote requests — demonstrating client collaboration and a practical alternative to full e-commerce for service-based inquiries."
                        technologies="React, Vite, Vercel, HTML/CSS, JavaScript, EmailJS, GitHub"
                        link="https://conards-woodworks.vercel.app/"
                    />
                    <ProjectCard 
                        title="Data Analysis Projects"
                        img={DataImg}
                        description="A centralized GitHub repository housing a collection of data analytics projects built with industry-standard tools and real-world datasets."
                        process="Applied SQL for querying and transforming relational data, Python (via JupyterLab) for data manipulation and exploratory analysis, and Tableau for designing interactive dashboards and communicating visual insights."
                        outcome="Demonstrates end-to-end analytics capability — from raw data to actionable insight — across a diverse set of real-world scenarios."
                        technologies="SQL, Python, Tableau, JupyterLab, GitHub"
                        link="https://github.com/bconard36/Data_Analytics_Projects/tree/main"
                    />
                    <ProjectCard 
                        title="CalorieTrack"
                        img={Fitness}
                        description="A custom-coded fitness calculator program that computes BMI, BMR, and TDEE based on user input, with plans to expand into a full application."
                        process="Originally built in Python, then converted to JavaScript for web deployment and future feature development."
                        outcome="A working calculator engine that's become the starting point for a full fitness tracking application I'm currently developing."
                        technologies="HTML, CSS, JavaScript, Python"
                        link="https://bconard36.github.io/Fitness-Calculator-Programs/"
                    />
                    <ProjectCard 
                        title="Portland Historical Tours"
                        img={PCC}
                        description="A responsive, multi-page website built for a fictional tour company based in Portland, OR — designed mobile-first from the ground up."
                        process="Architected and coded the full site from scratch using semantic HTML and CSS, applying mobile-first principles and accessibility best practices throughout."
                        outcome="Delivered a polished, fully responsive site optimized across all major device breakpoints. Earned a perfect score meeting all design and development requirements."
                        technologies="HTML/CSS, JavaScript, GitHub"
                        link="https://bconard36.github.io/Portland-Historical-Tours/"
                    />
                </div>
            </section>
        </>
     );
}
 
export default Projects;
