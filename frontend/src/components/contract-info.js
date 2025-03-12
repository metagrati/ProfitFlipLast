import styles from './contract-info.css?raw';

class ContractInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  } 

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

    this.shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
      <div class="contract-info-container">
        <div class="label">Contract Address:</div>
        <div>${address}</div>
        <div class="label">Owner Address:</div>
        <div>${owner}</div>
      </div>
    `;
  }
}

customElements.define('contract-info', ContractInfo);
