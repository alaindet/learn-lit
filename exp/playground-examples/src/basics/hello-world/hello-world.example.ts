import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './hello-world';

@customElement('hello-world-example')
export class HelloWorldExample extends LitElement {
  render() {
    return html`
      <div>
        <hello-world></hello-world>
        <hello-world name="Alain"></hello-world>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world-example': HelloWorldExample
  }
}
