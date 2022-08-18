import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import { myDirective } from './my-directive';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Custom Directives</h1>
      <div ${myDirective('foo', 'bar')}>This is the target</div>
      <div>This is the target</div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0 auto;
      width: min(960px, 90vw);
    }

    [foo="bar"] {
      background-color: yellowgreen;
    }
  `;
}
