class ContractInfo extends HTMLElement {
  static get observedAttributes() {
    return ['address', 'owner'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const address = this.getAttribute('address') || 'Loading...';
    const owner = this.getAttribute('owner') || 'Loading...';

    this.innerHTML = `
      <style>
        .container {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 10px;
          font-family: sans-serif;
          padding: 20px;
          max-width: 600px;
          margin: auto;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        .label {
          font-weight: bold;
        }
      </style>
      <div class="container">
        <div class="label">Contract Address:</div>
        <div>${address}</div>
        <div class="label">Owner Address:</div>
        <div>${owner}</div>
      </div>
    `;
  }
}

customElements.define('contract-info', ContractInfo);
