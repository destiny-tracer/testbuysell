/**
 * SWP Calculator
 * Calculates how long your investment will last with a fixed withdrawal.
 */

export const swpCalc = {
  id: 'swp',
  name: 'SWP Calculator',
  description: 'Calculate duration of investment with systematic withdrawals.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="swpForm">
        <div>
          <label>Initial Investment (₹):</label>
          <input type="number" id="initialInvestment" required />
        </div>
        <div>
          <label>Annual Return Rate (%):</label>
          <input type="number" id="returnRate" required />
        </div>
        <div>
          <label>Monthly Withdrawal (₹):</label>
          <input type="number" id="withdrawal" required />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('swpForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let balance = parseFloat((document.getElementById('initialInvestment') as HTMLInputElement).value);
      const annualRate = parseFloat((document.getElementById('returnRate') as HTMLInputElement).value);
      const withdrawal = parseFloat((document.getElementById('withdrawal') as HTMLInputElement).value);

      const r = annualRate / 12 / 100;
      let months = 0;

      while (balance > 0) {
        balance = balance * (1 + r) - withdrawal;
        months++;
        if (months > 1000) break; // safety
      }

      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;

      resultDiv.innerHTML = `
        <h3>Your investment will last for ${years} years and ${remainingMonths} months.</h3>
      `;
    });
  }
};
