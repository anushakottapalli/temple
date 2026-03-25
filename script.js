// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

  // Donate option toggle
  document.querySelectorAll('.donate-option').forEach(opt => {
    opt.addEventListener('click', function() {
      document.querySelectorAll('.donate-option').forEach(o => o.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Nav active on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 80) {
      nav.style.boxShadow = '0 2px 32px rgba(0,0,0,0.4)';
    } else {
      nav.style.boxShadow = '0 2px 20px rgba(61,12,12,0.5)';
    }
  });