/**
 * Debt Calculator
 * Calculates total debt payoff amount and interest based on multiple debts.
 */

export const debtCalc = {
  id: 'debt',
  name: 'Debt Calculator',
  description: 'Calculate total debt payoff and interest.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="debtForm">
        <div>
          <label>Debt Amount (₹):</label>
          <input type="number" id="debtAmount" required />
        </div>
        <div>
          <label>Annual Interest Rate (%):</label>
          <input type="number" id="interestRate" required />
        </div>
        <div>
          <label>Monthly Payment (₹):</label>
          <input type="number" id="monthlyPayment" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('debtForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let balance = parseFloat((document.getElementById('debtAmount') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('interestRate') as HTMLInputElement).value);
      const monthlyPayment = parseFloat((document.getElementById('monthlyPayment') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      let totalInterest = 0;
      let months = 0;

      while (balance > 0) {
        const interest = balance * r;
        balance = balance + interest - monthlyPayment;
        totalInterest += interest;
        months++;
        if (months > 1000) break; // safety
      }

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      resultDiv.innerHTML = `
        <h3>Payoff Time: ${years} years and ${remainingMonths} months</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Total Interest Paid</th><td>₹${totalInterest.toFixed(2)}</td></tr>
          <tr><th>Total Payments</th><td>₹${(totalInterest + parseFloat((document.getElementById('debtAmount') as HTMLInputElement).value)).toFixed(2)}</td></tr>
        </table>
      `;
    });
  }
};
