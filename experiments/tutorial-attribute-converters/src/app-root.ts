import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './date-display';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    const dateDisplay = document.querySelector('date-display')!;
    dateDisplay.date = new Date('05/05/22');

    return html`
      <h1>Tutorial: Custom attribute converters</h1>
      <a href="https://lit.dev/tutorials/custom-attribute-converter/">
        https://lit.dev/tutorials/custom-attribute-converter/
      </a>

      <div id="date-display"></div>
    `;
  }

  static styles = css``;
}
