/**
 * Housing Loan Calculator
 * Calculates EMI for a housing loan using formula:
 * EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]
 * P = Principal, r = monthly interest rate, n = number of months
 */

export const housingLoanCalc = {
  id: 'housing-loan',
  name: 'Housing Loan Calculator',
  description: 'Calculate EMI for your home loan.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="housingForm">
        <div>
          <label>Loan Amount (₹):</label>
          <input type="number" id="loanAmount" required />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input type="number" id="interestRate" required />
        </div>
        <div>
          <label>Tenure (Years):</label>
          <input type="number" id="tenure" required />
        </div>
        <button type="submit">Calculate EMI</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('housingForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('loanAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const years = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = years * 12;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      resultDiv.innerHTML = `<h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>`;
    });
  }
};
