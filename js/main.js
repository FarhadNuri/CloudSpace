
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  navOverlay.classList.toggle('active');
  

  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.querySelector('.nav-toggle');
      const navOverlay = document.querySelector('.nav-overlay');
      
      if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  
 
  window.addEventListener('resize', function() {
    if (window.innerWidth > 576) {
      const navMenu = document.querySelector('.nav-menu');
      const navToggle = document.querySelector('.nav-toggle');
      const navOverlay = document.querySelector('.nav-overlay');
      
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
});
