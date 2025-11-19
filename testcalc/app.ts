/**
 * app.ts
 * Handles SPA navigation, dashboard rendering, and dark mode toggle.
 */

import { renderNavbar } from './components/navbar.js';
import { renderCard } from './components/card.js';
import { calculators } from './calculators/index.js';

// Main app container
const appContainer = document.getElementById('app') as HTMLElement;

// Render Navbar
renderNavbar();

// Check URL for ?id parameter
const urlParams = new URLSearchParams(window.location.search);
const calcId = urlParams.get('id');

if (calcId) {
  // Load specific calculator
  const calculator = calculators.find(c => c.id === calcId);
  if (calculator) {
    calculator.render(appContainer);
  } else {
    appContainer.innerHTML = `<p>Calculator not found.</p>`;
  }
} else {
  // Render dashboard with grouped categories
  renderDashboard();
}

/**
 * Render homepage dashboard with grouped calculator cards
 */
function renderDashboard() {
  appContainer.innerHTML = '';

  // Group calculators by category
  const categories: Record<string, string[]> = {
    'Investments': ['sip', 'swp', 'pension', 'savings', 'stock-average'],
    'Brokerage': ['zerodha-brokerage', 'kotak-brokerage'],
    'Loans': ['housing-loan', 'gold-loan', 'personal-loan', 'app-loan', 'credit-card-loan'],
    'Debt Tools': ['debt', 'amortization']
  };

  for (const [category, ids] of Object.entries(categories)) {
    const section = document.createElement('section');
    section.className = 'grid-section';
    section.innerHTML = `<h2>${category}</h2>`;

    const grid = document.createElement('div');
    grid.className = 'grid';

    ids.forEach(id => {
      const calc = calculators.find(c => c.id === id);
      if (calc) {
        const card = renderCard(calc);
        grid.appendChild(card);
      }
    });

    section.appendChild(grid);
    appContainer.appendChild(section);
  }
}
