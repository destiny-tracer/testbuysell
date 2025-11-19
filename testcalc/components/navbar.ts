/**
 * Navbar Component
 * Renders the top navigation bar with app title and dark mode toggle.
 */

export function renderNavbar() {
  const navbar = document.getElementById('navbar') as HTMLElement;

  // Create container
  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.alignItems = 'center';
  nav.style.width = '100%';

  // App Title
  const title = document.createElement('h1');
  title.textContent = 'FinCalc';
  title.style.margin = '0';
  title.style.fontSize = '1.5rem';

  // Dark Mode Toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙';
  toggleBtn.style.fontSize = '1.2rem';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.background = 'none';
  toggleBtn.style.border = 'none';

  // Toggle logic
  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleBtn.textContent = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleBtn.textContent = '☀️';
    }
  });

  nav.appendChild(title);
  nav.appendChild(toggleBtn);
  navbar.appendChild(nav);
}
