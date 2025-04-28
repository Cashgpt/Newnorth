// ========== Sylvan North Forestry Website Main Script ==========

// Confirm website loaded
console.log('Sylvan North Forestry Website Loaded Successfully');

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ========== Future Interactive Scripts (Placeholder) ==========
// Example: Add mobile menu toggle script here if needed
