// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('light-mode')) {
    // Switch to dark mode
    htmlElement.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    // Switch to light mode
    htmlElement.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    htmlElement.classList.add('light-mode');
  }
});