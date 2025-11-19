/**
 * Chart Component
 * Wrapper for Chart.js to render charts easily.
 */

export function renderChart(container: HTMLElement, config: any) {
  // Create canvas
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);

  // Load Chart.js from global CDN
  // @ts-ignore
  new Chart(canvas.getContext('2d'), config);
