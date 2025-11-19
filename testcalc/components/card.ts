/**
 * Card Component
 * Creates a clickable card for each calculator with SVG icon, title, and description.
 */

interface Calculator {
  id: string;
  name: string;
  description: string;
}

export function renderCard(calculator: Calculator): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card';

  // Click → Navigate to calculator
  card.addEventListener('click', () => {
    window.location.href = `?id=${calculator.id}`;
  });

  // Icon (SVG based on category)
  const icon = document.createElement('div');
  icon.className = 'card-icon';
  icon.innerHTML = getIcon(calculator.id);

  // Title
  const title = document.createElement('div');
  title.className = 'card-title';
  title.textContent = calculator.name;

  // Description
  const desc = document.createElement('div');
  desc.className = 'card-desc';
  desc.textContent = calculator.description;

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(desc);

  return card;
}

/**
 * Returns SVG icon based on calculator ID
 */
function getIcon(id: string): string {
  if (id.includes('sip') || id.includes('swp') || id.includes('pension') || id.includes('savings')) {
    return `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 17h18v2H3v-2zm0-7h18v2H3V10zm0-7h18v2H3V3z"/></svg>`; // Chart icon
  }
  if (id.includes('brokerage')) {
    return `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/></svg>`; // Briefcase icon
  }
  if (id.includes('loan') || id.includes('credit')) {
    return `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 8-8 8-8-8 8-8z"/></svg>`; // Home icon
  }
  if (id.includes('debt') || id.includes('amortization')) {
    return `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>`; // Calculator icon
  }
  return `<svg fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`; // Default circle
}
