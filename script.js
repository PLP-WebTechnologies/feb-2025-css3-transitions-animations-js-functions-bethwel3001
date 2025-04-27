document.addEventListener('DOMContentLoaded', () => {
  const animateBtn = document.getElementById('animateBtn');
  const animatedBox = document.getElementById('animatedBox');
  const themeToggle = document.getElementById('themeToggle');

  // Load user preferences from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  }

  // Toggle dark theme and save preference
  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });

  // Trigger animation on button click
  animateBtn.addEventListener('click', () => {
    // Add animation class
    animatedBox.classList.add('animate');

    // Remove animation class after animation ends to allow retriggering 
    animatedBox.addEventListener('animationend', () => {
      animatedBox.classList.remove('animate');
    }, { once: true });
  });
});
