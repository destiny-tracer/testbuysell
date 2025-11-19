/**
 * Pension Calculator
 * Calculates estimated pension corpus based on monthly contribution and tenure.
 */

export const pensionCalc = {
  id: 'pension',
  name: 'Pension Calculator',
  description: 'Estimate your pension corpus based on contributions.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="pensionForm">
        <div>
          <label>Monthly Contribution (₹):</label>
          <input type="number" id="monthlyContribution" required />
        </div>
        <div>
          <label>Annual Return Rate (%):</label>
          <input type="number" id="returnRate" required />
        </div>
        <div>
          <label>Tenure (Years):</label>
          <input type="number" id="tenure" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('pensionForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('monthlyContribution') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('returnRate') as HTMLInputElement).value);
      const years = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = years * 12;
      const corpus = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

      resultDiv.innerHTML = `
        <h3>Estimated Pension Corpus: ₹${corpus.toFixed(2)}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Total Contribution</th><td>₹${(P * n).toFixed(2)}</td></tr>
          <tr><th>Estimated Returns</th><td>₹${(corpus - P * n).toFixed(2)}</td></tr>
          <tr><th>Maturity Amount</th><td>₹${corpus.toFixed(2)}</td></tr>
        </table>
      `;
    });
  }
};
