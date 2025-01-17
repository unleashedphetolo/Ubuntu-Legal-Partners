document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    // Initialize theme
    let currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(`${currentTheme}-theme`);
    themeToggleButton.textContent = currentTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme';

    // Toggle theme
    themeToggleButton.addEventListener('click', () => {
        currentTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
        body.className = `${currentTheme}-theme`;
        themeToggleButton.textContent = currentTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme';
        localStorage.setItem('theme', currentTheme);
   
 });
});