/**
 * OLADUNNI OLUWASEGUN EMMANUEL — PORTFOLIO
 * main.js — Interactions, animations, and utilities
 */

/* ============================================================
   LOADER
   ============================================================ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    // Trigger hero entrance after loader
    document.body.style.overflow = '';
  }, 1400);
});

// Prevent scroll during load
document.body.style.overflow = 'hidden';


/* ============================================================
   NAVBAR — scroll effect + mobile toggle
   ============================================================ */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Scroll detection
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile hamburger
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    document.body.style.overflow = '';
  });
});


/* ============================================================
   SMOOTH ACTIVE NAV HIGHLIGHT
   ============================================================ */
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'page');
      }
    }
  });
}
window.addEventListener('scroll', highlightNavLink, { passive: true });


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ============================================================
   CONTACT FORM — validation + feedback
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = contactForm.querySelector('#fname').value.trim();
    const email   = contactForm.querySelector('#femail').value.trim();
    const subject = contactForm.querySelector('#fsubject').value.trim();
    const message = contactForm.querySelector('#fmessage').value.trim();
    const submit  = contactForm.querySelector('.form-submit');

    // Basic validation
    if (!name || !email || !subject || !message) {
      shakeForm(contactForm);
      return;
    }
    if (!isValidEmail(email)) {
      shakeInput(contactForm.querySelector('#femail'));
      return;
    }

    // Simulate send (replace with real backend / EmailJS / Formspree)
    submit.textContent = 'Sending…';
    submit.disabled = true;

    setTimeout(() => {
      submit.textContent = 'Send Message →';
      submit.disabled = false;
      contactForm.reset();
      formSuccess.classList.add('show');
      setTimeout(() => formSuccess.classList.remove('show'), 5000);
    }, 1500);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeForm(form) {
  form.style.animation = 'shake 0.4s ease';
  form.addEventListener('animationend', () => form.style.animation = '', { once: true });
}

function shakeInput(input) {
  input.style.borderColor = '#c0392b';
  input.focus();
  setTimeout(() => input.style.borderColor = '', 2000);
}


/* ============================================================
   FOOTER — dynamic year
   ============================================================ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ============================================================
   TICKER — pause on hover
   ============================================================ */
const ticker = document.querySelector('.ticker-track');
if (ticker) {
  ticker.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  ticker.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}


/* ============================================================
   CSS SHAKE KEYFRAME (injected via JS)
   ============================================================ */
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%       { transform: translateX(-6px); }
    40%       { transform: translateX(6px); }
    60%       { transform: translateX(-4px); }
    80%       { transform: translateX(4px); }
  }
`;
document.head.appendChild(shakeStyle);


/* ============================================================
   SKILL BLOCK — subtle entrance stagger via JS
   ============================================================ */
const skillBlocks = document.querySelectorAll('.skill-block');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.07}s`;
      entry.target.classList.add('visible');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
skillBlocks.forEach(b => { b.classList.add('reveal'); skillObserver.observe(b); });


/* ============================================================
   PROJECT CARDS — entrance stagger
   ============================================================ */
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${i * 0.1}s`;
      entry.target.classList.add('visible');
      projectObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });
projectCards.forEach(c => { c.classList.add('reveal'); projectObserver.observe(c); });
