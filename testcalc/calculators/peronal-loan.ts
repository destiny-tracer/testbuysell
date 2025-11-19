/**
 * Personal Loan Calculator
 * Calculates EMI for a personal loan using the standard EMI formula.
 */

export const personalLoanCalc = {
  id: 'personal-loan',
  name: 'Personal Loan Calculator',
  description: 'Calculate EMI for your personal loan.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="personalLoanForm">
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

    const form = document.getElementById('personalLoanForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('loanAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const months = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = months;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      resultDiv.innerHTML = `<h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>`;
    });
  }
};
