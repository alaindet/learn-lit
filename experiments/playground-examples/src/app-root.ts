import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './basics/hello-world/hello-world.example';
import './basics/full-component/full-component.example';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <h1>Lit examples</h1>

      <section>
        <h2>Basics</h2>
        <hello-world-example></hello-world-example>
        <full-component-example></full-component-example>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
