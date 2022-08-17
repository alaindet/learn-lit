import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lists-overview')
export class ListsOverview extends LitElement {

  // This is a generator function, it's weird I know
  * myGenerator(): Generator<any, any, any> {
    for (let i = 1; i < 4; i++) {
      yield i;
    }
  }

  render() {
    return html`
      <h1>Rendering lists with Lit</h1>
      <p>Lit has built-in support for any iterables!</p>

      <h2>Arrays</h2>
      <p>${['✨', '🔥', '❤️']}</p>

      <h2>Sets</h2>
      <p>${new Set(['A', 'B', 'C'])}</p>

      <h2>Generators</h2>
      <p>${this.myGenerator()}</p>
    `;
  }
}
