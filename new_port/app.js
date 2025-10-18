// Application data
const portfolioData = {
  personal: {
    name: "Kartik Swami",
    title: "Full Stack Developer",
    description: "Highly motivated Computer Science undergraduate passionate about developing scalable web applications and AI-powered solutions. Quick learner, strong problem-solving skills, and experienced in MERN stack development."
  },
  skills: [
    { 
      name: "HTML5", 
      color: "#E34F26", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 17.56l4.07-1.13.55-6.1H7.38l-.18-2h7.82l.18-2H5.03l.55 6.1h6.42L12 17.56z'/><path d='M2 2v20h20V2H2zm18 18H4V4h16v16z'/></svg>"
    },
    { 
      name: "CSS3", 
      color: "#1572B6", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3z'/></svg>"
    },
    { 
      name: "JavaScript", 
      color: "#F7DF1E", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7v5.63c0 .9-.35 1.5-1.23 1.5-.7 0-1.15-.45-1.41-.95l-1.33.8zm7.32 0c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7v5.63c0 .9-.35 1.5-1.23 1.5-.7 0-1.15-.45-1.41-.95l-1.33.8z'/></svg>"
    },
    { 
      name: "React", 
      color: "#61DAFB", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><circle cx='12' cy='12' r='2.5'/><path d='M12 7.5c-7.5 0-12 3.5-12 4.5s4.5 4.5 12 4.5 12-3.5 12-4.5-4.5-4.5-12-4.5zm0 7c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z'/></svg>"
    },
    { 
      name: "Vite", 
      color: "#FFAC45", 
      category: "Tools", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Tailwind", 
      color: "#38BDF8", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12.001 4.5c-4.142 0-7.5 3.358-7.5 7.5 0 4.142 3.358 7.5 7.5 7.5 4.142 0 7.5-3.358 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5zm0 13.5c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'/></svg>"
    },
    { 
      name: "Node.js", 
      color: "#339933", 
      category: "Backend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Express", 
      color: "#000000", 
      category: "Backend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "MongoDB", 
      color: "#47A248", 
      category: "Database", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Git", 
      color: "#F05032", 
      category: "Tools", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Python", 
      color: "#3776AB", 
      category: "Programming", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Java", 
      color: "#E76F00", 
      category: "Programming", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "C++", 
      color: "#00599C", 
      category: "Programming", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "C", 
      color: "#A8B9CC", 
      category: "Programming", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Bootstrap", 
      color: "#7952B3", 
      category: "Frontend", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "DSA", 
      color: "#F06529", 
      category: "Programming", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Gen AI", 
      color: "#16D380", 
      category: "AI/ML", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    { 
      name: "Prompt Eng", 
      color: "#A78BFA", 
      category: "AI/ML", 
      icon: "<svg viewBox='0 0 24 24' fill='currentColor'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    }
  ],
  projects: [
    {
      title: "Admin Panel CMS",
      description: "Secure content management system with user authentication, role-based access control, and real-time data synchronization.",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      github_url: "https://github.com/NotYourBr0/my-dashboard",
      live_url: "https://my-dashboard-jade-nu.vercel.app/",
      featured: true
    },
    {
      title: "Flappy Bird",
      description: "Classic arcade games reimagined for the web with modern JavaScript, smooth animations, and responsive controls.",
      technologies: ["JavaScript", "Canvas", "Games"],
      github_url: "https://github.com/NotYourBr0/Flappy-Bird",
      live_url: "https://flappy-bird-rust-xi.vercel.app/",
      featured: false
    },
   {
  title: "Myntra Clone - Frontend",
  description: "A pixel-perfect Myntra frontend clone with React, Vite, Tailwind CSS & Framer Motion. Features dynamic product listings, category navigation, and smooth animations.",
  technologies: ["React", "Vite", "Framer Motion", "JavaScript", "Frontend", ],
  github_url: "https://github.com/NotYourBr0/Myntra-Clone",
  live_url: "https://myntra-clone-xi-seven.vercel.app/",
  featured: true,
}
  ],
 // In your portfolioData object, update certificates:
certificates: [
    {
        title: "Self-Presentation – Advanced",
        description: "Wadhwani Foundation",
        pdfUrl: "./certificates/sp.png",
        downloadName: "Self-Presentation-Certificate-Kartik-Swami.png",
        date: "August 23, 2025",
        issuer: "Wadhwani Foundation"
    },
    {
        title: "Software Developer Internship",
        description: "Vidhema Solutions",
        pdfUrl: "./certificates/vidhema.png",
        downloadName: "Internship-Certificate-Vidhema-Solutions.png",
        date: "August 04, 2025",
        issuer: "Vidhema Solutions"
    },
    {
        title: "Essentials Automation Professional",
        description: "Automation Anywhere - Certified Professional",
        pdfUrl: "./certificates/at.png",
        downloadName: "Automation-Anywhere-Certificate-Kartik-Swami.png",
        date: "August 23, 2025",
        issuer: "Automation Anywhere"
    },
    {
        title: "Customer Centricity – Advanced",
        description: "Wadhwani Foundation",
        pdfUrl: "./certificates/cc.png",
        downloadName: "Customer-Centricity-Certificate-Kartik-Swami.png",
        date: "August 23, 2025",
        issuer: "Wadhwani Foundation"
    },
    {
        title: "Financial Literacy",
        description: "Wadhwani Foundation",
        pdfUrl: "./certificates/fl.png",
        downloadName: "Financial-Literacy-Certificate-Kartik-Swami.png",
        date: "August 23, 2025",
        issuer: "Wadhwani Foundation"
    },
    {
        title: "Problem Solving & Innovation - Advanced",
        description: "Wadhwani Foundation",
        pdfUrl: "./certificates/ps.png",
        downloadName: "Problem-Solving-Certificate-Kartik-Swami.png",
        date: "August 23, 2025",
        issuer: "Wadhwani Foundation"
    }
],
  contact: {
    email: "ks806425@gmail.com",
    github: "https://github.com/NotYourBr0",
    linkedin: "https://linkedin.com/in/kartik-swami",
    form_endpoint: "https://formspree.io/f/myzpbqla"
  }
};

// Application state
let currentTheme = 'light';
let isMenuOpen = false;

// DOM Elements
const loader = document.getElementById('loader');
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const sections = document.querySelectorAll('.section');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.classList.add('hidden');
            initializeAnimations();
        }, 1000);
    });

    // Initialize theme
    
    // Initialize skills
    renderSkills();
     initializeSamuraiAnimation();
    // Initialize projects
    renderProjects();
    
    // Initialize certificates
    renderCertificates();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize scroll animations
    initializeScrollAnimations();
}
function renderCertificates() {
    const certificatesGrid = document.getElementById('certificates-grid');
    const loadMoreContainer = document.getElementById('load-more-container');
    
    // Clear existing content
    certificatesGrid.innerHTML = '';
    
    // Show only first 4 certificates initially
    const initialCertificates = portfolioData.certificates.slice(0, 4);
    
    initialCertificates.forEach((cert, index) => {
        createCertificateCard(cert, certificatesGrid, index);
    });
    
    // Show load more button if there are more certificates
    if (portfolioData.certificates.length > 4) {
        loadMoreContainer.style.display = 'flex';
        loadMoreContainer.innerHTML = `
            <button id="load-more-btn" class="load-btn">
                <span>Load More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 5v14m0 0l-7-7m7 7l7-7"/>
                </svg>
            </button>
            <button id="load-less-btn" class="load-btn" style="display: none;">
                <span>Load Less</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 19V5m0 0l-7 7m7-7l7 7"/>
                </svg>
            </button>
        `;
        
        initializeLoadMoreLess();
    } else {
        loadMoreContainer.style.display = 'none';
    }
    
    // Initialize PDF modal functionality
    initializePDFModal();
}

function initializeLoadMoreLess() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loadLessBtn = document.getElementById('load-less-btn');
    const certificatesGrid = document.getElementById('certificates-grid');
    
    let allCertificatesLoaded = false;
    
    loadMoreBtn.addEventListener('click', function() {
        // Clear existing certificates
        certificatesGrid.innerHTML = '';
        
        // Show all certificates
        portfolioData.certificates.forEach((cert, index) => {
            createCertificateCard(cert, certificatesGrid, index);
        });
        
        // Hide load more, show load less
        loadMoreBtn.style.display = 'none';
        loadLessBtn.style.display = 'flex';
        allCertificatesLoaded = true;
    });
    
    loadLessBtn.addEventListener('click', function() {
        // Clear existing certificates
        certificatesGrid.innerHTML = '';
        
        // Show only first 4 certificates
        const initialCertificates = portfolioData.certificates.slice(0, 4);
        initialCertificates.forEach((cert, index) => {
            createCertificateCard(cert, certificatesGrid, index);
        });
        
        // Hide load less, show load more
        loadLessBtn.style.display = 'none';
        loadMoreBtn.style.display = 'flex';
        allCertificatesLoaded = false;
    });
}

function createCertificateCard(cert, container, index) {
    const certCard = document.createElement('div');
    certCard.className = 'certificate-mail animate-zoom-in';
    certCard.style.animationDelay = `${index * 0.1}s`;
    certCard.setAttribute('data-pdf', cert.pdfUrl);
    certCard.setAttribute('data-download', cert.downloadName);
    
    certCard.innerHTML = `
        <div class="letter-image">
            <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                    <div class="letter-border"></div>
                    <div class="letter-title"></div>
                    <div class="letter-context"></div>
                    <div class="letter-stamp">
                        <div class="letter-stamp-inner"></div>
                    </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
        </div>
        <div class="certificate-info">
            <h3 class="certificate-title">${cert.title}</h3>
            <p class="certificate-description">${cert.description}</p>
        </div>
    `;
    
    container.appendChild(certCard);
}
function initializePDFModal() {
    const modal = document.getElementById('pdf-modal');
    const certificateImage = document.getElementById('certificate-image');
    const downloadLink = document.getElementById('download-pdf');
    const closeModal = document.querySelector('.close-modal');
    const pdfTitle = document.querySelector('.pdf-title');
    
    // Open modal when certificate is clicked
    document.addEventListener('click', function(e) {
        const certificateMail = e.target.closest('.certificate-mail');
        if (certificateMail) {
            const imageUrl = certificateMail.getAttribute('data-pdf');
            const downloadName = certificateMail.getAttribute('data-download');
            const certificateTitle = certificateMail.querySelector('.certificate-title').textContent;
            
            if (imageUrl) {
                // Set image source and modal content
                certificateImage.src = imageUrl;
                certificateImage.alt = `${certificateTitle} Certificate`;
                pdfTitle.textContent = `${certificateTitle} - Certificate`;
                
                // Remove previous event listener
                downloadLink.replaceWith(downloadLink.cloneNode(true));
                const newDownloadLink = document.getElementById('download-pdf');
                
                // Add new event listener for download
                newDownloadLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    forceDownload(imageUrl, downloadName);
                });
                
                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Set focus for accessibility
                modal.setAttribute('aria-hidden', 'false');
                closeModal.focus();
            }
        }
    });
    
    // Close modal function
    function closeModalFunc() {
        modal.style.display = 'none';
        certificateImage.src = '';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }
    
    closeModal.addEventListener('click', closeModalFunc);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModalFunc();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunc();
        }
    });
    
    // Initialize modal accessibility
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
}

// Force download function
function forceDownload(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            // Create a blob link to download
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = filename;
            
            // Append to html page, click and remove
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up by revoking the blob URL
            window.URL.revokeObjectURL(blobUrl);
        })
        .catch(error => {
            console.error('Download failed:', error);
            // Fallback: open in new tab
            window.open(url, '_blank');
        });
}
function initializeEventListeners() {
    // Theme toggle
   

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        navMenu.classList.toggle('active', isMenuOpen);
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (isMenuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu
                if (isMenuOpen) {
                    hamburger.click();
                }
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active navigation based on scroll position
        updateActiveNavigation();
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Footer back to top
    document.querySelector('.footer-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (isMenuOpen && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.click();
        }
    });
}

// Add particle effect on mouse move
let particles = [];
const maxParticles = 50;

document.addEventListener('mousemove', function(e) {
    if (particles.length < maxParticles) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = '4px';
        particle.style.height = '4px';
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        // Animate particle
        let opacity = 1;
        let size = 4;
        
        const animateParticle = () => {
            opacity -= 0.02;
            size += 0.1;
            
            particle.style.opacity = opacity;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            if (opacity > 0) {
                requestAnimationFrame(animateParticle);
            } else {
                document.body.removeChild(particle);
                particles = particles.filter(p => p !== particle);
            }
        };
        
        requestAnimationFrame(animateParticle);
    }
});

function renderSkills() {
  const categories = {
    Frontend: document.getElementById('frontend-skills'),
    Backend: document.getElementById('backend-skills'),
    Programming: document.getElementById('programming-skills'),
    'Tools': document.getElementById('tools-skills'),
    'Database': document.getElementById('backend-skills'),
    'AI/ML': document.getElementById('tools-skills')
  };

  portfolioData.skills.forEach(skill => {
    const skillElement = document.createElement('div');
    skillElement.className = 'skill-item animate-zoom-in';
    skillElement.style.animationDelay = `${Math.random() * 0.5}s`;
    
    skillElement.innerHTML = `
      <div class="skill-icon" style="color: ${skill.color}">
        ${skill.icon}
      </div>
      <span>${skill.name}</span>
    `;
    
    // Add hover effect
    skillElement.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1) rotate(5deg)';
      this.style.boxShadow = `0 8px 25px ${skill.color}40`;
    });
    
    skillElement.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
      this.style.boxShadow = 'none';
    });
    
    if (categories[skill.category]) {
      categories[skill.category].appendChild(skillElement);
    }
  });
}

function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    
    portfolioData.projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate-slide-up';
        projectCard.style.animationDelay = `${index * 0.2}s`;
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${techTags}
            </div>
            <div class="project-links">
                <a href="${project.github_url}" target="_blank" class="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                <a href="${project.live_url}" target="_blank" class="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                </a>
            </div>
        `;
        
        // Add staggered animation
        setTimeout(() => {
            projectCard.classList.add('animate-slide-up');
        }, index * 200);
        
        projectsGrid.appendChild(projectCard);
    });
}

function initializeScrollAnimations() {
    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}

function initializeSamuraiAnimation() {
    const samurai = document.querySelector('.samurai');
    let classes = null;
    let keys = {};

    const removeClasses = () => {
        if (classes) {
            classes.forEach((classe) => {
                if (classe !== 'samurai') {
                    samurai.classList.remove(classe);
                }
            });
        }
    };

    const setIdle = () => {
        removeClasses();
        samurai.classList.add('idle');
    };

    // Initialize samurai animation
    window.addEventListener('keydown', function (ev) {
        // Only handle A, D, K keys
        if (!['a', 'd', 'k', 'A', 'D', 'K'].includes(ev.key)) return;
        
        classes = Array.from(samurai.classList);
        removeClasses();

        keys[ev.key.toLowerCase()] = true;

        switch (ev.key.toLowerCase()) {
            case 'd':
                samurai.style.transform = 'scaleX(3) scaleY(3)';
                samurai.classList.add('run');
                break;
            case 'a':
                samurai.style.transform = 'scaleX(-3) scaleY(3)';
                samurai.classList.add('run');
                break;
            case 'k':
                samurai.classList.add('attack');
                break;
        }
    });

    window.addEventListener('keyup', function (ev) {
        if (!['a', 'd', 'k', 'A', 'D', 'K'].includes(ev.key)) return;
        
        keys[ev.key.toLowerCase()] = false;
        
        // Only set idle if no movement keys are pressed
        if (!keys['a'] && !keys['d'] && !keys['k']) {
            setIdle();
        }
    });

    // Fallback to idle if keys get stuck
    setInterval(() => {
        let hasActiveKey = false;
        for (let key in keys) {
            if (keys[key]) {
                hasActiveKey = true;
                break;
            }
        }
        if (!hasActiveKey && !samurai.classList.contains('idle')) {
            setIdle();
        }
    }, 100);
}

function initializeAnimations() {
    // Add initial animations to elements
    const animatedElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-actions');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('animate-fade-in');
    });
}

function updateActiveNavigation() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // Update active navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Actually submit the form
    fetch(portfolioData.contact.form_endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Success
            form.reset();
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#10b981';
        } else {
            throw new Error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.textContent = 'Failed to Send';
        submitBtn.style.backgroundColor = '#ef4444';
    })
    .finally(() => {
        // Reset button after delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
        }, 3000);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
        opacity: 0;
    }
    
    .animate-slide-up {
        animation: slideUp 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    .animate-zoom-in {
        animation: zoomIn 0.5s ease-out forwards;
        opacity: 0;
        transform: scale(0.9);
    }
    
    .animate-in {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideUp {
        from { 
            opacity: 0;
            transform: translateY(30px);
        }
        to { 
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes zoomIn {
        from { 
            opacity: 0;
            transform: scale(0.9);
        }
        to { 
            opacity: 1;
            transform: scale(1);
        }
    }
    
    /* Fixed navigation styles */
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        background: white;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
   
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
   
    
    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 70px;
    }
    
    .nav-logo .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .nav-menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 2rem;
    }
    
    .nav-link {
        text-decoration: none;
        color: inherit;
        font-weight: 500;
        padding: 0.5rem 0;
        position: relative;
        transition: color 0.3s ease;
    }
    
    .nav-link:hover {
        color: #667eea;
    }
    
    .nav-link.active {
        color: #667eea;
    }
    
    .nav-link.active::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 2px;
    }
    
    .nav-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .theme-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background-color 0.3s ease;
    }
    
    .theme-toggle:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    
   
    
    .theme-icon {
        display: block;
    }
    
    .moon-icon {
        display: none;
    }
    
   
    
    .hamburger {
        display: none;
        flex-direction: column;
        cursor: pointer;
        padding: 0.5rem;
        gap: 4px;
    }
    
    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: currentColor;
        border-radius: 2px;
        transition: all 0.3s ease;
        transform-origin: center;
    }
    
    /* Mobile styles */
    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }
        
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 1rem 0;
            gap: 0;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
       
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-link {
            display: block;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        
        
        .nav-link:last-child {
            border-bottom: none;
        }
        
        .nav-link.active::after {
            display: none;
        }
        
        .nav-link.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            margin: 0 1rem;
            border-radius: 8px;
        }
    }
`;
document.head.appendChild(style);