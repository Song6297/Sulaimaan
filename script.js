 // Preloader Script
 window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

  // JavaScript for Modal
  const headerLogo = document.getElementById('headerLogo');
  const modal = document.getElementById('modal');
  const mainContent = document.querySelector('.main-content');

  headerLogo.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.classList.add('blur'); // Add blur effect
  });

  modal.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('blur'); // Remove blur effect
  });

  
// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');

    // Close dropdowns inside mobile navigation
    const dropdowns = document.querySelectorAll('.mobile-nav .dropdown');
    dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
});

// Dropdown Toggle
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();

        // For mobile nav, toggle dropdown visibility
        const dropdown = toggle.parentElement;
        const parentMenu = dropdown.closest('.mobile-nav');
        if (parentMenu) {
            dropdown.classList.toggle('active');
        }
    });
});

// Close mobile nav after selecting an option
const menuItems = document.querySelectorAll('.mobile-nav a:not(.dropdown-toggle)');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});


   