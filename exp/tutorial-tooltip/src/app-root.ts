import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Tutorial: Tooltip</h1>
      <a href="https://lit.dev/tutorials/tooltip/">
        https://lit.dev/tutorials/tooltip/
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
