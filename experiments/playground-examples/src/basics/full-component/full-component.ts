import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('full-component')
export class FullComponent extends LitElement {

  @property() greeting = 'Hello';
  @property() planet = 'Earth';

  togglePlanet(): void {
    this.planet = (this.planet === 'Earth') ? 'Mars' : 'Earth';
  }

  render() {
    return html`
      <button @click=${this.togglePlanet} class="planet">${this.planet}</button>
    `;
  }

  static styles = css`
    :host {
      display: inline-block;
    }
    .planet {
      color: var(--planet-color, blue);
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      border: 2px solid rgba(0,0,0,0.2);
      background-color: #eee;
    }
    .planet:hover {
      background-color: #ddd;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'full-component': FullComponent
  }
}
