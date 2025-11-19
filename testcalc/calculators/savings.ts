/**
 * Savings Calculator
 * Calculates future value of a lump sum savings with compound interest.
 * Formula: FV = P * (1 + r)^n
 */

export const savingsCalc = {
  id: 'savings',
  name: 'Savings Calculator',
  description: 'Calculate future value of your savings.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="savingsForm">
        <div>
          <label>Initial Amount (₹):</label>
          <input type="number" id="initialAmount" required />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input type="number" id="interestRate" required />
        </div>
        <div>
          <label>Tenure (Years):</label>
          <input type="number" id="tenure" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('savingsForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('initialAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const years = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 100;
      const fv = P * Math.pow(1 + r, years);

      resultDiv.innerHTML = `
        <h3>Future Value: ₹${fv.toFixed(2)}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Principal</th><td>₹${P.toFixed(2)}</td></tr>
          <tr><th>Total Interest</th><td>₹${(fv - P).toFixed(2)}</td></tr>
          <tr><th>Maturity Amount</th><td>₹${fv.toFixed(2)}</td></tr>
        </table>
      `;
    });
  }
};
