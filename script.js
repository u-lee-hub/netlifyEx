// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved === 'light'){ root.classList.add('light'); }
document.getElementById('themeToggle').addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Mobile nav
const nav = document.getElementById('nav');
document.getElementById('hamburger').addEventListener('click', () => {
  nav.classList.toggle('open');
});
