/**
 * Debt Calculator with Strategy Selection
 * Allows user to select a debt payoff strategy and simulate results.
 */

import { snowballStrategy } from '../strategies/snowball.js';
import { avalancheStrategy } from '../strategies/avalanche.js';
import { hybridStrategy } from '../strategies/hybrid.js';

export const debtCalc = {
  id: 'debt',
  name: 'Debt Calculator',
  description: 'Calculate total debt payoff and simulate strategies.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="debtForm">
        <div>
          <label>Enter debts (comma-separated: amount-interest-rate):</label>
          <input type="text" id="debts" placeholder="e.g. 50000-12,30000-15" required />
        </div>
        <div>
          <label>Monthly Payment (₹):</label>
          <input type="number" id="monthlyPayment" required />
        </div>
        <div>
          <label>Select Strategy:</label>
          <select id="strategy">
            <option value="snowball">Snowball (smallest debt first)</option>
            <option value="avalanche">Avalanche (highest interest first)</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>
        <button type="submit">Simulate</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('debtForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const debtsInput = (document.getElementById('debts') as HTMLInputElement).value;
      const monthlyPayment = parseFloat((document.getElementById('monthlyPayment') as HTMLInputElement).value);
      const strategy = (document.getElementById('strategy') as HTMLSelectElement).value;

      // Parse debts
      const debts = debtsInput.split(',').map(item => {
        const [amount, rate] = item.split('-').map(Number);
        return { amount, rate };
      });

      let result;
      if (strategy === 'snowball') {
        result = snowballStrategy(debts, monthlyPayment);
      } else if (strategy === 'avalanche') {
        result = avalancheStrategy(debts, monthlyPayment);
      } else {
        result = hybridStrategy(debts, monthlyPayment);
      }

      // Display results
      resultDiv.innerHTML = `
        <h3>Strategy: ${strategy}</h3>
        <table border="1" style="margin-top:10px;width:100%;text-align:left;">
          <tr><th>Total Interest Paid</th><td>₹${result.totalInterest.toFixed(2)}</td></tr>
          <tr><th>Total Payments</th><td>₹${result.totalPaid.toFixed(2)}</td></tr>
          <tr><th>Months to Payoff</th><td>${result.months}</td></tr>
        </table>
      `;
    });
  }
};
