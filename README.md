# Billy Conard - Portfolio Website (React Refactor) 
A production React application refactoring my original static HTML/CSS/JavaScript 
portfolio into a fully componentized, responsive web app. Built in two weeks as part 
of an active transition into professional web development.

**Live Site:** [Personal Portfolio](https://billyconardportfolio.vercel.app/)

# Folder List 
- public: houses all public files to be served 
    - files: houses resume file available for download
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
- .gitignore
- eslint.config.js 
- index.html
- package-lock.json
- package.json
- README.md
- vite.config.js

# Features 
- Light/dark mode toggle with persistent class-based theming
- Reusable component architecture (SkillCard, School, ProjectCard)
- Skill cards with hover (desktop) and tap (mobile) text reveal
- Contact form with EmailJS — sends notification to owner and auto-reply to visitor
- Resume download via public asset serving
- Fully responsive across mobile, tablet, and desktop viewports

# Tools Used 
- React + Vite
- vite-plugin-svgr (SVG as React components)
- EmailJS (@emailjs/browser)
- Vercel (deployment)
- VS Code + GitHub
