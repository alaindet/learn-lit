import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lists-with-expressions')
export class ListsWithExpressions extends LitElement {

  @state()
  friends = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];

  render() {
    return html`
      <h2>With JavaScript expressions</h2>
      <p>Only friends containing "e"</p>
      <ul>
        ${
          this.friends
            .filter(name => name.toLowerCase().includes('e'))
            .map(name => html`<li>${name}</li>`)
        }
      </ul>
    `;
  }
}
