// Initialize Lenis for Smooth Scrolling
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0, 0);

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Logic
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
});

// Magnetic Buttons
const magneticBtns = document.querySelectorAll('.magnetic-btn');
magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.2 });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.2 });
    });

    btn.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-active');
    });
    
    btn.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-active');
    });
});

// Project links hover state
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-active');
    });
    card.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-active');
    });
});


// Loader Animation & Object Entrance
const loaderTl = gsap.timeline();

loaderTl.to('.loader-progress', {
    width: '100%',
    duration: 2.5,
    ease: 'power2.inOut',
    onUpdate: function() {
        document.querySelector('.loader-percentage').innerText = Math.round(this.progress() * 100) + '%';
    }
})
.to('#loader', {
    yPercent: -100,
    duration: 1.2,
    ease: 'power4.inOut'
})
.fromTo('#story-object', 
    { y: -800, opacity: 0, scale: 0.5 },
    { y: 0, opacity: 1, scale: 1, duration: 2, ease: 'bounce.out' }, 
    '-=0.5'
)
.from('.hero-title', { y: 100, opacity: 0, duration: 1.5, ease: 'power4.out' }, '-=1.5')
.from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1.2')
.from('.hero-cta', { y: 50, opacity: 0, duration: 1, ease: 'power3.out' }, '-=1');


// Complex, organic floating animation for the story object
gsap.to('#story-object img', {
    y: 50,
    x: 30,
    rotation: 20,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});
gsap.to('#story-object img', {
    scale: 1.15,
    duration: 4.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Continuous floating animation for skill nodes
gsap.utils.toArray('.skill-node').forEach((node, i) => {
    gsap.to(node, {
        y: () => -15 - Math.random() * 15,
        x: () => -5 + Math.random() * 10,
        rotation: () => -2 + Math.random() * 4,
        duration: () => 2 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.2
    });
});

// React to scroll velocity


// Story Object Scroll Sequence - Fluid Parallax Path
const storyTl = gsap.timeline({
    scrollTrigger: {
        trigger: '#smooth-content',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5
    }
});

// About Section: Arc to the top right and scale down
storyTl.to('#story-object', { 
    x: () => window.innerWidth * 0.3, 
    y: () => -window.innerHeight * 0.2,
    scale: 0.6, 
    rotation: 75,
    ease: "power2.inOut"
}, 0);

// Skills Section: Dive down behind the skills
storyTl.to('#story-object', { 
    x: () => -window.innerWidth * 0.25, 
    y: () => window.innerHeight * 0.15,
    scale: 0.4, 
    rotation: 180,
    opacity: 0.4,
    ease: "power2.inOut"
}, 0.25);

// Experience Section: Become big, stick to right side, rotated 90deg anticlockwise (-90)
storyTl.to('#story-object', { 
    x: () => window.innerWidth * 0.35, 
    y: 0,
    scale: 1.5, 
    rotation: -90,
    opacity: 0.8,
    ease: "power2.inOut"
}, 0.5);

// Projects Section: Stay on the right side, maybe drift slightly
storyTl.to('#story-object', { 
    x: () => window.innerWidth * 0.35, 
    y: () => window.innerHeight * 0.1,
    scale: 1.6,
    rotation: -90,
    ease: "none"
}, 0.75);

// Contact Section: Slowly come in between (center)
storyTl.to('#story-object', { 
    x: 0, 
    y: 0, 
    scale: 2, 
    rotation: 0,
    opacity: 1,
    ease: "power2.inOut"
}, 0.9);


// --- Content Reveals ---

// About Text Split
const splitText = new SplitType('.about-text', { types: 'words, chars' });

gsap.from(splitText.words, {
    opacity: 0.1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.about',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

// Experience Timeline Reveal
gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    gsap.to(item, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true
        }
    });
});

// Projects Cards Reveal
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 100,
        rotationX: -10,
        scrollTrigger: {
            trigger: card,
            start: 'top 95%',
            end: 'top 60%',
            scrub: true
        }
    });
});

// Achievements Reveal
gsap.from('.achievement-item', {
    opacity: 0,
    x: -50,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.achievements',
        start: 'top 80%',
        once: true
    }
});

// Project Cards Click to Expand
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        
        // Close all other cards
        document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active'));
        
        if (!isActive) {
            card.classList.add('active');
        }
        
        // Refresh ScrollTrigger to accommodate new heights
        setTimeout(() => ScrollTrigger.refresh(), 400);
    });
});


