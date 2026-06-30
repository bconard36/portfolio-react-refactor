# Billy Conard - Portfolio Website (React Refactor) 
A React refactor of my original static HTML/CSS/JavaScript portfolio website,
rebuilt using component-based architecture, dynamic state management, and
third-party integrations.

**Live Site:** https://portfolio-react-refactor.vercel.app/

# Folder List 
- public: houses all public files to be served 
    - files: houses resume file available for download
        - June2026_DeveloperResume.pdf: a downloadable copy of my most current resume
    - favicon.svg: placeholder favicon (Vite default)
    - icons.svg: stock Vite image file
- src: parent folder for components, stylesheets, and assets
    - assets: parent folder for all image files 
        - About.jsx
        - App.jsx: parent component. Root component - composes all sections
        - Button.jsx: Toggle button with show/hide state    
        - Contact.jsx: Contact form with EmailJS integration
        - Education.jsx: Education section with reusable School cards
        - Footer.jsx: Footer with social media icon links
        - HeaderContent.jsx
        - HeaderElements.jsx
        - index.css: Global stylesheet
        - main.jsx: App entry point 
        - ProjectCard.jsx: Reusable project card component
        - Projects.jsx: Projects section
        - School.jsx: Reusable education card component
        - SkillCard.jsx: Skill card with hover/tap interaction
        - Skills.jsx: Skills section 
- .gitignore: A list of files intentionally ignored by Git  
- eslint.config.js 
- index.html: Renders the app - acts as the connecting point between the app and the browser 
- package-lock.json: Locks project dependency versions for consistent installations 
- package.json: Defines the project dependencies and scripts necessary for program execution
- README.md
- vite.config.js

# Features 
- Light/dark mode toggle with persistent class-based theming
- Reusable component architecture (SkillCard, School, ProjectCard)
- Skill cards with hover (desktop) and tap (mobile) text reveal
- Contact form with EmailJS — sends notification to owner and auto-reply to visitor
- Resume download via public asset serving
- Fully responsive across mobile, tablet, and desktop viewports

# How To Run 
- _To view the production build_:
    - https://portfolio-react-refactor.vercel.app/

- _To launch via VS Code_:
    - Open the root folder in VS Code (or preferred code editor) 
        - portfolioWebsite-react-refactor 
    - Open a terminal window (CTRL + `)
        - _To install the necessary dependencies_: npm install  
        - _To start the application_: npm run dev 
    - Open a browser of your choice and navigate to: 
        - http://localhost:5173/

# When Running
- Once a browser window is opened with the above URL, my portfolio website will appear. 
- This web page features a light and dark mode toggle, dynamic text displayed, and contact form submission. emailjs handles the receiving of contact
form data and the sending of an auto-reply email. 

# Tools Used 
- React + Vite
- vite-plugin-svgr (SVG as React components)
- EmailJS (@emailjs/browser)
- Vercel (deployment)
- VS Code + GitHub
