/**
 * Amortization Calculator
 * Calculates EMI and generates a full amortization schedule.
 * Formula: EMI = [P * r * (1+r)^n] / [(1+r)^n - 1]
 * P = Principal, r = monthly interest rate, n = number of months
 */

export const amortizationCalc = {
  id: 'amortization',
  name: 'Amortization Calculator',
  description: 'Generate EMI and full amortization schedule.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="amortizationForm">
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
        <button type="submit">Generate Schedule</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('amortizationForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const P = parseFloat((document.getElementById('loanAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const months = parseFloat((document.getElementById('tenure') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      const n = months;
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

      let balance = P;
      let scheduleRows = '';
      let totalInterest = 0;

      for (let i = 1; i <= n; i++) {
        const interest = balance * r;
        const principal = emi - interest;
        balance -= principal;
        totalInterest += interest;

        scheduleRows += `
          <tr>
            <td>${i}</td>
            <td>₹${emi.toFixed(2)}</td>
            <td>₹${principal.toFixed(2)}</td>
            <td>₹${interest.toFixed(2)}</td>
            <td>₹${balance > 0 ? balance.toFixed(2) : '0.00'}</td>
          </tr>
        `;
      }

      resultDiv.innerHTML = `
        <h3>Monthly EMI: ₹${emi.toFixed(2)}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Total Interest</th><td>₹${totalInterest.toFixed(2)}</td></tr>
          <tr><th>Total Payment</th><td>₹${(totalInterest + P).toFixed(2)}</td></tr>
        </table>
        <h3>Amortization Schedule</h3>
        <table border="1" style="width:100%;text-align:center;">
          <thead>
            <tr>
              <th>Month</th>
              <th>EMI</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            ${scheduleRows}
          </tbody>
        </table>
      `;
    });
  }
};
