import styles from './round-info.css?raw';

class RoundInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [
      'epoch',
      'start',
      'lock',
      'close',
      'lock-price',
      'close-price',
      'total-amount'
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const epoch = this.getAttribute('epoch') || 'Loading...';
    const start = this.getAttribute('start') || 'Loading...';
    const lock = this.getAttribute('lock') || 'Loading...';
    const close = this.getAttribute('close') || 'Loading...';
    const lockPrice = parseFloat(this.getAttribute('lock-price')) || 0;
    const closePrice = parseFloat(this.getAttribute('close-price')) || 0;
    const totalAmount = this.getAttribute('total-amount') || '0 MATIC';
  
    let priceClass = 'price-neutral';
    let arrow = '→';
  
    if (closePrice > lockPrice) {
      priceClass = 'price-up';
      arrow = '↑';
    } else if (closePrice < lockPrice) {
      priceClass = 'price-down';
      arrow = '↓';
    }
  
    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      <div class="round-info-container">
        <div class="title">Current Round (#${epoch})</div>
  
        <div class="info-section timestamps">
          <div class="info-row"><span class="label">Start Time:</span><span class="value">${start}</span></div>
          <div class="info-row"><span class="label">Lock Time:</span><span class="value">${lock}</span></div>
          <div class="info-row"><span class="label">Close Time:</span><span class="value">${close}</span></div>
        </div>
  
        <hr class="divider"/>
  
        <div class="info-section prices">
          <div class="info-row"><span class="label">Lock Price:</span><span class="value">${lockPrice}</span></div>
          <div class="info-row">
            <span class="label">Close Price:</span>
            <span class="value ${priceClass}">${closePrice} ${arrow}</span>
          </div>
        </div>
  
        <hr class="divider"/>
  
        <div class="info-section total">
          <div class="info-row">
            <span class="label">Total Amount:</span>
            <span class="value total-value">${totalAmount}</span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('round-info', RoundInfo);
