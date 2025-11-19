/**
 * SIP Calculator
 * Calculates future value of SIP investments.
 * Formula: FV = P * [((1+r)^n - 1)/r] * (1+r)
 * P = monthly investment, r = monthly return rate, n = number of months
 */

export const sipCalc = {
  id: 'sip',
  name: 'SIP Calculator',
  description: 'Calculate future value of SIP investments.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="sipForm">
        <div>
          <label>Monthly Investment (₹):</label>
          <input type="number" id="monthlyInvestment" required />
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

    const form = document.getElementById('sipForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('monthlyInvestment') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('returnRate') as HTMLInputElement).value);
      const years = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = years * 12;
      const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

      resultDiv.innerHTML = `
        <h3>Future Value: ₹${fv.toFixed(2)}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Total Investment</th><td>₹${(P * n).toFixed(2)}</td></tr>
          <tr><th>Estimated Returns</th><td>₹${(fv - P * n).toFixed(2)}</td></tr>
          <tr><th>Maturity Amount</th><td>₹${fv.toFixed(2)}</td></tr>
        </table>
      `;
    });
  }
};
