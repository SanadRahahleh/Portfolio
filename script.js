/* ==========================================================================
   DEVELOPER PORTFOLIO - LOGIC & INTERACTIONS
   Sanad Naser Rahahleh | Backend-Focused Full Stack .NET Developer
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core DOM Elements
    const header = document.querySelector('.main-header');
    const headerContainer = document.querySelector('.header-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const btnCopyEmail = document.getElementById('btn-copy-email');
    const toast = document.getElementById('toast');
    
    // 2. Mobile Navigation Toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            headerContainer.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                headerContainer.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. Scroll Spy (Active Navigation Indicator) & Sticky Header Shadow
    const scrollSpy = () => {
        const scrollPosition = window.scrollY + 100;
        
        // Sticky Header class addition
        if (window.scrollY > 20) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            header.style.backgroundColor = 'rgba(11, 15, 25, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(11, 15, 25, 0.85)';
        }

        // Section activation tracking
        sections.forEach(section => {
            const sectionTop = section.offsetTop - varOffset();
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    const varOffset = () => {
        return window.innerWidth <= 768 ? 70 : 80;
    };

    window.addEventListener('scroll', scrollSpy);
    scrollSpy(); // Initial call

    // 4. "Where Software Meets Telecom" Stack Interactivity
    const layerButtons = document.querySelectorAll('.layer-btn');
    const explanationContents = document.querySelectorAll('.explanation-content');

    if (layerButtons.length > 0 && explanationContents.length > 0) {
        const activateLayer = (index) => {
            // Update buttons
            layerButtons.forEach(btn => {
                const btnIdx = parseInt(btn.getAttribute('data-index'), 10);
                if (btnIdx === index) {
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');
                } else {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-selected', 'false');
                }
            });

            // Update explanation content boxes
            explanationContents.forEach(content => {
                const contentIdx = parseInt(content.getAttribute('data-index'), 10);
                if (contentIdx === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        };

        layerButtons.forEach(btn => {
            // Hover logic (desktop) & click logic (all screens)
            const handleActivation = () => {
                const idx = parseInt(btn.getAttribute('data-index'), 10);
                activateLayer(idx);
            };

            btn.addEventListener('click', handleActivation);
            btn.addEventListener('mouseenter', handleActivation);
        });
    }

    // 5. Copy Email To Clipboard Functionality
    if (btnCopyEmail && toast) {
        btnCopyEmail.addEventListener('click', () => {
            const emailText = document.getElementById('email-address').textContent;
            navigator.clipboard.writeText(emailText.trim()).then(() => {
                // Show notification toast
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2500);
            }).catch(err => {
                console.error('Could not copy email text: ', err);
            });
        });
    }

    // 6. Hash-Based SPA Case Study Router
    const overlays = {
        '#project-booking': document.getElementById('project-booking'),
        '#project-eduscope': document.getElementById('project-eduscope'),
        '#project-ecommerce': document.getElementById('project-ecommerce'),
        '#project-goldtracker': document.getElementById('project-goldtracker')
    };

    const handleRouting = () => {
        const currentHash = window.location.hash;
        
        // Flag to check if we matched any of our case study hashes
        let matched = false;

        // Hide all overlays first
        Object.values(overlays).forEach(overlay => {
            if (overlay) {
                overlay.style.display = 'none';
                overlay.setAttribute('aria-hidden', 'true');
            }
        });

        // Check if current hash is one of our projects
        if (overlays[currentHash]) {
            const activeOverlay = overlays[currentHash];
            activeOverlay.style.display = 'flex';
            activeOverlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden'; // Disable main scroll
            matched = true;
            
            // Shift focus inside overlay for accessibility
            const closeBtn = activeOverlay.querySelector('.btn-close-cs');
            if (closeBtn) closeBtn.focus();
        }

        // Restore main page scrolling if no project overlay is open
        if (!matched) {
            document.body.style.overflow = 'auto';
        }
    };

    // Close on overlay backdrop click
    Object.entries(overlays).forEach(([hash, overlay]) => {
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                // If clicked directly on the overlay backdrop container itself, close it
                if (e.target === overlay) {
                    window.location.hash = '#projects';
                }
            });
            
            // Keyboard ESC close listener
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && window.location.hash === hash) {
                    window.location.hash = '#projects';
                }
            });
        }
    });

    window.addEventListener('hashchange', handleRouting);
    handleRouting(); // Initial call to open if URL has hash on load

    // 7. Hero Visual Connection Highlights
    const nodeGroups = document.querySelectorAll('.node-group');
    const connectLines = document.querySelectorAll('.connect-line');
    
    if (nodeGroups.length > 0 && connectLines.length > 0) {
        nodeGroups.forEach(group => {
            const label = group.getAttribute('data-label');
            group.addEventListener('mouseenter', () => {
                connectLines.forEach((line, index) => {
                    // Match line index or write a helper mapping
                    // Index 0: frontend, 1: api, 2: database, 3: backend, 4: telecom (backend to telecom), 5: billing (telecom to billing), 6: security, 7: data
                    const isMatch = (label === 'frontend' && index === 0) ||
                                    (label === 'api' && index === 1) ||
                                    (label === 'database' && index === 2) ||
                                    (label === 'backend' && index === 3) ||
                                    (label === 'telecom' && (index === 4 || index === 3)) ||
                                    (label === 'billing' && (index === 5 || index === 4 || index === 3)) ||
                                    (label === 'security' && index === 6) ||
                                    (label === 'data' && index === 7);
                    
                    if (isMatch) {
                        line.style.stroke = label === 'telecom' || label === 'billing' ? 'var(--accent-indigo)' : 'var(--accent-teal-light)';
                        line.style.strokeWidth = '2.5px';
                        line.style.opacity = '1';
                    } else {
                        line.style.opacity = '0.15';
                    }
                });
            });
            
            group.addEventListener('mouseleave', () => {
                connectLines.forEach(line => {
                    line.style.stroke = '';
                    line.style.strokeWidth = '';
                    line.style.opacity = '';
                });
            });
        });
    }

    // 8. Scroll Reveal Animation using IntersectionObserver
    // Only register observer if motion is not disabled by browser preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (!prefersReducedMotion.matches) {
        const revealElements = [
            ...sections,
            ...document.querySelectorAll('.focus-card'),
            ...document.querySelectorAll('.timeline-item'),
            ...document.querySelectorAll('.skills-card'),
            ...document.querySelectorAll('.project-card'),
            ...document.querySelectorAll('.approach-step')
        ];

        revealElements.forEach(el => {
            el.classList.add('scroll-reveal');
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once visible, we don't need to observe it again
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before coming in view
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }
});
