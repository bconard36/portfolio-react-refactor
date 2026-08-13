import ProjectCard from "./ProjectCard";
import SkuSuks from './assets/SkuSucks_ScreenShot.png';
import Momentum from './assets/momentum.png'
import PHT from './assets/portland_historical_tours_screenshot.png';
import DataImg from './assets/Python-and-SQL.png';
import Tableay from './assets/tableauProfile.png'
import PCC from './assets/pcc-food-pantry.png';
import Fitness from './assets/fitness.png';
import Woodworks from './assets/conards_woodworks_screenshot.png';

const Projects = () => {
    return ( 
        <> 
            <hr />
            <section id="projects">

                <h1>Portfolio Projects</h1>
                <div id="project-list">
                    <ProjectCard 
                        title="Momentum"
                        img={momentum}
                        description="A fitness tracking application in development that allows users to create, manage, and review personalized workouts."
                        process="Built the front-end with React Hook Form and React Router, then designed a relational PostgreSQL database and integrated Supabase for sign in and sign out authentication."
                        outcome="An ongoing full-stack project that has strengthened my skills in React, form management, authentication, relational database design, and back-end development."
                        technologies="React, React Router, React Hook Form, Vite, JavaScript, Supabase, HTML, CSS"
                        link="https://github.com/bconard36/Momentum"
                    />
                    <ProjectCard 
                        title="Pantry Connect"
                        img={PCC}
                        description="A full-stack pantry notification system built with a team to help PCC communicate food, availability, events, and updates to students."
                        process="Focused on the back-end authentication system, building secure account creation, sign-in, and password reset functionality with password hashing, token-based verification, and email delivery."
                        outcome="Implemented a secure authentication workflow that strengthened my experience with back-end devlopment, user security, password management, and email-based account recovery."
                        technologies="Node.js, Express, MSSQL, bcrypt, Nodemailer"
                        link="https://github.com/bconard36/PCC-Food-Pantry-Notification-System"
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
                        title="Data Visualizations with Tableau"
                        img={Tableau}
                        description="A collection of interactive Tableau dashboards exploring trends and insights across real-world and cleaned datasets."
                        process="Cleaned, analyzed and transformed datasets using SQL and DuckDB, then developed interactive visualizations in Tableau to explore patterns and communicate findings."
                        outcome="Built a growing data visualization portfolio that combines SQL, data preparation, and visual storytelling to turn raw data into actionable insights."
                        technologies="Tableau, DuckDB + VS Code, Kaggle"
                        link="https://public.tableau.com/app/profile/billy.conard/vizzes"
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
                        title="Data Analysis Projects"
                        img={DataImg}
                        description="A centralized GitHub repository housing a collection of data analytics projects built with industry-standard tools and real-world datasets."
                        process="Applied SQL for querying and transforming relational data, Python (via JupyterLab) for data manipulation and exploratory analysis, and Tableau for designing interactive dashboards and communicating visual insights."
                        outcome="Demonstrates end-to-end analytics capability — from raw data to actionable insight — across a diverse set of real-world scenarios."
                        technologies="SQL, SQL Server, Oracle Database, PL/SQL, T-SQL, Python, Tableau, JupyterLab, GitHub"
                        link="https://github.com/bconard36/Data_Analytics_Projects/tree/main"
                    />
                </div>
            </section>
        </>
     );
}
 
export default Projects;
