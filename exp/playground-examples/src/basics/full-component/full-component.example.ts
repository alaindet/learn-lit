import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './full-component';

@customElement('full-component-example')
export class FullComponentExample extends LitElement {
  render() {
    return html`
      <div>
        <h3>Full Component</h3>
        <full-component></full-component>
        <full-component
          planet="Mars"
          style="--planet-color: red"
        ></full-component>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'full-component-example': FullComponentExample
  }
}
