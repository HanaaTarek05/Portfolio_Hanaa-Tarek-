/**
 * ============================================================================
 * HANAA TAREK - PORTFOLIO JAVASCRIPT BUNDLE
 * Stack: Pure Vanilla JavaScript (ES6+)
 * Description: Interactive behaviors, dynamic content rendering, accessible
 * navigation, role rotator, form validation, and scroll animations.
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. DATA ARRAYS (CONTENT MANAGEMENT)
     Easily add, remove, or modify items without touching the core HTML structure.
     -------------------------------------------------------------------------- */

  /**
   * SKILLS DATA ARRAY
   * Skills required: Flutter, Dart, Firebase, REST APIs, UI/UX, Responsive Design,
   * Git & GitHub, OOP, Database, Authentication, Clean Code, API Integration,
   * Android, iOS, Problem Solving.
   */
  const skillsData = [
    {
      name: 'Flutter',
      category: 'Mobile Framework',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zm-.028 10.605L7.9 16.991l3.7 3.7 6.386-6.386-3.7-3.7zM14.286 24h7.398l-5.69-5.69-3.7 3.7L14.286 24z"/></svg>`
    },
    {
      name: 'Dart',
      category: 'Core Language',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
    },
    {
      name: 'Android',
      category: 'Mobile Platform',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
    },
    {
      name: 'iOS',
      category: 'Mobile Platform',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"></path></svg>`
    },
    {
      name: 'Firebase',
      category: 'Backend & Cloud',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`
    },
    {
      name: 'REST APIs',
      category: 'Networking',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    },
    {
      name: 'API Integration',
      category: 'Web Services',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
    },
    {
      name: 'Authentication',
      category: 'Security',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`
    },
    {
      name: 'Database',
      category: 'Data Persistence',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
    },
    {
      name: 'UI/UX',
      category: 'Design & Experience',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z"></path></svg>`
    },
    {
      name: 'Responsive Design',
      category: 'Adaptive Layouts',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      name: 'OOP',
      category: 'Architecture',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
    },
    {
      name: 'Clean Code',
      category: 'Best Practices',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`
    },
    {
      name: 'Problem Solving',
      category: 'Engineering Mindset',
      icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>`
    }
  ];

  /**
   * FEATURED PROJECTS DATA ARRAY
   * NOTE: Clearly marked editable project placeholders.
   * Update the titles, descriptions, tech stacks, and links with real projects when ready.
   */
  const projectsData = [
    {
      id: 'project-one',
      title: 'Project One',
      subtitle: 'E-Commerce Mobile Application',
      description: 'A modern mobile shopping experience built with Flutter and Dart. Features product catalogs, shopping cart flow, secure authentication, and seamless REST API integration with real-time stock updates.',
      tags: ['Flutter', 'Dart', 'REST API', 'Firebase', 'State Management'],
      mockupLabel: 'E-Commerce Mobile App Mockup',
      demoUrl: '#projects', // Replace with real live demo/play store link
      githubUrl: 'https://github.com/hanaatarek' // Replace with real repository URL
    },
    {
      id: 'project-two',
      title: 'Project Two',
      subtitle: 'Task & Productivity Mobile Suite',
      description: 'A clean and responsive mobile task management app designed with intuitive UI/UX. Includes offline SQLite database storage, dynamic categorization, reminders, and cross-platform synchronization.',
      tags: ['Flutter', 'Dart', 'Local Database', 'Responsive UI', 'Clean Code'],
      mockupLabel: 'Productivity App Mockup',
      demoUrl: '#projects', // Replace with real live demo/play store link
      githubUrl: 'https://github.com/hanaatarek' // Replace with real repository URL
    },
    {
      id: 'project-three',
      title: 'Project Three',
      subtitle: 'Health & Activity Tracking Companion',
      description: 'An interactive cross-platform health companion displaying custom metric graphs, daily routines, API-based metrics synchronization, and smooth animations optimized for 60fps performance.',
      tags: ['Flutter', 'Dart', 'REST APIs', 'Custom UI/UX', 'Performance'],
      mockupLabel: 'Health & Activity App Mockup',
      demoUrl: '#projects', // Replace with real live demo/play store link
      githubUrl: 'https://github.com/hanaatarek' // Replace with real repository URL
    }
  ];

  /**
   * TESTIMONIALS DATA ARRAY
   * NOTE: Clearly editable placeholder testimonial content.
   * Replace these placeholders with genuine colleague or client endorsements.
   */
  const testimonialsData = [
    {
      quote: '"Hanaa demonstrates strong Flutter and mobile architectural skills. Her ability to translate complex UI designs into responsive, clean code and smoothly integrate backend APIs makes her a valuable asset to any software engineering team."',
      authorName: 'Engineering Lead [Placeholder]',
      authorRole: 'Mobile Software Lead',
      avatarInitial: 'EL'
    },
    {
      quote: '"Working with Hanaa is a pleasure. Her attention to detail regarding responsive interfaces, clean code organization, and proactive problem solving consistently ensures high-quality mobile deliverables."',
      authorName: 'Senior Developer [Placeholder]',
      authorRole: 'Full Stack Engineer',
      avatarInitial: 'SD'
    },
    {
      quote: '"Hanaa crafts mobile user interfaces that feel smooth and native across both iOS and Android. Her dedication to clean architecture and reliable functionality stands out in every project."',
      authorName: 'Product Manager [Placeholder]',
      authorRole: 'Product & Tech Coordinator',
      avatarInitial: 'PM'
    }
  ];

  /**
   * SERVICES DATA ARRAY
   * Required 6 service offerings:
   * 1. Flutter App Development
   * 2. Mobile UI Development
   * 3. API Integration
   * 4. Firebase Integration
   * 5. Responsive UI Development
   * 6. App Maintenance & Optimization
   */
  const servicesData = [
    {
      title: 'Flutter App Development',
      description: 'End-to-end development of cross-platform mobile applications for Android and iOS using Flutter and Dart, built with scalable architecture and clean code standards.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
    },
    {
      title: 'Mobile UI Development',
      description: 'Transforming UI/UX wireframes into pixel-perfect, interactive mobile screens with smooth transitions, custom widgets, and native-feeling animations.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`
    },
    {
      title: 'API Integration',
      description: 'Connecting Flutter client apps with RESTful backend services, handling JSON serialization, asynchronous network calls, authentication headers, and error handling.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
    },
    {
      title: 'Firebase Integration',
      description: 'Setting up Firebase Authentication, Cloud Firestore, Cloud Functions, and push notifications to provide real-time cloud backends for mobile applications.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`
    },
    {
      title: 'Responsive UI Development',
      description: 'Crafting responsive layouts that adapt smoothly across varying mobile screen ratios, tablets, foldables, and different device orientations.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      title: 'App Maintenance & Optimization',
      description: 'Refactoring legacy codebases, resolving memory leaks, speeding up build performance, updating dependencies, and fixing bugs for reliable longevity.',
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
    }
  ];

  /* --------------------------------------------------------------------------
     2. DOM RENDERING FUNCTIONS
     -------------------------------------------------------------------------- */

  /**
   * Render Skills cards into #skills-grid
   */
  function renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) return;

    const cardsHtml = skillsData.map(skill => `
      <div class="skill-card reveal-on-scroll">
        <div class="skill-icon-wrap" aria-hidden="true">
          ${skill.icon}
        </div>
        <div class="skill-info">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-category">${skill.category}</span>
        </div>
      </div>
    `).join('');

    container.innerHTML = cardsHtml;
  }

  /**
   * Render Featured Projects cards into #projects-grid
   */
  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    const cardsHtml = projectsData.map(project => `
      <article class="project-card reveal-on-scroll" id="${project.id}">
        <!-- Replaceable Project Media / Mockup Area -->
        <div class="project-media-wrap">
          <div class="project-placeholder-mockup">
            <svg class="project-mockup-icon" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
            <span class="project-mockup-text">${project.mockupLabel}</span>
            <span class="project-mockup-sub">Replaceable with &lt;img src="assets/images/${project.id}.jpg"&gt;</span>
          </div>
        </div>

        <div class="project-body">
          <div class="project-tag-row">
            ${project.tags.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${project.title}: ${project.subtitle}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-actions">
            <a href="${project.demoUrl}" class="btn btn-primary btn-sm" aria-label="View demo for ${project.title}">
              <span>View Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="View source code on GitHub for ${project.title}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    container.innerHTML = cardsHtml;
  }

  /**
   * Render Testimonials cards into #testimonials-grid
   */
  function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    const cardsHtml = testimonialsData.map(testi => `
      <div class="testimonial-card reveal-on-scroll">
        <svg class="testimonial-quote-icon" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        <p class="testimonial-text">${testi.quote}</p>
        <div class="testimonial-author">
          <div class="author-avatar-placeholder" aria-hidden="true">
            ${testi.avatarInitial}
          </div>
          <div class="author-info">
            <span class="author-name">${testi.authorName}</span>
            <span class="author-role">${testi.authorRole}</span>
          </div>
        </div>
      </div>
    `).join('');

    container.innerHTML = cardsHtml;
  }

  /**
   * Render Services cards into #services-grid
   */
  function renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    const cardsHtml = servicesData.map(service => `
      <div class="service-card reveal-on-scroll">
        <div class="service-icon-box">
          ${service.icon}
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-desc">${service.description}</p>
      </div>
    `).join('');

    container.innerHTML = cardsHtml;
  }

  /* --------------------------------------------------------------------------
     3. ROLE / TITLE ROTATOR ANIMATION
     Rotates between:
     - Mobile App Developer
     - Flutter Developer
     - Software Engineer
     -------------------------------------------------------------------------- */
  function initRoleRotator() {
    const roleElement = document.getElementById('role-rotating');
    if (!roleElement) return;

    const roles = [
      'Mobile App Developer',
      'Flutter Developer',
      'Software Engineer'
    ];

    let currentRoleIndex = 0;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      roleElement.textContent = roles[1]; // Keep Flutter Developer static
      return;
    }

    setInterval(() => {
      // Fade out
      roleElement.style.opacity = '0';
      roleElement.style.transform = 'translateY(8px)';

      setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleElement.textContent = roles[currentRoleIndex];

        // Fade in
        roleElement.style.opacity = '1';
        roleElement.style.transform = 'translateY(0)';
      }, 250);
    }, 2800);
  }

  /* --------------------------------------------------------------------------
     4. STICKY HEADER & SCROLL BEHAVIORS
     -------------------------------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.getElementById('site-header');
    const backToTopBtn = document.getElementById('back-to-top');

    function onScroll() {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;

      // Add shadow/darker background when scrolled
      if (header) {
        if (scrollPos > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      // Show or hide Back to Top button
      if (backToTopBtn) {
        if (scrollPos > 350) {
          backToTopBtn.classList.add('is-visible');
        } else {
          backToTopBtn.classList.remove('is-visible');
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Run once initially
  }

  /* --------------------------------------------------------------------------
     5. MOBILE HAMBURGER NAVIGATION
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!toggleBtn || !navMenu) return;

    function openMenu() {
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      navMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeMenu() {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          closeMenu();
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        closeMenu();
        toggleBtn.focus();
      }
    });

    // Close if window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. ACTIVE NAVIGATION LINK ON SCROLL
     Highlights current section in the navbar using IntersectionObserver
     -------------------------------------------------------------------------- */
  function initActiveNavSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!sections.length || !navLinks.length) return;

    function updateActiveLink() {
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
  }

  /* --------------------------------------------------------------------------
     7. BACK TO TOP SMOOTH SCROLL
     -------------------------------------------------------------------------- */
  function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll, .timeline-node, .experience-card, .about-image-card, .about-content');

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target); // Reveal only once for performance
          }
        });
      }, observerOptions);

      elementsToReveal.forEach(el => observer.observe(el));
    } else {
      // Fallback for browsers without IntersectionObserver support
      elementsToReveal.forEach(el => el.classList.add('revealed'));
    }
  }

  /* --------------------------------------------------------------------------
     9. CONTACT FORM VALIDATION & SUBMISSION HANDLER
     -------------------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const statusBox = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (!form) return;

    const fields = {
      name: {
        input: document.getElementById('contact-name'),
        error: document.getElementById('error-name'),
        validate: (val) => val.trim().length >= 2 ? '' : 'Please enter your name (at least 2 characters).'
      },
      email: {
        input: document.getElementById('contact-email'),
        error: document.getElementById('error-email'),
        validate: (val) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!val.trim()) return 'Email address is required.';
          if (!emailRegex.test(val.trim())) return 'Please enter a valid email address.';
          return '';
        }
      },
      subject: {
        input: document.getElementById('contact-subject'),
        error: document.getElementById('error-subject'),
        validate: (val) => val.trim().length >= 3 ? '' : 'Please enter a subject (at least 3 characters).'
      },
      message: {
        input: document.getElementById('contact-message'),
        error: document.getElementById('error-message'),
        validate: (val) => val.trim().length >= 10 ? '' : 'Please enter a message with at least 10 characters.'
      }
    };

    // Live validation feedback on input
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      if (field.input) {
        field.input.addEventListener('input', () => {
          const errorMsg = field.validate(field.input.value);
          if (!errorMsg) {
            field.input.classList.remove('is-invalid');
            if (field.error) field.error.textContent = '';
          }
        });
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasErrors = false;

      // Validate all fields
      Object.keys(fields).forEach(key => {
        const field = fields[key];
        const errorMsg = field.validate(field.input.value);
        if (errorMsg) {
          hasErrors = true;
          field.input.classList.add('is-invalid');
          if (field.error) field.error.textContent = errorMsg;
        } else {
          field.input.classList.remove('is-invalid');
          if (field.error) field.error.textContent = '';
        }
      });

      if (hasErrors) {
        if (statusBox) {
          statusBox.className = 'form-status error';
          statusBox.textContent = 'Please correct the highlighted errors before submitting.';
          statusBox.style.display = 'block';
        }
        return;
      }

      // Simulate sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <span>Sending...</span>
          <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
        `;
      }

      // Prepare simulated submission (Ready for backend/EmailJS/Formspree integration)
      setTimeout(() => {
        if (statusBox) {
          statusBox.className = 'form-status success';
          statusBox.textContent = 'Thank you! Your message has been sent successfully. I will get back to you shortly.';
          statusBox.style.display = 'block';
        }

        form.reset();

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Send Message</span>
            <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          `;
        }

        // Hide success message after 7 seconds
        setTimeout(() => {
          if (statusBox) {
            statusBox.style.display = 'none';
          }
        }, 7000);
      }, 1000);
    });
  }

  /* --------------------------------------------------------------------------
     10. DYNAMIC FOOTER YEAR
     -------------------------------------------------------------------------- */
  function initFooterYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  /* --------------------------------------------------------------------------
     11. INITIALIZATION ON DOM READY
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Render dynamic components
    renderSkills();
    renderProjects();
    renderTestimonials();
    renderServices();

    // 2. Initialize interactive features
    initRoleRotator();
    initHeaderScroll();
    initMobileMenu();
    initActiveNavSpy();
    initBackToTop();
    initContactForm();
    initFooterYear();

    // 3. Initialize scroll animations after rendering
    initScrollReveal();
  });

})();
