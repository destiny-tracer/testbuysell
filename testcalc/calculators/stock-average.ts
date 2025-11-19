/**
 * Stock Average Calculator
 * Calculates average price after multiple purchases.
 */

export const stockAverageCalc = {
  id: 'stock-average',
  name: 'Stock Average Calculator',
  description: 'Compute average stock price after multiple buys.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="stockForm">
        <div>
          <label>First Buy Price:</label>
          <input type="number" id="price1" required />
        </div>
        <div>
          <label>First Buy Quantity:</label>
          <input type="number" id="qty1" required />
        </div>
        <div>
          <label>Second Buy Price:</label>
          <input type="number" id="price2" required />
        </div>
        <div>
          <label>Second Buy Quantity:</label>
          <input type="number" id="qty2" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('stockForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const price1 = parseFloat((document.getElementById('price1') as HTMLInputElement).value);
      const qty1 = parseFloat((document.getElementById('qty1') as HTMLInputElement).value);
      const price2 = parseFloat((document.getElementById('price2') as HTMLInputElement).value);
      const qty2 = parseFloat((document.getElementById('qty2') as HTMLInputElement).value);

      const avgPrice = ((price1 * qty1) + (price2 * qty2)) / (qty1 + qty2);
      resultDiv.innerHTML = `<h3>Average Price: ₹${avgPrice.toFixed(2)}</h3>`;
    });
  }
};
