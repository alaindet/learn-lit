import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Tutorial: Custom attribute converters</h1>
      <a href="https://lit.dev/tutorials/custom-attribute-converter/">
        https://lit.dev/tutorials/custom-attribute-converter/
      </a>
    `;
  }

  static styles = css``;
}
