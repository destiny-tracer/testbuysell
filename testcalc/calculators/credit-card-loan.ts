/**
 * Credit Card Loan Calculator
 * Calculates EMI for credit card loans and shows summary table.
 */

export const creditCardLoanCalc = {
  id: 'credit-card-loan',
  name: 'Credit Card Loan Calculator',
  description: 'Calculate EMI for credit card loans.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="creditCardLoanForm">
        <div>
          <label>Loan Amount (₹):</label>
          <input type="number" id="loanAmount" required />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input type="number" id="interestRate" required />
        </div>
        <div>
          <label>Tenure (Months):</label>
          <input type="number" id="tenure" required />
        </div>
        <button type="submit">Calculate EMI</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('creditCardLoanForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('loanAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const months = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = months;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const interest = totalPayment - P;

      resultDiv.innerHTML = `
        <h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Principal</th><td>₹${P.toFixed(2)}</td></tr>
          <tr><th>Total Interest</th><td>₹${interest.toFixed(2)}</td></tr>
          <tr><th>Total Payment</th><td>₹${totalPayment.toFixed(2)}</td></tr>
        </table>
      `;
    });
  }
};
