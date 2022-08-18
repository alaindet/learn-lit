import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

@customElement('lists-with-events')
export class ListsWithEvents extends LitElement {

  @state()
  things = [
    'Raindrops on roses',
    'Whiskers on kittens',
    'Bright copper kettles',
    'Warm woolen mittens',
  ];

  private deleteThing(index: number): void {
    this.things = this.things.filter((_, i) => i !== index);
  }

  render() {
    return html`
      <h2>With events</h2>
      <ul>
        ${map(this.things, (thing, i) => html`
          <li>
            ${thing}
            <button @click=${() => this.deleteThing(i)}>Delete</button>
          </li>
        `)}
      </ul>
    `;
  }
}
