class RoundInfo extends HTMLElement {
    static get observedAttributes() {
      return ['epoch', 'start', 'lock', 'close', 'lock-price', 'close-price', 'total-amount'];
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      const epoch = this.getAttribute('epoch') || 'Loading...';
      const start = this.getAttribute('start') || 'Loading...';
      const lock = this.getAttribute('lock') || 'Loading...';
      const close = this.getAttribute('close') || 'Loading...';
      const lockPrice = this.getAttribute('lock-price') || 'N/A';
      const closePrice = this.getAttribute('close-price') || 'N/A';
      const totalAmount = this.getAttribute('total-amount') || '0';
  
      this.shadowRoot.innerHTML = `
        <style>
          .round-container {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 12px;
            padding: 20px;
            font-family: sans-serif;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.1);
          }
          .title {
            grid-column: span 2;
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 8px;
          }
          .label {
            font-weight: bold;
          }
        </style>
        <div class="round-container">
          <div class="title">Current Round Information</div>
          <div class="label">Epoch:</div><div>${epoch}</div>
          <div class="label">Start Time:</div><div>${start}</div>
          <div class="label">Lock Time:</div><div>${lock}</div>
          <div class="label">Close Time:</div><div>${close}</div>
          <div class="label">Lock Price:</div><div>${lockPrice}</div>
          <div class="label">Close Price:</div><div>${closePrice}</div>
          <div class="label">Total Amount:</div><div>${totalAmount} MATIC</div>
        </div>
      `;
    }
  }
  
  customElements.define('round-info', RoundInfo);
  