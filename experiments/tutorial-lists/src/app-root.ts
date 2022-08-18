import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './components/overview';
import './components/lists-with-map';
import './components/lists-with-expressions';
import './components/lists-with-partials';
import './components/lists-with-range';
import './components/lists-with-repeat';
import './components/lists-with-events';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Tutorial: Lists</h1>
      <a href="https://lit.dev/tutorials/working-with-lists/">
        https://lit.dev/tutorials/working-with-lists/
      </a>
      <!-- <lists-overview></lists-overview> -->
      <lists-with-map class="box"></lists-with-map>
      <lists-with-expressions class="box"></lists-with-expressions>
      <lists-with-partials class="box"></lists-with-partials>
      <lists-with-range class="box"></lists-with-range>
      <lists-with-repeat class="box"></lists-with-repeat>
      <lists-with-events class="box"></lists-with-events>
    `;
  }

  static styles = css`
    .box {
      display: block;
      padding: 1rem;
      border: 2px solid #ddd;
      border-radius: 0.5rem;
      margin: 1rem 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
