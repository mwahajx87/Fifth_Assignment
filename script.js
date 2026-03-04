// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav > ul');
  
  // Create menu toggle button if it doesn't exist
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navUl.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navUl.contains(e.target)) {
        menuToggle.classList.remove('active');
        navUl.classList.remove('active');
      }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        menuToggle.classList.remove('active');
        navUl.classList.remove('active');
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu after clicking
        if (menuToggle && navUl) {
          menuToggle.classList.remove('active');
          navUl.classList.remove('active');
        }
      }
    });
  });
  
  // Add hover effect for cards
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Newsletter subscription handling
  const newsletterForm = document.querySelector('.newsletter');
  if (newsletterForm) {
    const subscribeBtn = newsletterForm.querySelector('button');
    const emailInput = newsletterForm.querySelector('input');
    
    if (subscribeBtn && emailInput) {
      subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (emailInput.value && emailInput.value.includes('@')) {
          alert('Thank you for subscribing to our newsletter!');
          emailInput.value = '';
        } else {
          alert('Please enter a valid email address.');
        }
      });
    }
  }
});

