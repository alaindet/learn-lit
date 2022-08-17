import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {

  @property() name = 'World';

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }

  static styles = css`
    p {
      color: #112d79;
      padding: 0.5rem;
      border: 2px solid rgba(0,0,0,0.3);
      border-radius: 0.5rem;
      background-color: #c8d3f1;
      letter-spacing: 2px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'hello-world': HelloWorld
  }
}
