/**
 * Kotak Brokerage Calculator
 * Calculates brokerage charges for Kotak trades.
 * Formula: Brokerage = 0.25% of turnover (buy + sell)
 */

export const kotakBrokerageCalc = {
  id: 'kotak-brokerage',
  name: 'Kotak Brokerage Calculator',
  description: 'Calculate brokerage charges for Kotak trades.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="kotakForm">
        <div>
          <label>Buy Price:</label>
          <input type="number" id="buyPrice" required />
        </div>
        <div>
          <label>Sell Price:</label>
          <input type="number" id="sellPrice" required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" id="quantity" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('kotakForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const buyPrice = parseFloat((document.getElementById('buyPrice') as HTMLInputElement).value);
      const sellPrice = parseFloat((document.getElementById('sellPrice') as HTMLInputElement).value);
      const quantity = parseFloat((document.getElementById('quantity') as HTMLInputElement).value);

      const turnover = (buyPrice + sellPrice) * quantity;
      const brokerage = 0.0025 * turnover; // 0.25%
      const profit = (sellPrice - buyPrice) * quantity - brokerage;

      resultDiv.innerHTML = `
        <h3>Brokerage: ₹${brokerage.toFixed(2)}</h3>
        <h3>Net Profit: ₹${profit.toFixed(2)}</h3>
      `;
    });
  }
};
