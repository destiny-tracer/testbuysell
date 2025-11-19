/**
 * Demo Calculator
 * A simple example to verify the app structure and SPA navigation.
 */

export const demoCalc = {
  id: 'demo',
  name: 'Demo Calculator',
  description: 'A simple calculator to test the app setup.',
  render(container: HTMLElement) {
    container.innerHTML = `
      <h2>${this.name}</h2>
      <p>${this.description}</p>
      <form id="demoForm">
        <div>
          <label>Number 1:</label>
          <input type="number" id="num1" required />
        </div>
        <div>
          <label>Number 2:</label>
          <input type="number" id="num2" required />
        </div>
        <button type="submit">Add</button>
      </form>
      <div id="result"></div>
    `;

    const form = document.getElementById('demoForm') as HTMLFormElement;
    const resultDiv = document.getElementById('result') as HTMLElement;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const num1 = parseFloat((document.getElementById('num1') as HTMLInputElement).value);
      const num2 = parseFloat((document.getElementById('num2') as HTMLInputElement).value);
      const sum = num1 + num2;

      resultDiv.innerHTML = `<h3>Result: ${sum}</h3>`;
    });
  }
};
