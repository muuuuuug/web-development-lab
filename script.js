const themeToggleBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggleBtn.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);

  themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
});

const flipBtn = document.getElementById('flip-btn');
const flipCard = document.getElementById('myFlipCard');

if (flipBtn && flipCard) {
  flipBtn.addEventListener('click', () => {
    flipCard.classList.toggle('is-flipped');
  });
}