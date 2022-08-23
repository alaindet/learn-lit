import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-select-option')
export class MySelectOption extends LitElement {

  static styles = css`
    :host {
      padding: 0.5rem 1rem;
      border: 2px solid #abc;
    }
  `;

  @property()
  value!: string;

  connectedCallback(): void {
    this.addEventListener('click', this.onClick.bind(this));
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.onClick.bind(this));
  }

  render() {
    return html`<slot></slot>`;
  }

  private onClick(event: MouseEvent): void {
    console.log('onClick', this.value, event);
  }
}
