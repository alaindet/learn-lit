import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-select')
export class MySelect extends LitElement {

  static styles = css`
    :host {
      min-width: 0;
      width: 16rem;
      max-width: 100vw;
    }
  `;

  render() {
    return html`
      <div class="_facade">
        Facade
      </div>

      <div class="_options">
        <slot></slot>
      </div>
    `;
  }
}
