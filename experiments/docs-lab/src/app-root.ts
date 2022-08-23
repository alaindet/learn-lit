import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './composition/clock/clock.example';
import './composition/logger/logger.example';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Lit Docs Lab</h1>
      <clock-example></clock-example>
      <logger-example></logger-example>
    `;
  }

  static styles = css``;
}
