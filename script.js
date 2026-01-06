// Mobile nav toggle, smooth scroll, and simple contact form handling

document.addEventListener('DOMContentLoaded', () => {
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-hidden', String(expanded));
    });
  }

  // Smooth scroll for same-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close nav on small screens
        if (nav && window.innerWidth < 900) {
          nav.setAttribute('aria-hidden', 'true');
          if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Basic contact form client-side handling
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = 'Please complete all required fields.';
        return;
      }

      // For a starter site, we won't send form data anywhere.
      // Option A: Replace this block with a fetch() to Formspree/Netlify/your backend.
      status.textContent = 'Thanks — your message was received (this demo doesn\'t send messages).';

      // Clear form after submit
      form.reset();
      setTimeout(() => { status.textContent = ''; }, 6000);
    });
  }
});