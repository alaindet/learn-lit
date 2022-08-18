import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

@customElement('lists-with-map')
export class ListsWithMap extends LitElement {

  @state() fruits = new Set(['Apple', 'Banana', 'Grape', 'Orange', 'Lime'])

  render() {
    return html`
      <h2>With <code>map()</code></h2>
      <ul>
        ${map(this.fruits, fruit => html`<li>${fruit}</li>`)}
      </ul>
    `;
  }
}
