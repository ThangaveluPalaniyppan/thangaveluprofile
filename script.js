document.getElementById('year').textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('tp-theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('tp-theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
});
