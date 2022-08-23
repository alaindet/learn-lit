import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './composition/clock.example';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Lit Docs Lab</h1>
      <clock-example></clock-example>
    `;
  }

  static styles = css``;
}
