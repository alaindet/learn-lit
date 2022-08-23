import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import './select';
import './select-option';

@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <h1>Select component</h1>
      <my-select>
        <my-select-option>Foo</my-select-option>
        <my-select-option>Bar</my-select-option>
        <my-select-option>Baz</my-select-option>
      </my-select>
    `;
  }

  static styles = css``;
}
