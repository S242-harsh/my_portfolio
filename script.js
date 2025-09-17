// Navbar background toggle on scroll
const header = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY >= 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
});

// Active section highlight on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(window.pageYOffset >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active-section');
    if(link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active-section');
    }
  });
});

// Animate Hero Text on scroll once when visible
const heroText = document.querySelector('.hero-text');
window.addEventListener('scroll', () => {
  const position = heroText.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if(position < screenPos) {
    heroText.classList.add('active');
  }
});

// Show/Hide Back to Top button based on scroll position
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 200) {
    backToTopBtn.style.display = 'flex'; // Prefer flex to support icon centering
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Smooth scroll on Back to Top button click
backToTopBtn.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
