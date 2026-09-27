# Hanaa Tarek - Modern Personal Portfolio Website

A clean, elegant, responsive, accessible, and high-performance personal portfolio website for **Hanaa Tarek** — Mobile App Developer, Flutter Developer, and Software Engineer.

Crafted with modern **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero external frameworks or runtime dependencies required).

---

## 🌟 Key Features

- **Design System & Palette**: Curated midnight tech aesthetic using the designated color palette:
  - Primary Background: `#010736`
  - Secondary Slate Blue: `#22396F`
  - Dark Blue Surface: `#0D1C42`
  - Light Champagne Gold: `#FCF1D0`
- **Dynamic Role Rotator**: Smooth text switcher featuring Hanaa's core professional titles:
  - *Mobile App Developer*
  - *Flutter Developer*
  - *Software Engineer*
- **Structured Sections**: Complete flow in the exact specified order:
  1. **Home (Hero)**: High-impact hero with dynamic role rotator, call-to-actions, and an interactive phone mockup visual placeholder.
  2. **About Me**: Narrative overview with Flutter cross-platform focus and core competency badges.
  3. **Education**: Modern card timeline featuring *Bachelor's Degree in Computer Science* from *Faculty of Computers and Information, EL Saleheya EL Gadida University* with relevant coursework tags.
  4. **Experience**: Detailed Flutter Developer position with 11 core engineering responsibilities.
  5. **My Skills**: 15 clean skill cards with custom SVG icons (no exaggerated percentage bars).
  6. **Featured Projects**: Showcase cards with project previews, tech stacks, live view, and GitHub buttons.
  7. **Testimonials (What People Say)**: Clearly marked, editable recommendation cards with quotes and roles.
  8. **Services**: 6 mobile engineering service offerings.
  9. **Contact Me**: Accessible contact form with client-side validation, live feedback alert, and direct channels (Email, LinkedIn, GitHub).
- **Navigation & Usability**:
  - Sticky glassmorphic navigation bar.
  - Active section scroll spy (`IntersectionObserver`).
  - Mobile hamburger drawer with full keyboard and escape-key accessibility.
  - Back-to-top floating button with smooth scroll.
  - "Skip to main content" link for screen readers and keyboard navigation.
- **Accessibility & Motion**:
  - Semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Full support for `prefers-reduced-motion`.
  - Accessible ARIA labels and roles.

---

## 📁 Project Directory Structure

```text
portfolio/
│
├── index.html              # Main semantic HTML5 file
├── README.md               # Documentation and setup guide
│
├── css/
│   └── style.css           # Pure CSS3 design system, tokens, and responsive styles
│
├── js/
│   └── script.js           # Modular Vanilla JS (nav, dynamic arrays, animations, validation)
│
└── assets/
    ├── icons/
    │   └── favicon.svg     # Stylized Flutter / HT monogram brand icon
    ├── images/
    │   └── README.md       # Guide for dropping in real profile & project photos
    └── cv/
        ├── README.md       # Instructions for placing your real resume PDF
        └── Hanaa-Tarek-CV.pdf  # Target file for the "Download CV" button
```

---

## 🚀 How to Run Locally

Because this project is built entirely with pure HTML5, CSS3, and Vanilla JavaScript, **no build step, bundler, or package installation is required**.

### Option 1: VS Code + Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. If you don't already have it, install the **Live Server** extension by *Ritwick Dey* from the VS Code Extensions Marketplace (`Ctrl+Shift+X` or `Cmd+Shift+X`).
3. Right-click `index.html` in the file explorer and select **"Open with Live Server"** (or click **"Go Live"** in the bottom status bar).
4. The portfolio will automatically open in your default browser at `http://127.0.0.1:5500/`.

### Option 2: Python Static Server
If Python is installed on your system:
```bash
# In the project directory:
python -m http.server 8000
```
Then navigate to: `http://localhost:8000`

### Option 3: Node / npx (serve / http-server)
If Node.js is installed:
```bash
npx -y serve .
```
or
```bash
npx -y http-server .
```

### Option 4: Direct Browser Launch
You can also open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) by double-clicking the file or pressing `Ctrl + O` inside your browser.

---

## ✏️ Customization & Updating Content

### 1. Updating CV / Resume
- Place your PDF resume in the `assets/cv/` directory with the exact filename:
  ```text
  assets/cv/Hanaa-Tarek-CV.pdf
  ```
- The **"Download CV"** button in the hero section is already wired to trigger a download for this exact path.

### 2. Replacing Profile Photo & Visual Mockups
- The website is designed with elegant, high-tech SVG phone mockups out-of-the-box so it looks great even before photos are added.
- To use your real photo:
  - Add your portrait image into `assets/images/profile.jpg`.
  - In `index.html`, locate the `<div class="avatar-placeholder-container">` inside the Hero section and replace the mockup SVG with:
    ```html
    <img src="assets/images/profile.jpg" alt="Hanaa Tarek - Flutter Developer" class="profile-image">
    ```

### 3. Updating Skills, Projects, Testimonials, and Services
All repeating dynamic data is centralized in easy-to-edit JavaScript arrays at the top of `js/script.js`:

- **Skills (`skillsData`)**: Add new technical proficiencies, change categories, or replace SVG icons.
- **Projects (`projectsData`)**:
  ```javascript
  {
    id: 'project-one',
    title: 'Your App Name',
    subtitle: 'Mobile Category',
    description: 'Detailed description of features and architecture...',
    tags: ['Flutter', 'Dart', 'Firebase'],
    demoUrl: 'https://your-live-demo-or-playstore-link.com',
    githubUrl: 'https://github.com/hanaatarek/your-repo'
  }
  ```
- **Testimonials (`testimonialsData`)**: Replace placeholder testimonials with real endorsements from colleagues, mentors, or clients.
- **Services (`servicesData`)**: Modify service titles and descriptions to reflect your freelance or contract offerings.

### 4. Connecting the Contact Form to a Backend
In `js/script.js`, locate the `initContactForm()` function. To send real emails without needing your own server, you can integrate [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/):

#### Using Formspree:
Change the form tag in `index.html`:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Using EmailJS:
In `js/script.js`, inside the `form.addEventListener('submit', ...)` block after validation succeeds, call `emailjs.sendForm(...)`.

---

## 🌐 Production Deployment

Since there is no compilation or build step, deploying is instant and free on all major static hosts:

### Deploying to GitHub Pages
1. Push this folder to a GitHub repository (e.g. `https://github.com/hanaatarek/portfolio`).
2. Go to the repository **Settings** > **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Within 1–2 minutes, your website is live at `https://<username>.github.io/<repo>/`.

### Deploying to Netlify
1. Go to [Netlify](https://www.netlify.com/) and log in.
2. Drag and drop the entire project folder directly onto the Netlify dashboard.
3. Your portfolio is immediately deployed with free SSL!
4. (Optional) Connect your custom domain in Domain Settings.

### Deploying to Vercel
1. Install Vercel CLI (`npm i -g vercel`) and run `vercel`, or import your GitHub repository at [vercel.com](https://vercel.com).
2. Framework Preset: Choose **Other** (Static HTML).
3. Root Directory: `./`
4. Click **Deploy**.

---

## 📱 Browser Compatibility

- Google Chrome (latest)
- Mozilla Firefox (latest)
- Apple Safari (latest)
- Microsoft Edge (latest)
- Mobile Browsers (iOS Safari, Android Chrome)

---

## 📄 License
This project is open-source and free to use for personal portfolio presentation.
© 2026 Hanaa Tarek. All rights reserved.
