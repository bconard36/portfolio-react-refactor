import ProjectCard from "./ProjectCard";
import SkuSuks from "../assets/SkuSucks_ScreenShot.png";
import Momentum from "../assets/momentum.png";
import DataImg from "../assets/Python-and-SQL.png";
import Tableau from "../assets/tableauProfile.png";
import PCC from "../assets/pcc-food-pantry.png";
import Woodworks from "../assets/conards_woodworks_screenshot.png";

const Projects = () => {
  return (
    <>
      <hr />
      <section id="projects">
        <h1>Portfolio Projects</h1>
        <div id="project-list">
          <ProjectCard
            title="Momentum"
            img={Momentum}
            description="A full-stack workout tracking app built to solve my own need for structured, easy-to-follow progress logging."
            process="Built the front-end with React Hook Form and React Router for validated, multi-step workout entry, then designed a relational PostgreSQL schema and integrated Supabase for authentication and database operations."
            outcome="A deployed, actively-used application that sharpened my skills in schema design, authentication, form validation, and full-stack architecture — and the project I'm still building on today."
            technologies="React, React Router, React Hook Form, Vite, JavaScript, Supabase, PostgreSQL, HTML, CSS"
            link="https://momentum-workout-tracking.vercel.app/"
          />
          <ProjectCard
            title="Pantry Connect"
            img={PCC}
            description="A full-stack food pantry notification system built with a team to help PCC communicate availability, events, and updates to students in real time."
            process="Owned the back-end authentication system end-to-end — building secure account creation, sign-in, and password reset with bcrypt password hashing, token-based reset verification, and email delivery via Nodemailer."
            outcome="Delivered a secure, production-ready authentication workflow, deepening my experience with back-end development, user security, and account recovery — all within a team-built application."
            technologies="Node.js, Express, MSSQL, bcrypt, Nodemailer"
            link="https://github.com/bconard36/PCC-Food-Pantry-Notification-System"
          />
          <ProjectCard
            title="Conard's Woodworks"
            img={Woodworks}
            description="A custom-built storefront and quote-request website for a real woodworking business client, showcasing handcrafted pieces and streamlining custom order inquiries."
            process="Worked directly with the client from concept through delivery — starting with Figma wireframes and an InDesign pitch deck, then hand-coding a clean, gallery-focused React site built for speed and responsiveness without a full e-commerce checkout."
            outcome="Delivered a live, production website with an integrated quote-request form and email notifications via EmailJS — a practical, right-sized alternative to full e-commerce for a service-based business."
            technologies="React, Vite, Vercel, HTML/CSS, JavaScript, EmailJS, GitHub, Figma, InDesign"
            link="https://conards-woodworks.vercel.app/"
          />

          <ProjectCard
            title="SkuSuks E-Commerce Application"
            img={SkuSuks}
            description="A custom-built e-commerce storefront for a real clothing brand client, live and awaiting Shopify integration for full store functionality."
            process="Worked directly with the client through an iterative design process — translating their brand vision into a functional storefront using Figma for prototyping and hand-coded HTML, CSS, and JavaScript for the build."
            outcome="Delivered a live, production-ready site demonstrating real-world client collaboration and end-to-end delivery, with Shopify integration pending to complete the checkout flow."
            technologies="React, React Hook Form, Vercel, Shopify API, HTML/CSS, JavaScript, GitHub"
            link="https://sku-suks-react-refactor.vercel.app/"
          />
          <section id="data-projects">
            <h2>Data & Analytics</h2>
            <p className="section-intro">
              Alongside development, I keep a hand in data work — SQL, Python,
              and Tableau applied to real-world datasets.
            </p>
            <div id="data-project-list">
              <ProjectCard
                title="Data Visualizations with Tableau"
                img={Tableau}
                description="A collection of interactive Tableau dashboards exploring trends and insights across real-world and cleaned datasets."
                process="Cleaned, analyzed, and transformed datasets using SQL and DuckDB, then developed interactive visualizations in Tableau to explore patterns and communicate findings."
                outcome="A growing data visualization portfolio combining SQL, data preparation, and visual storytelling."
                technologies="Tableau, DuckDB + VS Code, Kaggle"
                link="https://public.tableau.com/app/profile/billy.conard/vizzes"
              />
              <ProjectCard
                title="Data Analysis Projects"
                img={DataImg}
                description="A centralized GitHub repository of data analytics projects built with industry-standard tools and real-world datasets."
                process="Applied SQL for querying and transforming relational data, Python (via JupyterLab) for data manipulation and exploratory analysis, and Tableau for interactive dashboards."
                outcome="Demonstrates end-to-end analytics capability — from raw data to actionable insight — across a range of real-world scenarios."
                technologies="SQL, SQL Server, Oracle Database, PL/SQL, T-SQL, Python, Tableau, JupyterLab, GitHub"
                link="https://github.com/bconard36/Data_Analytics_Projects/tree/main"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Projects;
